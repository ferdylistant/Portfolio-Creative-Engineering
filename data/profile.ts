// Dummy profile content used by Home, About and Resume.

export type NoteColor = "yellow" | "pink" | "blue" | "green";

export const bio = [
  "I'm a full-stack engineer who likes the unglamorous parts of software: queues that drain, queries that stay fast and interfaces that feel considered.",
  "Over the last seven years I've built commerce platforms, ERP systems and realtime dashboards for teams in Southeast Asia and beyond. I care about software that's easy to change, because that's the only kind that survives.",
  "When I'm not at the desk, I'm shooting film, tuning a mechanical keyboard or riding somewhere with good coffee.",
];

export const quickFacts = [
  { label: "Based in", value: "Jakarta, Indonesia" },
  { label: "Currently", value: "Senior Engineer @ Paperplane Labs" },
  { label: "Focus", value: "Distributed systems & tactile UI" },
  { label: "Coffee", value: "Pour-over, no sugar" },
];

export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    company: "Paperplane Labs",
    role: "Senior Full-Stack Engineer",
    start: "2023",
    end: "Present",
    location: "Remote",
    summary: "Leading a squad that builds commerce infrastructure for regional retailers.",
    highlights: [
      "Designed the event-driven inventory gateway serving 12k rps at peak.",
      "Mentored four engineers through their first on-call rotations.",
    ],
  },
  {
    company: "Kopi Logistics",
    role: "Backend Engineer",
    start: "2021",
    end: "2023",
    location: "Jakarta",
    summary: "Built realtime fleet tracking and dispatch tooling.",
    highlights: [
      "Shipped a Go fan-out service streaming 800+ vehicles in realtime.",
      "Cut dispatcher manual work by two hours per day.",
    ],
  },
  {
    company: "Studio Arsip",
    role: "Web Developer",
    start: "2019",
    end: "2021",
    location: "Bandung",
    summary: "Crafted marketing sites and CMS integrations for creative clients.",
    highlights: [
      "Delivered 20+ sites with a reusable block-based CMS setup.",
      "Introduced automated visual regression testing.",
    ],
  },
  {
    company: "Freelance",
    role: "Developer",
    start: "2018",
    end: "2019",
    location: "Anywhere",
    summary: "Small business websites, scripts and the occasional rescue mission.",
    highlights: ["Learned that clear scope beats clever code."],
  },
];

export const education = [
  {
    school: "Institut Teknologi (placeholder)",
    degree: "B.Sc. Informatics",
    period: "2014 – 2018",
  },
];

export const principles = [
  { title: "Boring by default", text: "Pick proven tools; save novelty for where it pays." },
  { title: "Ship small", text: "Small diffs, fast feedback, easy rollbacks." },
  { title: "Leave it cleaner", text: "Every change should make the next one easier." },
  { title: "Measure twice", text: "Profile before optimising, ask before assuming." },
];

export const offTheClock = [
  { caption: "35mm, always", seed: "film-camera" },
  { caption: "too many keyboards", seed: "mech-keyboard" },
  { caption: "sunday rides", seed: "bike-ride" },
];

export const techStack = [
  { short: "Re", name: "React" },
  { short: "No", name: "Node.js" },
  { short: "La", name: "Laravel" },
  { short: "Py", name: "Python" },
  { short: "Ts", name: "TypeScript" },
  { short: "Go", name: "GoLang" },
];

export const stackHighlights = [
  "Architecting scalable cloud infrastructure",
  "Developing fluid, responsive UI systems",
  "Mentoring engineering teams",
];

export const skillGroups = [
  { title: "Languages", items: ["TypeScript", "Go", "PHP", "Python", "SQL"] },
  { title: "Backend", items: ["Node.js", "Laravel", "Postgres", "Redis", "Kafka"] },
  { title: "Frontend", items: ["React", "Next.js", "Tailwind", "Three.js"] },
  { title: "Infra", items: ["Docker", "AWS", "GitHub Actions", "Grafana"] },
];

export const processSteps: {
  title: string;
  description: string;
  deliverable: string;
  color: NoteColor;
}[] = [
  {
    title: "Listen",
    description: "Workshops and messy whiteboards to understand the real problem, not just the ticket.",
    deliverable: "Problem brief",
    color: "yellow",
  },
  {
    title: "Sketch",
    description: "Paper prototypes, data models and a plan small enough to fit on one page.",
    deliverable: "Architecture sketch",
    color: "pink",
  },
  {
    title: "Build",
    description: "Short cycles, weekly demos and code that's reviewed, tested and boring to deploy.",
    deliverable: "Working software",
    color: "blue",
  },
  {
    title: "Refine",
    description: "Measure in production, fix the rough edges, document what the next person needs.",
    deliverable: "Handover notes",
    color: "green",
  },
];
