"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type SupportedLocale = "ru" | "en" | "zh";

type Dictionary = Record<string, string>;

type LocaleContextValue = {
  locale: SupportedLocale;
  t: (key: string) => string;
  setLocale: (locale: SupportedLocale) => void;
};

const defaultLocale: SupportedLocale = "ru";

const ru: Dictionary = {
  "nav.about": "О компании",
  "nav.support": "Поддержка",
  "nav.homepage": "Главная",
  "hero.title": "Грузовые перевозки по СНГ и Азии",
  "hero.subtitle": "Авто перевозки, таможенное оформление, склад и фулфилмент. Надёжно, прозрачно, вовремя.",
  "process.heading": "Как мы работаем",
  "process.step1.label": "Шаг 1",
  "process.step1.title": "Оформление заказа",
  "process.step1.text": "Оставьте заявку с параметрами груза и контактами.",
  "process.calc.title": "Расчёт",
  "process.calc.text": "Подбираем маршрут, сроки и стоимость.",
  "process.docs.title": "Оформление документов",
  "process.docs.text": "Договор, страхование, таможенные бумаги.",
  "process.delivery.title": "Доставка",
  "process.delivery.text": "Контроль на всех этапах до двери получателя.",
  "process.support.title": "Поддержка 24/7",
  "process.support.text": "Отчёты, консультации и оперативная помощь.",
  "process.cta": "Заказать расчёт",
};

const en: Dictionary = {
  "nav.about": "About",
  "nav.support": "Support",
  "nav.homepage": "Home",
  "hero.title": "Cargo transportation across CIS and Asia",
  "hero.subtitle": "Trucking, customs clearance, warehousing and fulfillment. Reliable, transparent, on time.",
  "process.heading": "How we work",
  "process.step1.label": "Step 1",
  "process.step1.title": "Place an order",
  "process.step1.text": "Send a request with cargo details and contacts.",
  "process.calc.title": "Estimation",
  "process.calc.text": "We choose route, timing and cost.",
  "process.docs.title": "Documents",
  "process.docs.text": "Contract, insurance, customs paperwork.",
  "process.delivery.title": "Delivery",
  "process.delivery.text": "Control at all stages up to the recipient's door.",
  "process.support.title": "Support 24/7",
  "process.support.text": "Reports, consultations and instant help.",
  "process.cta": "Request a quote",
};

const zh: Dictionary = {
  "nav.about": "关于我们",
  "nav.support": "支持",
  "nav.homepage": "首页",
  "hero.title": "覆盖独联体与亚洲的货运",
  "hero.subtitle": "公路运输、清关、仓储与履约。可靠、透明、准时。",
  "process.heading": "我们的流程",
  "process.step1.label": "步骤 1",
  "process.step1.title": "下单",
  "process.step1.text": "提交货物参数与联系方式。",
  "process.calc.title": "报价",
  "process.calc.text": "选择路线、时效与成本。",
  "process.docs.title": "单证",
  "process.docs.text": "合同、保险、海关文件。",
  "process.delivery.title": "配送",
  "process.delivery.text": "全程节点把控直至门到门。",
  "process.support.title": "7x24 支持",
  "process.support.text": "报告、咨询与及时协助。",
  "process.cta": "获取报价",
};

// Extend dictionaries with Benefits
const extend = (base: Dictionary, extra: Dictionary) => Object.assign(base, extra);

extend(ru, {
  "benefits.heading": "Преимущества работы с нами",
  "benefits.postpay.title": "Постоплата",
  "benefits.postpay.desc": "Оплачивайте услуги после доставки груза. Никаких предоплат и рисков.",
  "benefits.postpay.details": "Полная гарантия качества до оплаты",
  "benefits.quality.title": "Лучшее качество",
  "benefits.quality.desc": "Европейские тягачи, профессиональные водители, современная техника.",
  "benefits.quality.details": "Сертифицированное оборудование и персонал",
  "benefits.speed.title": "Скорость доставки",
  "benefits.speed.desc": "Оптимальные маршруты, минимальные простои, быстрая обработка заказов.",
  "benefits.speed.details": "Средняя скорость доставки 24-48 часов",
  "benefits.cashless.title": "Безналичная оплата",
  "benefits.cashless.desc": "Удобные способы оплаты: банковский перевод, карта, электронные платежи.",
  "benefits.cashless.details": "Все виды безналичных расчетов",
  "benefits.tracking.title": "Отслеживание груза",
  "benefits.tracking.desc": "Полный контроль в реальном времени: GPS-трекинг, уведомления о статусах.",
  "benefits.tracking.details": "GPS-мониторинг 24/7",
  "benefits.support.title": "Поддержка 24/7",
  "benefits.support.desc": "Круглосуточная поддержка клиентов. Мы всегда на связи для решения ваших вопросов.",
  "benefits.support.details": "Онлайн-чат, телефон, email",
});

