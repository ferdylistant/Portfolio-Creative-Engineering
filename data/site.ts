/**
 * Global site content. Update personal details here — every page
 * (navbar, footer, contact, resume, metadata) reads from this file.
 */
export const site = {
  name: "Ferdy Listant",
  firstName: "Ferdy",
  role: "Full-Stack Engineer",
  tagline: "creative engineering",
  description:
    "Full-stack engineer building robust backends and tactile interfaces.",
  email: "ferdy@corevalcode.com",
  location: "Jakarta, Indonesia",
  timezone: "GMT+7",
  responseTime: "within 24 hours",
  availability: "Open for freelance & senior roles",
  url: "https://ferdy.dev",
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const socials: NavLink[] = [
  { label: "Github", href: "https://github.com/ferdylistant" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "RSS", href: "/journal" },
];
