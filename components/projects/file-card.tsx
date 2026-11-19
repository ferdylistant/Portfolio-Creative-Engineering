import Image from "next/image";
import Link from "next/link";
import PaperClip from "@/components/ui/paper-clip";
import Stamp, { type StampTone } from "@/components/ui/stamp";
import { type Project, type ProjectStatus, statusLabel } from "@/data/projects";
import { cx, tilt } from "@/lib/utils";

export const STATUS_TONE: Record<ProjectStatus, StampTone> = {
  shipped: "green",
  "in-progress": "blue",
  archived: "ink",
};

/** Index card with a clipped photo — used in the /projects archive. */
export default function FileCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cx(
        "group surface-paper shadow-paper relative block h-full p-4 transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-xl sm:p-5",
        tilt(index),
      )}
    >
      <PaperClip className="-top-4 left-7 rotate-6" />

      <div className="relative aspect-4/3 overflow-hidden border border-black/10 bg-paper-shadow">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover grayscale sepia-[0.12] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink-muted">
            File № {project.fileNo} · {project.year}
          </p>
          <h3 className="mt-1 font-display text-xl font-bold tracking-[-0.02em] text-ink transition-colors group-hover:text-accent sm:text-2xl">
            {project.title}
          </h3>
        </div>
        <Stamp tone={STATUS_TONE[project.status]} size="sm" className="mt-1 shrink-0 rotate-6">
          {statusLabel[project.status]}
        </Stamp>
      </div>

      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-muted">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5 border-t border-dashed border-black/10 pt-4">
        {project.stack.slice(0, 4).map((item) => (
          <li key={item} className="bg-paper-deep px-2 py-0.5 text-[11px] font-semibold text-ink">
            {item}
          </li>
        ))}
      </ul>
    </Link>
  );
}
