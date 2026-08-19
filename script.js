(() => {
  const config = window.BREAKOUT_CONFIG || {};
  const translations = {
    en: {
      navFeatures: "Features", navWorkflow: "Workflow", navPricing: "Pricing", navPrivacy: "Privacy", navSupport: "Support", signIn: "Sign in",
      eyebrow: "Professional sports video analysis for macOS",
      heroTitle: "See the game.\nMark the moment.",
      heroLead: "Capture, code, review and export decisive moments in one focused workspace — built for coaches, analysts and video teams.",
      download: "Download for Mac", explore: "Explore BreakOut", releaseNote: "macOS · Direct distribution preview · Public download opens at launch",
      signal1: "Live capture", signal2: "Event coding", signal3: "Visual analysis", signal4: "Professional export",
      featuresKicker: "One workspace", featuresTitle: "From live video to a clear decision.", featuresCopy: "BreakOut keeps the match, timeline, code, drawings, statistics and export close together, so analysis stays fast when time matters.",
      f1t: "Capture", f1d: "Record a match directly into the project and keep the workflow centered on the live source.",
      f2t: "Timeline & coding", f2d: "Create programmable actions and mark events with shortcuts without leaving the video.",
      f3t: "Review", f3d: "Open episodes from the timeline, compare moments and return to the exact frame quickly.",
      f4t: "Drawing", f4d: "Annotate frames, explain space and movement, and make tactical points visible.",
      f5t: "Statistics", f5d: "Turn coded events into practical team context and export structured data when needed.",
      f6t: "Export", f6d: "Prepare selected episodes, tracks, periods or assembled material for meetings and sharing.",
      workflowKicker: "Workflow", workflowTitle: "Built around the way analysis actually happens.", workflowCopy: "The interface is designed to reduce switching, repeated actions and unnecessary windows during a match or review session.",
      s1t: "Capture", s1d: "Bring the live or recorded source into the project.", s2t: "Code", s2d: "Mark events with programmable buttons and hotkeys.", s3t: "Review", s3d: "Inspect the episode, draw, compare and refine.", s4t: "Deliver", s4d: "Export clips, tracks, periods or a finished assembly.",
      licenseKicker: "Account & license", licenseTitle: "A license that follows the user, not the ZIP file.", licenseCopy: "At commercial launch, access will be tied to a BreakOut account. A license key will be issued as a fallback for activation and support — simply forwarding the app will not transfer the subscription.",
      l1t: "Account-based access", l1d: "Sign in on the Mac to verify the current entitlement.", l2t: "License key fallback", l2d: "A BO-XXXX-XXXX-XXXX key can also be issued after purchase and shown in the customer account.", l3t: "Device control", l3d: "Activated Macs, expiration and subscription status can be managed centrally.",
      pricingKicker: "Pricing", pricingTitle: "Simple access to the full workspace.", pricingCopy: "Planned direct-distribution pricing. Payment is intentionally disabled in this preview while checkout and licensing infrastructure are being connected.",
      p6: "6 months", p12: "1 year", popular: "Best value", fullWorkspace: "Full BreakOut workspace", accountLicense: "Account + license activation", updatesTerm: "Updates during the paid term", buy6: "Choose 6 months", buy12: "Choose 1 year", pricingNote: "Sales are not open yet. The buttons are already in place and will be connected to checkout before commercial launch.",
      privacyKicker: "Privacy by design", privacyTitle: "Your work stays your work.", privacyCopy: "This preview site contains no advertising, analytics SDKs or marketing trackers. When accounts and payments are connected, only the data required to provide the service will be processed and the policy will be updated before launch.",
      pr1a: "Advertising trackers", pr1b: "None", pr2a: "Payment card storage on BreakOut", pr2b: "None", pr3a: "Public sale on this preview", pr3b: "Disabled",
      privacySideTitle: "Clear data boundaries", privacySideCopy: "Payment details will be handled by the payment provider, while BreakOut will keep only the service information needed for an account, license and device activation.", privacyLink: "Read privacy policy",
      ctaTitle: "Professional analysis, without the clutter.", ctaDownload: "Download for Mac", ctaSupport: "Contact support",
      footerPreview: "Pre-launch website preview", footerPrivacy: "Privacy", footerTerms: "Terms", footerSupport: "Support",
      modalTitle: "BreakOut is in pre-launch mode", modalBody: "This control is ready in the website interface, but the public download, account server and payment checkout are not connected yet. Nothing will be charged.", modalClose: "Close", modalSupport: "Contact support",
      actionDownload: "Public download is being prepared for the commercial release.", actionPurchase: "Checkout is not connected yet. This pricing control will be linked to the payment provider before launch.", actionAccount: "BreakOut account registration and sign-in will be connected with the licensing backend before launch."
    },
    ru: {
      navFeatures: "Возможности", navWorkflow: "Процесс", navPricing: "Тарифы", navPrivacy: "Приватность", navSupport: "Поддержка", signIn: "Войти",
      eyebrow: "Профессиональный спортивный видеоанализ для macOS",
      heroTitle: "Видеть игру.\nОтмечать главное.",
      heroLead: "Запись, кодирование событий, просмотр и экспорт ключевых моментов в одном рабочем пространстве — для тренеров, аналитиков и видео-команд.",
      download: "Скачать для Mac", explore: "Посмотреть BreakOut", releaseNote: "macOS · Предрелизная версия сайта · Публичная загрузка откроется к запуску",
      signal1: "Запись матча", signal2: "Кодирование событий", signal3: "Визуальный анализ", signal4: "Профессиональный экспорт",
      featuresKicker: "Одно пространство", featuresTitle: "От живого видео — к понятному решению.", featuresCopy: "BreakOut держит матч, таймлайн, программируемые кнопки, рисунки, статистику и экспорт рядом, чтобы анализ оставался быстрым, когда времени мало.",
      f1t: "Захват видео", f1d: "Записывайте матч прямо в проект и сохраняйте рабочий процесс вокруг живого источника.",
      f2t: "Таймлайн и кодирование", f2d: "Создавайте программируемые действия и отмечайте события горячими клавишами, не уходя от видео.",
      f3t: "Просмотр", f3d: "Открывайте эпизоды с таймлайна, сравнивайте моменты и быстро возвращайтесь к точному кадру.",
      f4t: "Рисование", f4d: "Размечайте кадры, объясняйте пространство и движение, делайте тактические детали наглядными.",
      f5t: "Статистика", f5d: "Превращайте отмеченные события в понятный командный контекст и экспортируйте структурированные данные.",
      f6t: "Экспорт", f6d: "Готовьте выбранные эпизоды, дорожки, периоды или собранный материал для собраний и передачи.",
      workflowKicker: "Рабочий процесс", workflowTitle: "Построено вокруг реальной работы аналитика.", workflowCopy: "Интерфейс сокращает лишние переключения, повторяющиеся действия и ненужные окна во время матча и последующего разбора.",
      s1t: "Запись", s1d: "Добавьте живой или записанный источник в проект.", s2t: "Кодирование", s2d: "Отмечайте события программируемыми кнопками и горячими клавишами.", s3t: "Разбор", s3d: "Просматривайте эпизод, рисуйте, сравнивайте и уточняйте.", s4t: "Результат", s4d: "Экспортируйте клипы, дорожки, периоды или готовую сборку.",
      licenseKicker: "Аккаунт и лицензия", licenseTitle: "Лицензия привязана к пользователю, а не к ZIP-файлу.", licenseCopy: "К коммерческому запуску доступ будет связан с аккаунтом BreakOut. Лицензионный ключ останется резервным способом активации и поддержки — простая пересылка приложения не перенесёт подписку.",
      l1t: "Доступ по аккаунту", l1d: "Вход на Mac подтверждает текущее право пользования.", l2t: "Резервный ключ", l2d: "После покупки может выдаваться ключ BO-XXXX-XXXX-XXXX, который также будет виден в аккаунте.", l3t: "Контроль устройств", l3d: "Активированные Mac, срок и статус подписки можно будет контролировать централизованно.",
      pricingKicker: "Тарифы", pricingTitle: "Простой доступ ко всему рабочему пространству.", pricingCopy: "Планируемые цены для версии с прямой загрузкой. В этой демонстрации оплата намеренно отключена, пока подключаются checkout и лицензирование.",
      p6: "6 месяцев", p12: "1 год", popular: "Выгоднее", fullWorkspace: "Полное рабочее пространство BreakOut", accountLicense: "Активация по аккаунту и лицензии", updatesTerm: "Обновления в течение оплаченного периода", buy6: "Выбрать 6 месяцев", buy12: "Выбрать 1 год", pricingNote: "Продажи пока не открыты. Кнопки уже находятся на своих местах и будут подключены к оплате перед коммерческим запуском.",
      privacyKicker: "Приватность в основе", privacyTitle: "Ваша работа остаётся вашей.", privacyCopy: "В этой предрелизной версии сайта нет рекламы, аналитических SDK и маркетинговых трекеров. После подключения аккаунтов и оплаты будут обрабатываться только данные, необходимые для работы сервиса, а политика будет обновлена до запуска.",
      pr1a: "Рекламные трекеры", pr1b: "Нет", pr2a: "Хранение данных карт в BreakOut", pr2b: "Нет", pr3a: "Продажи на этой версии сайта", pr3b: "Отключены",
      privacySideTitle: "Понятные границы данных", privacySideCopy: "Платёжные данные будет обрабатывать платёжный провайдер, а BreakOut будет хранить только служебную информацию, необходимую для аккаунта, лицензии и активации устройств.", privacyLink: "Политика конфиденциальности",
      ctaTitle: "Профессиональный анализ. Без лишнего шума.", ctaDownload: "Скачать для Mac", ctaSupport: "Связаться с поддержкой",
      footerPreview: "Предрелизная версия сайта", footerPrivacy: "Приватность", footerTerms: "Условия", footerSupport: "Поддержка",
      modalTitle: "BreakOut готовится к запуску", modalBody: "Этот элемент уже готов в интерфейсе сайта, но публичная загрузка, сервер аккаунтов и платёжная система пока не подключены. Никакого списания не произойдёт.", modalClose: "Закрыть", modalSupport: "Написать в поддержку",
      actionDownload: "Публичная загрузка готовится к коммерческому релизу.", actionPurchase: "Оплата пока не подключена. Перед запуском эта кнопка будет связана с платёжным провайдером.", actionAccount: "Регистрация и вход в аккаунт BreakOut будут подключены к серверу лицензирования перед запуском."
    }
  };

  let lang = localStorage.getItem("breakout-lang") || (navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en");
  if (!translations[lang]) lang = "en";

  const t = (key) => translations[lang][key] || translations.en[key] || key;

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const value = t(el.dataset.i18n);
      el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-lines]").forEach(el => {
      const value = t(el.dataset.i18nLines);
      el.innerHTML = value.split("\n").map(line => `<span>${escapeHtml(line)}</span>`).join("<br>");
    });
    document.querySelectorAll("[data-lang]").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));
    const title = lang === "ru" ? "BreakOut — профессиональный спортивный видеоанализ" : "BreakOut — Professional Sports Video Analysis";
    document.title = title;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;",'"':"&quot;"}[c]));
  }

  document.querySelectorAll("[data-lang]").forEach(btn => btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    localStorage.setItem("breakout-lang", lang);
    applyLanguage();
  }));

  const navWrap = document.querySelector(".nav-wrap");
  const onScroll = () => navWrap?.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const mobileToggle = document.querySelector(".mobile-toggle");
  const mobilePanel = document.querySelector(".mobile-panel");
  mobileToggle?.addEventListener("click", () => {
    const open = mobilePanel.classList.toggle("open");
    mobileToggle.setAttribute("aria-expanded", String(open));
  });
  mobilePanel?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobilePanel.classList.remove("open")));

  const modalBackdrop = document.querySelector(".modal-backdrop");
  const modalText = document.querySelector(".modal-detail");
  function openModal(detailKey) {
    if (modalText) modalText.textContent = t(detailKey || "modalBody");
    modalBackdrop?.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modalBackdrop?.classList.remove("open");
    document.body.style.overflow = "";
  }
  document.querySelectorAll("[data-modal-close]").forEach(btn => btn.addEventListener("click", closeModal));
  modalBackdrop?.addEventListener("click", (e) => { if (e.target === modalBackdrop) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

  function routeOrPreview(url, detailKey) {
    if (url) window.location.href = url;
    else openModal(detailKey);
  }

  document.querySelectorAll("[data-action='download']").forEach(el => el.addEventListener("click", (e) => { e.preventDefault(); routeOrPreview(config.downloadURL, "actionDownload"); }));
  document.querySelectorAll("[data-action='buy-six']").forEach(el => el.addEventListener("click", (e) => { e.preventDefault(); routeOrPreview(config.purchaseSixMonthsURL, "actionPurchase"); }));
  document.querySelectorAll("[data-action='buy-annual']").forEach(el => el.addEventListener("click", (e) => { e.preventDefault(); routeOrPreview(config.purchaseAnnualURL, "actionPurchase"); }));
  document.querySelectorAll("[data-action='signin']").forEach(el => el.addEventListener("click", (e) => { e.preventDefault(); routeOrPreview(config.signInURL, "actionAccount"); }));

  document.querySelectorAll("[data-support-email]").forEach(el => {
    const email = config.supportEmail || "";
    if (email) el.setAttribute("href", `mailto:${email}`);
  });

  applyLanguage();
})();
