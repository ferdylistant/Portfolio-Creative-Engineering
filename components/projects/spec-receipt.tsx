import type { Project } from "@/data/projects";

/** Deterministic barcode bars derived from the slug. */
function barcode(seed: string) {
  return seed.split("").flatMap((char, i) => {
    const code = char.charCodeAt(0);
    return [
      { width: (code % 3) + 1, gap: ((code >> 2) % 2) + 1, key: `${i}a` },
      { width: ((code >> 1) % 2) + 1, gap: (code % 2) + 1, key: `${i}b` },
    ];
  });
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2 text-xs">
      <dt className="shrink-0 uppercase tracking-wider text-ink-muted">{label}</dt>
      <span aria-hidden className="mb-1 flex-1 border-b border-dotted border-black/25" />
      <dd className="text-right font-bold text-ink">{value}</dd>
    </div>
  );
}

/** Thermal-receipt spec sheet for a case file. */
export default function SpecReceipt({ project }: { project: Project }) {
  return (
    <div className="receipt relative rotate-[1.2deg] px-6 pt-7 drop-shadow-[0_10px_14px_rgba(0,0,0,0.15)]">
      <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-ink">*** Spec sheet ***</p>
      <p className="mt-1 text-center text-[10px] uppercase tracking-[0.2em] text-ink-muted">
        File № {project.fileNo} — {project.year}
      </p>

      <hr className="my-5 border-dashed border-black/25" />

      <dl className="space-y-2.5">
        <Row label="Client" value={project.client} />
        <Row label="Role" value={project.role} />
        <Row label="Duration" value={project.duration} />
        <Row label="Category" value={project.category} />
      </dl>

      <hr className="my-5 border-dashed border-black/25" />

      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink-muted">Stack</p>
      <ul className="mt-2 space-y-1 text-xs text-ink">
        {project.stack.map((item, i) => (
          <li key={item} className="flex justify-between">
            <span>{item}</span>
            <span className="text-ink-muted">x{String(i + 1).padStart(2, "0")}</span>
          </li>
        ))}
      </ul>

      <hr className="my-5 border-dashed border-black/25" />

      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink-muted">Totals</p>
      <dl className="mt-3 space-y-3">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="flex items-end justify-between gap-3">
            <dt className="text-xs text-ink-muted">{metric.label}</dt>
            <dd className="font-display text-2xl font-extrabold leading-none tracking-tight text-ink">
              {metric.value}
            </dd>
          </div>
        ))}
      </dl>

      <hr className="my-5 border-dashed border-black/25" />

      <div aria-hidden className="flex h-12 items-stretch justify-center">
        {barcode(project.slug).map((bar) => (
          <span key={bar.key} className="bg-ink" style={{ width: bar.width, marginRight: bar.gap }} />
        ))}
      </div>
      <p className="mt-2 text-center text-[10px] tracking-[0.4em] text-ink-muted">
        {project.slug.toUpperCase()}
      </p>
      <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-ink-muted">
        Thank you for reading
      </p>
    </div>
  );
}
