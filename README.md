# Iraivi
Celebrating Motherhood

## Vercel Deployment

This site is set up to run on Vercel as a Hugo build.

- Build command: `hugo --gc --minify`
- Output directory: `public`
- Serverless form endpoint: `/api/send-email`

## Email Setup

The enquiry forms send mail through SMTP, so set these environment variables in Vercel:

- `SMTP_HOST` - for Gmail use `smtp.gmail.com`
- `SMTP_PORT` - for Gmail use `465`
- `SMTP_SECURE` - for Gmail use `true`
- `SMTP_USER` - your Gmail address
- `SMTP_PASS` - your Gmail app password
- `CLIENT_EMAIL` - the inbox that should receive form submissions
- `SMTP_FROM` - optional from address, if you want to override the sender

For Gmail, use a Google App Password instead of the normal account password.
