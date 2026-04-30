# VitaStack AI

An AI-powered health & wellness planning app built with Next.js 15, Supabase, and Google Gemini.

## Live Demo

[https://vitastack-ai.vercel.app](https://vitastack-ai.vercel.app)

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Auth & Database**: Supabase
- **AI**: Google Gemini API
- **Email**: Resend
- **UI**: shadcn/ui + Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## Features

- Email/password authentication via Supabase Auth
- AI-generated personalized wellness plans using Gemini
- Dashboard to view and manage your plans
- Mobile-responsive design

## Environment Variables

Create a `.env.local` file (never commit this file):

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
GEMINI_API_KEY=your_gemini_api_key
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    auth/login/       # Login page
    auth/signup/      # Sign up page
    dashboard/        # User dashboard
    api/generate-plan/ # Gemini AI route
  lib/
    supabase.ts       # Supabase client
    gemini.ts         # Gemini AI client
  types/
    index.ts          # TypeScript types
  middleware.ts       # Auth middleware
```

## License

MIT
