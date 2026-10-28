export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  website?: string;
  image?: string;
  imageAlt?: string;
  /** Looping launch video shown in the frame instead of the still image. */
  video?: string;
  year: string;
  type: "client" | "personal";
};

export const projects: Project[] = [
  {
    slug: "pulse-diagnostics",
    title: "Pulse Diagnostics",
    subtitle: "Live e-commerce · M-Pesa",
    description:
      "A live online store for a Nairobi medical, lab and hospital supplies supplier. Customers browse, add to cart and order, while the team manages products and orders from a private admin panel.",
    highlights: [
      "Product catalog with categories, search, cart and checkout",
      "Lipa na M-Pesa Paybill payment flow with order tracking",
      "Private admin: add/edit/delete products, image upload, stock and order status",
      "Hosted database with Supabase storage; built for countrywide delivery",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "M-Pesa", "Supabase"],
    github: "https://github.com/Odallo/PulseDiagnosticss",
    website: "https://pulse-diagnosticss.vercel.app/",
    image: "/work/pulse-home.jpg",
    imageAlt:
      "Pulse Diagnostics storefront showing product categories, M-Pesa payment details and featured products",
    year: "2025",
    type: "client",
  },
  {
    slug: "mpesa-stk-push",
    title: "M-Pesa STK Push Demo",
    subtitle: "Daraja API · payments",
    description:
      "A working STK Push integration on Safaricom's Daraja API. You type a phone number and an amount, and the payment prompt lands on the customer's own phone — no Paybill digits to recite, no till number to remember.",
    highlights: [
      "OAuth token, timestamped password and STK Push request built against Daraja",
      "Callback endpoint receives the M-Pesa confirmation; status query polls the transaction",
      "Two fields and one button — the entire integration surface is phone + amount",
      "Sandbox shortcode swaps for a production Till without touching the UI",
    ],
    tech: ["Next.js", "Node.js", "Express", "M-Pesa", "Daraja"],
    image: "/work/mpesa-stk.jpg",
    imageAlt:
      "M-Pesa STK Push demo card beside a phone showing the M-Pesa PIN prompt and a confirmed KSh 250 payment",
    year: "2026",
    type: "personal",
  },
  {
    slug: "minirdbms",
    title: "MiniRDBMS",
    subtitle: "PesaPal Junior Dev Challenge 2026",
    description:
      "A lightweight relational database management system from scratch in Python. Supports SQL-like commands and demonstrates core database engine concepts — parsing, execution, storage, and indexing.",
    highlights: [
      "SQL-like syntax: CREATE, INSERT, SELECT, UPDATE, DELETE, JOIN",
      "JSON-based persistent storage with primary key indexing",
      "Layered architecture: parser → engine → storage → REPL",
      "Interactive CLI and demo Flask web interface",
    ],
    tech: ["Python", "Flask", "Data Structures"],
    github: "https://github.com/Odallo/Pesa-Pal",
    year: "2026",
    type: "personal",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    subtitle: "Decoupled architecture",
    description:
      "A production-style weather application with a Next.js + TypeScript frontend and a Laravel backend. Focused on clean separation of concerns and reliable API integration.",
    highlights: [
      "OpenWeatherMap API through a clean REST interface",
      "Async data loading with graceful error handling",
      "Decoupled frontend–backend architecture",
    ],
    tech: ["Next.js", "TypeScript", "Laravel"],
    github: "https://github.com/Odallo/WeatherApplication",
    year: "2025",
    type: "personal",
  },
  {
    slug: "goal-tracker",
    title: "CLI Goal Tracker",
    subtitle: "Local-first productivity",
    description:
      "A command-line application for tracking goals and monthly progress. Simple, fast, and future cloud-ready.",
    highlights: [
      "Persistent storage using SQLite",
      "Clear and predictable CLI interface",
      "Correctness and usability over complexity",
    ],
    tech: ["Node.js", "TypeScript", "SQLite"],
    github: "https://github.com/Odallo/Personal-Goal-Tracker-2025",
    year: "2025",
    type: "personal",
  },
  {
    slug: "hotel-management",
    title: "Hotel Management System",
    subtitle: "Operations platform",
    description:
      "A system for managing reservations, customer records, and reporting, built around real-world operational workflows.",
    highlights: [
      "Business processes translated into application logic",
      "Database-backed features with consistency",
      "Structured system design fundamentals",
    ],
    tech: ["PHP", "Laravel", "Databases"],
    github: "https://github.com/Odallo/Management-System",
    year: "2025",
    type: "personal",
  },
];

export const featuredProjects = projects.filter((p) => p.type === "client");
