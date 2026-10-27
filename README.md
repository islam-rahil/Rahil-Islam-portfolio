# Rahil Mohamed Islam — Portfolio

Personal site for Rahil Mohamed Islam, full-stack developer & data engineer.
Next.js (App Router) · React · TypeScript · Tailwind CSS v4. English and French at `/en` and `/fr`; `/` redirects based on the browser language.

## Develop

```bash
npm install
npm run dev
```

## Pages

- `/en`, `/fr` — the one-page portfolio
- `/[lang]/projects/[slug]` — one page per project
- `/[lang]/contact` — contact page with a form

## Edit content

All copy (both languages), links and contact details live in `src/content/index.ts`.
Photos and the CV PDF are in `public/`.

## Deploy

Push to GitHub, then import the repo in Vercel.

### Contact form

The form sends messages through [Resend](https://resend.com):

1. Create a free Resend account with the inbox that should receive messages.
2. Create an API key.
3. In Vercel → Project → Settings → Environment Variables, add `RESEND_API_KEY`, then redeploy.

Without a verified domain, Resend only delivers to the account's own email, so sign up with the address in `src/content/index.ts` (or set `CONTACT_TO_EMAIL` to the account's address). See `.env.example` for the optional settings. For local testing, put the same variables in `.env.local`.