extend(en, {
  "benefits.heading": "Why choose us",
  "benefits.postpay.title": "Postpay",
  "benefits.postpay.desc": "Pay after delivery. No upfront risks.",
  "benefits.postpay.details": "Quality guaranteed before payment",
  "benefits.quality.title": "Top quality",
  "benefits.quality.desc": "European tractors, pro drivers, modern fleet.",
  "benefits.quality.details": "Certified equipment and staff",
  "benefits.speed.title": "Fast delivery",
  "benefits.speed.desc": "Optimal routes, minimal idle, quick processing.",
  "benefits.speed.details": "Average 24–48h delivery",
  "benefits.cashless.title": "Cashless payment",
  "benefits.cashless.desc": "Bank transfer, cards, e-payments.",
  "benefits.cashless.details": "All cashless methods",
  "benefits.tracking.title": "Cargo tracking",
  "benefits.tracking.desc": "Realtime GPS, status notifications.",
  "benefits.tracking.details": "24/7 GPS monitoring",
  "benefits.support.title": "Support 24/7",
  "benefits.support.desc": "Round-the-clock customer support.",
  "benefits.support.details": "Chat, phone, email",
});

extend(zh, {
  "benefits.heading": "我们的优势",
  "benefits.postpay.title": "收货后付款",
  "benefits.postpay.desc": "货到再付，无需预付无风险。",
  "benefits.postpay.details": "付款前质量有保障",
  "benefits.quality.title": "高品质",
  "benefits.quality.desc": "欧洲牵引车、专业司机、现代车队。",
  "benefits.quality.details": "认证设备与人员",
  "benefits.speed.title": "快速配送",
  "benefits.speed.desc": "最优路线、最少停滞、快速处理。",
  "benefits.speed.details": "平均 24–48 小时送达",
  "benefits.cashless.title": "无现金支付",
  "benefits.cashless.desc": "银行转账、银行卡、电子支付。",
  "benefits.cashless.details": "支持多种无现金方式",
  "benefits.tracking.title": "货物跟踪",
  "benefits.tracking.desc": "实时 GPS 与状态通知。",
  "benefits.tracking.details": "7x24 GPS 监控",
  "benefits.support.title": "7x24 支持",
  "benefits.support.desc": "全天候客户支持。",
  "benefits.support.details": "聊天、电话、邮箱",
});

extend(ru, { "footer.policy": "Политика конфиденциальности", "footer.terms": "Условия пользования" });
extend(en, { "footer.policy": "Privacy Policy", "footer.terms": "Terms of Use" });
extend(zh, { "footer.policy": "隐私政策", "footer.terms": "使用条款" });

// Contact Cards
extend(ru, { 
  "contact.title": "Свяжитесь с нами",
  "contact.phone": "Телефон",
  "contact.phoneDescription": "Звоните в любое время",
  "contact.whatsappDescription": "Быстрые сообщения",
  "contact.telegramDescription": "Онлайн поддержка",
  "contact.workingHours": "Рабочие часы: 09:00–20:00 (GMT+6)"
});
extend(en, { 
  "contact.title": "Contact Us",
  "contact.phone": "Phone",
  "contact.phoneDescription": "Call anytime",
  "contact.whatsappDescription": "Quick messages",
  "contact.telegramDescription": "Online support",
  "contact.workingHours": "Working hours: 09:00–20:00 (GMT+6)"
});
extend(zh, { 
  "contact.title": "联系我们",
  "contact.phone": "电话",
  "contact.phoneDescription": "随时致电",
  "contact.whatsappDescription": "快速消息",
  "contact.telegramDescription": "在线支持",
  "contact.workingHours": "工作时间：09:00–20:00 (GMT+6)"
});

