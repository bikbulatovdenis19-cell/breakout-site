(() => {
  const config = window.BREAKOUT_CONFIG || {};

  const translations = {
    en: {
      navFeatures: "Features", navWorkflow: "Workflow", navPricing: "Pricing", navPrivacy: "Privacy", navSupport: "Support", signIn: "Sign in",
      eyebrow: "Professional sports video analysis for macOS",
      heroTitle: "See the game.\nMark the moment.",
      heroLead: "Capture matches, mark key events, review episodes and prepare video for meetings and further analysis — in one macOS workspace for coaches, analysts and sports teams.",
      download: "Download for Mac", explore: "Explore BreakOut", releaseNote: "macOS · Professional sports video analysis",
      signal1: "Match capture", signal2: "Event coding", signal3: "Visual analysis", signal4: "Professional export",
      featuresKicker: "One workspace", featuresTitle: "From live video to a clear decision.", featuresCopy: "BreakOut keeps video, timeline, programmable actions, drawings, statistics and export close together so analysis stays fast and focused.",
      f1t: "Capture", f1d: "Connect a camera, record the match and keep the video inside the project.",
      f2t: "Timeline & coding", f2d: "Mark events with programmable buttons and hotkeys during recording or review.",
      f3t: "Review", f3d: "Open an episode from the timeline and return to the exact moment without losing context.",
      f4t: "Drawing", f4d: "Add arrows, lines, zones and other annotations to explain game situations clearly.",
      f5t: "Statistics", f5d: "See a clear summary of marked events and use it during post-game analysis.",
      f6t: "Export", f6d: "Export individual episodes, tracks, periods and prepared selections.",
      previewsKicker: "Real workflow", previewsTitle: "What BreakOut looks like during the job.", previewsCopy: "These are real screenshots from BreakOut: live match work, workspace setup, programmable buttons and post-game statistics with export.",
      ss1t: "Live workspace", ss1m: "Capture + timeline + replay + buttons", ss1d: "A working layout during the match: capture, timeline, programmable buttons and replay stay visible in one screen.",
      ss2t: "Workspace setup", ss2m: "Choose the needed modules", ss2d: "At the start of work, the workspace can be assembled from the modules needed for the current task.",
      ss3t: "Programmable buttons", ss3m: "Create and configure events", ss3d: "New buttons, hotkeys and event parameters can be prepared before the match so marking stays fast and consistent.", ss4t: "Statistics and export", ss4m: "Post-game review", ss4d: "After the game, marked events can be reviewed in statistics and exported by lines, tracks or selected moments.",
      workflowKicker: "Workflow", workflowTitle: "Built around real analysis work.", workflowCopy: "The interface reduces unnecessary switching during a match and keeps the main actions predictable during review.",
      s1t: "Capture", s1d: "Bring a live or recorded source into the project.", s2t: "Mark", s2d: "Code events with programmable buttons and hotkeys.", s3t: "Review", s3d: "Open the episode, draw and compare when needed.", s4t: "Export", s4d: "Prepare clips, periods, tracks or a finished selection.",
      pricingKicker: "Pricing", pricingTitle: "Full access to the BreakOut workspace.", pricingCopy: "Planned pricing for the Mac version of BreakOut. Payment is not open yet.",
      p6: "6 months", p12: "1 year", popular: "Best value", fullWorkspace: "Full BreakOut functionality", accountLicense: "Access for the paid term", updatesTerm: "Updates during the paid term", buy6: "Choose 6 months", buy12: "Choose 1 year", pricingNote: "Sales are not open yet. Purchase buttons will become active when payment is available.",
      privacyKicker: "Privacy", privacyTitle: "Your work stays your work.", privacyCopy: "BreakOut is designed to keep customer data handling clear and limited. The current site does not use advertising trackers or store payment-card data.",
      pr1a: "Advertising trackers", pr1b: "None", pr2a: "Payment-card storage on BreakOut", pr2b: "None", pr3a: "Online purchases", pr3b: "Not available yet",
      privacySideTitle: "Clear data boundaries", privacySideCopy: "Payment details will be handled by the payment provider. BreakOut will keep only the information needed to provide access and support.", privacyLink: "Privacy policy",
      ctaTitle: "Professional analysis, without the clutter.", ctaDownload: "Download for Mac", ctaSupport: "Contact support",
      footerPreview: "Official BreakOut website", footerPrivacy: "Privacy", footerTerms: "Terms", footerSupport: "Support",
      modalTitle: "This function is coming soon", modalBody: "This function is not available yet. Public download, sign-in and payment will be enabled later. Nothing will be charged.", modalClose: "Close", modalSupport: "Contact support",
      actionDownload: "Public download is not open yet.", actionPurchase: "Payment is not available yet. No charge will be made.", actionAccount: "BreakOut account sign-in will be available later.",

      backHome: "← Home",
      supportTitle: "Support", supportIntro: "Help with BreakOut for macOS, installation, access and product questions.",
      supportEmailTitle: "Email support", supportEmailCopy: "For technical questions, product feedback or access issues.", supportEmailButton: "Send email",
      supportAccessTitle: "Download & access", supportAccessCopy: "Public download and account access will open when BreakOut is ready for release.", supportAccessButton: "View pricing",
      supportBeforeTitle: "When reporting a technical issue", supportBeforeCopy: "Please include your BreakOut version, macOS version, what you were doing and the exact error message. Screenshots are helpful when the problem is visual.",
      supportPaymentsTitle: "Payments and subscriptions", supportPaymentsCopy: "When sales open, purchase history, subscription status and access information will be available through the BreakOut account area.",

      privacyPageTitle: "Privacy Policy", privacyPageIntro: "How the BreakOut website handles information before public sales and account features are enabled.", privacyVersion: "Version: 19 August 2026",
      privacyNotice: "The current website does not contain account forms or payment processing. It also does not use advertising pixels or marketing analytics.",
      privacy1Title: "1. Information on the current website", privacy1Copy: "BreakOut does not intentionally collect account credentials, payment-card details, match video or project files through this website. If you contact support by email, the information you send is used to answer your request.",
      privacy2Title: "2. Accounts and access", privacy2Copy: "When customer accounts are introduced, the policy will be updated to explain what account information is required and how it is used.",
      privacy3Title: "3. Payments", privacy3Copy: "Payment-card details will be handled by the selected payment provider rather than stored directly by BreakOut.",
      privacy4Title: "4. Video and project content", privacy4Copy: "The macOS application is designed around local professional analysis. Any future cloud or synchronization features will be described separately before they are enabled.",
      privacy5Title: "5. Security", privacy5Copy: "BreakOut will use appropriate access controls and encrypted connections for online services. Private service keys are not stored in the public website repository.",
      privacy6Title: "6. Your choices", privacy6Copy: "Before commercial launch, the website will provide clear information about account access, support and privacy requests.",
      privacy7Title: "7. Contact", privacy7Copy: "Privacy questions can be sent to",

      termsPageTitle: "Terms of Use", termsPageIntro: "Basic terms for using the BreakOut website before public sales begin.", termsVersion: "Version: 19 August 2026",
      termsNotice: "No purchase can currently be completed through this website. Prices shown on the home page are planned launch prices.",
      terms1Title: "1. Website", terms1Copy: "This website presents BreakOut and its planned Mac distribution. Download, sign-in and purchase buttons may show an availability notice until those functions are opened.",
      terms2Title: "2. Software access", terms2Copy: "When commercial access opens, use of BreakOut will require a valid paid subscription or other valid access provided by BreakOut.",
      terms3Title: "3. Intellectual property", terms3Copy: "BreakOut, its visual identity, application software and original materials remain protected by applicable intellectual-property rules. Receiving a copy of the application does not grant redistribution rights.",
      terms4Title: "4. Subscriptions and payments", terms4Copy: "Subscription duration, renewal, cancellation, refunds, taxes and payment conditions will be shown clearly before a customer pays.",
      terms5Title: "5. Product changes", terms5Copy: "Features, availability and pricing may change before commercial launch. Current pre-release information is provided to explain the intended product and service.",
      terms6Title: "6. Contact", terms6Copy: "Questions about these terms can be sent to"
    },
    ru: {
      navFeatures: "Возможности", navWorkflow: "Процесс", navPricing: "Тарифы", navPrivacy: "Конфиденциальность", navSupport: "Поддержка", signIn: "Войти",
      eyebrow: "Профессиональный спортивный видеоанализ для macOS",
      heroTitle: "Видеть игру.\nОтмечать главное.",
      heroLead: "Записывайте матчи, отмечайте ключевые события, разбирайте эпизоды и готовьте видео к собраниям и дальнейшему анализу — в одном рабочем пространстве для тренеров, аналитиков и спортивных команд.",
      download: "Скачать для Mac", explore: "Посмотреть BreakOut", releaseNote: "macOS · Профессиональный спортивный видеоанализ",
      signal1: "Запись матча", signal2: "Кодирование событий", signal3: "Визуальный анализ", signal4: "Профессиональный экспорт",
      featuresKicker: "Одно пространство", featuresTitle: "От видео — к понятному решению.", featuresCopy: "BreakOut объединяет видео, таймлайн, программируемые кнопки, рисование, статистику и экспорт, чтобы основные инструменты всегда были под рукой.",
      f1t: "Захват видео", f1d: "Подключайте камеру, записывайте матч и сохраняйте материал внутри проекта.",
      f2t: "Таймлайн и кодирование", f2d: "Отмечайте события программируемыми кнопками и горячими клавишами во время записи или просмотра.",
      f3t: "Просмотр", f3d: "Открывайте эпизод с таймлайна и быстро возвращайтесь к нужному моменту.",
      f4t: "Рисование", f4d: "Добавляйте стрелки, линии, зоны и другие аннотации, чтобы наглядно объяснять игровые ситуации.",
      f5t: "Статистика", f5d: "Получайте понятную сводку по отмеченным событиям и используйте её при разборе матча.",
      f6t: "Экспорт", f6d: "Экспортируйте отдельные эпизоды, дорожки, периоды и готовые подборки.",
      previewsKicker: "Реальная работа", previewsTitle: "Как BreakOut выглядит в процессе работы.", previewsCopy: "Ниже — реальные скриншоты BreakOut: работа по ходу матча, сборка рабочего пространства, настройка программируемых кнопок и разбор со статистикой и экспортом.",
      ss1t: "Рабочее пространство в матче", ss1m: "Захват + таймлайн + повтор + кнопки", ss1d: "Рабочий вид во время матча: захват, таймлайн, программируемые кнопки и окно повтора остаются на одном экране.",
      ss2t: "Сборка рабочего пространства", ss2m: "Выбор нужных модулей", ss2d: "В начале работы можно быстро собрать пространство из тех модулей, которые нужны именно под текущую задачу.",
      ss3t: "Программируемые кнопки", ss3m: "Создание и настройка событий", ss3d: "Новые кнопки, горячие клавиши и параметры событий можно подготовить заранее, чтобы во время матча работать быстро и последовательно.", ss4t: "Статистика и экспорт", ss4m: "Разбор после игры", ss4d: "После матча отмеченные события можно просмотреть в статистике и экспортировать по линиям, дорожкам или выбранным моментам.",
      workflowKicker: "Рабочий процесс", workflowTitle: "Сделано для реальной работы с матчем.", workflowCopy: "Интерфейс сокращает лишние переключения во время записи и делает основные действия предсказуемыми при разборе.",
      s1t: "Запись", s1d: "Добавьте в проект живое или записанное видео.", s2t: "Разметка", s2d: "Отмечайте события кнопками и горячими клавишами.", s3t: "Разбор", s3d: "Открывайте эпизоды, рисуйте и сравнивайте при необходимости.", s4t: "Экспорт", s4d: "Готовьте клипы, периоды, дорожки или итоговую подборку.",
      pricingKicker: "Тарифы", pricingTitle: "Полный доступ к BreakOut.", pricingCopy: "Планируемые тарифы для версии BreakOut для Mac. Оплата пока не открыта.",
      p6: "6 месяцев", p12: "1 год", popular: "Выгоднее", fullWorkspace: "Полный функционал BreakOut", accountLicense: "Доступ на оплаченный срок", updatesTerm: "Обновления в течение оплаченного периода", buy6: "Выбрать 6 месяцев", buy12: "Выбрать 1 год", pricingNote: "Продажи пока не открыты. Кнопки покупки станут активными после подключения оплаты.",
      privacyKicker: "Конфиденциальность", privacyTitle: "Ваша работа остаётся вашей.", privacyCopy: "BreakOut стремится к понятной и ограниченной обработке данных. Текущий сайт не использует рекламные трекеры и не хранит данные банковских карт.",
      pr1a: "Рекламные трекеры", pr1b: "Нет", pr2a: "Хранение данных карт в BreakOut", pr2b: "Нет", pr3a: "Покупки на сайте", pr3b: "Пока недоступны",
      privacySideTitle: "Понятные границы данных", privacySideCopy: "Платёжные данные будет обрабатывать платёжный провайдер. BreakOut будет хранить только информацию, необходимую для предоставления доступа и поддержки.", privacyLink: "Политика конфиденциальности",
      ctaTitle: "Профессиональный анализ. Без лишнего шума.", ctaDownload: "Скачать для Mac", ctaSupport: "Связаться с поддержкой",
      footerPreview: "Официальный сайт BreakOut", footerPrivacy: "Конфиденциальность", footerTerms: "Условия", footerSupport: "Поддержка",
      modalTitle: "Функция появится позже", modalBody: "Эта функция пока недоступна. Публичная загрузка, вход и оплата будут включены позже. Никакого списания не произойдёт.", modalClose: "Закрыть", modalSupport: "Написать в поддержку",
      actionDownload: "Публичная загрузка пока не открыта.", actionPurchase: "Оплата пока недоступна. Никакого списания не произойдёт.", actionAccount: "Вход в аккаунт BreakOut появится позже.",

      backHome: "← На главную",
      supportTitle: "Поддержка", supportIntro: "Помощь по BreakOut для macOS: установка, доступ, работа приложения и вопросы по продукту.",
      supportEmailTitle: "Поддержка по e-mail", supportEmailCopy: "Для технических вопросов, отзывов о программе и вопросов по доступу.", supportEmailButton: "Написать",
      supportAccessTitle: "Загрузка и доступ", supportAccessCopy: "Публичная загрузка и вход в аккаунт откроются, когда BreakOut будет готов к выпуску.", supportAccessButton: "Посмотреть тарифы",
      supportBeforeTitle: "Если возникла техническая проблема", supportBeforeCopy: "Укажите версию BreakOut, версию macOS, что вы делали перед ошибкой и точный текст сообщения. Если проблема видна на экране, приложите скриншот.",
      supportPaymentsTitle: "Оплата и подписка", supportPaymentsCopy: "После запуска продаж в аккаунте BreakOut можно будет видеть историю покупок, статус подписки и информацию о доступе.",

      privacyPageTitle: "Политика конфиденциальности", privacyPageIntro: "Как сайт BreakOut обращается с информацией до запуска продаж и аккаунтов.", privacyVersion: "Версия: 19 августа 2026",
      privacyNotice: "На текущем сайте нет форм аккаунта и обработки платежей. Также здесь нет рекламных пикселей и маркетинговой аналитики.",
      privacy1Title: "1. Информация на текущем сайте", privacy1Copy: "BreakOut не собирает через этот сайт логины и пароли, данные банковских карт, видео матчей или файлы проектов. Если вы пишете в поддержку по e-mail, переданная вами информация используется для ответа на обращение.",
      privacy2Title: "2. Аккаунты и доступ", privacy2Copy: "Когда появятся аккаунты пользователей, политика будет обновлена и будет ясно описывать, какие данные нужны для аккаунта и зачем они используются.",
      privacy3Title: "3. Оплата", privacy3Copy: "Данные банковской карты будет обрабатывать выбранный платёжный провайдер, а не сам сайт BreakOut.",
      privacy4Title: "4. Видео и проекты", privacy4Copy: "Приложение для macOS ориентировано на локальную профессиональную работу с видео. Будущие облачные функции и синхронизация будут описаны отдельно до их включения.",
      privacy5Title: "5. Безопасность", privacy5Copy: "Для онлайн-сервисов BreakOut будут использоваться необходимые меры контроля доступа и защищённые соединения. Закрытые служебные ключи не хранятся в публичном репозитории сайта.",
      privacy6Title: "6. Ваш выбор", privacy6Copy: "До коммерческого запуска на сайте появится понятная информация о доступе к аккаунту, поддержке и обращениях по вопросам конфиденциальности.",
      privacy7Title: "7. Контакты", privacy7Copy: "Вопросы о конфиденциальности можно отправить на",

      termsPageTitle: "Условия использования", termsPageIntro: "Основные условия использования сайта BreakOut до начала публичных продаж.", termsVersion: "Версия: 19 августа 2026",
      termsNotice: "Сейчас через сайт нельзя совершить покупку. Цены на главной странице являются планируемыми ценами запуска.",
      terms1Title: "1. Сайт", terms1Copy: "Сайт представляет BreakOut и планируемую версию для Mac. Пока загрузка, вход и покупка не открыты, соответствующие кнопки могут показывать уведомление о недоступности.",
      terms2Title: "2. Доступ к программе", terms2Copy: "После начала продаж использование BreakOut будет требовать действующей оплаченной подписки или другого действующего доступа, предоставленного BreakOut.",
      terms3Title: "3. Интеллектуальная собственность", terms3Copy: "BreakOut, фирменное оформление, программное обеспечение и оригинальные материалы защищаются применимыми правилами интеллектуальной собственности. Получение копии приложения не даёт права распространять его от своего имени.",
      terms4Title: "4. Подписка и оплата", terms4Copy: "Срок подписки, продление, отмена, возвраты, налоги и условия оплаты будут ясно показаны до того, как пользователь совершит оплату.",
      terms5Title: "5. Изменения продукта", terms5Copy: "До коммерческого запуска функции, доступность и цены могут изменяться. Текущая информация описывает планируемую версию продукта и сервиса.",
      terms6Title: "6. Контакты", terms6Copy: "Вопросы об условиях можно отправить на"
    }
  };

  let lang = localStorage.getItem("breakout-lang") || (navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en");
  if (!translations[lang]) lang = "en";
  const t = key => translations[lang][key] || translations.en[key] || key;

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;",'"':"&quot;"}[c]));
  }

  function applyLanguage() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-lines]").forEach(el => {
      const value = t(el.dataset.i18nLines);
      el.innerHTML = value.split("\n").map(line => `<span>${escapeHtml(line)}</span>`).join("<br>");
    });
    document.querySelectorAll("[data-lang]").forEach(btn => btn.classList.toggle("active", btn.dataset.lang === lang));

    const page = document.body.dataset.page || "home";
    const titleMap = {
      home: lang === "ru" ? "BreakOut — профессиональный спортивный видеоанализ" : "BreakOut — Professional Sports Video Analysis",
      support: `${t("supportTitle")} — BreakOut`,
      privacy: `${t("privacyPageTitle")} — BreakOut`,
      terms: `${t("termsPageTitle")} — BreakOut`
    };
    document.title = titleMap[page] || "BreakOut";
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
  modalBackdrop?.addEventListener("click", e => { if (e.target === modalBackdrop) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  function routeOrPreview(url, detailKey) {
    if (url) window.location.href = url;
    else openModal(detailKey);
  }

  document.querySelectorAll("[data-action='download']").forEach(el => el.addEventListener("click", e => { e.preventDefault(); routeOrPreview(config.downloadURL, "actionDownload"); }));
  document.querySelectorAll("[data-action='buy-six']").forEach(el => el.addEventListener("click", e => { e.preventDefault(); routeOrPreview(config.purchaseSixMonthsURL, "actionPurchase"); }));
  document.querySelectorAll("[data-action='buy-annual']").forEach(el => el.addEventListener("click", e => { e.preventDefault(); routeOrPreview(config.purchaseAnnualURL, "actionPurchase"); }));
  document.querySelectorAll("[data-action='signin']").forEach(el => el.addEventListener("click", e => { e.preventDefault(); routeOrPreview(config.signInURL, "actionAccount"); }));

  document.querySelectorAll("[data-support-email]").forEach(el => {
    const email = config.supportEmail || "";
    if (email) {
      el.setAttribute("href", `mailto:${email}`);
      if (el.hasAttribute("data-email-text")) el.textContent = email;
    }
  });

  applyLanguage();
})();
