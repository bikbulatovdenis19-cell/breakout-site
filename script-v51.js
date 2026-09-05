(() => {
  const config = window.BREAKOUT_CONFIG || {};
  const tr = {
    ru:{
      navFeatures:'Инструменты',navEcosystem:'Экосистема',featuresKicker:'Возможности',featuresTitle:'Рабочие инструменты видеотренера — от матча до готового материала.',featuresIntro:'Отмечайте игровые ситуации, возвращайтесь к нужным эпизодам и готовьте материал в одном проекте.',f1t:'Горячие клавиши',f1d:'Назначайте события на клавиатуру и кодируйте игру без лишних движений мышью.',f2t:'Повтор из метки',f2d:'Выберите событие на таймлайне и сразу откройте связанный с ним эпизод.',f3t:'Гибкий экспорт',f3d:'Сохраняйте один эпизод, выбранные дорожки или материал проекта в нужном объёме.',exportOneMarker:'Одна метка',exportOneLine:'Одна линия',exportWholeProject:'Весь проект',f4t:'Интервальные события',f4d:'Первое нажатие открывает событие, второе фиксирует его окончание на таймлайне.',f5t:'Статистика',f5d:'Сводите отмеченные события в наглядную статистику для разбора после игры.',f6t:'Экспорт',f6d:'Экспортируйте выбранные эпизоды и подготовленные подборки для дальнейшей работы.',w1t:'Соберите рабочее пространство',w1d:'Выберите компоновку и нужные модули под конкретную задачу.',w2t:'Настройте события',w2d:'Подготовьте кнопки и горячие клавиши до начала работы.',w3t:'Работайте в моменте',w3d:'Отмечайте события и возвращайтесь к нужным эпизодам сразу по ходу матча.',w4t:'Разберите и экспортируйте',w4d:'Используйте статистику и сохраните материал в нужном объёме.',macTitle:'Рабочий процесс собран в одном приложении.',macLead:'От подготовки проекта до экспорта — без разрыва между инструментами.',
      navDemo:'Демо',navBenefits:'Преимущества',navShowcase:'Экраны',navSports:'Виды спорта',navReviews:'Отзывы',navPricing:'Тарифы',navSupport:'Поддержка',navPrivacy:'Конфиденциальность',signIn:'Войти',termsShort:'Условия',lightTheme:'Светлая тема',darkTheme:'Тёмная тема',zoomScreenshot:'Увеличить скриншот',closeScreenshot:'Закрыть',
      eyebrow:'Профессиональная платформа видеотренера для macOS и iOS',heroTitle:'Видеть игру.\nОтмечать главное.',heroLead:'Отмечайте игровые эпизоды на Mac, собирайте их в Композере и передавайте нужный материал тренерскому штабу на iPhone или iPad.',tryDemo:'Попробовать демо',download:'Скачать для macOS',iosButton:'Скачать для iOS',forMac:'Для Mac',foriPhone:'Для iOS',iosCompanion:'BreakOut companion',macRequirement:'macOS 14 и новее',modulesAvailable:'основных модулей в одном пространстве',realInterface:'Реальный интерфейс BreakOut',
      demoKicker:'Интерактивное демо',demoTitle:'Нажмите кнопку. Событие уже на таймлайне.',demoIntro:'Пример кодирования: 18 хоккейных тегов, таймлайн и повтор.',demoMode:'Демо режима матча',captureActive:'Захват активен',captureModule:'Просмотр видео',buttonsModule:'Программируемые кнопки',timelineModule:'Таймлайн',replayModule:'Повтор',beforeAfterShort:'до / после',startStopShort:'старт / стоп',chance:'Hit',legendBeforeAfter:'До / после — одна отметка',legendStartStop:'Старт / стоп — повторное нажатие завершает событие',trackChance:'Hit',legendPositive:'Наша команда',legendNegative:'Против нас',legendTactical:'Тактика / структура',selectMarker:'Выберите метку на таймлайне',helpClick:'создать / выбрать событие',helpResize:'потянуть край метки',helpMove:'перенести на другую линию',helpContext:'контекстное меню',ctxExport:'Экспортировать…',ctxComposer:'Добавить в Композер',ctxShare:'Поделиться видеофрагментом…',ctxDetails:'Открыть карточку события…',ctxStar:'Поставить звёздочку',ctxUnstar:'Убрать звёздочку',ctxDelete:'Удалить',
      depthKicker:'Не только кодирование',depthTitle:'Инструменты, которые продолжают работу после метки.',depthIntro:'BreakOut не заканчивается на кнопках и таймлайне. В проекте есть инструменты для разбора, подготовки материала и работы прямо поверх видео.',depth1Eyebrow:'Видео',depth1Title:'Несколько ракурсов',depth1Text:'Сопоставляйте один эпизод с разных камер, когда одного угла недостаточно.',depth2Eyebrow:'Разбор',depth2Title:'Рисование поверх видео',depth2Text:'Отмечайте позиции и направления прямо на кадре для наглядного разбора.',depth3Eyebrow:'Подборки',depth3Title:'Композер и подборки',depth3Text:'Собирайте отмеченные эпизоды в последовательности для показа и дальнейшей работы.',depth4Eyebrow:'Матч',depth4Title:'Табло поверх видео',depth4Text:'Показывайте счёт, игровое время, период и Power Play прямо поверх видео.',
      liveKicker:'Для работы в реальном темпе',liveTitle:'Интерфейс не должен отвлекать от игры.',liveIntro:'BreakOut строится вокруг рабочего процесса аналитика: нужные модули рядом, события отмечаются сразу, а после матча уже есть структура для разбора.',b1t:'Оставайтесь в игре',b1d:'Программируемые кнопки и горячие клавиши позволяют отмечать события, не уходя из рабочего экрана.',b1s:'Минимум лишних переключений',b2t:'Вернитесь к моменту за секунды',b2d:'Метка на таймлайне становится точкой входа в повтор и дальнейший разбор эпизода.',b2s:'Событие уже связано со временем матча',b3t:'Соберите пространство под задачу',b3d:'Захват, таймлайн, кнопки, повтор, статистика, экспорт, рисование и несколько ракурсов можно компоновать под свою работу.',b3s:'Модульное рабочее пространство',
      showcaseKicker:'Интерфейс',showcaseTitle:'Рабочие экраны BreakOut.',showcaseIntro:'',slide1t:'Создайте проект',slide1d:'Задайте команды и начните новый матч в отдельном проекте.',slide2t:'Выберите рабочую компоновку',slide2d:'Выберите подходящую схему панелей и соберите экран под свою работу.',slide3t:'Настройте модули',slide3d:'Определите, какие инструменты будут работать в каждой панели: захват, таймлайн, кнопки, повтор и другие модули.',slide4t:'Настройте кодирование',slide4d:'Создайте программируемые кнопки, назначьте горячие клавиши и задайте логику событий.',slide5t:'Работайте по ходу матча',slide5d:'Видео, программируемые кнопки, таймлайн и повтор остаются перед глазами одновременно.',slide6t:'Гибкий экспорт после матча',slide6d:'Экспортируйте отдельные эпизоды, материал по дорожкам или весь проект — в зависимости от задачи.',multisportKicker:'Для игровых видов спорта',multisportTitle:'BreakOut для игровых видов спорта.',multisportText:'Рабочая среда BreakOut адаптируется под хоккей, футбол, волейбол и баскетбол, сохраняя один понятный процесс для видеотренера и тренерского штаба.',testimonialsKicker:'Отзывы',testimonialsTitle:'Что говорят о BreakOut.',testimonialsIntro:'Первые впечатления специалистов, которые работают с видео и разбором игры каждый день.',testimonialVadimQuote:'«После матча важно быстро собрать нужные эпизоды и отдать материал тренерам. В BreakOut удобно находить отмеченные моменты, сразу смотреть повтор и выгружать готовые фрагменты — на подготовку разбора уходит заметно меньше времени.»',testimonialVadimName:'Хисматуллин Вадим Александрович',testimonialVadimRole:'Тренер-видеооператор ХК «Торос» (ВХЛ)',testimonialDenisQuote:'При разработке BreakOut мы учитывали опыт хоккейных тренеров из разных лиг России. Их обратная связь помогла сформировать инструменты BreakOut под реальные задачи тренерских штабов и видеоанализа.',testimonialDenisName:'Бикбулатов Денис Акзамович',testimonialDenisRole:'Видео-тренер ХК «Толпар» (МХЛ)',
      macKicker:'Почему BreakOut',macFact1Title:'Рабочее пространство под задачу',macFact1Text:'Выбирайте компоновку и набор модулей под конкретный матч или разбор.',macFact2Title:'События сразу на таймлайне',macFact2Text:'Программируемые кнопки и горячие клавиши помогают отмечать игру без лишних переходов.',macFact3Title:'Разбор и экспорт в том же проекте',macFact3Text:'Повтор, статистика и гибкий экспорт остаются частью одного рабочего процесса.',directDownload:'Прямая загрузка',directDownloadText:'Готовая версия BreakOut для macOS загружается напрямую с официального хранилища обновлений.',legalKicker:'Документы',legalTitle:'Условия и конфиденциальность.',privacyLinkShort:'Политика конфиденциальности',privacyLinkDesc:'Как обрабатываются данные аккаунта и доступа.',termsLinkShort:'Условия использования',termsLinkDesc:'Правила использования приложения, сайта и аккаунта.',
      pricingKicker:'Установка и доступ',pricingTitle:'Скачайте BreakOut и выберите срок доступа.',pricingIntro:'После установки первый успешный вход активирует 7-дневный пробный период. Дальнейший доступ можно оформить на 1 месяц, 6 месяцев или 1 год.',trialPlan:'Пробный период',trialBadge:'7 дней',trialPrice:'7 дней',trialCopy:'Полный доступ к BreakOut в течение 7 дней.',startTrial:'Начать пробный период',downloadPlan:'Скачать BreakOut',buyPlan:'Купить',oneMonth:'1 месяц',sixMonths:'6 месяцев',oneYear:'1 год',comingSoon:'Скоро',priceIncludes:'Доступ к функционалу BreakOut на оплаченный срок.',priceMonthCopy:'Для короткого рабочего цикла или одного этапа сезона.',priceSixCopy:'Для регулярной работы в течение сезона.',priceYearCopy:'Для непрерывной работы в течение года.',chooseSix:'Выбрать 6 месяцев',chooseYear:'Выбрать 1 год',
      privacyKicker:'Доверие и конфиденциальность',privacyTitle:'Понятные правила до первой покупки.',privacyText:'Аккаунт BreakOut уже использует общую систему входа для сайта и приложения. Платёжные данные на сайте не хранятся.',privacyLink:'Политика конфиденциальности →',termsLink:'Условия использования →',ctaEyebrow:'BreakOut для Mac',ctaTitle:'Разбор начинается не после матча. Он начинается в момент события.',contactSupport:'Связаться с поддержкой',
      modalTitle:'Функция пока недоступна',modalBody:'Эта функция пока недоступна в текущей версии сайта.',modalDownload:'Не удалось получить актуальную версию BreakOut. Попробуйте ещё раз через несколько секунд.',modalAccount:'Вход в аккаунт BreakOut появится позже.',modalPayment:'Оплата пока не подключена. Никакого списания не произойдёт.',close:'Закрыть',
      demoToastExport:'В приложении здесь открывается экспорт выбранного события.',demoToastComposer:'В приложении событие можно добавить в Композер.',demoToastShare:'В приложении здесь открывается системное меню «Поделиться».',demoToastDetails:'В приложении здесь открывается карточка события.',demoToastMove:'Удерживайте ⌘ и перетащите метку вверх или вниз.',
      backHome:'← На главную',supportTitle:'Поддержка',supportIntro:'Помощь по BreakOut для macOS и iOS: установка, доступ, связь устройств и вопросы по продукту.',supportEmailTitle:'Поддержка по e-mail',supportEmailCopy:'Для технических вопросов, отзывов о программе и вопросов по доступу.',supportEmailButton:'Написать',supportAccessTitle:'Загрузка и доступ',supportAccessCopy:'Один аккаунт используется в BreakOut для macOS и iOS. Версия для Mac загружается с сайта, а мобильное приложение работает на iPhone и iPad.',supportAccessButton:'Посмотреть тарифы',supportBeforeTitle:'Если возникла техническая проблема',supportBeforeCopy:'Укажите платформу, версию BreakOut, версию macOS или iOS, что вы делали перед ошибкой и точный текст сообщения. Если проблема видна на экране, приложите скриншот.',supportPaymentsTitle:'Оплата и подписка',supportPaymentsCopy:'После запуска продаж в аккаунте BreakOut можно будет видеть информацию о доступе и подписке.',
      privacyPageTitle:'Политика конфиденциальности',privacyPageIntro:'Как BreakOut обращается с данными аккаунта, доступом и будущей оплатой.',version:'Версия: 4 сентября 2026',privacyNotice:'Аккаунты BreakOut используют Supabase Auth. Для входа и лицензирования обрабатываются e-mail, данные сессии, срок доступа и сведения о связанных устройствах BreakOut. Видео и проекты не загружаются в систему аккаунтов.',privacy1Title:'1. Информация на текущем сайте',privacy1Copy:'BreakOut использует e-mail, защищённые данные авторизации, статус доступа и сведения об активированных устройствах. Видео матчей и файлы проектов не передаются в систему аккаунтов для проверки доступа.',privacy2Title:'2. Аккаунты и доступ',privacy2Copy:'Один аккаунт используется на сайте, в BreakOut для macOS и BreakOut для iOS, для проверки срока доступа, восстановления пароля и управления связанными устройствами.',privacy3Title:'3. Оплата',privacy3Copy:'Данные банковской карты будет обрабатывать выбранный платёжный провайдер, а не сайт BreakOut.',privacy4Title:'4. Видео и проекты',privacy4Copy:'Видео и связанные материалы хранятся на устройствах пользователя. При передаче между связанными Mac и iPhone/iPad они не загружаются в систему аккаунтов только ради синхронизации или проверки доступа.',privacy5Title:'5. Аналитика сайта',privacy5Copy:'BreakOut считает посещения страниц и нажатия на элементы интерфейса, чтобы понимать востребованность разделов сайта. Для анонимных посетителей используется случайный идентификатор браузера; имя или e-mail не определяются.',privacy6Title:'6. Контакты',privacy6Copy:'Вопросы о конфиденциальности можно отправить на',
      termsPageTitle:'Условия использования',termsPageIntro:'Основные условия использования сайта, аккаунта и приложений BreakOut.',termsNotice:'Сейчас через сайт нельзя совершить покупку. Цены на главной странице являются планируемыми ценами запуска.',terms1Title:'1. Сайт',terms1Copy:'Сайт представляет BreakOut для macOS и iOS, предоставляет доступ к аккаунту и информации о продукте.',terms2Title:'2. Доступ к программе',terms2Copy:'Доступ к функциям BreakOut связан с аккаунтом пользователя и действующим пробным, предоставленным или оплаченным периодом.',terms3Title:'3. Интеллектуальная собственность',terms3Copy:'BreakOut, фирменное оформление, программное обеспечение и оригинальные материалы защищаются применимыми правилами интеллектуальной собственности. Получение копии приложения не даёт права распространять его от своего имени.',terms4Title:'4. Доступ и оплата',terms4Copy:'Срок доступа, продление, отмена, возвраты, налоги и условия оплаты будут ясно показаны до оплаты.',terms5Title:'5. Контакты',terms5Copy:'Вопросы об условиях можно отправить на'
    },
    en:{
      navFeatures:'Tools',navEcosystem:'Ecosystem',featuresKicker:'Capabilities',featuresTitle:'The video analyst’s toolkit — from the game to finished material.',featuresIntro:'Tag game situations, return to the right clips and prepare material inside one project.',f1t:'Hotkeys',f1d:'Assign events to the keyboard and code the game with fewer mouse actions.',f2t:'Replay from a tag',f2d:'Select an event on the timeline and open the linked play immediately.',f3t:'Flexible export',f3d:'Save one play, selected tracks or the project material in the scope you need.',exportOneMarker:'One marker',exportOneLine:'One track',exportWholeProject:'Whole project',f4t:'Interval events',f4d:'The first press opens an event; the second fixes its end on the timeline.',f5t:'Statistics',f5d:'Turn coded events into a clear post-game statistical view.',f6t:'Export',f6d:'Export selected episodes and prepared material for the next step.',w1t:'Build the workspace',w1d:'Choose the layout and modules for the task.',w2t:'Configure events',w2d:'Prepare buttons and hotkeys before work begins.',w3t:'Work in the moment',w3d:'Mark events and return to the right episodes while the match is running.',w4t:'Review and export',w4d:'Use statistics and save exactly the material you need.',macTitle:'The workflow lives in one application.',macLead:'From project setup to export — without breaking the workflow.',
      navDemo:'Demo',navBenefits:'Benefits',navShowcase:'Screens',navSports:'Sports',navReviews:'Reviews',navPricing:'Pricing',navSupport:'Support',navPrivacy:'Privacy',signIn:'Sign in',termsShort:'Terms',lightTheme:'Light theme',darkTheme:'Dark theme',zoomScreenshot:'Enlarge screenshot',closeScreenshot:'Close',
      eyebrow:'Professional video analyst platform for macOS and iOS',heroTitle:'See the game.\nMark what matters.',heroLead:'Tag game clips on Mac, build them in Composer and send the material the coaching staff needs to iPhone or iPad.',tryDemo:'Try the demo',download:'Download for macOS',iosButton:'Download for iOS',forMac:'For Mac',foriPhone:'For iOS',iosCompanion:'BreakOut companion',macRequirement:'macOS 14 or later',modulesAvailable:'core modules in one workspace',realInterface:'Real BreakOut interface',
      demoKicker:'Interactive demo',demoTitle:'Press a button. The event is already on the timeline.',demoIntro:'Coding example: 18 hockey tags, timeline and replay.',demoMode:'Match-mode demo',captureActive:'Capture active',captureModule:'Video',buttonsModule:'Programmable buttons',timelineModule:'Timeline',replayModule:'Replay',beforeAfterShort:'before / after',startStopShort:'start / stop',chance:'Hit',legendBeforeAfter:'Before / after — creates one event',legendStartStop:'Start / stop — press again to finish the event',trackChance:'Hit',legendPositive:'For us',legendNegative:'Against us',legendTactical:'Tactical / structure',selectMarker:'Select a marker on the timeline',helpClick:'create / select an event',helpResize:'drag a marker edge',helpMove:'move to another track',helpContext:'context menu',ctxExport:'Export…',ctxComposer:'Add to Composer',ctxShare:'Share video clip…',ctxDetails:'Open event card…',ctxStar:'Star event',ctxUnstar:'Remove star',ctxDelete:'Delete',
      depthKicker:'Beyond coding',depthTitle:'Tools that keep working after the tag.',depthIntro:'BreakOut goes beyond buttons and timeline coding with tools for review, presentation and work directly on video.',depth1Eyebrow:'Video',depth1Title:'Multiple angles',depth1Text:'Compare the same episode from different cameras when one angle is not enough.',depth2Eyebrow:'Review',depth2Title:'Drawing over video',depth2Text:'Highlight positions, movement and details directly on the frame.',depth3Eyebrow:'Collections',depth3Title:'Composer and playlists',depth3Text:'Collect tagged episodes into focused sets for presentation and further work.',depth4Eyebrow:'Match',depth4Title:'Scoreboard over video',depth4Text:'Track score, period and game time and place a compact scoreboard directly over video when needed.',
      liveKicker:'Built for live work',liveTitle:'The interface should not pull you away from the game.',liveIntro:'BreakOut is built around the analyst’s workflow: the needed modules stay close, events are marked immediately, and the match already has structure when review begins.',b1t:'Stay on the game',b1d:'Programmable buttons and hotkeys let you mark events without leaving the working screen.',b1s:'Fewer unnecessary switches',b2t:'Return to a moment in seconds',b2d:'A timeline marker becomes the entry point for replay and further analysis.',b2s:'The event is already tied to match time',b3t:'Build the workspace around the job',b3d:'Capture, timeline, buttons, replay, statistics, export, drawing and multiple angles can be arranged around your workflow.',b3s:'A modular workspace',
      showcaseKicker:'Interface',showcaseTitle:'BreakOut working screens.',showcaseIntro:'',slide1t:'Create a project',slide1d:'Set the teams and start a new match in a dedicated project.',slide2t:'Choose the workspace layout',slide2d:'Select a panel layout and shape the workspace around the task.',slide3t:'Configure the modules',slide3d:'Choose what each panel contains: capture, timeline, buttons, replay and other tools.',slide4t:'Configure coding',slide4d:'Create programmable buttons, assign hotkeys and define event logic.',slide5t:'Work during the match',slide5d:'Video, programmable buttons, timeline and replay stay visible together.',slide6t:'Flexible post-game export',slide6d:'Export individual events, material by track or the complete project depending on the task.',multisportKicker:'Built for game-based sports',multisportTitle:'BreakOut for game-based sports.',multisportText:'One video-analysis workflow adapts to hockey, football, volleyball and basketball while keeping the same clear workspace for coaches and analysts.',testimonialsKicker:'Testimonials',testimonialsTitle:'What people say about BreakOut.',testimonialsIntro:'Early impressions from professionals who work with video and game review every day.',testimonialVadimQuote:'“After a game, the priority is to collect the right clips and get material to the coaches quickly. BreakOut makes tagged moments easy to find, replay instantly and export as finished clips, which noticeably shortens preparation time.”',testimonialVadimName:'Vadim Khismatullin',testimonialVadimRole:'Video Coach, HC Toros (VHL)',testimonialDenisQuote:'During the development of BreakOut, we incorporated the experience of hockey coaches from different leagues across Russia. Their feedback helped shape BreakOut around the real needs of coaching staffs and video analysis.',testimonialDenisName:'Denis Bikbulatov',testimonialDenisRole:'Video Coach, HC Tolpar (MHL)',
      macKicker:'Why BreakOut',macFact1Title:'Workspace shaped around the task',macFact1Text:'Choose the layout and modules for a specific match or review.',macFact2Title:'Events go straight to the timeline',macFact2Text:'Programmable buttons and hotkeys help code the game without unnecessary switching.',macFact3Title:'Review and export in the same project',macFact3Text:'Replay, statistics and flexible export remain part of one workflow.',directDownload:'Direct download',directDownloadText:'The current BreakOut build for macOS downloads directly from the official update storage.',legalKicker:'Documents',legalTitle:'Terms and privacy.',privacyLinkShort:'Privacy Policy',privacyLinkDesc:'How account and access data is handled.',termsLinkShort:'Terms of Use',termsLinkDesc:'Rules for using the application, website and account.',
      pricingKicker:'Download and access',pricingTitle:'Download BreakOut and choose your access term.',pricingIntro:'After installation, your first successful sign-in activates a 7-day trial period. Continued access is available for 1 month, 6 months or 1 year.',trialPlan:'Trial period',trialBadge:'7 days',trialPrice:'7 days',trialCopy:'Full BreakOut access for 7 days.',startTrial:'Start trial period',downloadPlan:'Download BreakOut',buyPlan:'Buy',oneMonth:'1 month',sixMonths:'6 months',oneYear:'1 year',comingSoon:'Coming soon',priceIncludes:'Access to BreakOut functionality for the paid term.',priceMonthCopy:'For a short work cycle or a single stage of the season.',priceSixCopy:'For regular work throughout the season.',priceYearCopy:'For continuous work throughout the year.',chooseSix:'Choose 6 months',chooseYear:'Choose 1 year',
      privacyKicker:'Trust and privacy',privacyTitle:'Clear rules before the first purchase.',privacyText:'The BreakOut account now uses one shared sign-in system for the website and Mac app. Payment-card data is not stored on this site.',privacyLink:'Privacy policy →',termsLink:'Terms of use →',ctaEyebrow:'BreakOut for Mac',ctaTitle:'Analysis does not start after the match. It starts when the event happens.',contactSupport:'Contact support',
      modalTitle:'This function is not available yet',modalBody:'This feature is not available in the current website version yet.',modalDownload:'We could not retrieve the current BreakOut release. Please try again in a few seconds.',modalAccount:'BreakOut Account sign-in is available from the account page.',modalPayment:'Payments are not connected yet. Nothing will be charged.',close:'Close',demoToastExport:'In the app, this opens export for the selected event.',demoToastComposer:'In the app, the event can be added to Composer.',demoToastShare:'In the app, this opens the system Share menu.',demoToastDetails:'In the app, this opens the event card.',demoToastMove:'Hold ⌘ and drag the marker up or down.',
      backHome:'← Home',supportTitle:'Support',supportIntro:'Help with BreakOut for macOS and iOS, installation, access, device linking and product questions.',supportEmailTitle:'Email support',supportEmailCopy:'For technical questions, product feedback or access issues.',supportEmailButton:'Send email',supportAccessTitle:'Download and access',supportAccessCopy:'One account is used in BreakOut for macOS and iOS. The Mac app is downloaded from the site, and the mobile app runs on iPhone and iPad.',supportAccessButton:'View pricing',supportBeforeTitle:'When reporting a technical issue',supportBeforeCopy:'Please include the platform, BreakOut version, macOS or iOS version, what you were doing and the exact error message. Add a screenshot when the problem is visual.',supportPaymentsTitle:'Payments and subscriptions',supportPaymentsCopy:'After sales open, your BreakOut account will show access and subscription information.',
      privacyPageTitle:'Privacy Policy',privacyPageIntro:'How BreakOut handles account data, access and future payments.',version:'Version: 4 September 2026',privacyNotice:'BreakOut accounts use Supabase Auth. Email, session data, access status and connected BreakOut device information are processed for sign-in and licensing. Video and projects are not uploaded to the account system.',privacy1Title:'1. Information on the current site',privacy1Copy:'BreakOut uses email, protected authentication data, access status and activated-device information. Match video and project files are not sent to the account system for access checks.',privacy2Title:'2. Accounts and access',privacy2Copy:'One account is used on the website, BreakOut for macOS and BreakOut for iOS for access checks, password recovery and connected-device management.',privacy3Title:'3. Payments',privacy3Copy:'Payment-card details will be handled by the selected payment provider rather than stored by the BreakOut website.',privacy4Title:'4. Video and projects',privacy4Copy:'Video and linked material remain on the user’s devices. Transfers between paired Mac and iPhone/iPad devices are not uploaded to the account system merely for syncing or access checks.',privacy5Title:'5. Website analytics',privacy5Copy:'BreakOut counts page visits and interface actions to understand how the website is used. Anonymous visitors receive a random browser identifier; their name or email is not identified.',privacy6Title:'6. Contact',privacy6Copy:'Privacy questions can be sent to',
      termsPageTitle:'Terms of Use',termsPageIntro:'Basic terms for using the BreakOut website, account and applications.',termsNotice:'Purchases cannot currently be completed on this website. Prices on the home page are planned launch prices.',terms1Title:'1. Website',terms1Copy:'This website presents BreakOut for macOS and iOS and provides access to the account and product information.',terms2Title:'2. Software access',terms2Copy:'BreakOut feature access is linked to the user account and a valid trial, granted or paid access period.',terms3Title:'3. Intellectual property',terms3Copy:'BreakOut, its visual identity, software and original materials are protected by applicable intellectual-property rules. Receiving a copy of the application does not grant redistribution rights.',terms4Title:'4. Access and payments',terms4Copy:'Access duration, renewal, cancellation, refunds, taxes and payment conditions will be shown clearly before payment.',terms5Title:'5. Contact',terms5Copy:'Questions about these terms can be sent to'
    }
  };

  Object.assign(tr.ru,{
    navAccount:'Аккаунт',ecosystemKicker:'Экосистема',ecosystemTitle:'Игровые эпизоды — тренерскому штабу по ходу матча.',ecosystemIntro:'Видеотренер отмечает нужные ситуации в BreakOut macOS и передаёт выбранные эпизоды, Композер или тактический материал тренерскому штабу. На iPhone или iPad материал открывается прямо в BreakOut iOS.',ecosystemPoint1Title:'Метка на таймлайне',ecosystemPoint1Text:'Видеотренер отмечает нужную игровую ситуацию во время матча или собирает эпизоды в Композере.',ecosystemPoint2Title:'Передача в один шаг',ecosystemPoint2Text:'Выбранный эпизод, Композер или тактический материал отправляется прямо из BreakOut macOS.',ecosystemPoint3Title:'Просмотр у тренерского штаба',ecosystemPoint3Text:'Материал открывается в BreakOut iOS на iPhone или iPad — на скамейке, тренерском мостике или в раздевалке.',ecosystemMacLabel:'Видеотренер · таймлайн · Композер',ecosystemMobileLibrary:'Моя библиотека',ecosystemClipLinked:'Связанный эпизод',ecosystemTacticTitle:'Большинство 1–3–1',ecosystemTacticLabel:'Тактика',ecosystemMobileDevices:'iPhone · iPad',ecosystemIosNote:'BreakOut iOS для просмотра материалов тренерским штабом.',ecosystemVisualCaption:'Выбранные эпизоды → BreakOut iOS · iPhone / iPad',ecosystemCollectionLabel:'Композер',ecosystemRouteLabel:'MAC  →  IOS',developmentKicker:'Экосистема BreakOut',developmentTitle:'BreakOut macOS и iOS — одна рабочая среда.',developmentIntro:'Готовьте материал на Mac и передавайте его тренерскому штабу на iPhone или iPad прямо из BreakOut.',developmentPlatforms:'Один аккаунт для BreakOut macOS, BreakOut iOS и сайта.',ecoStep1:'Работа на Mac',ecoStep2:'Передача материала',ecoStep3:'iPhone / iPad',macPlatformRole:'Таймлайн · Композер · Рисование · Тактическая доска',iosPlatformRole:'Библиотека · Просмотр · Рисование · Тактика',platformDownloadFor:'Скачать для',macAvailable:'ДОСТУПНО',iosAvailable:'ДОСТУПНО',windowsInDevelopment:'В РАЗРАБОТКЕ',accountKicker:'Доступ к BreakOut',accountTitle:'Начните бесплатно. Продолжайте, когда будете готовы.',accountIntro:'Один BreakOut Account для Mac, iPhone, iPad и сайта. Войдите один раз и используйте тот же профиль во всей экосистеме BreakOut.',createAccount:'Создать аккаунт',accountFact1Title:'7 дней бесплатно',accountFact1Text:'Полный доступ начинается после первого успешного входа в BreakOut.',accountFact2Title:'Срок всегда под рукой',accountFact2Text:'В кабинете видны лицензированный Mac и связанные устройства iOS.',accountFact3Title:'Продление без ключей',accountFact3Text:'После покупки срок доступа обновляется в аккаунте и приложении.',accountPageKicker:'Аккаунт BreakOut',accountPageSub:'',selectedAccess:'Выбранный доступ',password:'Пароль',repeatPassword:'Повторите пароль',forgotPassword:'Забыли пароль?',accountConsent:'Я принимаю условия использования и политику конфиденциальности.',sameLogin:'Этот же аккаунт используется в BreakOut для macOS и iOS.',accountSideKicker:'Личный кабинет',accountSideTitle:'Управляйте доступом к BreakOut.',accountSideIntro:'Один аккаунт для BreakOut на Mac, iPhone, iPad и сайте — со статусом доступа и связанными устройствами.',accountPreviewAccess:'Доступ',accountPreviewInactive:'Не активирован',accountPreviewPlan:'Тариф',accountPreviewDevices:'Устройства',accountSideNote:'Статус доступа появляется только после входа — без лишних пустых показателей до авторизации.',accountServerPending:'Аккаунт BreakOut готов к работе.',accountResetPending:'Ссылка для восстановления пароля отправляется на e-mail аккаунта.',accountSignedInAs:'Аккаунт',accountValidUntil:'Действует до',accountLastSync:'Обновлено',accountConnectedMac:'BreakOut для macOS',accountConnectedMobile:'BreakOut для iOS',accountRefresh:'Обновить статус',accountLogout:'Выйти',accountNewPasswordTitle:'Новый пароль',accountNewPasswordIntro:'Введите новый пароль для аккаунта BreakOut.',accountSavePassword:'Сохранить пароль',planMonthName:'1 месяц',planSixName:'6 месяцев',planYearName:'1 год',trialShort:'7 дней',popularPlan:'Популярный',pricingIntro:'Первый успешный вход активирует 7-дневный пробный период. Затем можно выбрать доступ на 1 месяц, 6 месяцев или 1 год.'
  });
  Object.assign(tr.en,{
    navAccount:'Account',ecosystemKicker:'Ecosystem',ecosystemTitle:'Game clips for the coaching staff during the match.',ecosystemIntro:'The video analyst tags key situations in BreakOut macOS and sends selected clips, Composer material or tactical content to the coaching staff. On iPhone or iPad, the material opens directly in BreakOut iOS.',ecosystemPoint1Title:'Timeline tag',ecosystemPoint1Text:'The video analyst tags the game situation during the match or groups clips in Composer.',ecosystemPoint2Title:'Send in one step',ecosystemPoint2Text:'Send a selected clip, Composer material or tactical content directly from BreakOut macOS.',ecosystemPoint3Title:'Review with the coaching staff',ecosystemPoint3Text:'The coaching staff opens the material in BreakOut iOS on iPhone or iPad — on the bench, in the booth or in the locker room.',ecosystemMacLabel:'Video analyst · timeline · Composer',ecosystemMobileLibrary:'My Library',ecosystemClipLinked:'Linked clip',ecosystemTacticTitle:'Power Play 1–3–1',ecosystemTacticLabel:'Tactics',ecosystemMobileDevices:'iPhone · iPad',ecosystemIosNote:'BreakOut iOS for coaching-staff review.',ecosystemVisualCaption:'Selected clips → BreakOut iOS · iPhone / iPad',ecosystemCollectionLabel:'Composer',ecosystemRouteLabel:'MAC → IOS',developmentKicker:'BreakOut ecosystem',developmentTitle:'BreakOut macOS and iOS — one working environment.',developmentIntro:'Prepare material on Mac and send it to the coaching staff on iPhone or iPad directly from BreakOut.',developmentPlatforms:'One account for BreakOut macOS, BreakOut iOS and the website.',ecoStep1:'Work on Mac',ecoStep2:'Send material',ecoStep3:'iPhone / iPad',macPlatformRole:'Timeline · Composer · Drawing · Tactical board',iosPlatformRole:'Library · Review · Drawing · Tactics',platformDownloadFor:'Download for',macAvailable:'AVAILABLE',iosAvailable:'AVAILABLE',windowsInDevelopment:'IN DEVELOPMENT',accountKicker:'BreakOut access',accountTitle:'Start free. Continue when you are ready.',accountIntro:'One BreakOut Account for Mac, iPhone, iPad and the website. Sign in once and use the same profile across the BreakOut ecosystem.',createAccount:'Create account',accountFact1Title:'7 days free',accountFact1Text:'Full access starts after your first successful sign-in to BreakOut.',accountFact2Title:'Access at a glance',accountFact2Text:'The portal shows your licensed Mac and connected iOS devices.',accountFact3Title:'Renew without keys',accountFact3Text:'After purchase, your access period updates in the account and the app.',accountPageKicker:'BreakOut account',accountPageSub:'',selectedAccess:'Selected access',password:'Password',repeatPassword:'Repeat password',forgotPassword:'Forgot password?',accountConsent:'I accept the Terms of Use and Privacy Policy.',sameLogin:'Use the same account in BreakOut for macOS and iOS.',accountSideKicker:'Account portal',accountSideTitle:'Manage your BreakOut access.',accountSideIntro:'One account for BreakOut on Mac, iPhone, iPad and the website, with access status and connected devices.',accountPreviewAccess:'Access',accountPreviewInactive:'Inactive',accountPreviewPlan:'Plan',accountPreviewDevices:'Devices',accountSideNote:'Access status appears only after sign-in, without empty status fields before authentication.',accountServerPending:'Your BreakOut Account is ready.',accountResetPending:'A password recovery link is sent to the account email.',accountSignedInAs:'Account',accountValidUntil:'Valid until',accountLastSync:'Updated',accountConnectedMac:'BreakOut for macOS',accountConnectedMobile:'BreakOut for iOS',accountRefresh:'Refresh status',accountLogout:'Sign out',accountNewPasswordTitle:'New password',accountNewPasswordIntro:'Enter a new password for your BreakOut account.',accountSavePassword:'Save password',planMonthName:'1 month',planSixName:'6 months',planYearName:'1 year',trialShort:'7 days',popularPlan:'Popular',pricingIntro:'Your first successful sign-in activates a 7-day trial period. Then choose 1 month, 6 months or 1 year of access.'
  });

  let lang=localStorage.getItem('breakout-lang')||(navigator.language?.toLowerCase().startsWith('ru')?'ru':'en');if(!tr[lang])lang='ru';const t=k=>tr[lang][k]||null;
  let theme=document.documentElement.dataset.theme||localStorage.getItem('breakout-theme')||'dark';if(!['light','dark'].includes(theme))theme='dark';
  function esc(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function applyTheme(){document.documentElement.dataset.theme=theme;document.querySelectorAll('[data-theme-option]').forEach(b=>{const active=b.dataset.themeOption===theme;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});document.querySelectorAll('[data-theme-toggle]').forEach(b=>{const icon=b.querySelector('[data-theme-icon]');if(icon)icon.textContent=theme==='light'?'☀':'☾';const label=t(theme==='light'?'darkTheme':'lightTheme')||(theme==='light'?'Switch to dark theme':'Switch to light theme');b.title=label;b.setAttribute('aria-label',label)});const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=theme==='light'?'#f5f8f2':'#070907'}
  function applyLanguage(){document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>{const v=t(el.dataset.i18n);if(v!=null)el.textContent=v});document.querySelectorAll('[data-i18n-lines]').forEach(el=>{const v=t(el.dataset.i18nLines);if(v!=null)el.innerHTML=v.split('\n').map(x=>`<span>${esc(x)}</span>`).join('<br>')});document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));document.querySelectorAll('[data-lang-current]').forEach(el=>el.textContent=lang.toUpperCase());const page=document.body.dataset.page||'home';const titles={home:lang==='ru'?'BreakOut — платформа видеотренера для macOS и iOS':'BreakOut — Video Analyst Platform for macOS and iOS',support:`${t('supportTitle')||'Support'} — BreakOut`,privacy:`${t('privacyPageTitle')||'Privacy'} — BreakOut`,terms:`${t('termsPageTitle')||'Terms'} — BreakOut`,account:`${t('accountPageKicker')||'Account'} — BreakOut`};document.title=titles[page]||'BreakOut';document.querySelectorAll('.slide-zoom').forEach(b=>{const label=t('zoomScreenshot')||'Enlarge screenshot';b.title=label;b.setAttribute('aria-label',label)});document.querySelectorAll('[data-lightbox-close]').forEach(b=>b.setAttribute('aria-label',t('closeScreenshot')||'Close'));applyTheme();updateContextStarLabel()}
  document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>{lang=b.dataset.lang;localStorage.setItem('breakout-lang',lang);applyLanguage()}));
  document.querySelectorAll('[data-lang-toggle]').forEach(b=>b.addEventListener('click',()=>{lang=lang==='ru'?'en':'ru';localStorage.setItem('breakout-lang',lang);applyLanguage()}));
  document.querySelectorAll('[data-theme-option]').forEach(b=>b.addEventListener('click',()=>{theme=b.dataset.themeOption;localStorage.setItem('breakout-theme',theme);applyTheme()}));
  document.querySelectorAll('[data-theme-toggle]').forEach(b=>b.addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';localStorage.setItem('breakout-theme',theme);applyTheme()}));
  const menuBtn=document.querySelector('.menu-btn'),mobileNav=document.querySelector('.mobile-nav');menuBtn?.addEventListener('click',()=>{const open=mobileNav?.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(!!open))});mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));
  const modal=document.querySelector('.modal-backdrop'),modalCopy=document.querySelector('[data-modal-copy]');function openModal(k){if(modalCopy)modalCopy.textContent=t(k)||t('modalBody')||'';modal?.classList.add('open');document.body.style.overflow='hidden'}function closeModal(){modal?.classList.remove('open');document.body.style.overflow=''}document.querySelectorAll('[data-modal-close]').forEach(b=>b.addEventListener('click',closeModal));modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeLightbox();hideContext()}});function goOrModal(url,k){if(url)location.href=url;else openModal(k)}
  async function resolveLatestDownloadURL(){
    const fallback=config.downloadURL||'';
    if(!config.updateFeedURL)return fallback;
    try{
      const separator=config.updateFeedURL.includes('?')?'&':'?';
      const response=await fetch(`${config.updateFeedURL}${separator}siteDownload=${Date.now()}`,{cache:'no-store'});
      if(!response.ok)throw new Error(`Feed HTTP ${response.status}`);
      const xmlText=await response.text();
      const xml=new DOMParser().parseFromString(xmlText,'application/xml');
      if(xml.querySelector('parsererror'))throw new Error('Invalid update feed');
      const enclosure=xml.querySelector('item enclosure, enclosure');
      const latest=enclosure?.getAttribute('url')?.trim();
      return latest||fallback;
    }catch(error){
      console.warn('BreakOut latest download lookup failed:',error);
      return fallback;
    }
  }
  async function beginLatestDownload(button){
    if(button?.dataset.downloadBusy==='1')return;
    if(button){button.dataset.downloadBusy='1';button.setAttribute('aria-busy','true');button.classList.add('download-loading')}
    try{
      const url=await resolveLatestDownloadURL();
      if(!url){openModal('modalDownload');return}
      location.href=url;
    }finally{
      if(button){delete button.dataset.downloadBusy;button.removeAttribute('aria-busy');button.classList.remove('download-loading')}
    }
  }
  document.querySelectorAll('[data-action="download"]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();beginLatestDownload(b)}));document.querySelectorAll('[data-action="signin"]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();goOrModal(config.signInURL,'modalAccount')}));document.querySelectorAll('[data-action="buy-six"]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();goOrModal(config.purchaseSixMonthsURL,'modalPayment')}));document.querySelectorAll('[data-action="buy-year"]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();goOrModal(config.purchaseAnnualURL,'modalPayment')}));document.querySelectorAll('[data-support-email]').forEach(el=>{const email=config.supportEmail||'';if(email){el.href=`mailto:${email}`;if(el.hasAttribute('data-email-text'))el.textContent=email}});

  const sectionNavLinks=[...document.querySelectorAll('.desktop-nav a[href^="#"],.mobile-nav a[href^="#"]')];
  if(sectionNavLinks.length && 'IntersectionObserver' in window){
    const navById=new Map();
    sectionNavLinks.forEach(link=>{const id=link.getAttribute('href')?.slice(1);if(id){if(!navById.has(id))navById.set(id,[]);navById.get(id).push(link)}});
    const setActive=id=>{sectionNavLinks.forEach(link=>link.classList.toggle('is-active',link.getAttribute('href')===`#${id}`))};
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible?.target?.id)setActive(visible.target.id);
    },{rootMargin:'-18% 0px -62% 0px',threshold:[0,.08,.2,.45]});
    navById.forEach((_,id)=>{const target=document.getElementById(id);if(target)observer.observe(target)});
  }



  // Account page — real Supabase Auth + shared access status with the macOS app.
  // Account — explicit, mutually exclusive views (sign-in / registration / dashboard / recovery)
  const signInForm=document.querySelector('[data-signin-form]');
  const registerForm=document.querySelector('[data-register-form]');
  if(signInForm && registerForm){
    const api=window.BreakOutSupabase;
    const tabs=[...document.querySelectorAll('[data-account-mode]')];
    const authTabs=document.querySelector('[data-auth-tabs]');
    const signInStatus=document.querySelector('[data-signin-status]');
    const registerStatus=document.querySelector('[data-register-status]');
    const resetBtn=document.querySelector('[data-account-reset]');
    const planBox=document.querySelector('[data-account-plan]');
    const planName=document.querySelector('[data-account-plan-name]');
    const planPrice=document.querySelector('[data-account-plan-price]');
    const dashboard=document.querySelector('[data-account-dashboard]');
    const dashboardStatus=document.querySelector('[data-account-dashboard-status]');
    const dashboardEmail=document.querySelector('[data-account-email]');
    const dashboardState=document.querySelector('[data-account-state]');
    const dashboardPlan=document.querySelector('[data-account-access-plan]');
    const dashboardUntil=document.querySelector('[data-account-access-until]');
    const dashboardCount=document.querySelector('[data-account-device-count]');
    const devicesBox=document.querySelector('[data-account-devices]');
    const lastSync=document.querySelector('[data-account-last-sync]');
    const refreshBtn=document.querySelector('[data-account-refresh]');
    const logoutBtn=document.querySelector('[data-account-logout]');
    const previewState=document.querySelector('[data-account-preview-state]');
    const previewPlan=document.querySelector('[data-account-preview-plan]');
    const previewDevices=document.querySelector('[data-account-preview-devices]');
    const recoveryBox=document.querySelector('[data-account-recovery]');
    const recoveryPassword=document.querySelector('[data-recovery-password]');
    const recoveryConfirm=document.querySelector('[data-recovery-confirm]');
    const recoverySubmit=document.querySelector('[data-recovery-submit]');
    const recoveryStatus=document.querySelector('[data-recovery-status]');
    const qs=new URLSearchParams(location.search);
    let mode=qs.get('mode')==='register'?'register':'signin';
    const plan=qs.get('plan');
    const ru=()=>document.documentElement.lang!=='en';
    const message=(r,e)=>ru()?r:e;
    const hide=el=>el&&el.classList.add('is-hidden');
    const show=el=>el&&el.classList.remove('is-hidden');
    function clearStatus(el){if(el){el.textContent='';el.className='account-status'}}
    function humanError(error){
      const raw=String(error?.message||error||'');const lower=raw.toLowerCase();
      if(raw==='SUPABASE_NOT_CONFIGURED')return message('Связь с Supabase не настроена.','Supabase is not configured.');
      if(raw==='NO_SESSION')return message('Сессия закончилась. Войдите снова.','Your session ended. Sign in again.');
      if(lower.includes('invalid login credentials'))return message('Неверный e-mail или пароль.','Invalid email or password.');
      if(lower.includes('email not confirmed'))return message('Сначала подтвердите e-mail по ссылке из письма.','Confirm your email using the link in the message first.');
      if(lower.includes('user already registered'))return message('Аккаунт с этим e-mail уже существует.','An account with this email already exists.');
      if(lower.includes('failed to fetch')||lower.includes('networkerror'))return message('Не удалось связаться с сервером аккаунтов. Проверьте интернет и попробуйте ещё раз.','Could not reach the account server. Check your connection and try again.');
      return raw||message('Не удалось выполнить запрос.','Request failed.');
    }
    function fmtDate(v){if(!v)return'—';const d=new Date(v);if(Number.isNaN(d.getTime()))return'—';return new Intl.DateTimeFormat(ru()?'ru-RU':'en-US',{day:'2-digit',month:'long',year:'numeric'}).format(d)}
    function planText(v){if(v==='six_months')return t('planSixName')||'6 месяцев';if(v==='annual')return t('planYearName')||'1 год';if(v==='trial')return message('Пробный доступ','Trial');if(v==='complimentary')return message('Премиум','Premium');return'—'}
    function stateText(a){if(!a)return'—';if(a.status==='active'&&new Date(a.expires_at)>new Date())return message('Активен','Active');if(a.status==='payment_issue')return message('Оплата','Payment');if(a.status==='revoked')return message('Отключён','Revoked');return message('Истёк','Expired')}
    function resetPreview(){if(previewState)previewState.textContent=t('accountPreviewInactive')||message('Не активирован','Inactive');if(previewPlan)previewPlan.textContent='—';if(previewDevices)previewDevices.textContent='0 Mac'}
    function showAuth(next='signin'){
      mode=next==='register'?'register':'signin';
      show(authTabs);hide(dashboard);hide(recoveryBox);
      if(mode==='signin'){show(signInForm);hide(registerForm)}else{hide(signInForm);show(registerForm)}
      tabs.forEach(b=>b.classList.toggle('active',b.dataset.accountMode===mode));
      clearStatus(signInStatus);clearStatus(registerStatus);clearStatus(dashboardStatus);
      if(planBox){if(mode==='register'&&plan){show(planBox);if(plan==='6m'){planName.textContent=t('planSixName')||'6 месяцев';planPrice.textContent=(lang==='en'?'$525':'40 000 ₽')}else if(plan==='1y'){planName.textContent=t('planYearName')||'1 год';planPrice.textContent=(lang==='en'?'$1,050':'80 000 ₽')}else hide(planBox)}else hide(planBox)}
      const url=new URL(location.href);url.searchParams.set('mode',mode);history.replaceState({},'',url);
      resetPreview();
    }
    function showRecovery(){hide(authTabs);hide(signInForm);hide(registerForm);hide(dashboard);show(recoveryBox)}
    async function loadDashboard(){
      if(!api?.configured()){showAuth('signin');signInStatus.textContent=message('Связь с Supabase не настроена.','Supabase is not configured.');signInStatus.className='account-status error';return false}
      const session=await api.ensureSession();if(!session){showAuth(mode);return false}
      hide(authTabs);hide(signInForm);hide(registerForm);hide(recoveryBox);show(dashboard);
      if(dashboardEmail)dashboardEmail.textContent=session.user?.email||'—';
      if(dashboardState)dashboardState.textContent=message('Проверяем…','Checking…');
      try{
        const [access,devices]=await Promise.all([api.currentAccess(),api.devices()]);
        if(dashboardState)dashboardState.textContent=stateText(access);
        if(dashboardPlan)dashboardPlan.textContent=planText(access?.plan);
        if(dashboardUntil)dashboardUntil.textContent=fmtDate(access?.expires_at);
        if(lastSync)lastSync.textContent=new Intl.DateTimeFormat(lang==='ru'?'ru-RU':'en-GB',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}).format(new Date());
        if(dashboardCount)dashboardCount.textContent=`${devices?.length||0} / ${access?.max_devices||0}`;
        if(previewState)previewState.textContent=stateText(access);
        if(previewPlan)previewPlan.textContent=planText(access?.plan);
        if(previewDevices)previewDevices.textContent=`${devices?.length||0} / ${access?.max_devices||0} Mac`;
        if(devicesBox){devicesBox.innerHTML='';(devices||[]).forEach(d=>{const row=document.createElement('div');row.className='account-device-row';const meta=document.createElement('div');const strong=document.createElement('strong');strong.textContent=d.name||'Mac';const small=document.createElement('small');small.textContent=`${d.platform||'macOS'} · ${message('последняя проверка','last seen')} ${fmtDate(d.last_seen_at||d.activated_at)}`;meta.append(strong,small);const btn=document.createElement('button');btn.type='button';btn.className='account-device-revoke';btn.textContent=message('Отключить','Revoke');btn.addEventListener('click',async()=>{btn.disabled=true;try{await api.revokeDevice(d.id);await loadDashboard()}catch(e){dashboardStatus.textContent=humanError(e);dashboardStatus.className='account-status error';btn.disabled=false}});row.append(meta,btn);devicesBox.appendChild(row)})}
        clearStatus(dashboardStatus);return true;
      }catch(e){dashboardStatus.textContent=humanError(e);dashboardStatus.className='account-status error';return true}
    }
    tabs.forEach(b=>b.addEventListener('click',()=>showAuth(b.dataset.accountMode)));
    resetBtn?.addEventListener('click',async()=>{
      const email=signInForm.elements.email.value.trim();
      if(!email){signInStatus.textContent=message('Введите e-mail.','Enter your email.');signInStatus.className='account-status error';return}
      signInStatus.textContent=message('Отправляем письмо…','Sending email…');signInStatus.className='account-status';
      try{await api.sendPasswordReset(email);signInStatus.textContent=message('Письмо для восстановления отправлено.','Password reset email sent.');signInStatus.className='account-status ok'}catch(e){signInStatus.textContent=humanError(e);signInStatus.className='account-status error'}
    });
    signInForm.addEventListener('submit',async e=>{
      e.preventDefault();if(!signInForm.reportValidity())return;
      const email=signInForm.elements.email.value.trim(),password=signInForm.elements.password.value,btn=signInForm.querySelector('button[type="submit"]');
      clearStatus(signInStatus);signInStatus.textContent=message('Входим…','Signing in…');if(btn)btn.disabled=true;
      try{await api.signIn(email,password);await loadDashboard()}catch(err){signInStatus.textContent=humanError(err);signInStatus.className='account-status error'}finally{if(btn)btn.disabled=false}
    });
    registerForm.addEventListener('submit',async e=>{
      e.preventDefault();if(!registerForm.reportValidity())return;
      const email=registerForm.elements.email.value.trim(),password=registerForm.elements.password.value,confirm=registerForm.elements.confirmPassword.value,btn=registerForm.querySelector('button[type="submit"]');
      if(password!==confirm){registerStatus.textContent=message('Пароли не совпадают.','Passwords do not match.');registerStatus.className='account-status error';return}
      clearStatus(registerStatus);registerStatus.textContent=message('Создаём аккаунт…','Creating account…');if(btn)btn.disabled=true;
      try{const result=await api.signUp(email,password);if(result.needsEmailConfirmation){registerStatus.textContent=message('Аккаунт создан. Подтвердите e-mail из письма, затем войдите.','Account created. Confirm your email, then sign in.');registerStatus.className='account-status ok'}else await loadDashboard()}catch(err){registerStatus.textContent=humanError(err);registerStatus.className='account-status error'}finally{if(btn)btn.disabled=false}
    });
    refreshBtn?.addEventListener('click',()=>loadDashboard());
    logoutBtn?.addEventListener('click',async()=>{await api.signOut();showAuth('signin')});
    const recovery=api?.consumeRecoveryHash?.()||qs.get('mode')==='recovery';
    if(recovery){
      showRecovery();
      recoverySubmit?.addEventListener('click',async()=>{const p=recoveryPassword.value,c=recoveryConfirm.value;if(p.length<8||p!==c){recoveryStatus.textContent=message('Пароли должны совпадать и содержать минимум 8 символов.','Passwords must match and be at least 8 characters.');recoveryStatus.className='account-status error';return}recoverySubmit.disabled=true;try{await api.updatePassword(p);recoveryStatus.textContent=message('Пароль изменён. Теперь можно войти в BreakOut.','Password changed. You can now sign in to BreakOut.');recoveryStatus.className='account-status ok';await api.signOut()}catch(e){recoveryStatus.textContent=humanError(e);recoveryStatus.className='account-status error'}finally{recoverySubmit.disabled=false}})
    }else{
      showAuth(mode);
      loadDashboard();
    }
  }

  // Carousel — truly continuous, user-scrollable and seamless.
  // It starts moving as soon as the page loads, so by the time the section enters view
  // it already feels like a long-running infinite ribbon. The visual order stays 1 → 6 → 1.
  const track=document.querySelector('.showcase-track');
  const slides=track?[...track.querySelectorAll('.showcase-slide')]:[];
  let carouselRAF=0,carouselPauseUntil=0,lastCarouselFrame=0,carouselCycleWidth=0,carouselCycleStart=0,carouselNormalizing=false;
  const carouselEpoch=Date.now();
  const pauseCarousel=(ms=1200)=>{carouselPauseUntil=Math.max(carouselPauseUntil,performance.now()+ms)};
  const markLoopCopies=(nodes)=>nodes.forEach((node,i)=>{node.classList.add('carousel-clone');node.setAttribute('aria-hidden','true');node.dataset.loopIndex=String(i)});
  const updateCarouselActive=()=>{
    if(!track||!slides.length)return;
    const all=[...track.querySelectorAll('.showcase-slide')];
    const center=track.scrollLeft+track.clientWidth/2;
    let nearest=null,best=Infinity;
    all.forEach(sl=>{const d=Math.abs(sl.offsetLeft+sl.clientWidth/2-center);if(d<best){best=d;nearest=sl}});
    const idx=nearest?.classList.contains('carousel-clone')?Number(nearest.dataset.loopIndex):slides.indexOf(nearest);
    all.forEach(sl=>sl.classList.remove('active'));
    if(Number.isFinite(idx)&&idx>=0){
      slides[idx]?.classList.add('active');
      track.querySelectorAll(`.carousel-clone[data-loop-index="${idx}"]`).forEach(sl=>sl.classList.add('active'));
    }
  };
  const normalizeCarousel=()=>{
    if(!track||!carouselCycleWidth||carouselNormalizing)return;
    let x=track.scrollLeft;
    if(x<carouselCycleStart){
      carouselNormalizing=true;
      while(x<carouselCycleStart)x+=carouselCycleWidth;
      track.scrollLeft=x;
      carouselNormalizing=false;
    }else if(x>=carouselCycleStart+carouselCycleWidth){
      carouselNormalizing=true;
      while(x>=carouselCycleStart+carouselCycleWidth)x-=carouselCycleWidth;
      track.scrollLeft=x;
      carouselNormalizing=false;
    }
  };
  const setupCarouselLoop=()=>{
    if(!track||!slides.length)return;
    track.querySelectorAll('.carousel-clone').forEach(n=>n.remove());
    const before=slides.map(sl=>sl.cloneNode(true)),after=slides.map(sl=>sl.cloneNode(true));
    markLoopCopies(before);markLoopCopies(after);
    const beforeFrag=document.createDocumentFragment(),afterFrag=document.createDocumentFragment();
    before.forEach(n=>beforeFrag.appendChild(n));after.forEach(n=>afterFrag.appendChild(n));
    track.insertBefore(beforeFrag,slides[0]);
    track.appendChild(afterFrag);
    requestAnimationFrame(()=>{
      const afterFirst=after[0];
      carouselCycleStart=slides[0].offsetLeft;
      carouselCycleWidth=afterFirst.offsetLeft-carouselCycleStart;
      // Begin at a real phase inside the loop instead of always looking freshly reset.
      const nominalSpeed=180;
      const phase=((Date.now()-carouselEpoch)/1000*nominalSpeed)%Math.max(1,carouselCycleWidth);
      track.scrollLeft=carouselCycleStart+phase;
      updateCarouselActive();
      lastCarouselFrame=performance.now();
    });
  };
  if(track&&slides.length){
    setupCarouselLoop();
    const glide=now=>{
      if(!lastCarouselFrame)lastCarouselFrame=now;
      const dt=Math.min(24,Math.max(0,now-lastCarouselFrame));
      lastCarouselFrame=now;
      if(!document.hidden&&now>=carouselPauseUntil&&!carouselNormalizing&&carouselCycleWidth){
        // Moving toward increasing scrollLeft keeps the visible sequence 1 → 2 → ... → 6.
        // The higher speed makes the drift clearly visible without looking like slide-by-slide autoplay.
        const speed=180;
        track.scrollLeft+=speed*dt/1000;
        normalizeCarousel();
      }
      updateCarouselActive();
      carouselRAF=requestAnimationFrame(glide);
    };
    ['pointerdown','touchstart','wheel'].forEach(ev=>track.addEventListener(ev,()=>pauseCarousel(ev==='wheel'?850:1500),{passive:true}));
    ['pointerup','touchend','pointercancel'].forEach(ev=>track.addEventListener(ev,()=>pauseCarousel(650),{passive:true}));
    track.addEventListener('scroll',()=>{normalizeCarousel();updateCarouselActive()},{passive:true});
    track.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight')pauseCarousel(950)});
    window.addEventListener('resize',()=>{pauseCarousel(350);setupCarouselLoop()});
    carouselRAF=requestAnimationFrame(glide);
  }
  // Screenshot lightbox — lets mobile users inspect the real UI without cropping
  const lightbox=document.querySelector('#image-lightbox'),lightboxImg=document.querySelector('#image-lightbox-img'),lightboxCaption=document.querySelector('#image-lightbox-caption');
  function openLightbox(slide){if(!lightbox||!lightboxImg||!slide)return;const img=slide.querySelector('.slide-image img');if(!img)return;lightboxImg.src=img.currentSrc||img.src;lightboxImg.alt=img.alt||'';if(lightboxCaption)lightboxCaption.textContent=slide.querySelector('.slide-caption h3')?.textContent||'';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
  function closeLightbox(){if(!lightbox)return;lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');if(!modal?.classList.contains('open'))document.body.style.overflow=''}
  slides.forEach(slide=>{const frame=slide.querySelector('.slide-image');if(!frame)return;const zoom=document.createElement('button');zoom.type='button';zoom.className='slide-zoom';zoom.textContent='↗';zoom.setAttribute('aria-label',t('zoomScreenshot')||'Enlarge screenshot');zoom.title=t('zoomScreenshot')||'Enlarge screenshot';zoom.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();openLightbox(slide)});frame.appendChild(zoom);frame.addEventListener('dblclick',()=>openLightbox(slide))});
  document.querySelectorAll('[data-lightbox-close]').forEach(b=>b.addEventListener('click',closeLightbox));lightbox?.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});

  const workflow=document.querySelector('#workflow-path');if(workflow&&'IntersectionObserver'in window)new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.25}).observe(workflow);

  // Demo
  let contextMarker=null;
  const demo=document.querySelector('#breakout-demo');if(demo){
    const timeline=document.querySelector('#timeline-demo'),tracksEl=document.querySelector('#timeline-tracks'),playhead=document.querySelector('#demo-playhead'),clock=document.querySelector('#demo-clock'),captureTime=document.querySelector('#capture-time'),captureFill=document.querySelector('#capture-progress-fill'),replayFill=document.querySelector('#replay-progress-fill'),replayEmpty=document.querySelector('#replay-empty'),replayInfo=document.querySelector('#replay-info'),replayName=document.querySelector('#replay-name'),replayTime=document.querySelector('#replay-time'),replayStage=document.querySelector('#replay-stage'),codingButtons=[...document.querySelectorAll('.coding-btn')],context=document.querySelector('#demo-context'),toast=document.querySelector('#demo-toast');
    const buttonsPane=demo.querySelector('.buttons-pane');function fitDemoButtonLabels(){if(!buttonsPane)return;const w=buttonsPane.getBoundingClientRect().width;const title=w<300?7.2:w<380?8.2:w<480?9.2:10.2;const sub=w<300?5.2:w<380?5.7:6.3;const count=w<300?5.0:6.0;buttonsPane.style.setProperty('--demo-button-title-size',`${title}px`);buttonsPane.style.setProperty('--demo-button-sub-size',`${sub}px`);buttonsPane.style.setProperty('--demo-button-count-size',`${count}px`)}fitDemoButtonLabels();if('ResizeObserver'in window&&buttonsPane)new ResizeObserver(fitDemoButtonLabels).observe(buttonsPane);
    let demoSeconds=23*60+54,windowStart=23*60+30,windowDuration=40,lastTick=performance.now(),selectedMarker=null,replayTimer=null,toastTimer=null;const running=new Map();
    function format(sec){sec=Math.max(0,Math.round(sec));return`${String(Math.floor(sec/60)).padStart(2,'0')}:${String(sec%60).padStart(2,'0')}`}
    function currentPct(){return Math.max(4,Math.min(96,((demoSeconds-windowStart)/windowDuration)*100))}
    function updateClock(){const p=currentPct();clock.textContent=format(demoSeconds);captureTime.textContent=`00:${format(demoSeconds)} / 01:33:17`;captureFill.style.width=`${Math.min(100,26+p*.12)}%`;playhead.style.left=`calc(72px + (100% - 72px) * ${p/100})`;running.forEach(({marker,startPct})=>{const end=currentPct();setMarkerGeometry(marker,startPct,Math.max(2,end-startPct))})}
    function tick(now){const dt=(now-lastTick)/1000;lastTick=now;demoSeconds+=dt*.42;if(demoSeconds>windowStart+windowDuration-1)demoSeconds=windowStart+4;updateClock();requestAnimationFrame(tick)}requestAnimationFrame(tick);
    function trackSurface(name){return document.querySelector(`.demo-track[data-track="${CSS.escape(name)}"] .track-surface`)}
    function setMarkerGeometry(marker,left,width){marker.dataset.left=String(Math.max(0,Math.min(98,left)));marker.dataset.width=String(Math.max(1.5,Math.min(100-Number(marker.dataset.left),width)));marker.style.left=`${marker.dataset.left}%`;marker.style.width=`${marker.dataset.width}%`}
    function createMarker({name,track,color,left=currentPct()-7,width=14,runningMode=false}){const surface=trackSurface(track)||trackSurface('hit');const marker=document.createElement('div');marker.className='demo-marker'+(runningMode?' running':'');marker.dataset.name=name;marker.dataset.track=track;marker.dataset.color=color;marker.style.background=color;marker.innerHTML=`<span class="marker-title">${esc(name)}</span><i class="marker-handle left"></i><i class="marker-handle right"></i>`;setMarkerGeometry(marker,left,width);surface.appendChild(marker);wireMarker(marker);selectMarker(marker,true);return marker}
    function selectMarker(marker,play=false){document.querySelectorAll('.demo-marker.selected').forEach(m=>m.classList.remove('selected'));selectedMarker=marker;if(!marker)return;marker.classList.add('selected');if(play)playReplay(marker)}
    function playReplay(marker){replayEmpty.style.display='none';replayInfo.classList.add('visible');replayName.textContent=marker.dataset.name;replayTime.textContent=`00:${format(windowStart+(Number(marker.dataset.left)+Number(marker.dataset.width)/2)/100*windowDuration)}`;replayInfo.querySelector('.replay-event-color').style.background=marker.dataset.color;replayStage.querySelector('img').animate([{transform:'scale(1.015)'},{transform:'scale(1.05)'},{transform:'scale(1.015)'}],{duration:2600,easing:'linear'});clearInterval(replayTimer);let p=0;replayFill.style.width='0%';replayTimer=setInterval(()=>{p+=4;replayFill.style.width=`${p}%`;if(p>=100)clearInterval(replayTimer)},100)}
    function wireMarker(marker){let drag=null;marker.addEventListener('pointerdown',e=>{if(e.button!==0)return;hideContext();const handle=e.target.closest('.marker-handle');const surface=marker.parentElement;const rect=surface.getBoundingClientRect();if(handle){e.preventDefault();e.stopPropagation();drag={type:handle.classList.contains('left')?'left':'right',startX:e.clientX,left:Number(marker.dataset.left),width:Number(marker.dataset.width),rect};marker.setPointerCapture(e.pointerId);selectMarker(marker,false)}else if(e.metaKey||e.ctrlKey){e.preventDefault();drag={type:'moveTrack',startY:e.clientY};marker.setPointerCapture(e.pointerId);selectMarker(marker,false)}else selectMarker(marker,true)});marker.addEventListener('pointermove',e=>{if(!drag)return;if(drag.type==='left'||drag.type==='right'){const delta=(e.clientX-drag.startX)/drag.rect.width*100;if(drag.type==='left'){const nl=Math.max(0,Math.min(drag.left+drag.width-2,drag.left+delta));setMarkerGeometry(marker,nl,drag.width+(drag.left-nl))}else setMarkerGeometry(marker,drag.left,Math.max(2,drag.width+delta))}});marker.addEventListener('pointerup',e=>{if(!drag)return;if(drag.type==='moveTrack'){const el=document.elementFromPoint(e.clientX,e.clientY)?.closest('.demo-track');if(el){const target=el.querySelector('.track-surface');target.appendChild(marker);marker.dataset.track=el.dataset.track}}drag=null});marker.addEventListener('contextmenu',e=>{e.preventDefault();selectMarker(marker,false);showContext(marker,e.clientX,e.clientY)})}
    codingButtons.forEach(btn=>btn.addEventListener('click',()=>{const mode=btn.dataset.mode,name=btn.dataset.name,trackName=btn.dataset.track,color=btn.dataset.color,countEl=btn.querySelector('.coding-count');if(mode==='pressAndRelease'){if(running.has(btn)){const data=running.get(btn);data.marker.classList.remove('running');running.delete(btn);btn.classList.remove('active');selectMarker(data.marker,true)}else{const start=currentPct();const marker=createMarker({name,track:trackName,color,left:start,width:2,runningMode:true});running.set(btn,{marker,startPct:start});btn.classList.add('active');if(countEl){const n=(Number(btn.dataset.count)||0)+1;btn.dataset.count=String(n);countEl.textContent=String(n)}}}else{createMarker({name,track:trackName,color,left:currentPct()-8,width:16});if(countEl){const n=(Number(btn.dataset.count)||0)+1;btn.dataset.count=String(n);countEl.textContent=String(n)}}}));
    // Seed a professional-looking hockey coding timeline
    [
      ['GOAL +','goal_for','#43c83f',10,5],['GOAL -','goal_against','#df4d45',78,4],
      ['SOG +','sog_for','#43c83f',18,3],['SOG -','sog_against','#df4d45',65,3],
      ['PP','pp','#43c83f',45,13],['PK','pk','#df4d45',70,9],
      ['FO +','fo_win','#43c83f',27,3],['FO -','fo_loss','#df4d45',56,3],
      ['OZ ENTRY','oz_entry','#43c83f',34,5],['DZ EXIT','dz_exit','#43c83f',16,6],
      ['BREAKOUT','breakout','#3f78a7',12,12],['FORCHECK','forcheck','#3f78a7',51,14],
      ['NZ REGROUP','nz_regroup','#3f78a7',38,10],['TK','takeaway','#43c83f',60,3],
      ['GV','giveaway','#df4d45',72,3],['HIT','hit','#3f78a7',41,4],
      ['BLK','block','#43c83f',83,3],['PEN','penalty','#df4d45',88,4]
    ].forEach(([name,track,color,left,width])=>createMarker({name,track,color,left,width}));
    selectMarker(null,false);replayEmpty.style.display='grid';replayInfo.classList.remove('visible');
    function showContext(marker,x,y){contextMarker=marker;updateContextStarLabel();context.classList.add('open');context.setAttribute('aria-hidden','false');const w=220,h=250;context.style.left=`${Math.min(x,innerWidth-w-10)}px`;context.style.top=`${Math.min(y,innerHeight-h-10)}px`}
    function hideContext(){context?.classList.remove('open');context?.setAttribute('aria-hidden','true');contextMarker=null}window.addEventListener('pointerdown',e=>{if(context?.classList.contains('open')&&!context.contains(e.target))hideContext()});
    function showToast(key){if(!toast)return;toast.textContent=t(key)||key;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2300)}
    context?.addEventListener('click',e=>{const b=e.target.closest('button[data-menu]');if(!b||!contextMarker)return;const action=b.dataset.menu;if(action==='delete'){contextMarker.remove();selectedMarker=null;replayInfo.classList.remove('visible');replayEmpty.style.display='grid'}else if(action==='star'){contextMarker.classList.toggle('starred')}else if(action==='export')showToast('demoToastExport');else if(action==='composer')showToast('demoToastComposer');else if(action==='share')showToast('demoToastShare');else if(action==='details')showToast('demoToastDetails');hideContext()});
    function splitDrag(el,axis){el?.addEventListener('pointerdown',e=>{if(innerWidth<760)return;e.preventDefault();el.classList.add('dragging');el.setPointerCapture(e.pointerId);const grid=demo.querySelector('.demo-grid'),r=grid.getBoundingClientRect();const move=ev=>{if(axis==='x'){const pct=(ev.clientX-r.left)/r.width*100;demo.style.setProperty('--split-x',`${Math.max(52,Math.min(76,pct))}%`);fitDemoButtonLabels()}else{const pct=(ev.clientY-r.top)/r.height*100;demo.style.setProperty('--split-y',`${Math.max(42,Math.min(72,pct))}%`)}};const up=()=>{el.classList.remove('dragging');el.removeEventListener('pointermove',move);el.removeEventListener('pointerup',up)};el.addEventListener('pointermove',move);el.addEventListener('pointerup',up)})}splitDrag(document.querySelector('#splitter-x'),'x');splitDrag(document.querySelector('#splitter-y'),'y');
  }
  function updateContextStarLabel(){const btn=document.querySelector('[data-menu="star"]');if(!btn)return;const starred=contextMarker?.classList.contains('starred');btn.textContent=t(starred?'ctxUnstar':'ctxStar')||(starred?'Убрать звёздочку':'Поставить звёздочку')}


  // Mobile: preserve the real 2×2 BreakOut layout and scale the whole demo as one object.
  function fitMobileDemo(){
    if(document.querySelector('.hero-demo .demo-laptop-stage')) return;
    const wrap=document.querySelector('.hero-demo .demo-shell-wrap');
    const app=document.querySelector('.hero-demo .demo-app');
    if(!wrap||!app)return;
    if(window.innerWidth<=760){
      const baseWidth=1180;
      app.style.width=baseWidth+'px';
      app.style.transform='none';
      app.style.transformOrigin='top left';
      requestAnimationFrame(()=>{
        const scale=Math.min(1,wrap.clientWidth/baseWidth);
        const baseHeight=app.offsetHeight;
        app.style.transform=`scale(${scale})`;
        wrap.style.height=Math.ceil(baseHeight*scale)+'px';
      });
    }else{
      app.style.width='';
      app.style.transform='';
      app.style.transformOrigin='';
      wrap.style.height='';
    }
  }
  window.addEventListener('resize',fitMobileDemo,{passive:true});
  window.addEventListener('orientationchange',()=>setTimeout(fitMobileDemo,80),{passive:true});

  applyLanguage();
  fitMobileDemo();
})();