// Contacts Page
extend(ru, { 
  "contacts.hero.title": "Контакты TuoTuoKz",
  "contacts.hero.subtitle": "Всегда на связи с вами",
  "contacts.office.title": "Головной офис",
  "contacts.office.address": "Адрес",
  "contacts.office.addressValue": "Казахстан, г. Алматы, ул. Достык, 140, БЦ \"Кен Дала\", офис 205",
  "contacts.office.phone": "Общий телефон",
  "contacts.office.sales": "Отдел продаж",
  "contacts.office.support": "Техническая поддержка",
  "contacts.office.hours": "Время работы",
  "contacts.office.hoursValue": "Пн-Пт: 9:00-18:00, Сб-Вс: выходной",
  "contacts.social.title": "Мы в социальных сетях",
  "contacts.representations.title": "Наши представительства",
  "contacts.map.placeholder": "Интерактивная карта",
  "contacts.form.title": "Напишите нам"
});
extend(en, { 
  "contacts.hero.title": "TuoTuoKz Contacts",
  "contacts.hero.subtitle": "Always in touch with you",
  "contacts.office.title": "Head Office",
  "contacts.office.address": "Address",
  "contacts.office.addressValue": "Kazakhstan, Almaty, Dostyk St, 140, \"Ken Dala\" Business Center, office 205",
  "contacts.office.phone": "General Phone",
  "contacts.office.sales": "Sales Department",
  "contacts.office.support": "Technical Support",
  "contacts.office.hours": "Working Hours",
  "contacts.office.hoursValue": "Mon-Fri: 9:00-18:00, Sat-Sun: closed",
  "contacts.social.title": "We are on social networks",
  "contacts.representations.title": "Our Representations",
  "contacts.map.placeholder": "Interactive Map",
  "contacts.form.title": "Write to us"
});
extend(zh, { 
  "contacts.hero.title": "TuoTuoKz 联系方式",
  "contacts.hero.subtitle": "始终与您保持联系",
  "contacts.office.title": "总部",
  "contacts.office.address": "地址",
  "contacts.office.addressValue": "哈萨克斯坦，阿拉木图，多斯特克街140号，\"肯达拉\"商务中心205室",
  "contacts.office.phone": "总机",
  "contacts.office.sales": "销售部",
  "contacts.office.support": "技术支持",
  "contacts.office.hours": "工作时间",
  "contacts.office.hoursValue": "周一至周五：9:00-18:00，周六日：休息",
  "contacts.social.title": "我们的社交媒体",
  "contacts.representations.title": "我们的代表处",
  "contacts.map.placeholder": "交互式地图",
  "contacts.form.title": "给我们写信"
});

// Testimonials
extend(ru, { "testimonials.heading": "Отзывы клиентов" });
extend(en, { "testimonials.heading": "Customer Reviews" });
extend(zh, { "testimonials.heading": "客户评价" });

// About page
extend(ru, {
  "about.hero.title": "О компании",
  "about.hero.subtitle": "Узнаваемый бренд в сфере логистики. Надёжность, скорость и сервис.",
  "about.values.heading": "Наши ценности",
  "about.values.client.title": "Клиентоориентированность",
  "about.values.client.desc": "Всегда ставим интересы клиента на первое место",
  "about.values.reliability.title": "Надёжность",
  "about.values.reliability.desc": "Выполняем обещания и обеспечиваем сохранность грузов",
  "about.values.innovation.title": "Инновации",
  "about.values.innovation.desc": "Внедряем новые технологии ради качества и скорости",
  "about.values.professionalism.title": "Профессионализм",
  "about.values.professionalism.desc": "Опытная команда, постоянное развитие навыков",
  "about.team.heading": "Наша команда",
  "about.team.ceo.role": "Генеральный директор",
  "about.team.ceo.about": "15+ лет опыта в логистике.",
  "about.team.coo.role": "Директор по операциям",
  "about.team.coo.about": "Эксперт в оптимизации процессов.",
  "about.team.cto.role": "Технический директор",
  "about.team.cto.about": "Внедрение технологий и оснащение.",
  "about.team.sales.role": "Руководитель отдела продаж",
  "about.team.sales.about": "Развитие клиентской базы и партнёрств.",
});

