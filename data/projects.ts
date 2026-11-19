// Dummy content — replace with real case studies.

export type ProjectCategory = "web" | "backend" | "systems" | "creative";
export type ProjectStatus = "shipped" | "in-progress" | "archived";

type ProjectInput = {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  year: number;
  role: string;
  duration: string;
  client: string;
  status: ProjectStatus;
  image: string;
  stack: string[];
  featured?: boolean;
  metrics: { label: string; value: string }[];
  brief: string;
  problem: string;
  approach: string[];
  outcome: string;
  notes: string[];
};

export type Project = ProjectInput & {
  /** Zero-padded archive number, e.g. "004". */
  fileNo: string;
};

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All files" },
  { id: "web", label: "Web" },
  { id: "backend", label: "Backend" },
  { id: "systems", label: "Systems" },
  { id: "creative", label: "Creative" },
];

export const statusLabel: Record<ProjectStatus, string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
  archived: "Archived",
};

const picsum = (seed: string) => `https://picsum.photos/seed/${seed}/1200/800`;

const projectInputs: ProjectInput[] = [
  {
    slug: "ecommerce-api",
    title: "E-commerce API",
    summary:
      "High-concurrency Node.js gateway with automated inventory syncing across 5 platforms.",
    category: "backend",
    year: 2025,
    role: "Lead Backend Engineer",
    duration: "5 months",
    client: "Northwind Retail",
    status: "shipped",
    featured: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFvX8OEUuvxMhZqKXBl-Pm2rfOzTysuVxtjKJJeCwZ5tvb87VSdO7j4fKhjCDokQJiQaLMDgAZ7e-w0wT3NJBPLjPQCFCUJlABdLmQjmjbGkBYPRoP3Yw-ncUeWGz5c7CTk7B5EOuF4TctzHCwCxWbiiX1Cn4_ZVWjud8T_DlNZ8oB06o22jX_U40LAod8Dw9s-G78ldAOkjq4mt4pjrMDvk668ji8GOt2jQRwNMqeuonQjyM5qPRqu5RCLRH_S2lYli4fHweV3_eS",
    stack: ["Node.js", "Redis", "Postgres", "BullMQ", "Docker"],
    metrics: [
      { label: "Peak throughput", value: "12k rps" },
      { label: "Marketplaces synced", value: "5" },
      { label: "Oversell incidents", value: "-63%" },
    ],
    brief:
      "A retailer selling on five marketplaces needed a single source of truth for stock, prices and orders — without rewriting their legacy warehouse system.",
    problem:
      "Each marketplace polled the warehouse independently. Flash sales caused race conditions, overselling and a support queue that grew faster than the team.",
    approach: [
      "Introduced an event-driven gateway that owns inventory reservations with Redis-backed locks.",
      "Moved marketplace sync into idempotent BullMQ jobs with exponential backoff.",
      "Added a Postgres outbox so no order event is lost during deploys.",
      "Built a tiny ops dashboard to replay or quarantine failed syncs.",
    ],
    outcome:
      "The gateway now handles flash-sale peaks without manual intervention, and the team retired three cron scripts nobody wanted to touch.",
    notes: ["Idempotency keys everywhere", "Outbox > dual writes", "Boring tech, sharp edges"],
  },
  {
    slug: "company-website",
    title: "Company Website",
    summary:
      "Fully responsive website with a custom CMS for managing content and blog posts.",
    category: "web",
    year: 2024,
    role: "Full-Stack Engineer",
    duration: "3 months",
    client: "Atlas Studio",
    status: "shipped",
    featured: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3RHpCCL5MS5kgermrs-bXoQZqWF5ffRKQ69963zO59cxpRx_GPBa9NBUkvBfCR7za7Gpnly1SiMGCHX8SZdIxtAy7EFL-W-yiei8bPi7abMVzqdKjwSq2LDoYy_OgmAhVJMyZ0V5Za7VYU7RKZdQJVWhmHoFetu1jFS4RQcIcawxkoRSC8FXLNlK9FsLRCArrpnHuWKtczKGdhNldcKh4ooIyOHq29ZaTQXlwx2E9QUYuYKLiBc11WpMaQTcG-sNdNqA529XSRdXr",
    stack: ["React", "Three.js", "Tailwind", "Sanity"],
    metrics: [
      { label: "Lighthouse score", value: "98" },
      { label: "Inbound leads", value: "3.1x" },
      { label: "Largest paint", value: "1.2s" },
    ],
    brief:
      "A design studio wanted a site that felt as crafted as their work, and that non-technical staff could update without opening a ticket.",
    problem:
      "The old site was a heavy page-builder theme: slow on mobile, impossible to brand, and every edit risked breaking the layout.",
    approach: [
      "Designed a modular block system mapped 1:1 to CMS schemas.",
      "Used a single lightweight Three.js scene, lazy-loaded below the fold.",
      "Pre-rendered every page and revalidated on publish webhooks.",
    ],
    outcome:
      "Editors ship pages on their own, mobile visitors stopped bouncing, and the studio got its personality back.",
    notes: ["Lazy-load the wow", "CMS schema = design system", "Ship the 80% first"],
  },
  {
    slug: "erp-system",
    title: "ERP System",
    summary:
      "Enterprise resource planning system with custom reporting and analytics tools.",
    category: "systems",
    year: 2023,
    role: "Tech Lead",
    duration: "11 months",
    client: "Sinar Manufacturing",
    status: "shipped",
    featured: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTdsmyu1tqD_pTTCDOqYU6UuoDJmeDqFQaI5d_PrXafzCHLu4zIFVzDC70xcpg0q0FzRuIVtI20iFgQFVDLFWJjY9yRTr4Vr_6lV2qF3eGr_CzcXSlL_bjU9yCYjg9EaaGJmqIpBMSE4yKULlp8m7sLHzj6ba13mSfaAfjnCWPR65PRim9nUC6AZCt1EtX2v2QLAhTBJ1ciFiP9OKG7XYSt2H980pFLU7t0f3O36zmca6be7iT7vE3b9g_3uBHqlvtGr39Prcrleuf",
    stack: ["Laravel", "Next.js", "Redis", "MySQL"],
    metrics: [
      { label: "Modules delivered", value: "14" },
      { label: "Report build time", value: "-80%" },
      { label: "Daily active users", value: "420" },
    ],
    brief:
      "A mid-sized manufacturer ran procurement, stock and payroll on a maze of spreadsheets shared over email.",
    problem:
      "Month-end closing took nine days, numbers rarely matched between departments and nobody trusted the reports.",
    approach: [
      "Mapped every spreadsheet into a domain model with the finance team, one module at a time.",
      "Built a Laravel core with strict role-based permissions and audit trails.",
      "Shipped a Next.js reporting layer with cached, pre-aggregated views.",
      "Ran old and new systems in parallel for a full quarter before cut-over.",
    ],
    outcome:
      "Month-end closing dropped to two days, and reports became the thing people check first instead of last.",
    notes: ["Parallel run saved us", "Audit trail from day one", "Talk to finance early"],
  },
  {
    slug: "fleet-pulse",
    title: "Fleet Pulse",
    summary:
      "Realtime logistics dashboard tracking 800+ vehicles with live map and ETA predictions.",
    category: "web",
    year: 2024,
    role: "Frontend Lead",
    duration: "4 months",
    client: "Kopi Logistics",
    status: "shipped",
    image: picsum("fleet-pulse"),
    stack: ["Next.js", "WebSockets", "Go", "MapLibre"],
    metrics: [
      { label: "Vehicles live", value: "800+" },
      { label: "Update latency", value: "<1s" },
      { label: "Dispatcher time saved", value: "2h/day" },
    ],
    brief:
      "Dispatchers were juggling phone calls and a static map to figure out where trucks were.",
    problem:
      "Location data arrived every few seconds, but the existing dashboard re-rendered the whole map and froze on low-end office PCs.",
    approach: [
      "Streamed positions over WebSockets from a small Go fan-out service.",
      "Rendered markers on a WebGL layer and batched updates per animation frame.",
      "Added ETA predictions using historical route segments.",
    ],
    outcome:
      "The dashboard stays smooth on five-year-old hardware, and dispatchers trust it enough to stop calling drivers for updates.",
    notes: ["Batch per frame", "Measure on the worst laptop", "WebGL for many markers"],
  },
  {
    slug: "generative-poster-lab",
    title: "Generative Poster Lab",
    summary:
      "A browser toy that turns commit history into risograph-style posters you can print.",
    category: "creative",
    year: 2025,
    role: "Solo maker",
    duration: "Side project",
    client: "Personal",
    status: "in-progress",
    image: picsum("poster-lab"),
    stack: ["TypeScript", "Canvas", "WebGL", "Vite"],
    metrics: [
      { label: "Posters printed", value: "120" },
      { label: "Ink layers", value: "3" },
      { label: "Bundle size", value: "38kb" },
    ],
    brief:
      "An experiment in making the invisible work of coding feel physical — something you could pin to a wall.",
    problem:
      "Most code visualisations look like dashboards. I wanted texture, misregistration and the happy accidents of print.",
    approach: [
      "Parsed git logs into rhythm: commits as marks, files as colour channels.",
      "Simulated riso ink overlap with multiply blending and halftone shaders.",
      "Exported print-ready, colour-separated PNGs for a local riso studio.",
    ],
    outcome:
      "Still evolving — but a few posters now hang in friends' offices, which counts as shipping.",
    notes: ["Embrace misregistration", "Constraints > features", "Print everything"],
  },
  {
    slug: "ledger-reconciler",
    title: "Ledger Reconciler",
    summary:
      "Streaming payment reconciliation engine matching millions of transactions nightly.",
    category: "backend",
    year: 2022,
    role: "Backend Engineer",
    duration: "6 months",
    client: "Pundi Payments",
    status: "archived",
    image: picsum("ledger-reconciler"),
    stack: ["Go", "Kafka", "Postgres", "gRPC"],
    metrics: [
      { label: "Transactions / night", value: "4.2M" },
      { label: "Auto-match rate", value: "99.3%" },
      { label: "Manual review", value: "-90%" },
    ],
    brief:
      "A payment company reconciled bank statements against their ledger with an overnight batch job that often didn't finish by morning.",
    problem:
      "As volume grew, the batch ran over its window, and the finance team started each day with a backlog of unmatched records.",
    approach: [
      "Replaced the batch job with a Kafka stream that matches as statements arrive.",
      "Designed a rules engine for fuzzy matches with explainable scores.",
      "Exposed a gRPC API for the review tool so edge cases get resolved quickly.",
    ],
    outcome:
      "Reconciliation now finishes hours early, and the review queue shrank to a handful of genuinely weird cases.",
    notes: ["Stream > batch here", "Explainable matches", "Money needs idempotency"],
  },
];

export const projects: Project[] = projectInputs.map((project, index) => ({
  ...project,
  fileNo: String(index + 1).padStart(3, "0"),
}));

export const featuredProjects = projects.filter((project) => project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

/** Previous/next projects in archive order, wrapping around. */
export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const total = projects.length;

  return {
    prev: projects[(index - 1 + total) % total],
    next: projects[(index + 1) % total],
  };
}
