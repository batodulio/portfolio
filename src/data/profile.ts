/**
 * Single source of truth for all site content.
 * Every fact below comes from Profile.pdf (LinkedIn export) — nothing invented.
 */

export const profile = {
  name: "Batman Odulio",
  firstName: "Batman",
  lastName: "Odulio",
  headline: "Senior IT Product Manager at Procter & Gamble",
  role: "Senior IT Product Manager",
  company: "Procter & Gamble",
  location: "Metro Manila, Philippines",
  linkedin: "https://www.linkedin.com/in/batmanodulio",
  summary:
    "Experienced in Digital Product Management, Data Management, Project Management, and IT Operations. Recognized for agility, a growth mindset, and strong leadership in collaborating with diverse global teams and stakeholders.",
  batLine: "…and yes, I am Batman. Can you guess my brother's name?",
};

export interface Pillar {
  title: string;
  kicker: string;
  body: string;
}

export const pillars: Pillar[] = [
  {
    title: "IT Product Manager",
    kicker: "Strategy → Delivery",
    body: "Product strategy and delivery for global supply chain technology — warehouse platforms in distribution centers worldwide, owned from roadmap to Total Cost of Ownership.",
  },
  {
    title: "Technology Leader",
    kicker: "Cloud & Architecture",
    body: "Cloud solution architect by background — Azure platforms, TOGAF-aligned standards, and security compliance stewarded at global scale.",
  },
  {
    title: "Software Builder",
    kicker: "Engineering Roots",
    body: "APIs, CI/CD, QA automation, and data visualization — plus published deep-learning research on Philippine language accent recognition.",
  },
];

export interface PassionProject {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  tech: string[];
  liveUrl: string;
  liveLabel: string;
  repoUrl?: string;
  accent: "blue" | "green";
}

export const passionProjects: PassionProject[] = [
  {
    name: "IceBrk",
    logo: "icebrk-logo.png",
    tagline: "Launch a ready-made, fully brandable party game in minutes.",
    description:
      "A web platform of customizable icebreaker and party games for corporate events, schools, and social gatherings — each game ships with a live Game Arena, a customization studio, and shared utilities like timers, team setup, and scorecards. Library spans Jeopardy, Would You Rather, Two Truths and a Lie, Bingo, and Scavenger Hunt.",
    tech: ["React", "Vite", "TypeScript", "Vercel"],
    liveUrl: "https://icebrk.vercel.app/",
    liveLabel: "Play it live",
    repoUrl: "https://github.com/batodulio/icebrk",
    accent: "blue",
  },
  {
    name: "RunWalkRun",
    logo: "rwr-logo.png",
    tagline: "Structure every run into timed run–walk–run intervals.",
    description:
      "A lightweight interval-training companion built around the run-walk-run method: set your run and walk durations, follow the timed cues, and build endurance while going the distance with less strain.",
    tech: ["React", "Vite", "TypeScript", "PostgreSQL", "Vercel"],
    liveUrl: "https://runwalkrun.vercel.app/",
    liveLabel: "Open the app",
    accent: "green",
  },
];

export const techMarquee = [
  "Microsoft Azure",
  "Azure DevOps",
  "CI/CD Pipelines",
  "GitHub",
  "PowerBI",
  "Application Insights",
  "App Services",
  "Key Vaults",
  "Ansible",
  "Postman",
  "TOGAF",
  "Scrum",
  "SAFe 5",
  "APIs",
  "Data Pipelines",
  "Warehouse Management Systems",
];

