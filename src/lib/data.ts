import {
  Database,
  Layout,
  Globe,
  Server,
  ShieldCheck,
  ShoppingCart,
  Microscope,
  Landmark,
  FileSpreadsheet,
} from "lucide-react";

export const siteConfig = {
  name: "Jeroxzi Viduya",
  role: "Software Engineer · Full-Stack Developer",
  location: "Bulacan, Philippines",
  email: "jeroxzi.viduya.dev@gmail.com",
  phone: "+63 935 833 3705",
  github: "https://github.com/jeroxzi",
  portfolio: "https://jeroxzi.github.io/JeroxziPortfolio",
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
];

export const skills = [
  {
    category: "Frontend Specialty",
    icon: Layout,
    color: "purple",
    items: [
      "React.js", "Next.js", "Vue.js", "TypeScript", "JavaScript ES6+",
      "Tailwind CSS", "SCSS", "HTML5 / CSS3", "Blazor", "Electron.js",
      "Redux / Zustand", "TanStack Query", "GraphQL", "REST API",
      "WCAG 2.1 AA", "Responsive Design"
    ]
  },
  {
    category: "Backend & Databases",
    icon: Database,
    color: "cyan",
    items: [
      "Node.js", "Express", "ASP.NET / C#", "VB.NET", "Strapi",
      "Supabase", "Firebase", "PostgreSQL", "MS SQL Server",
      "MongoDB", "MySQL", "SQLite", "Row-Level Security", "SAP ABAP"
    ]
  },
  {
    category: "Testing & Quality",
    icon: ShieldCheck,
    color: "pink",
    items: [
      "Jest", "React Testing Library", "Unit / Integration Testing",
      "ESLint / Prettier", "Code Reviews", "Lighthouse Audits",
      "Core Web Vitals", "Bundle Analysis", "Mentoring",
      "Architecture Decisions", "Agile / Scrum", "Technical Documentation",
      "Design Systems", "OWASP Top-10"
    ]
  },
  {
    category: "DevOps & Tools",
    icon: Server,
    color: "green",
    items: [
      "Git / GitHub / Bitbucket", "GitHub Actions (CI/CD)", "Docker",
      "Vercel", "Vite / Webpack", "Shopify Liquid", "Headless CMS",
      "Conversion Rate Optimization", "Unity (2D/3D/AR)", "Figma", "Postman"
    ]
  }
];

