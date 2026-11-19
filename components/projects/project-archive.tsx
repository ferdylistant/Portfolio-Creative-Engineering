"use client";

import { useState } from "react";
import FileCard from "@/components/projects/file-card";
import { type Project, type ProjectCategory, projectCategories } from "@/data/projects";
import { cx } from "@/lib/utils";

type Filter = ProjectCategory | "all";

/** Manila folder with tab filters. */
export default function ProjectArchive({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const countFor = (id: Filter) =>
    id === "all" ? projects.length : projects.filter((p) => p.category === id).length;

  return (
    <div>
      {/* FOLDER TABS */}
      <div
        role="group"
        aria-label="Filter projects by category"
        className="no-scrollbar -mb-px flex gap-1 overflow-x-auto px-1 pt-2 sm:px-4"
      >
        {projectCategories.map((category) => {
          const active = filter === category.id;
          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(category.id)}
              className={cx(
                "relative shrink-0 rounded-t-lg px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] transition-all sm:px-5 sm:text-xs",
                active
                  ? "surface-manila z-10 text-ink"
                  : "translate-y-1 bg-manila-deep text-ink-muted hover:translate-y-0.5 hover:text-ink",
              )}
            >
              {category.label}
              <span className="ml-2 text-[10px] opacity-60">{countFor(category.id)}</span>
            </button>
          );
        })}
      </div>

      {/* FOLDER BODY */}
      <div className="surface-manila shadow-paper-lg relative rounded-b-md rounded-tr-md px-4 pb-10 pt-8 sm:px-8 md:px-10 md:pb-14">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-linear-to-b from-black/5 to-transparent" />

        <p aria-live="polite" className="mb-8 text-xs uppercase tracking-[0.25em] text-ink-muted">
          Showing {String(visible.length).padStart(2, "0")} of {String(projects.length).padStart(2, "0")} files
        </p>

        {visible.length > 0 ? (
          <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) => (
              <li key={project.slug} className="animate-paper-drop" style={{ animationDelay: `${i * 60}ms` }}>
                <FileCard project={project} index={i} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-16 text-center font-hand text-3xl text-ink/60">This drawer is empty… for now.</p>
        )}
      </div>
    </div>
  );
}