/* v53 — viewport-aware capabilities micro-animations */
(()=>{
  const section=document.querySelector('#features');
  if(!section)return;
  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cards=[...section.querySelectorAll('.capability-card')];
  if(reduce){cards.forEach(c=>c.classList.add('is-visible'));return;}

  if('IntersectionObserver' in window){
    const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');reveal.unobserve(entry.target)}
    }),{threshold:.16,rootMargin:'0px 0px -4% 0px'});
    cards.forEach(card=>reveal.observe(card));
  }else cards.forEach(c=>c.classList.add('is-visible'));

  // Replay time follows the six-second visual playhead.
  const replayCard=section.querySelector('.replay-ui')?.closest('.capability-card');
  const replayTime=section.querySelector('.replay-preview small');
  let replayTimer=null,replaySecond=0;
  const startReplay=()=>{if(replayTimer||!replayTime)return; replaySecond=0; replayTime.textContent='00:12:03'; replayTimer=setInterval(()=>{replaySecond=(replaySecond+1)%6;replayTime.textContent=`00:12:${String(3+replaySecond).padStart(2,'0')}`},1000)};
  const stopReplay=()=>{if(replayTimer){clearInterval(replayTimer);replayTimer=null}};

  // Scoreboard: animate the existing game-clock and PP-clock positions without adding badges.
  const scoreboardCard=section.querySelector('.scoreboard-reference-ui')?.closest('.capability-card');
  const scoreboardGame=section.querySelector('.scoreboard-main-time');
  const scoreboardPP=section.querySelector('.scoreboard-pp-time');
  let scoreboardTimer=null,gameLeft=20*60,ppLeft=5*60;
  const fmtClock=(value)=>`${String(Math.floor(value/60)).padStart(2,'0')}:${String(value%60).padStart(2,'0')}`;
  const renderScore=()=>{if(scoreboardGame)scoreboardGame.textContent=fmtClock(gameLeft);if(scoreboardPP)scoreboardPP.textContent=fmtClock(ppLeft)};
  const startScore=()=>{if(scoreboardTimer||(!scoreboardGame&&!scoreboardPP))return;renderScore();scoreboardTimer=setInterval(()=>{gameLeft--;ppLeft--;if(gameLeft<0)gameLeft=20*60;if(ppLeft<0)ppLeft=5*60;renderScore()},1000)};
  const stopScore=()=>{if(scoreboardTimer){clearInterval(scoreboardTimer);scoreboardTimer=null}};

  // Composer: swap neighbouring rows with FLIP so the list genuinely rearranges.
  const composer=section.querySelector('.composer-ui');
  const composerCard=composer?.closest('.capability-card');
  let composerTimer=null,composerStep=0;
  function flipSwap(a,b){
    if(!a||!b||!composer)return;
    const first=new Map([...composer.children].map(el=>[el,el.getBoundingClientRect()]));
    const marker=document.createComment('swap');a.before(marker);b.before(a);marker.replaceWith(b);
    [...composer.children].forEach(el=>{const old=first.get(el),now=el.getBoundingClientRect();if(!old)return;const dy=old.top-now.top;el.style.transition='none';el.style.transform=`translateY(${dy}px)`;el.classList.add('is-moving');requestAnimationFrame(()=>requestAnimationFrame(()=>{el.style.transition='';el.style.transform='';setTimeout(()=>el.classList.remove('is-moving'),620)}))});
  }
  const composerPairs=[[0,1],[2,3],[3,4],[0,2],[1,4],[0,3],[1,2],[2,4]];
  const startComposer=()=>{if(composerTimer||!composer)return;composerTimer=setInterval(()=>{const rows=[...composer.children];if(rows.length<5)return;const pair=composerPairs[composerStep++%composerPairs.length];flipSwap(rows[pair[0]],rows[pair[1]])},1650)};
  const stopComposer=()=>{if(composerTimer){clearInterval(composerTimer);composerTimer=null}};

  if('IntersectionObserver' in window){
    const activeObs=new IntersectionObserver(entries=>entries.forEach(e=>{
      const on=e.isIntersecting&&e.intersectionRatio>.18;
      if(e.target===replayCard)(on?startReplay:stopReplay)();
      if(e.target===scoreboardCard)(on?startScore:stopScore)();
      if(e.target===composerCard)(on?startComposer:stopComposer)();
    }),{threshold:[0,.2,.6]});
    [replayCard,scoreboardCard,composerCard].filter(Boolean).forEach(el=>activeObs.observe(el));
  }else{startReplay();startScore();startComposer()}

  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){stopReplay();stopScore();stopComposer()}
    else{
      if(replayCard?.getBoundingClientRect().top<innerHeight&&replayCard.getBoundingClientRect().bottom>0)startReplay();
      if(scoreboardCard?.getBoundingClientRect().top<innerHeight&&scoreboardCard.getBoundingClientRect().bottom>0)startScore();
      if(composerCard?.getBoundingClientRect().top<innerHeight&&composerCard.getBoundingClientRect().bottom>0)startComposer();
    }
  });
})();