extend(en, {
  "about.hero.title": "About Us",
  "about.hero.subtitle": "Recognized brand in logistics. Reliability, speed and service.",
  "about.values.heading": "Our Values",
  "about.values.client.title": "Customer Focus",
  "about.values.client.desc": "Always put customer interests first",
  "about.values.reliability.title": "Reliability",
  "about.values.reliability.desc": "We keep our promises and ensure cargo safety",
  "about.values.innovation.title": "Innovation",
  "about.values.innovation.desc": "We implement new technologies for quality and speed",
  "about.values.professionalism.title": "Professionalism",
  "about.values.professionalism.desc": "Experienced team, continuous skill development",
  "about.team.heading": "Our Team",
  "about.team.ceo.role": "CEO",
  "about.team.ceo.about": "15+ years of experience in logistics.",
  "about.team.coo.role": "COO",
  "about.team.coo.about": "Expert in process optimization.",
  "about.team.cto.role": "CTO",
  "about.team.cto.about": "Technology implementation and equipment.",
  "about.team.sales.role": "Sales Director",
  "about.team.sales.about": "Client base and partnership development.",
});

extend(zh, {
  "about.hero.title": "关于我们",
  "about.hero.subtitle": "物流行业知名品牌。可靠、快速、服务至上。",
  "about.values.heading": "我们的价值观",
  "about.values.client.title": "客户导向",
  "about.values.client.desc": "始终将客户利益放在首位",
  "about.values.reliability.title": "可靠性",
  "about.values.reliability.desc": "履行承诺，确保货物安全",
  "about.values.innovation.title": "创新",
  "about.values.innovation.desc": "采用新技术提升质量和速度",
  "about.values.professionalism.title": "专业性",
  "about.values.professionalism.desc": "经验丰富的团队，持续技能发展",
  "about.team.heading": "我们的团队",
  "about.team.ceo.role": "首席执行官",
  "about.team.ceo.about": "物流行业15年以上经验。",
  "about.team.coo.role": "运营总监",
  "about.team.coo.about": "流程优化专家。",
  "about.team.cto.role": "技术总监",
  "about.team.cto.about": "技术实施和设备。",
  "about.team.sales.role": "销售总监",
  "about.team.sales.about": "客户基础和合作伙伴发展。",
});

// Support page
extend(ru, {
  "support.hero.title": "Поддержка",
  "support.hero.subtitle": "FAQ и быстрые способы связи с нашей командой",
});

extend(en, {
  "support.hero.title": "Support",
  "support.hero.subtitle": "FAQ and quick ways to contact our team",
});

extend(zh, {
  "support.hero.title": "支持",
  "support.hero.subtitle": "常见问题和快速联系我们的团队",
});

// About page - History
extend(ru, {
  "about.history.heading": "История компании",
  "about.history.subtitle": "Надёжный партнёр в сфере международной логистики с упором на технологии и сервис",
  "about.history.year": "год",
  "about.history.2015.title": "Основание компании",
  "about.history.2015.text": "Начало работы с первыми клиентами в Казахстане. Небольшой автопарк и локальные маршруты.",
  "about.history.2017.title": "Расширение географии",
  "about.history.2017.text": "Выход в крупнейшие города Казахстана, открытие региональных представительств.",
  "about.history.2019.title": "Технологии отслеживания",
  "about.history.2019.text": "Внедрение современных систем мониторинга грузов и обновление автопарка.",
  "about.history.2021.title": "Международный рынок",
  "about.history.2021.text": "Начало сотрудничества с партнёрами из Китая и стран ЕС, рост экспортных перевозок.",
  "about.history.2023.title": "Ребрендинг и масштабирование",
  "about.history.2023.text": "Расширение спектра услуг и модернизация логистических процессов компании.",
  "about.values.reliability.title": "Надёжность",
  "about.values.reliability.desc": "Соблюдаем сроки и бережём груз на каждом этапе.",
  "about.values.transparency.title": "Прозрачность",
  "about.values.transparency.desc": "Честная коммуникация и понятные условия работы.",
  "about.values.individuality.title": "Индивидуальность",
  "about.values.individuality.desc": "Подбираем решения под конкретную задачу клиента.",
  "about.values.innovation.title": "Инновации",
  "about.values.innovation.desc": "Внедряем технологии отслеживания и автоматизации.",
});

