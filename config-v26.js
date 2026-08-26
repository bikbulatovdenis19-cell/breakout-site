window.BREAKOUT_CONFIG = {
  // The website resolves the current download from Sparkle appcast.xml, so future releases do not require a site rebuild.
  updateFeedURL: "https://ujbirjsfaimsdtqczfiq.supabase.co/storage/v1/object/public/breakout-updates/macos/stable/appcast.xml",
  // Safe fallback if the feed cannot be read in the browser.
  downloadURL: "https://ujbirjsfaimsdtqczfiq.supabase.co/storage/v1/object/public/breakout-updates/macos/stable/BreakOut-72.5.85-650.zip",
  accountURL: "account.html?build=19",
  signInURL: "account.html?build=19&mode=signin",
  registerURL: "account.html?build=19&mode=register",
  purchaseSixMonthsURL: "account.html?build=19&mode=register&plan=6m",
  purchaseAnnualURL: "account.html?build=19&mode=register&plan=1y",
  supportEmail: "Denbikbulatov@yandex.com",

  // Public client configuration for the BreakOut Dev account service.
  // Only the browser-safe publishable key belongs here; secret/service-role keys never do.
  supabaseURL: "https://ujbirjsfaimsdtqczfiq.supabase.co",
  supabasePublishableKey: "sb_publishable_FvYjy4TBGqTP5NaLKw-0uA_oM2ehoEK"
};

window.BREAKOUT_BUILD = "22.0";
