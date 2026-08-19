# BreakOut Website v18 — Supabase account integration

This version keeps the v13 visual design and connects `account.html` to the same BreakOut Dev Supabase project used by the macOS app.

Main files:
- `config.js` — public website/Supabase configuration.
- `supabase-v14.js` — Auth/session/Data API client.
- `account.html` — sign-up, sign-in, password recovery and account dashboard.
- `supabase/01_breakout_dev_schema.sql` — database/RLS/RPC setup.
- `SUPABASE_SETUP.md` — exact next steps.

Supabase Project URL and Publishable key are already configured in `config.js`.
Never publish a Supabase secret/service-role key.


## v18 auth-page fix
- Fixes registration-only fields appearing in Sign In mode (`[hidden]` now always wins).
- Uses unique v18 CSS/JS/config filenames and build query parameters to bypass stale Safari/GitHub Pages caches.
- Supabase Project URL and Publishable key remain configured; no secret/service-role key is included.
