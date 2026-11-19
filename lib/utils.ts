/** Join class names, skipping falsy values. */
export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Hand-placed paper feel: a deterministic tilt per index.
 * Classes are listed literally so Tailwind can detect them.
 */
const TILTS = [
  "-rotate-1",
  "rotate-1",
  "rotate-[0.4deg]",
  "-rotate-[1.4deg]",
  "rotate-[1.6deg]",
  "-rotate-[0.6deg]",
] as const;

export function tilt(index: number) {
  return TILTS[index % TILTS.length];
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso));
}
