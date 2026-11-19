import type { Experience } from "@/data/profile";
import { cx } from "@/lib/utils";

/** Experience entry styled as a perforated admission ticket. */
export default function TicketStub({ item, index }: { item: Experience; index: number }) {
  const current = item.end === "Present";

  return (
    <article
      className={cx(
        "surface-paper shadow-paper relative flex flex-col overflow-hidden rounded-md sm:flex-row",
        index % 2 === 0 ? "-rotate-[0.4deg]" : "rotate-[0.5deg]",
      )}
    >
      {/* STUB */}
      <div
        className={cx(
          "relative flex shrink-0 items-center justify-between gap-4 px-6 py-4 sm:w-44 sm:flex-col sm:items-start sm:justify-center sm:py-6",
          current ? "bg-accent text-white" : "bg-paper-deep text-ink",
        )}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-70">Admit one</p>
        <p className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
          {item.start}
          <span className="block text-sm font-bold opacity-80">→ {item.end}</span>
        </p>
      </div>

      {/* PERFORATION */}
      <div aria-hidden className="perforation-x h-2 sm:hidden" />
      <div aria-hidden className="perforation-y hidden w-2 sm:block" />
      <span aria-hidden className="absolute -top-3 left-1/2 hidden h-6 w-6 rounded-full bg-(--background) sm:left-44 sm:block sm:-translate-x-0.5" />
      <span aria-hidden className="absolute -bottom-3 left-1/2 hidden h-6 w-6 rounded-full bg-(--background) sm:left-44 sm:block sm:-translate-x-0.5" />

      {/* BODY */}
      <div className="flex-1 px-6 py-5 sm:py-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink sm:text-2xl">{item.role}</h3>
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">{item.location}</p>
        </div>
        <p className="mt-1 text-sm font-bold text-accent">{item.company}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.summary}</p>
        <ul className="mt-3 space-y-1 text-sm text-ink">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span aria-hidden className="text-stamp">✓</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
