// All site copy, in English and French. Facts come from Rahil's CV.

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const profile = {
  name: "Rahil Mohamed Islam",
  initials: "RI",
  email: "rahilmohamedislam@gmail.com",
  phone: "+213 554 653 341",
  phoneHref: "tel:+213554653341",
  linkedin: "https://www.linkedin.com/in/mohamed-islam-rahil-787a77341/",
  github: "https://github.com/islam-rahil",
  cv: "/Rahil-Mohamed-Islam-CV.pdf",
};

export const ticker = [
  "Java",
  "TypeScript",
  "Node.js",
  "Next.js",
  "React",
  "Angular",
  "Spring Boot",
  "Kotlin",
  "PostgreSQL",
  "Prisma",
  "Python",
  "Tailwind CSS",
  "Docker",
  "Linux & VPS",
];

export const liveSites = [
  { name: "AMS Agency", url: "https://www.agencyams.com", label: "agencyams.com" },
  { name: "TWS El Express", url: "https://twselexpress.com", label: "twselexpress.com" },
  { name: "LUMEA ROYAL", url: "https://lumea-dz.com", label: "lumea-dz.com" },
  { name: "AMS Groupe", url: "https://www.amsgroupes.com", label: "amsgroupes.com" },
];

export const prototypeSites = [
  { name: "Nomadino", url: "https://personnelle.vercel.app/", label: "personnelle.vercel.app" },
  { name: "La Cité Asiatique", url: "https://la-cit-asiatique.vercel.app/", label: "la-cit-asiatique.vercel.app" },
  { name: "Retelem", url: "https://epe-retelem-spa.vercel.app/", label: "epe-retelem-spa.vercel.app" },
];

