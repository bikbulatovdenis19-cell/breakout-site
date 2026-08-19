# BreakOut Website → Commercial Launch Integration Plan

## Stage 1 — Website (done in this package)
Static GitHub Pages front end, product presentation, pricing, privacy/support pages, inactive payment/download/account controls.

## Stage 2 — Account backend
Create users, email verification, password reset, sessions, customer profile and a secure admin role. The public website receives only public configuration; privileged keys remain server-side.

## Stage 3 — Licensing backend
Use the existing BreakOut macOS licensing client concepts. Required backend responsibilities:

- Register/sign in users.
- Return account + entitlement state.
- Generate / activate a fallback license key (`BO-XXXX-XXXX-XXXX`).
- Track device activations and limits.
- Issue a signed license lease containing expiry and an offline-valid-until value.
- Revoke or extend entitlements from an administrator interface.

The private signing key must exist only in backend secret storage. The app contains only the public verification key.

## Stage 4 — Payment
The website checkout button redirects to the chosen payment provider. Successful payment must be confirmed server-to-server by a signed webhook before the BreakOut entitlement is activated. Do not trust a `?success=true` browser redirect as proof of payment.

## Stage 5 — Customer account
Suggested account fields:

- Email
- Plan
- Subscription status
- Paid / valid until dates
- License key hint / reveal control
- Activated devices
- Deactivate-device action
- Payment history / receipts links
- Support and account-deletion controls

## Stage 6 — BreakOut admin
Suggested administrator fields:

- Customer email / ID
- Plan and status
- Start / expiry dates
- Last license verification
- Activated devices and device limit
- Payment-provider reference IDs
- Manual extend / revoke / complimentary license actions
- Audit log

## Website routes to reserve

- `/` — product home
- `/privacy.html`
- `/terms.html`
- `/support.html`
- Future: `/account`, `/register`, `/checkout`, `/downloads`, `/account/delete`

## macOS build URLs to configure later

The supplied project already defines these Info.plist keys in `LicenseConfiguration.swift`:

- `BreakOutLicenseAPIBaseURL`
- `BreakOutPurchaseURL`
- `BreakOutLicensePublicKey`
- `BreakOutPrivacyPolicyURL`
- `BreakOutAccountDeletionURL`
- `BreakOutSupportURL`

Once the production backend and domain are live, point these values to the final HTTPS endpoints.
