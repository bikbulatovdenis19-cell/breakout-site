# BreakOut Website — GitHub Pages

A static, pre-launch website for BreakOut. It is deliberately safe to host on GitHub Pages: there are no backend secrets, payment credentials, license signing keys or Xcode sources in this folder.

## What is already included

- Dark graphite / BreakOut green visual system (`#B0EB33`) matched to the current macOS app.
- BreakOut app icon copied from the supplied Xcode asset catalog.
- Responsive desktop/mobile layout.
- English and Russian toggle on the home page.
- Product sections: Capture, Timeline & coding, Review, Drawing, Statistics, Export.
- Planned licensing explanation: account-first access, fallback license key, device control.
- Planned prices: 6 months — 25,000 RUB; 1 year — 50,000 RUB.
- Download, purchase and sign-in controls already positioned but safely inactive.
- Privacy, Terms and Support pages.
- No analytics SDKs or advertising trackers.

## Preview locally on a Mac

Option 1: double-click `index.html`.

Option 2 (closer to real hosting):

```bash
cd BreakOut-GitHub-Site
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish on GitHub Pages

1. Create a new repository for the website only (for example `breakout-site`). Do **not** upload the Xcode project to this public website repository.
2. Upload the **contents of this folder** to the repository root and commit them to `main`.
3. Open the repository on GitHub → **Settings** → **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. GitHub will show the generated `github.io` address after deployment.

## Connect real actions later

Edit `config.js` only:

```js
window.BREAKOUT_CONFIG = {
  downloadURL: "https://.../BreakOut.dmg",
  purchaseSixMonthsURL: "https://.../checkout?plan=six_months",
  purchaseAnnualURL: "https://.../checkout?plan=annual",
  signInURL: "https://.../account",
  registerURL: "https://.../register",
  supportEmail: "...",
  launchState: "live"
};
```

Never put YooKassa secret keys, Supabase service-role keys, license private keys or other secrets in GitHub Pages JavaScript. Public static files can be read by anyone.

## Planned production architecture

```text
GitHub Pages / custom domain
        │
        ├── public website + download links
        │
        ├── checkout button ──> payment provider
        │                          │
        │                          └── webhook ──> backend
        │                                          │
        └── account UI ────────────────────────────┤
                                                   ├── users
BreakOut.app ── HTTPS licensing API ───────────────┤── subscriptions
                                                   ├── device activations
                                                   └── signed license leases
```

Recommended license flow for the existing macOS client:

1. Customer creates an account or enters an email at checkout.
2. Successful payment activates the entitlement on the backend.
3. Backend generates a human-readable fallback key such as `BO-XXXX-XXXX-XXXX` and stores only what is needed to validate/manage it.
4. The customer normally activates BreakOut by signing in.
5. The key is also visible in the customer account and can be used as a support/manual activation fallback.
6. BreakOut receives a signed license lease containing plan, expiry and device limits; the app verifies the signature locally.

This matches the licensing concepts already present in the supplied macOS project (`LicenseConfiguration`, `LicenseService`, `BreakOutLicenseLease`, device activations and license-key activation).

## Before commercial launch

- Connect the account backend (for example Supabase).
- Connect the payment provider and server-side webhooks.
- Add real customer account / device-management UI.
- Finalize legal seller details and review Privacy/Terms for the production setup.
- Set real download URL for the notarized Developer ID DMG.
- Add the custom domain only after DNS is ready.
- Replace preview text with final commercial wording.
