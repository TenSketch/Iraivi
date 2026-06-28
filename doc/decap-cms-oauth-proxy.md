# Decap CMS GitHub OAuth Proxy

This site uses Decap CMS with the GitHub backend on Vercel, and the CMS authenticates through a small OAuth bridge hosted on the VPS.

## What this does

- Keeps `backend: github` in Decap CMS
- Uses `base_url` to point Decap at the VPS OAuth service
- Avoids Netlify Identity entirely
- Exchanges the GitHub OAuth code for a token and sends it back to the CMS popup

## Decap config

Update `static/admin/config.yml` with the production OAuth base URL:

```yml
backend:
  name: github
  repo: TenSketch/Iraivi
  branch: main
  base_url: https://oauth.birthwithiraivi.com
```

The same file is mirrored in `public/admin/config.yml` in this repo so the generated site stays in sync.

## OAuth proxy files

- `oauth-proxy/server.js` - Express app with `/auth` and `/callback`
- `oauth-proxy/.env.example` - environment variable template
- `oauth-proxy/ecosystem.config.cjs` - PM2 process definition
- `oauth-proxy/nginx.conf.example` - reverse proxy example

## Required environment variables

Set these on the VPS where the OAuth bridge runs:

- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`
- `STATE_SECRET`
- `SITE_URL=https://birthwithiraivi.com`
- `OAUTH_BASE_URL=https://oauth.birthwithiraivi.com`
- `PORT=3456`
- `HOST=127.0.0.1`
- `GITHUB_SCOPE=repo`

`STATE_SECRET` should be a long random string. The proxy uses it to sign the OAuth state cookie.

## GitHub OAuth App settings

Create a GitHub OAuth App and set:

- Homepage URL: `https://oauth.birthwithiraivi.com`
- Authorization callback URL: `https://oauth.birthwithiraivi.com/callback`

If you use a different OAuth subdomain, update both the OAuth app and `base_url` to match exactly.

## VPS install and run

1. Copy the `oauth-proxy` folder to the VPS, for example to `/var/www/iraivi-oauth-proxy`.
2. Copy `oauth-proxy/.env.example` to `.env` and fill in the real values.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start it with PM2:

   ```bash
   pm2 start oauth-proxy/ecosystem.config.cjs
   pm2 save
   pm2 startup
   ```

5. Check the health endpoint:

   ```bash
   curl http://127.0.0.1:3456/healthz
   ```

## Nginx reverse proxy

Use the sample config in `oauth-proxy/nginx.conf.example` as a starting point.

Minimum production layout:

- Nginx listens on `oauth.birthwithiraivi.com`
- Nginx proxies to `http://127.0.0.1:3456`
- TLS terminates at Nginx
- `/auth` and `/callback` are forwarded to Express unchanged

## End-to-end flow

1. Open `https://birthwithiraivi.com/admin/`
2. Decap CMS loads `static/admin/config.yml`
3. The GitHub backend sends auth traffic to `https://oauth.birthwithiraivi.com/auth`
4. The proxy redirects to GitHub OAuth
5. GitHub returns to `https://oauth.birthwithiraivi.com/callback`
6. The proxy exchanges the code for a token
7. The callback popup posts `authorization:github:<token>` back to Decap
8. Decap uses that token to commit directly to the GitHub repo

## Notes

- Keep `local_backend: true` if you still want local content editing during development.
- Do not configure Netlify Identity or Git Gateway for this site.
- The repo token needs write access to `TenSketch/Iraivi`.
