export const SUPPORTED_LANGS = ['fr', 'en', 'tr'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export interface TranslationDictionary {
  // Meta Titles, Descriptions & Locale
  ogLocale: string;
  pageTitleHome: string;
  pageDescHome: string;
  pageTitleImpa: string;
  pageDescImpa: string;
  pageTitleAlbumevi: string;
  pageDescAlbumevi: string;

  // Crawlable Semantic SEO Hero Copy & Accessibility Labels
  seoHeroH1: string;
  seoHeroSummary: string;
  whatsappAria: string;
  viewToggleAria: string;
  mascotAria: string;
  langSwitchFrAria: string;
  langSwitchEnAria: string;
  langSwitchTrAria: string;

  // Header & Navigation
  about: string;
  services: string;
  projects: string;
  contact: string;
  viewCinematic: string;
  viewStatic: string;
  backToHome: string;

  // Hero CTAs (Exact strings)
  discover: string;
  download: string;

  // Hero Static Split View
  headlineHtml: string;
  description: string;

  // Retro IDE & Pop-up Terminal
  ideComment: string;
  ideExplorerTitle: string;
  widgetRole: string;
  widgetStatus: string;
  termTitle: string;
  termCmd: string;
  termProfile: string;
  termRole: string;
  termArch: string;
  termStatus: string;

  // Section 1: 01 // ABOUT
  aboutTag: string;
  aboutHeading: string;
  aboutP1: string;
  aboutP2: string;
  aboutPill1: string;
  aboutPill2: string;
  aboutPill3: string;
  aboutCardTitle: string;
  aboutStack1Role: string;
  aboutStack2Role: string;
  aboutStack3Role: string;
  aboutStack4Role: string;
  aboutStack5Role: string;
  aboutCardFooter: string;

  // Section 2: 02 // SERVICES
  servicesTag: string;
  servicesHeading: string;
  servicesSubtitle: string;
  srv1Title: string;
  srv1Desc: string;
  srv2Title: string;
  srv2Desc: string;
  srv2Tag3: string;
  srv2Tag4: string;
  srv3Title: string;
  srv3Desc: string;
  srv3Tag4: string;
  srv4Title: string;
  srv4Desc: string;
  srv4Tag4: string;

  // Projects Section
  projectsTag: string;
  projectsHeading: string;

  // Contact + Map Showcase & Structured Footer
  contactTag: string;
  contactHeadingHtml: string;
  contactSubtitle: string;
  contactPhoneLabel: string;
  contactWhatsappLabel: string;
  contactWhatsappAction: string;
  contactEmailLabel: string;
  contactAddressLabel: string;
  contactDirectionsBtn: string;
  contactOpenMaps: string;
  footerBrandDesc: string;
  footerNavTitle: string;
  footerServicesTitle: string;
  footerContactTitle: string;
  footerRights: string;

  // Project Detail Pages
  projectDate: string;
  visitLiveSite: string;
  projectShowcase: string;
  impaDesc: string;
  albumeviDesc: string;
}

export const translations: Record<Lang, TranslationDictionary> = {
  fr: {
    ogLocale: 'fr_FR',
    pageTitleHome: 'Imane Himmich | IH SOFTDEV — Développeuse Full-Stack & Stratège Digitale',
    pageDescHome:
      "Portfolio d'Imane Himmich (IH SOFTDEV), développeuse Full-Stack spécialisée en React, Flutter, Node.js, Python, Supabase et création d'applications web et mobiles sur mesure.",
    pageTitleImpa: 'IMPA Mobilya — Étude de Cas | Imane Himmich (IH SOFTDEV)',
    pageDescImpa:
      'Plateforme web et architecture mobile Flutter conçues par Imane Himmich (IH SOFTDEV) pour IMPA Mobilya avec Supabase et gestion dynamique du catalogue.',
    pageTitleAlbumevi: 'ALBÜMEVİ — Étude de Cas | Imane Himmich (IH SOFTDEV)',
    pageDescAlbumevi:
      'Plateforme numérique et infrastructure cloud React & Supabase conçues par Imane Himmich (IH SOFTDEV) pour la photographie scolaire professionnelle Albümevi.',

    seoHeroH1: 'Imane Himmich | IH SOFTDEV — Développeuse Full-Stack & Stratège Digitale',
    seoHeroSummary:
      "Imane Himmich (IH SOFTDEV) est une ingénieure en informatique et développeuse Full-Stack spécialisée en React, Flutter, Node.js, Python, Supabase, Tailwind CSS et création d'applications web et mobiles sur mesure.",
    whatsappAria: 'Discuter sur WhatsApp avec Imane Himmich (IH SOFTDEV)',
    viewToggleAria: "Basculer le mode d'affichage de la section principale",
    mascotAria: 'Animer la mascotte de défilement',
    langSwitchFrAria: 'Afficher le site en français (FR)',
    langSwitchEnAria: 'Afficher le site en anglais (EN)',
    langSwitchTrAria: 'Afficher le site en turc (TR)',

    about: 'À propos',
    services: 'Services',
    projects: 'Projets',
    contact: 'Contact',
    viewCinematic: 'Vue : Cinématique',
    viewStatic: 'Vue : Statique',
    backToHome: '← Retour au portfolio',

    discover: 'DÉCOUVRIR MON TRAVAIL →',
    download: 'TÉLÉCHARGER LE CV',

    headlineHtml: "Du Silicium<br/>à l'Écran.",
    description:
      "Ingénieure en informatique et développeuse Full-Stack derrière IH SOFTDEV. Je conçois des plateformes web, des applications mobiles et des systèmes d'acquisition performants.",

    ideComment: '// Profil Ingénieure — IH SOFTDEV (Imane Himmich)',
    ideExplorerTitle: 'EXPLORATEUR',
    widgetRole: 'Ingénieure Full-Stack',
    widgetStatus: 'Disponible',
    termTitle: 'terminal — ih-softdev',
    termCmd: 'npx ih-softdev --profil --lang=fr',
    termProfile: '✔ Profil chargé : Imane Himmich (IH SOFTDEV)',
    termRole: '→ Rôle    : Ingénieure Informatique & Full-Stack',
    termArch: '→ Stack   : React • Flutter • Node.js • Python • Supabase',
    termStatus: '→ Statut  : Prête pour de nouvelles collaborations',

    aboutTag: '01 // À PROPOS',
    aboutHeading: 'Concevoir des logiciels qui résolvent de vrais problèmes métiers.',
    aboutP1:
      "Je suis Imane Himmich, ingénieure en informatique et développeuse Full-Stack, fondatrice d'IH SOFTDEV. Mon travail ne se limite pas à écrire des lignes de code : je développe des plateformes web, des applications mobiles et des systèmes automatisés pensés pour la performance et la croissance commerciale.",
    aboutP2:
      "Qu'il s'agisse d'une plateforme SaaS sur mesure, d'une application iOS/Android ou du pilotage de vos campagnes Google Ads, je gère votre projet de A à Z. Pas d'intermédiaires : vous échangez directement avec l'ingénieure qui construit votre produit.",
    aboutPill1: 'Ingénierie Informatique',
    aboutPill2: 'Architecture Web & Mobile',
    aboutPill3: 'Multilingue (FR / EN / TR / AR)',
    aboutCardTitle: 'STACK TECHNIQUE & EXPERTISES',
    aboutStack1Role: 'Plateformes Web & SaaS',
    aboutStack2Role: 'Apps Mobiles Natives',
    aboutStack3Role: 'Backend & Automatisation',
    aboutStack4Role: 'Base de Données & Auth',
    aboutStack5Role: 'Acquisition & Conversions',
    aboutCardFooter: 'Interlocutrice unique • Architecture propre & livraison rapide',

    servicesTag: '02 // SERVICES',
    servicesHeading: 'Ce Que Nous Développons',
    servicesSubtitle: 'Ingénierie logicielle et acquisition digitale au même endroit.',
    srv1Title: 'Applications Web Sur Mesure & SaaS',
    srv1Desc:
      'Plateformes web rapides, tableaux de bord administrateur et portails clients conçus sur mesure pour gérer vos opérations complexes en toute sécurité.',
    srv2Title: 'Applications Mobiles iOS & Android',
    srv2Desc:
      "Développement d'applications mobiles fluides et performantes sur iOS et Android, avec notifications en temps réel et synchronisation cloud.",
    srv2Tag3: 'API REST',
    srv2Tag4: 'Cloud Sync',
    srv3Title: 'Systèmes Backend & Automatisation',
    srv3Desc:
      "Architecture de bases de données, paiements sécurisés et scripts d'automatisation sur mesure pour éliminer les tâches manuelles répétitives.",
    srv3Tag4: 'Intégration API',
    srv4Title: 'Google Ads & SEO Technique',
    srv4Desc:
      'Un bon produit mérite d’être vu. Nous configurons le suivi des conversions (GA4/GTM), le référencement technique et vos campagnes Google Ads à fort ROAS.',
    srv4Tag4: 'SEO Technique',

    projectsTag: '03 // RÉALISATIONS',
    projectsHeading: 'Projets Sélectionnés.',

    contactTag: '04 // CONTACT',
    contactHeadingHtml: "Construisons quelque chose<br/>d'exceptionnel.",
    contactSubtitle:
      'Un projet de plateforme web, une application mobile ou une campagne Google Ads à lancer ? Contactez-moi directement par téléphone, WhatsApp, e-mail ou à notre bureau.',
    contactPhoneLabel: 'TÉLÉPHONE DIRECT',
    contactWhatsappLabel: 'WHATSAPP DIRECT',
    contactWhatsappAction: 'Démarrer une discussion →',
    contactEmailLabel: 'ADRESSE E-MAIL',
    contactAddressLabel: 'BUREAU / LOCALISATION',
    contactDirectionsBtn: 'Obtenir l’itinéraire →',
    contactOpenMaps: 'Ouvrir dans Google Maps ↗',
    footerBrandDesc:
      "Ingénierie logicielle Full-Stack, architectures mobiles iOS/Android et pilotage d'acquisition Google Ads par Imane Himmich.",
    footerNavTitle: 'NAVIGATION',
    footerServicesTitle: 'EXPERTISES',
    footerContactTitle: 'CONTACT DIRECT',
    footerRights: 'Tous droits réservés.',

    projectDate: 'Date du projet : 2026',
    visitLiveSite: 'VISITER LE SITE →',
    projectShowcase: 'Aperçu du Projet.',
    impaDesc:
      'Plateforme numérique haute performance et architecture mobile conçues pour IMPA Mobilya. Expérience utilisateur fluide dédiée à la découverte de mobilier haut de gamme, propulsée par une infrastructure full-stack sécurisée pour la gestion dynamique du catalogue.',
    albumeviDesc:
      'Plateforme numérique complète et infrastructure web dédiées à la photographie scolaire professionnelle. Gestion photo déployée sur le cloud edge, modèles de livres photo personnalisés et architecture de livraison sécurisée.',
  },

  en: {
    ogLocale: 'en_US',
    pageTitleHome: 'Imane Himmich | IH SOFTDEV — Full-Stack Developer & Digital Strategist',
    pageDescHome:
      'Portfolio of Imane Himmich (IH SOFTDEV), Full-Stack Software Developer specializing in React, Flutter, Node.js, Python, Supabase, and scalable web & mobile applications.',
    pageTitleImpa: 'IMPA Mobilya — Case Study | Imane Himmich (IH SOFTDEV)',
    pageDescImpa:
      'Full-stack digital platform and Flutter mobile architecture built by Imane Himmich (IH SOFTDEV) for IMPA Mobilya using Dart, Supabase, and Figma.',
    pageTitleAlbumevi: 'ALBÜMEVİ — Case Study | Imane Himmich (IH SOFTDEV)',
    pageDescAlbumevi:
      'Edge-deployed school photography web platform built by Imane Himmich (IH SOFTDEV) for Albümevi using React, Supabase, Cloudflare, and Figma.',

    seoHeroH1: 'Imane Himmich | IH SOFTDEV — Full-Stack Developer & Digital Strategist',
    seoHeroSummary:
      'Portfolio of Imane Himmich (IH SOFTDEV), Full-Stack Software Developer and Computer Engineer specializing in React, Flutter, Node.js, Python, Supabase, Tailwind CSS, and scalable web & mobile applications.',
    whatsappAria: 'Chat on WhatsApp with Imane Himmich (IH SOFTDEV)',
    viewToggleAria: 'Toggle hero display mode',
    mascotAria: 'Trigger scroll mascot jump animation',
    langSwitchFrAria: 'Switch site language to French (FR)',
    langSwitchEnAria: 'Switch site language to English (EN)',
    langSwitchTrAria: 'Switch site language to Turkish (TR)',

    about: 'About',
    services: 'Services',
    projects: 'Projects',
    contact: 'Contact',
    viewCinematic: 'View: Cinematic',
    viewStatic: 'View: Static',
    backToHome: '← Back to Portfolio',

    discover: 'DISCOVER MY WORK →',
    download: 'DOWNLOAD CV',

    headlineHtml: 'From Silicon<br/>To Screen.',
    description:
      'Computer Engineer and Full-Stack Developer behind IH SOFTDEV. Building scalable web platforms, cross-platform mobile apps, and high-ROAS acquisition systems.',

    ideComment: '// Developer Profile — IH SOFTDEV (Imane Himmich)',
    ideExplorerTitle: 'EXPLORER',
    widgetRole: 'Full-Stack Engineer',
    widgetStatus: 'Available',
    termTitle: 'terminal — ih-softdev',
    termCmd: 'npx ih-softdev --profile --lang=en',
    termProfile: '✔ Profile loaded: Imane Himmich (IH SOFTDEV)',
    termRole: '→ Role    : Computer Engineer & Full-Stack Dev',
    termArch: '→ Stack   : React • Flutter • Node.js • Python • Supabase',
    termStatus: '→ Status  : Open for new collaborations',

    aboutTag: '01 // ABOUT',
    aboutHeading: 'Engineering software that actually solves business problems.',
    aboutP1:
      'I’m Imane Himmich, a Computer Engineer and Full-Stack Developer behind IH SOFTDEV. I don’t just write code to make things look pretty—I build web platforms, mobile apps, and automated systems designed to handle real users, real data, and real commercial growth.',
    aboutP2:
      'From custom B2B SaaS platforms and e-commerce ecosystems to cross-platform mobile apps and Google Ads acquisition, I handle the entire technical lifecycle. You get clean architecture, fast delivery, and direct communication with the engineer building your product.',
    aboutPill1: 'Computer Engineering Background',
    aboutPill2: 'Web & Mobile Architecture',
    aboutPill3: 'Multilingual (FR / EN / TR / AR)',
    aboutCardTitle: 'CORE STACK & QUICK FACTS',
    aboutStack1Role: 'Web & SaaS Platforms',
    aboutStack2Role: 'Cross-Platform Mobile',
    aboutStack3Role: 'APIs & Automation',
    aboutStack4Role: 'Cloud DB & Realtime',
    aboutStack5Role: 'Acquisition & Analytics',
    aboutCardFooter: 'Direct engineer communication • End-to-end delivery',

    servicesTag: '02 // SERVICES',
    servicesHeading: 'What We Build & Deliver',
    servicesSubtitle: 'End-to-end engineering and digital growth—under one roof.',
    srv1Title: 'Custom Web Applications & SaaS',
    srv1Desc:
      'Fast, secure web platforms, admin dashboards, and booking or ordering portals built from scratch. Designed to handle complex workflows and scale smoothly.',
    srv2Title: 'iOS & Android Mobile Apps',
    srv2Desc:
      'Cross-platform mobile applications with native performance, offline support, real-time notifications, and seamless API integrations.',
    srv2Tag3: 'REST APIs',
    srv2Tag4: 'Cloud Sync',
    srv3Title: 'Backend Systems & Workflow Automation',
    srv3Desc:
      'Database design, secure authentication, payment gateways, and custom automation scripts that eliminate repetitive manual work in your business.',
    srv3Tag4: 'API Integration',
    srv4Title: 'Google Ads & Technical SEO',
    srv4Desc:
      'A great product needs traffic. We set up conversion tracking (GA4/GTM), optimize search visibility, and run high-ROAS Google Ads & Merchant Center campaigns.',
    srv4Tag4: 'Technical SEO',

    projectsTag: '03 // PROJECTS',
    projectsHeading: 'Selected Works.',

    contactTag: '04 // CONTACT',
    contactHeadingHtml: "Let's build something<br/>incredible.",
    contactSubtitle:
      'Planning a custom web platform, mobile application, or Google Ads growth strategy? Reach out directly via phone, WhatsApp, email, or visit our office.',
    contactPhoneLabel: 'DIRECT PHONE',
    contactWhatsappLabel: 'WHATSAPP DIRECT',
    contactWhatsappAction: 'Start a conversation →',
    contactEmailLabel: 'EMAIL ADDRESS',
    contactAddressLabel: 'OFFICE LOCATION',
    contactDirectionsBtn: 'Get Directions →',
    contactOpenMaps: 'Open in Google Maps ↗',
    footerBrandDesc:
      'Full-Stack Software Engineering, iOS & Android Mobile Architecture, and Google Ads Growth Management by Imane Himmich.',
    footerNavTitle: 'NAVIGATION',
    footerServicesTitle: 'CAPABILITIES',
    footerContactTitle: 'DIRECT CONTACT',
    footerRights: 'All rights reserved.',

    projectDate: 'Project Date: 2026',
    visitLiveSite: 'VISIT LIVE SITE →',
    projectShowcase: 'Project Showcase.',
    impaDesc:
      'A high-performance digital platform and mobile architecture for IMPA Mobilya. Architected a seamless user experience for premium furniture browsing, backed by a robust full-stack infrastructure for dynamic catalog management and secure data handling.',
    albumeviDesc:
      'Comprehensive digital platform and web infrastructure for professional school photography. Featuring edge-deployed photo management, custom photobook templates, and secure delivery architectures tailored for seamless client experiences.',
  },

  tr: {
    ogLocale: 'tr_TR',
    pageTitleHome: 'Imane Himmich | IH SOFTDEV — Full-Stack Yazılım Geliştirici & Dijital Stratejist',
    pageDescHome:
      'Imane Himmich (IH SOFTDEV) resmi portfolyosu. React, Flutter, Node.js, Python ve Supabase ile modern web ve mobil uygulama geliştirme çözümleri.',
    pageTitleImpa: 'IMPA Mobilya — Proje İncelemesi | Imane Himmich (IH SOFTDEV)',
    pageDescImpa:
      'Imane Himmich (IH SOFTDEV) tarafından IMPA Mobilya için Flutter, Dart ve Supabase kullanılarak geliştirilen yüksek performanslı dijital platform ve mobil mimari.',
    pageTitleAlbumevi: 'ALBÜMEVİ — Proje İncelemesi | Imane Himmich (IH SOFTDEV)',
    pageDescAlbumevi:
      'Imane Himmich (IH SOFTDEV) tarafından Albümevi için React, Supabase ve Cloudflare ile geliştirilen profesyonel okul fotoğrafçılığı web platformu.',

    seoHeroH1: 'Imane Himmich | IH SOFTDEV — Full-Stack Yazılım Geliştirici & Dijital Stratejist',
    seoHeroSummary:
      'Imane Himmich (IH SOFTDEV) resmi portfolyosu; React, Flutter, Node.js, Python, Supabase ve Tailwind CSS ile modern web ve mobil uygulama geliştirme çözümleri.',
    whatsappAria: 'Imane Himmich (IH SOFTDEV) ile WhatsApp üzerinden iletişime geçin',
    viewToggleAria: 'Ana ekran görünüm modunu değiştir',
    mascotAria: 'Maskot zıplama animasyonunu oynat',
    langSwitchFrAria: 'Site dilini Fransızca (FR) yap',
    langSwitchEnAria: 'Site dilini İngilizce (EN) yap',
    langSwitchTrAria: 'Site dilini Türkçe (TR) yap',

    about: 'Hakkımda',
    services: 'Hizmetler',
    projects: 'Projeler',
    contact: 'İletişim',
    viewCinematic: 'Görünüm: Sinematik',
    viewStatic: 'Görünüm: Statik',
    backToHome: '← Portfolyoya Dön',

    discover: 'ÇALIŞMALARIMI KEŞFET →',
    download: "CV'Yİ İNDİR",

    headlineHtml: 'Silikondan<br/>Ekrana.',
    description:
      'IH SOFTDEV kurucusu Bilgisayar Mühendisi ve Full-Stack Yazılım Geliştirici. Ölçeklenebilir web platformları, mobil uygulamalar ve performans odaklı büyüme sistemleri.',

    ideComment: '// Geliştirici Profili — IH SOFTDEV (Imane Himmich)',
    ideExplorerTitle: 'DOSYALAR',
    widgetRole: 'Full-Stack Mühendis',
    widgetStatus: 'Müsait',
    termTitle: 'terminal — ih-softdev',
    termCmd: 'npx ih-softdev --profil --lang=tr',
    termProfile: '✔ Profil yüklendi: Imane Himmich (IH SOFTDEV)',
    termRole: '→ Rol     : Bilgisayar Mühendisi & Full-Stack',
    termArch: '→ Teknol. : React • Flutter • Node.js • Python • Supabase',
    termStatus: '→ Durum   : Yeni projeler ve iş birliklerine açık',

    aboutTag: '01 // HAKKIMDA',
    aboutHeading: 'İş dünyasındaki gerçek sorunları çözen yazılımlar geliştiriyorum.',
    aboutP1:
      "Ben Imane Himmich; Bilgisayar Mühendisi, Full-Stack Yazılım Geliştirici ve IH SOFTDEV'in kurucusuyum. Sadece estetik görünen arayüzler değil; gerçek kullanıcı trafiğini, karmaşık verileri ve ticari büyümeyi yöneten web platformları ve mobil uygulamalar inşa ediyorum.",
    aboutP2:
      'Özel SaaS ve sipariş yönetim sistemlerinden iOS/Android mobil uygulamalara ve Google Ads reklam yönetimine kadar tüm teknik süreci uçtan uca üstleniyorum. Aracı ajanslar olmadan, doğrudan projenizi geliştiren mühendisle çalışırsınız.',
    aboutPill1: 'Bilgisayar Mühendisliği',
    aboutPill2: 'Web & Mobil Mimari',
    aboutPill3: 'Çok Dilli İletişim (FR / EN / TR / AR)',
    aboutCardTitle: 'TEKNOLOJİ YIĞINI & ÖZET',
    aboutStack1Role: 'Web & SaaS Platformları',
    aboutStack2Role: 'iOS & Android Mobil',
    aboutStack3Role: 'Backend & Otomasyon',
    aboutStack4Role: 'Bulut Veritabanı & Auth',
    aboutStack5Role: 'Büyüme & Dönüşüm İzleme',
    aboutCardFooter: 'Doğrudan mühendis iletişimi • Uçtan uca teslimat',

    servicesTag: '02 // HİZMETLER',
    servicesHeading: 'Neler Geliştiriyoruz?',
    servicesSubtitle: 'Uçtan uca yazılım mühendisliği ve dijital büyüme çözümleri.',
    srv1Title: 'Özel Web Uygulamaları & SaaS',
    srv1Desc:
      'İşletmenize özel yönetim panelleri, B2B/B2C sipariş portalları ve yüksek hızlı, güvenli web platformları. Karmaşık iş akışlarını kolaylaştırmak için sıfırdan kodlanır.',
    srv2Title: 'iOS & Android Mobil Uygulamalar',
    srv2Desc:
      "Tek kod tabanıyla hem iPhone hem Android'de yüksek performansla çalışan, bildirim ve canlı veri senkronizasyonuna sahip modern mobil uygulamalar.",
    srv2Tag3: 'REST API',
    srv2Tag4: 'Bulut Senkronizasyon',
    srv3Title: 'Backend Mimari & İş Otomasyonu',
    srv3Desc:
      'Güvenli veritabanı mimarisi, ödeme sistemleri entegrasyonu ve iş yerinizdeki manuel iş yükünü ortadan kaldıran özel otomasyon yazılımları.',
    srv3Tag4: 'API Entegrasyonu',
    srv4Title: 'Google Ads & Teknik SEO',
    srv4Desc:
      'İyi bir yazılım doğru müşteriye ulaşmalıdır. GA4/GTM dönüşüm kurulumu, teknik SEO ve satış odaklı Google Ads / Merchant Center kampanyalarını yönetiyoruz.',
    srv4Tag4: 'Teknik SEO',

    projectsTag: '03 // PROJELER',
    projectsHeading: 'Seçilmiş Projeler.',

    contactTag: '04 // İLETİŞİM',
    contactHeadingHtml: 'Birlikte olağanüstü<br/>bir şey inşa edelim.',
    contactSubtitle:
      'Özel bir web platformu, mobil uygulama veya Google Ads büyüme stratejisi mi planlıyorsunuz? Telefon, WhatsApp, e-posta veya ofisimiz üzerinden doğrudan ulaşın.',
    contactPhoneLabel: 'DOĞRUDAN TELEFON',
    contactWhatsappLabel: 'WHATSAPP HATTI',
    contactWhatsappAction: 'WhatsApp ile yazın →',
    contactEmailLabel: 'E-POSTA ADRESİ',
    contactAddressLabel: 'OFİS / KONUM',
    contactDirectionsBtn: 'Yol Tarifi Al →',
    contactOpenMaps: 'Google Haritalar’da Aç ↗',
    footerBrandDesc:
      'Imane Himmich liderliğinde uçtan uca Full-Stack yazılım mühendisliği, iOS & Android mobil mimari ve Google Ads performans yönetimi.',
    footerNavTitle: 'HIZLI MENÜ',
    footerServicesTitle: 'HİZMETLERİMİZ',
    footerContactTitle: 'DOĞRUDAN İLETİŞİM',
    footerRights: 'Tüm hakları saklıdır.',

    projectDate: 'Proje Tarihi: 2026',
    visitLiveSite: 'SİTEYİ ZİYARET ET →',
    projectShowcase: 'Proje Görselleri.',
    impaDesc:
      'IMPA Mobilya için yüksek performanslı dijital platform ve mobil mimari. Dinamik katalog yönetimi ve güvenli veri işleme sunan güçlü bir full-stack altyapısıyla desteklenen kusursuz kullanıcı deneyimi.',
    albumeviDesc:
      'Profesyonel okul fotoğrafçılığı çekimleri için kapsamlı dijital platform ve web altyapısı. Bulut tabanlı fotoğraf yönetimi, özel albüm şablonları ve güvenli teslimat mimarisi içerir.',
  },
};