extend(en, {
  "about.history.heading": "Company History",
  "about.history.subtitle": "Reliable partner in international logistics with focus on technology and service",
  "about.history.year": "year",
  "about.history.2015.title": "Company Foundation",
  "about.history.2015.text": "Started working with first clients in Kazakhstan. Small fleet and local routes.",
  "about.history.2017.title": "Geographic Expansion",
  "about.history.2017.text": "Entry into major cities of Kazakhstan, opening regional offices.",
  "about.history.2019.title": "Tracking Technologies",
  "about.history.2019.text": "Implementation of modern cargo monitoring systems and fleet renewal.",
  "about.history.2021.title": "International Market",
  "about.history.2021.text": "Started cooperation with partners from China and EU countries, growth of export transportation.",
  "about.history.2023.title": "Rebranding and Scaling",
  "about.history.2023.text": "Expansion of service range and modernization of company logistics processes.",
  "about.values.reliability.title": "Reliability",
  "about.values.reliability.desc": "We meet deadlines and protect cargo at every stage.",
  "about.values.transparency.title": "Transparency",
  "about.values.transparency.desc": "Honest communication and clear working conditions.",
  "about.values.individuality.title": "Individuality",
  "about.values.individuality.desc": "We select solutions for specific client tasks.",
  "about.values.innovation.title": "Innovation",
  "about.values.innovation.desc": "We implement tracking and automation technologies.",
});

extend(zh, {
  "about.history.heading": "公司历史",
  "about.history.subtitle": "国际物流领域的可靠合作伙伴，专注于技术和服务",
  "about.history.year": "年",
  "about.history.2015.title": "公司成立",
  "about.history.2015.text": "开始在哈萨克斯坦与首批客户合作。小型车队和本地路线。",
  "about.history.2017.title": "地理扩张",
  "about.history.2017.text": "进入哈萨克斯坦主要城市，开设地区办事处。",
  "about.history.2019.title": "跟踪技术",
  "about.history.2019.text": "实施现代货物监控系统和车队更新。",
  "about.history.2021.title": "国际市场",
  "about.history.2021.text": "开始与中国和欧盟国家合作伙伴合作，出口运输增长。",
  "about.history.2023.title": "品牌重塑和规模化",
  "about.history.2023.text": "扩大服务范围，现代化公司物流流程。",
  "about.values.reliability.title": "可靠性",
  "about.values.reliability.desc": "我们按时交付并在每个阶段保护货物。",
  "about.values.transparency.title": "透明度",
  "about.values.transparency.desc": "诚实沟通和清晰的工作条件。",
  "about.values.individuality.title": "个性化",
  "about.values.individuality.desc": "我们为特定客户任务选择解决方案。",
  "about.values.innovation.title": "创新",
  "about.values.innovation.desc": "我们实施跟踪和自动化技术。",
});

// Geography
extend(ru, {
  "geo.heading": "География деятельности",
  "geo.subtitle": "Выберите вкладку, чтобы подсветить страну на карте и увидеть краткую информацию о нашей работе в регионе.",
  "geo.tabs.kz": "Казахстан",
  "geo.tabs.uz": "Узбекистан",
  "geo.tabs.tm": "Туркменистан",
  "geo.tabs.kg": "Кыргызстан",
  "geo.tabs.cn": "Китай",
  "geo.tabs.ru": "РФ",
  "geo.hubs": "Ключевые хабы",
  "geo.services": "Что делаем",
  "geo.advantages": "Преимущества",
  "geo.note": "Поддерживаем проектные перевозки и нестандартные маршруты — запросите расчёт у менеджера.",
  "geo.legend.selected": "Выбранная страна",
  "geo.legend.other": "Прочие страны",
  "geo.legend.borders": "Границы",
  "geo.regions.kz.title": "Казахстан",
  "geo.regions.kz.description": "Перевозки по Казахстану и транзит в соседние страны. Хабы: Алматы, Астана, Шымкент.",
  "geo.regions.uz.title": "Узбекистан",
  "geo.regions.uz.description": "Маршруты в Ташкент, Самарканд, Бухару и обратно. Консолидация и доставка до двери.",
  "geo.regions.tm.title": "Туркменистан",
  "geo.regions.tm.description": "Работа с Ашхабадом и промышленными регионами. Экспорт/импорт и транзит.",
  "geo.regions.kg.title": "Кыргызстан",
  "geo.regions.kg.description": "Рейсы в Бишкек, Ош и регионы. Опыт работы с СЭЗ и кросс‑бордер.",
  "geo.regions.cn.title": "Китай",
  "geo.regions.cn.description": "Наземная логистика с ключевых хабов Китая: Урумчи, Иу, Гуанчжоу, Шэньчжэнь. Экспорт и импорт.",
  "geo.regions.ru.title": "Россия",
  "geo.regions.ru.description": "Регулярные рейсы по Центральной и Сибирской части РФ. Доставка до дверей с отслеживанием.",
});