/* v56 — page progress, whole-page reveal, localized prices */
(()=>{
  const progress=document.querySelector('.page-scroll-progress i');
  let progressTarget=0,progressVisual=0,progressRAF=0;
  const sampleProgress=()=>{const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);progressTarget=Math.max(0,Math.min(1,scrollY/max));if(!progressRAF)progressRAF=requestAnimationFrame(renderProgress)};
  function renderProgress(){progressVisual+=(progressTarget-progressVisual)*.16;if(progress)progress.style.transform=`scaleX(${progressVisual})`;if(Math.abs(progressTarget-progressVisual)>.0006)progressRAF=requestAnimationFrame(renderProgress);else{progressVisual=progressTarget;if(progress)progress.style.transform=`scaleX(${progressVisual})`;progressRAF=0}}
  addEventListener('scroll',sampleProgress,{passive:true});addEventListener('resize',sampleProgress,{passive:true});sampleProgress();

  const sections=[...document.querySelectorAll('main>section:not(.hero-demo)')];
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)sections.forEach(s=>s.classList.add('bo-revealed'));
  else if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('bo-revealed');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -6% 0px'});sections.forEach(s=>io.observe(s))}else sections.forEach(s=>s.classList.add('bo-revealed'));

  const syncPrices=()=>document.querySelectorAll('[data-price-ru]').forEach(el=>{el.textContent=(document.documentElement.lang||'ru').toLowerCase().startsWith('en')?el.dataset.priceEn:el.dataset.priceRu});
  syncPrices();
  const langObs=new MutationObserver(syncPrices);langObs.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();



  // Mobile pricing period tabs: visual navigation to the access plan cards.
  const priceTabs=[...document.querySelectorAll('[data-price-tab]')];
  const priceCards=[...document.querySelectorAll('#pricing .price-card')];
  priceTabs.forEach(tab=>tab.addEventListener('click',()=>{
    const i=Number(tab.dataset.priceTab)||0;
    priceTabs.forEach((b,n)=>b.classList.toggle('active',n===i));
    priceCards[i]?.scrollIntoView({behavior:'smooth',block:'center'});
  }));

