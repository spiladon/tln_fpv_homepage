# Introduction
A responsive Next.js website with:

- Home page
- Introduction / hero section
- Embedded YouTube videos
- Instagram + TikTok buttons
- Contact page
- Server-side contact form
- Email delivery through Resend

## Prerequisites
Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then set:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO=your-email@example.com
CONTACT_FROM=Website <website@yourdomain.com>
```

`CONTACT_FROM` must use a sender/domain configured in Resend.

## Local setup
```bash
npm install
```

### Local run
```bash
npm run dev
```

Open:
```text
http://localhost:3000
```

### Instruction for first setup
## 3. Add your content

Edit:

- `app/page.tsx` — introduction + YouTube videos
- `components/SocialButtons.tsx` — Instagram/TikTok URLs
- `app/layout.tsx` — site title/description

For YouTube videos, replace each `id` with the YouTube video ID.

For example:

```text
https://www.youtube.com/watch?v=ABC123
                         ^^^^^^
                         video ID
```

## 5. Deploy

The project can be deployed to Vercel or another Next.js-compatible host.
Make sure the three environment variables are configured on the hosting platform.