extend(en, {
  "geo.heading": "Geography of Activity",
  "geo.subtitle": "Select a tab to highlight the country on the map and see brief information about our work in the region.",
  "geo.tabs.kz": "Kazakhstan",
  "geo.tabs.uz": "Uzbekistan",
  "geo.tabs.tm": "Turkmenistan",
  "geo.tabs.kg": "Kyrgyzstan",
  "geo.tabs.cn": "China",
  "geo.tabs.ru": "Russia",
  "geo.hubs": "Key Hubs",
  "geo.services": "What We Do",
  "geo.advantages": "Advantages",
  "geo.note": "We support project transportation and non-standard routes — request a quote from our manager.",
  "geo.legend.selected": "Selected Country",
  "geo.legend.other": "Other Countries",
  "geo.legend.borders": "Borders",
  "geo.regions.kz.title": "Kazakhstan",
  "geo.regions.kz.description": "Transportation within Kazakhstan and transit to neighboring countries. Hubs: Almaty, Astana, Shymkent.",
  "geo.regions.uz.title": "Uzbekistan",
  "geo.regions.uz.description": "Routes to Tashkent, Samarkand, Bukhara and back. Consolidation and door-to-door delivery.",
  "geo.regions.tm.title": "Turkmenistan",
  "geo.regions.tm.description": "Work with Ashgabat and industrial regions. Export/import and transit.",
  "geo.regions.kg.title": "Kyrgyzstan",
  "geo.regions.kg.description": "Flights to Bishkek, Osh and regions. Experience with SEZ and cross-border.",
  "geo.regions.cn.title": "China",
  "geo.regions.cn.description": "Land logistics from key Chinese hubs: Urumqi, Yiwu, Guangzhou, Shenzhen. Export and import.",
  "geo.regions.ru.title": "Russia",
  "geo.regions.ru.description": "Regular flights across Central and Siberian parts of Russia. Door-to-door delivery with tracking.",
});

extend(zh, {
  "geo.heading": "活动地理",
  "geo.subtitle": "选择标签以在地图上突出显示国家并查看我们在该地区工作的简要信息。",
  "geo.tabs.kz": "哈萨克斯坦",
  "geo.tabs.uz": "乌兹别克斯坦",
  "geo.tabs.tm": "土库曼斯坦",
  "geo.tabs.kg": "吉尔吉斯斯坦",
  "geo.tabs.cn": "中国",
  "geo.tabs.ru": "俄罗斯",
  "geo.hubs": "关键枢纽",
  "geo.services": "我们做什么",
  "geo.advantages": "优势",
  "geo.note": "我们支持项目运输和非标准路线 — 向我们的经理请求报价。",
  "geo.legend.selected": "选定国家",
  "geo.legend.other": "其他国家",
  "geo.legend.borders": "边界",
  "geo.regions.kz.title": "哈萨克斯坦",
  "geo.regions.kz.description": "哈萨克斯坦境内运输和邻国过境。枢纽：阿拉木图、阿斯塔纳、奇姆肯特。",
  "geo.regions.uz.title": "乌兹别克斯坦",
  "geo.regions.uz.description": "到塔什干、撒马尔罕、布哈拉的路线。整合和门到门交付。",
  "geo.regions.tm.title": "土库曼斯坦",
  "geo.regions.tm.description": "与阿什哈巴德和工业地区合作。进出口和过境。",
  "geo.regions.kg.title": "吉尔吉斯斯坦",
  "geo.regions.kg.description": "到比什凯克、奥什和地区的航班。经济特区和跨境经验。",
  "geo.regions.cn.title": "中国",
  "geo.regions.cn.description": "来自中国主要枢纽的陆路物流：乌鲁木齐、义乌、广州、深圳。进出口。",
  "geo.regions.ru.title": "俄罗斯",
  "geo.regions.ru.description": "俄罗斯中部和西伯利亚地区的定期航班。门到门交付和跟踪。",
});