export interface Role {
  title: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface Company {
  name: string;
  tenure?: string;
  roles: Role[];
}

export const experience: Company[] = [
  {
    name: "Procter & Gamble",
    tenure: "5 years 1 month",
    roles: [
      {
        title: "Senior Product Manager — Global Manufacturing IWS",
        period: "July 2026 – Present",
        bullets: [
          "Driving digital product strategy for Global Manufacturing IWS, integrating people, process, and technology to deliver measurable operational excellence.",
        ],
      },
      {
        title: "Senior IT Product Manager, Physical Distribution — Warehouse Management Systems",
        period: "July 2021 – July 2026",
        location: "Manila",
        bullets: [
          "Spearheaded the product management and delivery of a Global Warehouse solution that resulted in $MM USD cost savings and productivity improvements — 200% growth in product adoption, from 30 warehouse sites to over 100 fulfillment and distribution centers globally, covering all P&G markets.",
          "Led the integration of the product with over 50 consuming applications for automation, reporting, and AI — critical for unleashing the maximum potential of warehousing data and enabling data-driven decision-making.",
          "Managed the Total Cost of Ownership (TCO) of the product, lowering implementation costs by 70% and delivering $MM USD in annual cost savings.",
          "Optimized product implementation delivery by 50%, reducing installation time from 4 weeks to 2 weeks by leveraging Azure CI/CD Pipelines and GitHub.",
          "Ensured 100% compliance with Technical Security, Cloud Security, and Vulnerability Protection policies — rolling out mitigations across 100+ sites with zero negative impact on operations.",
          "Served as Subject Matter Expert of the product for enterprise-wide initiatives and service line priorities.",
          "Mentored a cross-functional team of 30+ external and vendor resources, fostering a collaborative environment to execute business-critical initiatives.",
        ],
      },
      {
        title: "Cloud Solution Architect",
        period: "July 2021 – July 2022",
        location: "Manila",
        bullets: [
          "Championed Warehouse architectural standards aligned with enterprise frameworks (e.g., TOGAF), driving improvements in compliance, performance, and maintainability across 20+ warehousing applications.",
          "Architected and optimized Azure-based solutions — dynamic gateways, failover mechanisms, and robust data pipelines — streamlining global supply chain operations and reducing operational costs.",
          "Engineered seamless integration of on-premise Warehouse Management Systems with Microsoft Azure Cloud, achieving real-time data synchronization with enhanced scalability and security.",
          "Acted as Platform Manager accountable for 200+ Azure resource groups and 1,000+ resources, including 400+ databases, adopted across 90+ sites at 100% compliance with cloud and network standards.",
        ],
      },
    ],
  },
  {
    name: "Chevron",
    tenure: "2 years 8 months",
    roles: [
      {
        title: "Software Engineer, Supply Chain",
        period: "November 2020 – June 2021",
        location: "Philippines",
        bullets: [
          "Provided expert-level support for advanced application configuration and systems knowledge — a crucial role in incident investigation and break-fix resolution for critical issues.",
          "Managed application services for continuous deployment, collaborating globally with vendors, solution architects, and application users to ship enhancements and fixes that increased business application efficiency.",
        ],
      },
      {
        title: "Software Engineer, Drilling and Completions",
        period: "June 2019 – January 2021",
        bullets: [
          "Orchestrated the end-to-end API product lifecycle — planning, development, operations — with Azure-based CI/CD using Azure DevOps, App Services, Key Vaults, Ansible, and Application Insights.",
          "Led API Quality Assurance through automated, load, performance, smoke, and unit testing protocols.",
          "Directed Scrum ceremonies and practices, and developed data visualization solutions with Application Insights and PowerBI to monitor application consumption and status.",
        ],
      },
      {
        title: "Software Engineer Intern",
        period: "November 2018 – May 2019",
        location: "Ayala, Makati, Philippines",
        bullets: [
          "Spearheaded data visualization solutions with Azure Application Insights and PowerBI, enabling real-time monitoring of application consumption and status — empowering leadership with data-driven decisions.",
        ],
      },
    ],
  },
  {
    name: "National University Philippines",
    roles: [
      {
        title: "Student Council President — College of Computing and Information Technologies",
        period: "January 2018 – January 2019",
        bullets: [
          "Represented the organization in all university activities and oversaw key events — software festivals, data privacy seminars, and charitable donation drives — enriching student experience and community welfare.",
        ],
      },
    ],
  },
];

export const topSkills = ["Freelancing", "Scrum", "Total Cost of Ownership"];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Product & Delivery",
    skills: [
      "Digital Product Management",
      "Project Management",
      "Scrum",
      "SAFe 5",
      "Total Cost of Ownership",
      "Portfolio Management",
      "Product Adoption & Rollout",
    ],
  },
  {
    title: "Cloud & Platform",
    skills: [
      "Microsoft Azure",
      "Azure DevOps",
      "CI/CD Pipelines",
      "GitHub",
      "App Services",
      "Key Vaults",
      "Ansible",
      "Cloud Architecture",
      "TOGAF",
    ],
  },
  {
    title: "Data & APIs",
    skills: [
      "Data Management",
      "Data Pipelines",
      "PowerBI",
      "Application Insights",
      "API Lifecycle",
      "Postman",
      "Deep Learning Research",
    ],
  },
  {
    title: "Governance & Operations",
    skills: [
      "IT Operations",
      "IT Audit",
      "Compliance & Security Standards",
      "Business Impact Analysis",
      "Issue / Exception Management",
      "Vulnerability Protection",
    ],
  },
];

