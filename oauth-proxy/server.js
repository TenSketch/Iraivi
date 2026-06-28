const crypto = require('crypto');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT || 3456);
const HOST = process.env.HOST || '0.0.0.0';
const SITE_URL = normalizeUrl(process.env.SITE_URL || 'https://birthwithiraivi.com');
const OAUTH_BASE_URL = normalizeUrl(
  process.env.OAUTH_BASE_URL || 'https://oauth.birthwithiraivi.com',
);
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || '';
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || '';
const GITHUB_SCOPE = process.env.GITHUB_SCOPE || 'repo';
const STATE_SECRET = process.env.STATE_SECRET || process.env.SESSION_SECRET || '';
const STATE_MAX_AGE_MS = Number(process.env.STATE_MAX_AGE_MS || 10 * 60 * 1000);

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  console.warn(
    '[oauth-proxy] Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET. /auth will not work until they are set.',
  );
}

if (!STATE_SECRET) {
  console.warn(
    '[oauth-proxy] Missing STATE_SECRET. Falling back to an insecure default for local development only.',
  );
}

app.set('trust proxy', 1);

app.get('/', (_req, res) => {
  res.json({
    ok: true,
    service: 'iraivi-decap-oauth-proxy',
    auth: '/auth',
    callback: '/callback',
    site_url: SITE_URL,
    oauth_base_url: OAUTH_BASE_URL,
  });
});

app.get('/healthz', (_req, res) => {
  res.status(200).send('ok');
});

app.get('/auth', (req, res) => {
  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    return res.status(500).send('OAuth proxy is not configured.');
  }

  const redirectUri = `${OAUTH_BASE_URL}/callback`;
  const state = createState({
    redirectUri,
    issuedAt: Date.now(),
    returnTo: SITE_URL,
  });
  const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
  authorizeUrl.searchParams.set('client_id', GITHUB_CLIENT_ID);
  authorizeUrl.searchParams.set('redirect_uri', redirectUri);
  authorizeUrl.searchParams.set('scope', GITHUB_SCOPE);
  authorizeUrl.searchParams.set('state', state);

  res.cookie('decap_oauth_state', state, cookieOptions(req));
  res.redirect(authorizeUrl.toString());
});

app.get('/callback', async (req, res) => {
  const { code, state, error, error_description } = req.query;

  if (error) {
    return renderResult(res, {
      ok: false,
      message: `GitHub returned an error: ${error_description || error}`,
    });
  }

  if (typeof code !== 'string' || typeof state !== 'string') {
    return renderResult(res, {
      ok: false,
      message: 'Missing code or state in the callback request.',
    });
  }

  const stateCookie = readCookie(req, 'decap_oauth_state');
  if (!stateCookie || stateCookie !== state) {
    return renderResult(res, {
      ok: false,
      message: 'Invalid OAuth state. Please retry the login flow.',
    });
  }

  const statePayload = verifyState(state);
  if (!statePayload) {
    return renderResult(res, {
      ok: false,
      message: 'OAuth state has expired or was tampered with.',
    });
  }

  try {
    const token = await exchangeCodeForToken({
      code,
      redirectUri: statePayload.redirectUri,
    });

    res.clearCookie('decap_oauth_state', cookieOptions(req));
    return renderResult(res, {
      ok: true,
      token,
      message: 'Authentication complete. You can close this window.',
      returnTo: statePayload.returnTo || SITE_URL,
    });
  } catch (err) {
    return renderResult(res, {
      ok: false,
      message: err instanceof Error ? err.message : 'Failed to exchange the GitHub code for a token.',
    });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found', path: req.path });
});

app.listen(PORT, HOST, () => {
  console.log(`[oauth-proxy] listening on http://${HOST}:${PORT}`);
});

function normalizeUrl(value) {
  return value.replace(/\/+$/, '');
}

function createState(payload) {
  const data = Buffer.from(
    JSON.stringify({
      ...payload,
      nonce: crypto.randomBytes(12).toString('hex'),
      exp: Date.now() + STATE_MAX_AGE_MS,
    }),
  ).toString('base64url');
  const sig = sign(data);
  return `${data}.${sig}`;
}

function verifyState(state) {
  const [data, sig] = String(state).split('.');
  if (!data || !sig) {
    return null;
  }

  const expected = sign(data);
  if (!safeEqual(sig, expected)) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(data, 'base64url').toString('utf8'));
    if (!parsed.exp || parsed.exp < Date.now()) {
      return null;
    }
    return parsed;
  } catch (_err) {
    return null;
  }
}