const en = {
  meta: {
    title: "Rahil Mohamed Islam — Full-Stack Developer & Data Engineer",
    description:
      "Full-stack developer and data engineer based in Algiers. Websites, SaaS and mobile apps with Node.js, Next.js, React, Java, Spring Boot and Angular.",
  },
  nav: {
    work: "Work",
    stack: "Stack",
    experience: "Experience",
    contact: "Contact",
    available: "Available for work",
    cta: "Get in touch",
    menu: "Menu",
    close: "Close",
  },
  hero: {
    headline: "I build whole products — from the database to the last pixel.",
    intro:
      "Full-stack developer & data engineer. Node.js, Next.js and React for fast-moving products; Java, Spring Boot and Angular for the big ones. I take ideas to production — web, SaaS and mobile.",
    seeWork: "See the work",
    downloadCv: "Download CV",
  },
  about: {
    label: "02 / About",
    text: "Rahil Mohamed Islam — software engineer based in Algiers. I design websites, SaaS platforms and mobile apps with two stacks: Node.js, Next.js and React for small and mid-size projects, Java, Spring Boot and Angular for large ones. On the data side, I built an unsupervised SIM-fraud detection model at Djezzy, published at IEEE AIIA 2025.",
    facts: ["Algiers, Algeria", "UTC+1", "Arabic · French · English"],
    available: "Available for new projects",
  },
  numbers: {
    label: "03 / By the numbers",
    title: "Numbers I can back up",
    items: [
      { value: "1.5M", caption: "transactions analysed for SIM-fraud detection" },
      { value: "0.885", caption: "AUC-ROC of my deep autoencoder model" },
      { value: "7", caption: "projects taken to production" },
      { value: "4k+", caption: "anomaly patterns surfaced at Djezzy" },
    ],
  },
  work: {
    label: "04 / Selected work",
    title: "Projects I built end to end",
    items: [
      {
        title: "B2B maintenance platform",
        year: "",
        stack: ["Node.js", "Next.js", "Tailwind", "Prisma", "PostgreSQL"],
        description:
          "Client companies submit and track maintenance requests; service providers plan and manage interventions from one central space.",
        role: "Full-stack",
        slug: "maintenance-platform",
        details: [
          "A B2B platform for managing maintenance interventions. Client companies submit their requests and follow their progress, while service providers plan and manage the interventions from one centralised space.",
          "Bringing both sides into a single tool improves the traceability of every request and the coordination of operations.",
        ],
        highlights: [
          "Request submission and tracking for client companies",
          "Intervention planning and management for providers",
          "One central space shared by clients and providers",
          "Better traceability and coordination of operations",
        ],
      },
      {
        title: "Property management SaaS + mobile app",
        year: "",
        stack: ["SaaS", "Kotlin", "Jetpack"],
        description:
          "Manage properties, report breakdowns and follow interventions. Centralises the follow-up of residences for faster, better service.",
        role: "Web + Android",
        slug: "property-management",
        details: [
          "A property-management SaaS paired with a mobile app: managers handle their properties, breakdowns get reported, and interventions are followed from start to finish.",
          "The platform centralises the follow-up of the property portfolio and residences, making managers more responsive and improving the quality of service for residents.",
        ],
        highlights: [
          "Property and residence management",
          "Breakdown reporting from the mobile app",
          "Intervention tracking",
          "Android app built with Kotlin and Jetpack",
        ],
      },
      {
        title: "HR management SaaS",
        year: "",
        stack: ["Java", "Spring Boot", "Angular"],
        description:
          "Staff records, attendance, leave and absences in one place — less admin work, more reliable HR data.",
        role: "Full-stack",
        slug: "hr-management",
        details: [
          "An HR management SaaS that centralises staff records, attendance tracking, leave and absences.",
          "It simplifies administrative tasks, makes the data more reliable and eases day-to-day HR follow-up. Built on my large-project stack: Java, Spring Boot and Angular.",
        ],
        highlights: [
          "Centralised staff records",
          "Attendance tracking",
          "Leave and absence management",
          "Less admin work, more reliable data",
        ],
      },
      {
        title: "SIM-card fraud detection — Djezzy",
        year: "2025",
        stack: ["Python", "Autoencoders", "SHAP", "HDBSCAN", "t-SNE"],
        description:
          "Unsupervised deep learning on 1.5M real transactions, no labelled fraud needed. 26 engineered features, AUC-ROC 0.885.",
        role: "Data science · Internship",
        slug: "sim-fraud-detection",
        details: [
          "During my data-engineering internship at Djezzy, I worked on detecting commercial fraud linked to SIM cards using AI and machine learning. I developed an unsupervised deep-learning approach that spots unusual behaviour in real transactions, without relying on previously labelled fraud examples.",
          "From 1.5 million transactions I engineered 26 behavioural and temporal features, then compared several autoencoder architectures against a baseline model. The deep autoencoder performed best, with an AUC-ROC of 0.885. I used t-SNE, SHAP and HDBSCAN to visualise, interpret and analyse the detected anomalies, identifying more than 4,000 anomaly patterns.",
          "The work led to a paper, “Unsupervised Anomaly Detection for SIM Card Fraud Using Autoencoder-Based Reconstruction Error Analysis”, presented at the IEEE AIIA 2025 international conference in Boumerdès, Algeria.",
        ],
        highlights: [
          "1.5M real transactions",
          "26 behavioural and temporal features",
          "AUC-ROC of 0.885 with a deep autoencoder",
          "4,000+ anomaly patterns identified",
          "Published at IEEE AIIA 2025",
        ],
      },
      {
        title: "E-learning platform — Expert Petroleum Services",
        year: "2025",
        stack: ["Web platform"],
        description:
          "Centralises course material and makes remote learning easier for the company’s trainees.",
        role: "Design & development",
        slug: "e-learning-platform",
        details: [
          "At Expert Petroleum Services I designed and built an e-learning platform that centralises learning resources and makes remote learning easier.",
          "Alongside it, I trained students in web-development fundamentals with a hands-on approach, and contributed to the technical design and architecture of the company’s projects, aiming for reliable, scalable solutions fitted to its needs.",
        ],
        highlights: [
          "Learning resources centralised in one place",
          "Remote learning made easier",
          "Architecture built for reliability and growth",
        ],
      },
      {
        title: "Employee & IP-phone manager — Sonelgaz SPE",
        year: "2023",
        stack: ["JEE", "Java"],
        description:
          "One tool for employee accounts and their IP phone lines, simplifying assignment tracking for the IT team.",
        role: "Web development · Internship",
        slug: "sonelgaz-ip-manager",
        details: [
          "During my web-development internship at SPE (Sonelgaz Algerian Power Company), I built an application that makes it easier to manage employee accounts and their IP phone lines.",
          "The goal was to gather the information in one tool and simplify assignment tracking for the IT team — a hands-on look at managing IT systems inside a large company.",
        ],
        highlights: [
          "Employee accounts and IP phone lines in one tool",
          "Simpler assignment tracking for the IT team",
          "Built with JEE (Java)",
        ],
      },
    ],
  },
  stack: {
    label: "05 / Stack by layer",
    title: "The stack I actually ship with",
    layers: [
      {
        name: "Languages",
        items: "Java, JavaScript / TypeScript, Python, Kotlin, SQL, C / C++",
      },
      {
        name: "Web, mobile & back-end",
        items:
          "Node.js, Next.js, React, Angular, Spring Boot, REST APIs, HTML / CSS / Tailwind CSS, Jetpack (Android)",
      },
      {
        name: "Data & AI",
        items:
          "PostgreSQL, relational modelling, SQL optimisation, Prisma, Hibernate, Machine Learning, Deep Learning (autoencoders), t-SNE, SHAP, HDBSCAN",
      },
      {
        name: "Architecture & tools",
        items:
          "Application architecture, OOP, UML, design patterns, testing, Docker, Git / GitHub, Linux & VPS",
      },
    ],
  },
  experience: {
    label: "06 / Experience",
    title: "From data models to production apps",
    present: "Present",
    roles: [
      {
        role: "Full-Stack Developer",
        company: "AMS Groupe",
        period: "Jan 2026 — Present",
        points: [
          "Involved in every stage of digital projects, from needs analysis to delivery",
          "Builds websites, SaaS applications and mobile apps, front-end and back-end",
          "Runs the infrastructure: VPS servers, domain names and cloud environments",
          "Owns the security of applications and websites",
        ],
      },
      {
        role: "Substitute Lecturer (part-time)",
        company: "UMBB",
        period: "Oct 2025 — Dec 2025",
        points: [
          "Taught algorithms and programming fundamentals to Science & Technology students",
          "Coached student groups on logic, core CS concepts and problem solving",
        ],
      },
      {
        role: "Web Developer",
        company: "Expert Petroleum Services",
        period: "Sep 2025 — Jan 2026",
        points: [
          "Designed and built an e-learning platform for remote training",
          "Trained students in web development with a hands-on approach",
          "Contributed to technical design and project architecture",
        ],
      },
      {
        role: "Data Science Intern",
        company: "Djezzy — Optimum Telecom Algérie",
        period: "Feb 2025 — Jul 2025",
        points: [
          "Unsupervised deep learning to detect SIM-card fraud on 1.5M real transactions",
          "Engineered 26 behavioural and temporal features; deep autoencoder reached AUC-ROC 0.885",
          "Used t-SNE, SHAP and HDBSCAN to explain results — 4,000+ anomaly patterns identified",
          "Work published at the IEEE AIIA 2025 international conference",
        ],
      },
      {
        role: "JEE Web Developer Intern",
        company: "SPE — Sonelgaz",
        period: "Feb 2023 — Apr 2023",
        points: [
          "Built an app to manage employee accounts and their IP phone lines",
          "Centralised the data and simplified assignment tracking for the IT team",
        ],
      },
    ],
  },
  recommendations: {
  label: "07c / Recommendations",
  title: "What colleagues and managers say",
  linkedin: "LinkedIn profile",
  items: [
    {
      name: "Nihad Ahmed Bensoltane",
      role: "Agency Manager & Marketing Expert",
      company: "AMS Agency",
      quote:
        "Working with Islam at AMS Agency, I could always count on his commitment and professionalism. He takes every project seriously, respects deadlines and turns our marketing needs into clean, reliable digital solutions.",
      image: "/nihad.jpeg",
      linkedin: "https://www.linkedin.com/in/nihad-ahmed-bensoltane-282585276/",
    },
    {
      name: "Oussama ABA",
      role: "Lead Graphic Designer · Branding, Packaging, UI/UX",
      company: "AMS Groupe",
      quote:
        "Collaborating with Islam at AMS Groupe was smooth and productive. He listens to design needs, respects the visual identity and turns mockups into faithful, polished interfaces.",
      image: "/oussama.jpeg",
      linkedin: "https://www.linkedin.com/in/oussama-aba-tlm/",
    },
  ],
},
  sites: {
    label: "07 / Live websites",
    title: "Sites running in production",
    visit: "Visit",
  },
    prototypes: {
    label: "07b / Prototypes",
    title: "Prototypes & concept sites",
    visit: "Visit",
  },
  research: {
    label: "08 / Research & education",
    title: "Published, and properly trained",
    paperTag: "IEEE AIIA 2025 · Boumerdès",
    paper:
      "Unsupervised Anomaly Detection for SIM Card Fraud Using Autoencoder-Based Reconstruction Error Analysis",
    paperNote:
      "Built during my internship at Djezzy: a deep autoencoder that flags unusual SIM-card behaviour without labelled fraud examples.",
    education: [
      {
        degree: "Master — Software Engineering & Information Processing",
        school: "University of Boumerdès",
        period: "2023 — 2025",
      },
      {
        degree: "Bachelor — Information Systems & Software Engineering",
        school: "University of Boumerdès",
        period: "2020 — 2023",
      },
      {
        degree: "Introduction to Web Development (certificate)",
        school: "GOMYCODE",
        period: "2022",
      },
    ],
  },
  process: {
    label: "09 / How I work",
    title: "Four steps, from brief to production",
    steps: [
      {
        name: "Analyse",
        text: "I start from your needs and constraints, not from a framework. Output: a clear scope and plan.",
      },
      {
        name: "Architect",
        text: "Data model, API contracts and the right stack for the size of the project — agreed before the first screen.",
      },
      {
        name: "Build",
        text: "Front-end and back-end together: modern, easy-to-use interfaces on top of reliable, fast services.",
      },
      {
        name: "Deploy & secure",
        text: "VPS, domain names, cloud environments and security handled — the product goes live and stays up.",
      },
    ],
  },
  faq: {
    label: "10 / FAQ",
    title: "Questions I get before the first call",
    ask: "Ask me a question",
    askNote: "If yours is not here, write — I’ll get back to you quickly.",
    items: [
      {
        q: "Do you take whole projects or join a team?",
        a: "Both. I can take a product from needs analysis to deployment on my own, or join an existing team on the front-end, back-end or data side.",
      },
      {
        q: "Which stack will you use?",
        a: "It depends on the size of the project: Node.js, Next.js and React for small and mid-size products; Java, Spring Boot and Angular for large ones; Kotlin and Jetpack for Android.",
      },
      {
        q: "Do you handle hosting and domains?",
        a: "Yes. I set up and manage VPS servers, domain names and cloud environments, and take care of application security.",
      },
      {
        q: "Can you help with data and machine learning?",
        a: "Yes. I build data pipelines and ML models in Python — my SIM-fraud detection work at Djezzy was published at IEEE AIIA 2025.",
      },
      {
        q: "Which languages do you work in?",
        a: "Arabic (native), French (bilingual) and English (B2).",
      },
    ],
  },
  project: {
    back: "All projects",
    overview: "Overview",
    highlights: "Highlights",
    stack: "Stack",
    role: "Role",
    year: "Year",
    view: "View project",
    next: "Next project",
    cta: "Have a similar project in mind?",
    ctaButton: "Let’s talk",
  },
  contactPage: {
    metaTitle: "Contact — Rahil Mohamed Islam",
    label: "Contact",
    title: "Let’s build something together.",
    intro: "Tell me about your project, your team or your idea. I’ll get back to you quickly.",
    direct: "Or reach me directly",
    location: "Algiers, Algeria · UTC+1",
    form: {
      name: "Name",
      email: "Email",
      company: "Company (optional)",
      message: "Message",
      messagePlaceholder: "What are you building, and how can I help?",
      send: "Send message",
      sending: "Sending…",
      success: "Thanks — your message has been sent. I’ll get back to you soon.",
      invalid: "Please enter your name, a valid email and a message.",
      error: "Your message couldn’t be sent. Please try again, or email me directly.",
    },
  },
  contact: {
    label: "11 / Contact",
    titleMuted: "Got a product that needs",
    titleStrong: "to start moving?",
    cta: "Send a message",
    rights: "All rights reserved",
  },
};

