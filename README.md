# Banat Official - Website

Website official untuk Banat Official, brand aksesoris muslimah dan kuliner.

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Supabase
- **Deployment:** Vercel

## Setup

1. Install dependencies
```bash
npm install
```

2. Configure environment variables
```bash
cp .env.example .env.local
```
Edit `.env.local` dengan nilai yang sesuai:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description |
|----------|-------------|
| NEXT_PUBLIC_SUPABASE_URL | Supabase project URL |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase anon key |

## Deploy

Project ini terdeploy di Vercel. Setiap push ke `main` branch akan memicu deployment otomatis.