function sign(value) {
  return crypto
    .createHmac('sha256', STATE_SECRET || 'development-only-state-secret')
    .update(value)
    .digest('base64url');
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a));
  const right = Buffer.from(String(b));
  if (left.length !== right.length) {
    return false;
  }
  return crypto.timingSafeEqual(left, right);
}

function cookieOptions(req) {
  const isSecure = (req.secure || req.get('x-forwarded-proto') === 'https');
  return {
    httpOnly: true,
    sameSite: 'lax',
    secure: isSecure,
    path: '/',
    maxAge: STATE_MAX_AGE_MS,
  };
}

function readCookie(req, name) {
  const header = req.headers.cookie || '';
  const cookies = header.split(';').reduce((acc, part) => {
    const index = part.indexOf('=');
    if (index === -1) {
      return acc;
    }
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    acc[key] = decodeURIComponent(value);
    return acc;
  }, {});

  return cookies[name];
}

async function exchangeCodeForToken({ code, redirectUri }) {
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': 'iraivi-decap-oauth-proxy',
    },
    body: JSON.stringify({
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: redirectUri,
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub token endpoint returned ${response.status}`);
  }

  const payload = await response.json();
  if (!payload.access_token) {
    throw new Error(payload.error_description || payload.error || 'GitHub did not return an access token.');
  }

  return payload.access_token;
}

function renderResult(res, { ok, token, message, returnTo }) {
  res.set('Content-Security-Policy', "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline';");
  res.set('Cache-Control', 'no-store');

  if (!ok) {
    return res.status(400).send(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Decap CMS OAuth</title>
    <style>
      body { font-family: system-ui, sans-serif; padding: 2rem; line-height: 1.5; }
      code { background: #f4f4f4; padding: 0.125rem 0.25rem; border-radius: 4px; }
    </style>
  </head>
  <body>
    <h1>Authentication failed</h1>
    <p>${escapeHtml(message || 'Unknown error')}</p>
  </body>
</html>`);
  }

  const safeMessage = escapeHtml(message || 'Authentication complete.');

  return res.status(200).send(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Decap CMS OAuth</title>
    <style>
      body {
        font-family: system-ui, sans-serif;
        padding: 2rem;
        line-height: 1.5;
      }
      .card {
        max-width: 32rem;
        margin: 8vh auto;
        padding: 1.5rem;
        border: 1px solid #ddd;
        border-radius: 12px;
      }
      .meta {
        color: #666;
        font-size: 0.95rem;
      }
      button {
        padding: 0.75rem 1rem;
        border: 0;
        border-radius: 8px;
        background: #111;
        color: #fff;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Authentication complete</h1>
      <p>${safeMessage}</p>
      <p class="meta">If the popup does not close automatically, you can close it manually.</p>
      <button id="close">Close window</button>
    </div>
    <script>
      (function () {
        var token = ${JSON.stringify(`authorization:github:${token}`)};
        var returnTo = ${JSON.stringify(returnTo || SITE_URL)};
        if (window.opener && !window.opener.closed) {
          window.opener.postMessage(token, returnTo);
          window.opener.postMessage(token, '*');
        }
        document.getElementById('close').addEventListener('click', function () {
          window.close();
        });
        setTimeout(function () {
          window.close();
        }, 1000);
      }());
    </script>
  </body>
</html>`);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