export const experience = [
  {
    role: "Freelance Full-Stack Developer",
    company: "Independent / Self-Employed",
    period: "Jan 2026 – Apr 2026",
    description: [
      "Architected and shipped <strong>3 production full-stack applications in 4 months</strong> across healthcare, retail, and non-profit verticals — owning UI/UX design, frontend, backend, database modeling, and Vercel deployment for each.",
      "Built <strong>CompMed</strong> marketing landing page with Next.js, TypeScript, Tailwind CSS, and Supabase — achieving strong Lighthouse performance scores through SSG and image optimization. Live: <a href='https://centraloccupationalmedicineproviders.com' target='_blank' rel='noopener noreferrer' class='text-accent-light hover:underline'>centraloccupationalmedicineproviders.com</a>",
      "Contributed to CompMed's <strong>Laboratory System</strong> using ASP.NET and Blazor — delivering secure data entry and reporting modules compliant with healthcare data-handling standards.",
      "Designed and shipped <strong>Jodimar Inventory System</strong> (Next.js + Supabase) — full-stack platform with stock tracking, sales recording, and reporting modules supporting daily operations.",
      "Led full-stack architecture for <strong>CrossWorld Church web platform</strong> — including real-time chat (Supabase Realtime), mentoring workflows, and a complete LMS — designed Postgres schema and RLS policies. Live: <a href='https://crossworld-church-web-app.vercel.app' target='_blank' rel='noopener noreferrer' class='text-accent-light hover:underline'>crossworld-church-web-app.vercel.app</a>",
      "Built a library of reusable Tailwind components and standardized form/validation patterns across all 3 client projects, substantially cutting feature delivery time on later modules."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "ASP.NET", "Blazor", "Vercel", "Postgres RLS"]
  },
  {
    role: "Frontend Web Developer (Mid-Level)",
    company: "Parallel Quantum Corp.",
    period: "Sept 2024 – Sept 2025",
    description: [
      "Engineered responsive web and mobile applications in React.js, Next.js, and TypeScript — significantly improving Lighthouse Performance scores and reducing JS bundle size through code-splitting, lazy-loading, and bundle analysis.",
      "Built and maintained a <strong>reusable component library</strong> used across multiple product squads, substantially reducing duplicate code and accelerating new-feature delivery.",
      "Wrote unit and integration tests using <strong>Jest and React Testing Library</strong> for critical UI flows, achieving 85%+ test coverage on owned components and noticeably reducing UI regression bugs.",
      "Implemented <strong>SSR and SSG</strong> strategies in Next.js to improve SEO and time-to-interactive, meaningfully cutting initial page load time and improving Core Web Vitals scores.",
      "Mentored junior developers through pair programming and code reviews — establishing component patterns and TypeScript conventions adopted team-wide.",
      "Ensured cross-browser compatibility and <strong>WCAG 2.1 AA</strong> accessibility compliance through semantic HTML, ARIA attributes, keyboard-navigation testing, and Lighthouse audits."
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Jest", "React Testing Library", "SSR/SSG", "WCAG 2.1"]
  },
  {
    role: "Software Engineer, Full-Stack (Mid-Level)",
    company: "SLI Inc. · Project: RCBC",
    period: "Mar 2024 – Sept 2024",
    description: [
      "Delivered multiple secure, banking-grade <strong>Blazor modules</strong> using ASP.NET and MS SQL Server for one of the Philippines' top universal banks (Rizal Commercial Banking Corporation), supporting millions of customer accounts.",
      "Implemented financial-industry security standards across all interfaces: input validation, RBAC, audit logging, and <strong>OWASP Top-10 mitigations</strong> — passing internal security review on first submission.",
      "Optimized Blazor data-binding patterns and database queries to substantially reduce dashboard render times for high-traffic banking dashboards.",
      "Drove technical discussions with senior architects on Blazor component patterns and translated complex banking requirements from business analysts into clean, maintainable, testable UI workflows."
    ],
    tech: ["ASP.NET", "Blazor", "MS SQL Server", "C#", "OWASP", "RBAC"]
  },
  {
    role: "Web Developer, Freelance (Mid-Level)",
    company: "Independent / Self-Employed",
    period: "Jan 2023 – Mar 2024",
    description: [
      "Designed and developed custom <strong>Shopify eCommerce storefronts</strong> for international clients (Zoe Kratzmann, Dunne Constructions) using Shopify Liquid, JavaScript, and Tailwind CSS.",
      "Implemented mobile-first, fully responsive layouts achieving strong Lighthouse mobile scores and consistent UX across desktop, tablet, and mobile devices.",
      "Customized Shopify themes, product pages, and checkout flows to match brand guidelines and noticeably improve conversion rates through faster page loads and clearer CTAs."
    ],
    tech: ["Shopify Liquid", "JavaScript", "Tailwind CSS", "CRO", "Mobile-First"]
  },
  {
    role: "Software Engineer (Mid-Level)",
    company: "Intervenn Biosciences",
    period: "Jan 2021 – Nov 2022",
    description: [
      "Delivered frontend for <strong>3 R&D platforms</strong> (Project Elevate, Project Herald AR, Project Lumina) using React.js and Vue.js, supporting biomarker research workflows used by research scientists.",
      "Built interactive dashboards and data visualization components processing large biological datasets — optimized rendering with <strong>virtualization and memoization</strong> to handle high data volumes without UI lag.",
      "Pioneered Augmented Reality (AR) web features that became a <strong>key product differentiator</strong> in biotech demos and stakeholder presentations.",
      "Mentored junior developers, led weekly code reviews, and established shared component patterns adopted across all 3 platforms — improving code consistency and onboarding speed."
    ],
    tech: ["React.js", "Vue.js", "AR Web", "Data Visualization", "Unity"]
  },
  {
    role: "Web Developer",
    company: "Pro-Solution, Inc.",
    period: "2020 – 2021",
    description: [
      "Built the frontend of the <strong>Accounting Management System (AMS)</strong> as a desktop-grade web application using React.js and Electron.js, deployed to accounting professionals across the firm.",
      "Designed numerous complex form workflows, data tables, and reporting modules tailored to accounting and finance use cases, substantially reducing manual data entry time.",
      "Leveraged Electron's IPC bridge to implement <strong>local filesystem access and offline capabilities</strong>, ensuring that sensitive financial data remained accessible during network interruptions.",
      "Optimized large-scale data rendering using <strong>virtualized lists</strong>, allowing accountants to scroll through 50,000+ transaction entries with zero performance lag.",
      "Collaborated with senior auditors to implement automated <strong>validation logic based on Philippine Financial Reporting Standards (PFRS)</strong> within the application's core modules."
    ],
    tech: ["React.js", "Electron.js", "JavaScript", "Data Tables", "Desktop Web"]
  },
  {
    role: "SAP ABAP Developer",
    company: "DDT Konstract, Inc.",
    period: "2018 – 2020",
    description: [
      "Developed and maintained enterprise SAP applications using ABAP alongside web modules built in ASP.NET — built internal tools and admin interfaces that streamlined operational reporting across multiple business units. Live: <a href='https://ddtkonstract.com' target='_blank' rel='noopener noreferrer' class='text-accent-light hover:underline'>ddtkonstract.com</a>",
      "Engineered custom <strong>ABAP reports and SmartForms</strong> for procurement and logistics modules, improving internal document generation speed by 60%.",
      "Architected a custom bridge between SAP ECC and an external ASP.NET portal, enabling remote site engineers to submit real-time material requests from mobile devices.",
      "Reduced manual data reconciliation errors by 25% by implementing automated <strong>BAPI and RFC validation checks</strong> within the construction material management system.",
      "Maintained legacy VB.NET applications and successfully migrated critical business logic to modern C#/.NET environments to ensure long-term system stability."
    ],
    tech: ["SAP ABAP", "ASP.NET", "Internal Tools", "Enterprise Software"]
  }
];

export const projects = [
  {
    title: "CrossWorld Church Platform",
    desc: "Full-stack church web platform with real-time chat, member profiling, mentoring workflows, and LMS.",
    stack: ["Next.js", "Supabase", "Tailwind", "Postgres RLS"],
    link: "https://crossworld-church-web-app.vercel.app",
    badge: "Live",
    icon: Globe
  },
  {
    title: "CompMed Healthcare Platform",
    desc: "Healthcare marketing landing page and internal Laboratory System. Lab system built with ASP.NET and Blazor.",
    stack: ["Next.js", "TypeScript", "Supabase", "ASP.NET", "Blazor"],
    link: "https://centraloccupationalmedicineproviders.com",
    badge: "Live",
    icon: Microscope
  },
  {
    title: "Jodimar Inventory System",
    desc: "Full-stack inventory platform with stock tracking, sales recording, and reporting for local grocery business.",
    stack: ["Next.js", "Supabase", "Tailwind", "TypeScript"],
    link: "#",
    badge: "Full-Stack",
    icon: FileSpreadsheet
  },
  {
    title: "Intervenn R&D Platforms",
    desc: "Frontend for 3 biotech platforms supporting biomarker research. Built data viz and AR features.",
    stack: ["React.js", "Vue.js", "AR Web", "Unity"],
    link: "#",
    badge: "Biotech",
    icon: Microscope
  },
  {
    title: "RCBC Banking Modules",
    desc: "Secure, banking-grade Blazor modules. Implemented OWASP Top-10 and optimized query performance.",
    stack: ["Blazor", "ASP.NET", "MS SQL", "OWASP"],
    link: "#",
    badge: "Fintech",
    icon: Landmark
  },
  {
    title: "Shopify International Storefronts",
    desc: "Custom storefronts for international clients with optimized checkout flows and high performance.",
    stack: ["Shopify Liquid", "JavaScript", "Tailwind", "CRO"],
    link: "https://www.zoekratzmann.com/",
    badge: "eCommerce",
    icon: ShoppingCart
  },
  {
    title: "Dunne Constructions",
    desc: "Premium landing page for a construction and renovation company, focusing on high-end visual presentation and performance.",
    stack: ["Shopify Liquid", "JavaScript", "SCSS", "Responsive Design"],
    link: "https://www.dunneconstructions.com.au/",
    badge: "Architecture",
    icon: Layout
  }
];