export type Dict = typeof en;

const fr: Dict = {
  meta: {
    title: "Rahil Mohamed Islam — Développeur Full Stack & Data Engineer",
    description:
      "Développeur full stack et data engineer basé à Alger. Sites web, SaaS et applications mobiles avec Node.js, Next.js, React, Java, Spring Boot et Angular.",
  },
  nav: {
    work: "Projets",
    stack: "Stack",
    experience: "Parcours",
    contact: "Contact",
    available: "Disponible",
    cta: "Me contacter",
    menu: "Menu",
    close: "Fermer",
  },
  hero: {
    headline: "Je construis des produits complets — de la base de données au dernier pixel.",
    intro:
      "Développeur full stack & data engineer. Node.js, Next.js et React pour les produits rapides ; Java, Spring Boot et Angular pour les grands projets. J’amène les idées jusqu’en production — web, SaaS et mobile.",
    seeWork: "Voir les projets",
    downloadCv: "Télécharger le CV",
  },
  about: {
    label: "02 / À propos",
    text: "Rahil Mohamed Islam — ingénieur en génie logiciel basé à Alger. Je conçois des sites web, des solutions SaaS et des applications mobiles avec deux stacks : Node.js, Next.js et React pour les petits et moyens projets, Java, Spring Boot et Angular pour les grands. Côté data, j’ai développé chez Djezzy un modèle non supervisé de détection de fraude SIM, publié à IEEE AIIA 2025.",
    facts: ["Alger, Algérie", "UTC+1", "Arabe · Français · Anglais"],
    available: "Disponible pour de nouveaux projets",
  },
  numbers: {
    label: "03 / En chiffres",
    title: "Des chiffres que je peux défendre",
    items: [
      { value: "1,5M", caption: "transactions analysées pour la détection de fraude SIM" },
      { value: "0,885", caption: "AUC-ROC de mon modèle d’autoencodeur profond" },
      { value: "7", caption: "projets mis en production" },
      { value: "4k+", caption: "typologies d’anomalies identifiées chez Djezzy" },
    ],
  },
  work: {
    label: "04 / Projets",
    title: "Des projets menés de bout en bout",
    items: [
      {
        title: "Plateforme B2B de maintenance",
        year: "",
        stack: ["Node.js", "Next.js", "Tailwind", "Prisma", "PostgreSQL"],
        description:
          "Les entreprises clientes soumettent et suivent leurs demandes ; les prestataires planifient et gèrent les interventions depuis un espace centralisé.",
        role: "Full stack",
        slug: "maintenance-platform",
        details: [
          "Une plateforme B2B de gestion des interventions de maintenance. Les entreprises clientes soumettent et suivent leurs demandes, tandis que les prestataires planifient et gèrent les interventions depuis un espace centralisé.",
          "Réunir les deux côtés dans un même outil améliore la traçabilité de chaque demande et la coordination des opérations.",
        ],
        highlights: [
          "Soumission et suivi des demandes pour les entreprises clientes",
          "Planification et gestion des interventions pour les prestataires",
          "Un espace central partagé par clients et prestataires",
          "Meilleure traçabilité et coordination des opérations",
        ],
      },
      {
        title: "SaaS de gestion immobilière + appli mobile",
        year: "",
        stack: ["SaaS", "Kotlin", "Jetpack"],
        description:
          "Gérer les biens, signaler les pannes et suivre les interventions. Centralise le suivi des résidences pour un service plus réactif.",
        role: "Web + Android",
        slug: "property-management",
        details: [
          "Une solution SaaS de gestion immobilière associée à une application mobile : gérer les biens, signaler les pannes et suivre les interventions de bout en bout.",
          "La plateforme centralise le suivi du parc immobilier et des résidences, améliorant la réactivité des gestionnaires et la qualité du service aux résidents.",
        ],
        highlights: [
          "Gestion des biens et des résidences",
          "Signalement des pannes depuis l’appli mobile",
          "Suivi des interventions",
          "Appli Android en Kotlin et Jetpack",
        ],
      },
      {
        title: "SaaS de gestion RH",
        year: "",
        stack: ["Java", "Spring Boot", "Angular"],
        description:
          "Dossiers du personnel, présences, congés et absences au même endroit — moins d’administratif, des données RH plus fiables.",
        role: "Full stack",
        slug: "hr-management",
        details: [
          "Une solution SaaS de gestion des ressources humaines qui centralise les dossiers du personnel, le suivi des présences, les congés et les absences.",
          "Elle simplifie les tâches administratives, améliore la fiabilité des données et facilite le suivi RH au quotidien. Construite sur ma stack grands projets : Java, Spring Boot et Angular.",
        ],
        highlights: [
          "Dossiers du personnel centralisés",
          "Suivi des présences",
          "Gestion des congés et absences",
          "Moins d’administratif, des données plus fiables",
        ],
      },
      {
        title: "Détection de fraude SIM — Djezzy",
        year: "2025",
        stack: ["Python", "Autoencodeurs", "SHAP", "HDBSCAN", "t-SNE"],
        description:
          "Deep learning non supervisé sur 1,5 M de transactions réelles, sans fraudes étiquetées. 26 indicateurs, AUC-ROC de 0,885.",
        role: "Data science · Stage",
        slug: "sim-fraud-detection",
        details: [
          "Lors de mon stage en ingénierie des données chez Djezzy, j’ai travaillé sur la détection des fraudes commerciales liées aux cartes SIM grâce à l’IA et au machine learning. J’ai développé une approche de deep learning non supervisé capable d’identifier des comportements inhabituels dans des transactions réelles, sans dépendre d’exemples de fraude étiquetés.",
          "À partir de 1,5 million de transactions, j’ai conçu 26 indicateurs comportementaux et temporels, puis comparé plusieurs architectures d’autoencodeurs à un modèle de référence. L’autoencodeur profond a obtenu les meilleurs résultats, avec une AUC-ROC de 0,885. J’ai utilisé t-SNE, SHAP et HDBSCAN pour visualiser, interpréter et analyser les anomalies détectées, identifiant plus de 4 000 typologies d’anomalies.",
          "Ces travaux ont donné lieu à une publication, « Unsupervised Anomaly Detection for SIM Card Fraud Using Autoencoder-Based Reconstruction Error Analysis », présentée à la conférence internationale IEEE AIIA 2025 à Boumerdès, en Algérie.",
        ],
        highlights: [
          "1,5 M de transactions réelles",
          "26 indicateurs comportementaux et temporels",
          "AUC-ROC de 0,885 avec un autoencodeur profond",
          "Plus de 4 000 typologies d’anomalies",
          "Publié à IEEE AIIA 2025",
        ],
      },
      {
        title: "Plateforme d’e-learning — Expert Petroleum Services",
        year: "2025",
        stack: ["Plateforme web"],
        description:
          "Centralise les ressources pédagogiques et facilite l’apprentissage à distance des apprenants de l’entreprise.",
        role: "Conception & développement",
        slug: "e-learning-platform",
        details: [
          "Chez Expert Petroleum Services, j’ai conçu et développé une plateforme d’e-learning qui centralise les ressources pédagogiques et facilite l’apprentissage à distance.",
          "En parallèle, j’ai formé des étudiants aux bases du développement web avec une approche pratique, et participé à la conception technique et à l’architecture des projets, en visant des solutions fiables, évolutives et adaptées aux besoins de l’entreprise.",
        ],
        highlights: [
          "Ressources pédagogiques centralisées",
          "Apprentissage à distance facilité",
          "Architecture pensée pour la fiabilité et l’évolution",
        ],
      },
      {
        title: "Gestion des comptes & lignes IP — Sonelgaz SPE",
        year: "2023",
        stack: ["JEE", "Java"],
        description:
          "Un seul outil pour les comptes des employés et leurs lignes téléphoniques IP, avec un suivi des affectations simplifié.",
        role: "Développement web · Stage",
        slug: "sonelgaz-ip-manager",
        details: [
          "Lors de mon stage en développement web à la SPE (SONELGAZ Algerian Power Company), j’ai développé une application facilitant la gestion des comptes des employés et de leurs lignes téléphoniques IP.",
          "L’objectif était de regrouper les informations dans un même outil et de simplifier le suivi des affectations pour l’équipe informatique — une mise en pratique concrète de la gestion des systèmes IT en entreprise.",
        ],
        highlights: [
          "Comptes des employés et lignes IP dans un seul outil",
          "Suivi des affectations simplifié pour l’équipe IT",
          "Développé en JEE (Java)",
        ],
      },
    ],
  },
  stack: {
    label: "05 / Stack par couche",
    title: "La stack que j’utilise vraiment",
    layers: [
      {
        name: "Langages",
        items: "Java, JavaScript / TypeScript, Python, Kotlin, SQL, C / C++",
      },
      {
        name: "Web, mobile & back-end",
        items:
          "Node.js, Next.js, React, Angular, Spring Boot, API REST, HTML / CSS / Tailwind CSS, Jetpack (Android)",
      },
      {
        name: "Data & IA",
        items:
          "PostgreSQL, modélisation relationnelle, optimisation SQL, Prisma, Hibernate, Machine Learning, Deep Learning (autoencodeurs), t-SNE, SHAP, HDBSCAN",
      },
      {
        name: "Architecture & outils",
        items:
          "Architecture applicative, POO, UML, design patterns, tests, Docker, Git / GitHub, Linux & VPS",
      },
    ],
  },
  experience: {
    label: "06 / Expérience",
    title: "Des modèles de données aux applis en production",
    present: "Aujourd’hui",
    roles: [
      {
        role: "Développeur Full Stack",
        company: "AMS Groupe",
        period: "Janv. 2026 — Aujourd’hui",
        points: [
          "Participe à toutes les étapes des projets, de l’analyse des besoins à la mise en place",
          "Conçoit et développe sites web, applications SaaS et mobiles, front-end et back-end",
          "Gère l’infrastructure : serveurs VPS, noms de domaine et environnements cloud",
          "Veille à la sécurité des applications et des sites web",
        ],
      },
      {
        role: "Professeur remplaçant (temps partiel)",
        company: "UMBB",
        period: "Oct. 2025 — Déc. 2025",
        points: [
          "Enseignement de l’algorithmique et des bases de la programmation en Sciences et Techniques",
          "Accompagnement des groupes sur la logique, les concepts fondamentaux et la résolution de problèmes",
        ],
      },
      {
        role: "Développeur web",
        company: "Expert Petroleum Services",
        period: "Sept. 2025 — Janv. 2026",
        points: [
          "Conception et développement d’une plateforme d’e-learning",
          "Formation des étudiants aux bases du développement web, approche pratique",
          "Participation à la conception technique et à l’architecture des projets",
        ],
      },
      {
        role: "Data science (stage)",
        company: "Djezzy — Optimum Telecom Algérie",
        period: "Févr. 2025 — Juil. 2025",
        points: [
          "Deep learning non supervisé pour détecter la fraude SIM sur 1,5 M de transactions réelles",
          "26 indicateurs comportementaux et temporels ; autoencodeur profond à 0,885 d’AUC-ROC",
          "t-SNE, SHAP et HDBSCAN pour l’interprétation — plus de 4 000 typologies d’anomalies",
          "Travaux publiés à la conférence internationale IEEE AIIA 2025",
        ],
      },
      {
        role: "Développeur web JEE (stage)",
        company: "SPE — Sonelgaz",
        period: "Févr. 2023 — Avr. 2023",
        points: [
          "Application de gestion des comptes des employés et de leurs lignes téléphoniques IP",
          "Centralisation des informations et suivi des affectations simplifié pour l’équipe IT",
        ],
      },
    ],
  },
  recommendations: {
  label: "06/ Recommandations",
  title: "Ce que disent mes collègues et supérieurs",
  linkedin: "Profil LinkedIn",
  items: [
    {
      name: "Nihad Ahmed Bensoltane",
      role: "Responsable d’agence & Expert marketing",
      company: "AMS Agency",
      quote:
        "En travaillant avec Islam chez AMS Agency, j’ai toujours pu compter sur son engagement et son professionnalisme. Il prend chaque projet au sérieux, respecte les délais et transforme nos besoins marketing en solutions digitales propres et fiables.",
      image: "/nihad.jpeg",
      linkedin: "https://www.linkedin.com/in/nihad-ahmed-bensoltane-282585276/",
    },
    {
      name: "Oussama ABA",
      role: "Lead Graphic Designer · Branding, Packaging, UI/UX",
      company: "AMS Groupe",
      quote:
        "La collaboration avec Islam chez AMS Groupe a été fluide et productive. Il écoute les besoins de design, respecte l’identité visuelle et transforme les maquettes en interfaces fidèles et soignées.",
      image: "/oussama.jpeg",
      linkedin: "https://www.linkedin.com/in/oussama-aba-tlm/",
    },
  ],
},
  sites: {
    label: "07 / Sites en ligne",
    title: "Des sites en production",
    visit: "Visiter",
  },
    prototypes: {
    label: "07b / Prototypes",
    title: "Prototypes & sites concept",
    visit: "Visiter",
  },
  research: {
    label: "08 / Recherche & formation",
    title: "Publié, et bien formé",
    paperTag: "IEEE AIIA 2025 · Boumerdès",
    paper:
      "Unsupervised Anomaly Detection for SIM Card Fraud Using Autoencoder-Based Reconstruction Error Analysis",
    paperNote:
      "Issu de mon stage chez Djezzy : un autoencodeur profond qui repère les comportements SIM inhabituels sans exemples de fraude étiquetés.",
    education: [
      {
        degree: "Master — Ingénierie du logiciel et traitement de l’information",
        school: "Université de Boumerdès",
        period: "2023 — 2025",
      },
      {
        degree: "Licence — Ingénierie des systèmes d’information et logiciels",
        school: "Université de Boumerdès",
        period: "2020 — 2023",
      },
      {
        degree: "Introduction au développement web (certificat)",
        school: "GOMYCODE",
        period: "2022",
      },
    ],
  },
  process: {
    label: "09 / Méthode",
    title: "Quatre étapes, du besoin à la production",
    steps: [
      {
        name: "Analyser",
        text: "Je pars de vos besoins et de vos contraintes, pas d’un framework. Résultat : un périmètre et un plan clairs.",
      },
      {
        name: "Architecturer",
        text: "Modèle de données, contrats d’API et la bonne stack selon la taille du projet — validés avant le premier écran.",
      },
      {
        name: "Construire",
        text: "Front-end et back-end ensemble : des interfaces modernes et simples sur des services fiables et performants.",
      },
      {
        name: "Déployer & sécuriser",
        text: "VPS, noms de domaine, cloud et sécurité pris en charge — le produit est en ligne et y reste.",
      },
    ],
  },
  faq: {
    label: "10 / FAQ",
    title: "Les questions avant le premier appel",
    ask: "Poser une question",
    askNote: "Si la vôtre n’est pas ici, écrivez-moi — je réponds rapidement.",
    items: [
      {
        q: "Vous prenez des projets complets ou vous rejoignez une équipe ?",
        a: "Les deux. Je peux mener un produit de l’analyse des besoins au déploiement, ou renforcer une équipe côté front-end, back-end ou data.",
      },
      {
        q: "Quelle stack allez-vous utiliser ?",
        a: "Selon la taille du projet : Node.js, Next.js et React pour les petits et moyens ; Java, Spring Boot et Angular pour les grands ; Kotlin et Jetpack pour Android.",
      },
      {
        q: "Vous gérez l’hébergement et les noms de domaine ?",
        a: "Oui. J’installe et je gère les serveurs VPS, les noms de domaine et les environnements cloud, ainsi que la sécurité des applications.",
      },
      {
        q: "Pouvez-vous aider sur la data et le machine learning ?",
        a: "Oui. Je construis des modèles de ML en Python — mes travaux sur la fraude SIM chez Djezzy ont été publiés à IEEE AIIA 2025.",
      },
      {
        q: "Dans quelles langues travaillez-vous ?",
        a: "Arabe (langue maternelle), français (bilingue) et anglais (B2).",
      },
    ],
  },
  project: {
    back: "Tous les projets",
    overview: "Aperçu",
    highlights: "Points clés",
    stack: "Stack",
    role: "Rôle",
    year: "Année",
    view: "Voir le projet",
    next: "Projet suivant",
    cta: "Un projet similaire en tête ?",
    ctaButton: "Parlons-en",
  },
  contactPage: {
    metaTitle: "Contact — Rahil Mohamed Islam",
    label: "Contact",
    title: "Construisons quelque chose ensemble.",
    intro: "Parlez-moi de votre projet, de votre équipe ou de votre idée. Je vous réponds rapidement.",
    direct: "Ou contactez-moi directement",
    location: "Alger, Algérie · UTC+1",
    form: {
      name: "Nom",
      email: "E-mail",
      company: "Entreprise (facultatif)",
      message: "Message",
      messagePlaceholder: "Que construisez-vous, et comment puis-je aider ?",
      send: "Envoyer le message",
      sending: "Envoi…",
      success: "Merci — votre message a bien été envoyé. Je vous réponds très vite.",
      invalid: "Merci d’indiquer votre nom, un e-mail valide et un message.",
      error: "Votre message n’a pas pu être envoyé. Réessayez, ou écrivez-moi directement.",
    },
  },
  contact: {
    label: "11 / Contact",
    titleMuted: "Un produit qui doit",
    titleStrong: "enfin avancer ?",
    cta: "Envoyer un message",
    rights: "Tous droits réservés",
  },
};

const dictionaries: Record<Locale, Dict> = { en, fr };

export const getDictionary = (locale: Locale) => dictionaries[locale];