// Services dictionary
extend(ru, {
  "services.heading": "Наши услуги",
  "services.more": "Узнать подробнее",
  "services.features": "Особенности услуги",
  "services.benefits": "Преимущества",
  "services.order": "Заказать услугу",
  "common.close": "Закрыть",
  "services.truck.title": "Перевозка фурами",
  "services.truck.features.0": "FTL перевозки",
  "services.truck.features.1": "Рефрижераторы",
  "services.truck.features.2": "Мега-трейлеры",
  "services.truck.features.3": "Таможенное оформление",
  "services.truck.description": "Международные автоперевозки по СНГ и Азии. Прямые рейсы на фурах: тенты, рефрижераторы, меги. Надежно, быстро, с полным сопровождением.",
  "services.truck.benefits.0": "Быстрая доставка",
  "services.truck.benefits.1": "Полное сопровождение",
  "services.truck.benefits.2": "Страхование груза",
  "services.truck.benefits.3": "Отслеживание в реальном времени",
  "services.warehouse.title": "Складские услуги",
  "services.warehouse.features.0": "Хранение грузов",
  "services.warehouse.features.1": "Кросс-докинг",
  "services.warehouse.features.2": "Комплектация",
  "services.warehouse.features.3": "Маркировка",
  "services.warehouse.description": "Полный цикл складских услуг: приемка, хранение, комплектация, отгрузка. Современные склады с системой контроля качества.",
  "services.warehouse.benefits.0": "Современное оборудование",
  "services.warehouse.benefits.1": "Контроль качества",
  "services.warehouse.benefits.2": "Быстрая обработка",
  "services.warehouse.benefits.3": "Гибкие условия хранения",
  "services.container.title": "Перевозка контейнеров",
  "services.container.features.0": "20' и 40' контейнеры",
  "services.container.features.1": "Рефрижераторные",
  "services.container.features.2": "Опасные грузы",
  "services.container.features.3": "Мультимодальные перевозки",
  "services.container.description": "Морские и железнодорожные контейнерные перевозки. 20' и 40' контейнеры, рефрижераторные контейнеры, опасные грузы. Полный цикл от порта до склада.",
  "services.container.benefits.0": "Мультимодальность",
  "services.container.benefits.1": "Специализированные контейнеры",
  "services.container.benefits.2": "Обработка опасных грузов",
  "services.container.benefits.3": "Интеграция с портами",
});

extend(en, {
  "services.heading": "Our Services",
  "services.more": "Learn more",
  "services.features": "Key features",
  "services.benefits": "Benefits",
  "services.order": "Order service",
  "common.close": "Close",
  "services.truck.title": "Truck freight",
  "services.truck.features.0": "FTL shipments",
  "services.truck.features.1": "Reefers",
  "services.truck.features.2": "Mega trailers",
  "services.truck.features.3": "Customs clearance",
  "services.truck.description": "International road transport across CIS and Asia. Curtainsider, reefer and mega trailers. Reliable, fast, fully managed.",
  "services.truck.benefits.0": "Fast delivery",
  "services.truck.benefits.1": "Full assistance",
  "services.truck.benefits.2": "Cargo insurance",
  "services.truck.benefits.3": "Realtime tracking",
  "services.warehouse.title": "Warehousing",
  "services.warehouse.features.0": "Storage",
  "services.warehouse.features.1": "Cross-docking",
  "services.warehouse.features.2": "Order picking",
  "services.warehouse.features.3": "Labeling",
  "services.warehouse.description": "End-to-end warehousing: receiving, storage, picking, shipping. Modern facilities with quality control.",
  "services.warehouse.benefits.0": "Modern equipment",
  "services.warehouse.benefits.1": "Quality control",
  "services.warehouse.benefits.2": "Fast processing",
  "services.warehouse.benefits.3": "Flexible storage terms",
  "services.container.title": "Container shipping",
  "services.container.features.0": "20' and 40' containers",
  "services.container.features.1": "Refrigerated",
  "services.container.features.2": "Dangerous goods",
  "services.container.features.3": "Multimodal",
  "services.container.description": "Sea and rail container transport. 20' and 40', reefers, dangerous goods. Full cycle from port to warehouse.",
  "services.container.benefits.0": "Multimodality",
  "services.container.benefits.1": "Specialized containers",
  "services.container.benefits.2": "Hazardous handling",
  "services.container.benefits.3": "Port integration",
});

