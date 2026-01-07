# Portfolio — Next.js + TypeScript + Tailwind

This repository is a starter portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS. It's tailored for a high-school engineering/robotics student.

Features
- App Router + TypeScript
- Responsive, accessible UI
- Dark mode toggle (class + localStorage)
- Projects data in a single file (`src/data/projects.ts`)
- Contact form with two options: Formspree (Option A) or server SMTP via API (Option B)

Quick start

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

Open http://localhost:3000

Notes on contact options
- Option A (Formspree): Replace the `action` attribute in `app/contact/page.tsx` with your Formspree URL.
- Option B (Server): Use the API route at `app/api/contact/route.ts`. Set environment variables in a `.env.local` file:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=you@example.com
SMTP_PASS=yourpassword
TO_EMAIL=receive@example.com
```

Deployment
- Vercel: recommended — connect this repository to Vercel and deploy. Vercel supports Next.js App Router out of the box.
- GitHub Pages: Next.js is not a static-only framework by default. To export a static site for GitHub Pages you'd need to adapt the app (set `output: 'export'` in `next.config.js` and ensure dynamic features are compatible). I recommend Vercel for easiest deployment.

Customization
- Replace `/public/images/*` with real photos. The hero image should be at `/public/images/hero.jpg`.
- Replace `/public/resume.pdf` with your resume PDF.
- Edit `src/data/projects.ts` to add or change projects. This single data file powers the homepage, gallery, and project pages.

If you'd like, I can also add: unit tests, CI configuration, or GitHub Actions for deployments.
