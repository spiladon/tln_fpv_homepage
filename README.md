# Introduction

A responsive Next.js website with:

- Home page
- Introduction / hero section
- Embedded YouTube videos
- Instagram + TikTok buttons
- Contact page
- Contact form using Formspree (or StaticForms WIP comparing)
- GitHub Pages deployment via GitHub Actions

## Prerequisites

Copy `.env.example` to `.env.local`:

GitHub Pages hosts static files. It does not run a Next.js server/API route.
The contact form therefore uses **Formspree** to receive the form submission and forward it to your email.

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO=your-email@example.com
CONTACT_FROM=Website <website@yourdomain.com>
```

```bash
npm install
```

### Test locally

```bash
npm run dev
```

## Add your content

### Build the static site

```bash
npm run build
```

### Create the contact form

Create an account at Formspree and create a new form.

Create `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Edit:

- `app/page.tsx` — introduction + YouTube videos
- `components/SocialButtons.tsx` — Instagram/TikTok URLs
- `app/layout.tsx` — site title/description

For YouTube videos, replace each `id` with the YouTube video ID.

Example:

```text
https://www.youtube.com/watch?v=ABC123
                         ^^^^^^
                         video ID
```

### CI

Next.js will create the static website in:

```text
out/
```

### GitHub Pages

Create a GitHub repository and push this project.

In GitHub:

1. Open **Settings → Pages**
2. Set **Source** to **GitHub Actions**
3. Add a workflow that builds the Next.js project and deploys the `out/` directory.

For a project repository, if the site URL is:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
```

you may also need to configure `basePath` and `assetPrefix` in `next.config.ts`.

If using a custom domain such as:

```text
https://example.com
```

you normally do not need a base path.

### Recommended GitHub Actions workflow

Then add the repository secret:

**Settings → Secrets and variables → Actions → New repository secret**

Name:

```text
NEXT_PUBLIC_FORMSPREE_ENDPOINT
```

Value:

```text
https://formspree.io/f/YOUR_FORM_ID
```

TODO:

* compare Formsfree vs StaticForms