export const certifications = [
  "Microsoft Certified: Azure Developer Associate",
  "Certified SAFe® 5 Scrum Master",
  "Microsoft Certified: Azure Fundamentals",
  "API — Postman Student Expert",
  "Microsoft Innovative Educator",
];

/** Featured recognition — rendered as a celebration moment. */
export const ceoAward = {
  title: "P&G CEO Award",
  detail: "Recipient for FY 2023–24 — the highest form of recognition at Procter & Gamble.",
};

export const honors = [
  "P&G CEO Award (FY 2023–24)",
  "Cum Laude",
  "Leadership Excellence Award",
  "SM Scholar (Henry Sy Sr. Scholar)",
  "Travel City Scholar",
  "Certified Microsoft Innovative Educator",
];

export interface Publication {
  title: string;
  tag: string;
}

export const publications: Publication[] = [
  {
    title: "Developing a Speaker Accent Recognition for Bikol Language Using Deep Learning",
    tag: "Deep Learning",
  },
  {
    title: "Framework in Developing Accent Recognition for Philippine Languages Using Deep Learning",
    tag: "Deep Learning",
  },
  {
    title: "A Speaker Accent Recognition System for Filipino Language",
    tag: "Speech Recognition",
  },
  {
    title: "PLANTASTIC: A Web-Based E-Commerce System for Medicinal Plants in the Philippines",
    tag: "Web Platform",
  },
];

export interface SpeakingEngagement {
  role: string;
  event: string;
  detail: string;
  url: string;
}

export const speaking: SpeakingEngagement[] = [
  {
    role: "Guest Speaker",
    event: "Honors' Assembly — National University Philippines, Dasmariñas",
    detail:
      "Spoke to Senior High School honorees and their families, sharing the journey from student to young professional.",
    url: "https://www.linkedin.com/posts/batmanodulio_maraming-salamat-national-university-philippines-ugcPost-7353978745390600193-3oMh/",
  },
  {
    role: "Commencement Speaker",
    event: "Senior High School Graduation — National University Laguna (2023)",
    detail:
      "Delivered the commencement address, reminding graduates that they possess “a superpower called GRIT” — and that they are the heroes of their own stories.",
    url: "https://www.linkedin.com/posts/batmanodulio_nationaluniversityph-educationthatworks-ugcPost-7095085866506735616-h_-Y/",
  },
];

export const education = {
  school: "National University (PH)",
  degree: "BS Computer Science",
  period: "2015 – 2019",
  notes: ["Graduated Cum Laude", "Student Council President, College of Computing and Information Technologies"],
};