extend(zh, {
  "services.heading": "我们的服务",
  "services.more": "了解更多",
  "services.features": "服务特性",
  "services.benefits": "优势",
  "services.order": "下单服务",
  "common.close": "关闭",
  "services.truck.title": "卡车运输",
  "services.truck.features.0": "整车运输（FTL）",
  "services.truck.features.1": "冷藏车",
  "services.truck.features.2": "加大型拖车",
  "services.truck.features.3": "清关",
  "services.truck.description": "覆盖独联体与亚洲的国际公路运输：篷布车、冷藏车、加大型拖车。可靠快捷，全程服务。",
  "services.truck.benefits.0": "快速送达",
  "services.truck.benefits.1": "全程协助",
  "services.truck.benefits.2": "货物保险",
  "services.truck.benefits.3": "实时跟踪",
  "services.warehouse.title": "仓储服务",
  "services.warehouse.features.0": "货物存储",
  "services.warehouse.features.1": "越库作业",
  "services.warehouse.features.2": "拣选配货",
  "services.warehouse.features.3": "贴标",
  "services.warehouse.description": "仓储全流程：收货、存储、拣选、发运。现代化仓库与质控体系。",
  "services.warehouse.benefits.0": "现代设备",
  "services.warehouse.benefits.1": "质量管控",
  "services.warehouse.benefits.2": "快速处理",
  "services.warehouse.benefits.3": "灵活存储条款",
  "services.container.title": "集装箱运输",
  "services.container.features.0": "20' 与 40' 集装箱",
  "services.container.features.1": "冷藏箱",
  "services.container.features.2": "危险品",
  "services.container.features.3": "多式联运",
  "services.container.description": "海铁联运集装箱运输：20'/40'、冷藏箱、危险品。从港口到仓库的全流程。",
  "services.container.benefits.0": "多式联运",
  "services.container.benefits.1": "专业集装箱",
  "services.container.benefits.2": "危险品处理",
  "services.container.benefits.3": "港口对接",
});

const dictionaries: Record<SupportedLocale, Dictionary> = { ru, en, zh };

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    // Fallback for SSR - return a safe default
    return {
      locale: "ru" as SupportedLocale,
      setLocale: () => {},
      t: (key: string) => key,
    };
  }
  return ctx;
}

function readCookieLocale(): SupportedLocale {
  if (typeof document === "undefined") return defaultLocale;
  const match = document.cookie.match(/(?:^|; )locale=([^;]+)/);
  const value = match ? decodeURIComponent(match[1]) : "";
  if (value === "en" || value === "zh" || value === "ru") return value;
  return defaultLocale;
}

function writeCookieLocale(locale: SupportedLocale) {
  if (typeof document === "undefined") return;
  document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
}

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<SupportedLocale>(defaultLocale);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const savedLocale = readCookieLocale();
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (loc: SupportedLocale) => {
    setLocaleState(loc);
    if (typeof window !== "undefined") {
      writeCookieLocale(loc);
    }
  };

  const t = useMemo(() => {
    const dict = dictionaries[locale] ?? dictionaries[defaultLocale];
    return (key: string) => dict[key] ?? key;
  }, [locale]);

  const value = useMemo(() => ({ locale, t, setLocale }), [locale, t]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};