/* v57 — stable laptop fitting + low-overhead automatic pane demonstration. */
(()=>{
  const stage=document.querySelector('.demo-laptop-stage');
  const wrap=stage?.querySelector('.demo-shell-wrap');
  const app=stage?.querySelector('.demo-app');
  if(!stage||!wrap||!app)return;

  function fitLaptopDemo(){
    const baseW=1180,baseH=760;
    app.style.setProperty('width',baseW+'px','important');
    app.style.setProperty('height',baseH+'px','important');
    app.style.setProperty('max-width','none','important');
    app.style.setProperty('position','absolute','important');
    app.style.setProperty('left','50%','important');
    app.style.setProperty('top','50%','important');
    app.style.setProperty('transform-origin','center center','important');
    const scale=Math.min(wrap.clientWidth/baseW,wrap.clientHeight/baseH);
    app.style.setProperty('transform',`translate(-50%,-50%) scale(${scale})`,'important');
  }
  let fitRAF=0;
  const scheduleFit=()=>{cancelAnimationFrame(fitRAF);fitRAF=requestAnimationFrame(fitLaptopDemo)};
  addEventListener('resize',scheduleFit,{passive:true});
  addEventListener('orientationchange',()=>setTimeout(scheduleFit,100),{passive:true});
  scheduleFit();

  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  // Animate the shared split variables directly. The panes, splitters and center knob
  // therefore travel together instead of showing a dark separator racing ahead.
  const grid=app.querySelector('.demo-grid');
  if(grid)grid.style.transition='none';
  const steps=[[58,58],[55.5,58],[60.5,58],[58,58],[58,55.5],[58,60.5],[58,58]];
  let active=true,step=0,timer=0,driftRAF=0,currentX=58,currentY=58;
  const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
  const animateSplit=(tx,ty,duration=720)=>{
    cancelAnimationFrame(driftRAF);
    const sx=currentX,sy=currentY,start=performance.now();
    const frame=now=>{
      if(!active)return;
      const p=Math.min(1,(now-start)/duration),e=ease(p);
      currentX=sx+(tx-sx)*e; currentY=sy+(ty-sy)*e;
      app.style.setProperty('--split-x',currentX.toFixed(3)+'%');
      app.style.setProperty('--split-y',currentY.toFixed(3)+'%');
      if(p<1)driftRAF=requestAnimationFrame(frame);
    };
    driftRAF=requestAnimationFrame(frame);
  };
  stage.classList.add('demo-auto-drift');
  const tick=()=>{
    if(!active)return;
    const [x,y]=steps[step++%steps.length];
    animateSplit(x,y);
    timer=setTimeout(tick,1750);
  };
  timer=setTimeout(tick,900);
  const stopAuto=()=>{
    if(!active)return;
    active=false;
    clearTimeout(timer);
    cancelAnimationFrame(driftRAF);
    stage.classList.remove('demo-auto-drift');
  };
  ['pointerdown','touchstart','keydown','wheel'].forEach(type=>stage.addEventListener(type,stopAuto,{passive:true,once:true}));
})();
