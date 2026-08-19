# BreakOut website + Supabase setup

The website account page is now wired to the same Supabase project expected by the macOS app.

## One-time setup

1. Supabase Dashboard → **SQL Editor** → **New query**.
2. Run the full file `supabase/01_breakout_dev_schema.sql`.
3. Supabase Project URL and Publishable key are already configured. No key paste is required.
5. Upload the website files to GitHub Pages.
6. Supabase → Authentication → **URL Configuration**:
   - set Site URL to your BreakOut website;
   - add the `account.html` URL to allowed redirect URLs.

Never put `sb_secret_...` or a service-role key in `config.js`.

## What works after setup

- registration by email/password;
- email confirmation flow;
- sign-in/sign-out;
- password reset;
- account access status;
- expiry date;
- active Mac list and device revocation;
- the same account can sign into the BreakOut macOS app.

The DEV SQL automatically grants 30 days of complimentary access to new accounts so the integration can be tested before YooKassa is connected.
