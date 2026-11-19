import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { STATUS_TONE } from "@/components/projects/file-card";
import SpecReceipt from "@/components/projects/spec-receipt";
import BackLink from "@/components/ui/back-link";
import PaperClip from "@/components/ui/paper-clip";
import Polaroid from "@/components/ui/polaroid";
import Stamp from "@/components/ui/stamp";
import StickyNote from "@/components/ui/sticky-note";
import { getAdjacentProjects, getProject, projects, statusLabel } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: { images: [project.image] },
  };
}

function CaseSheet({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="surface-paper shadow-paper relative px-5 py-7 sm:px-8">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stamp">{label}</p>
      <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-ink md:text-3xl">{title}</h2>
      <div className="mt-4 text-[15px] leading-relaxed text-ink-muted">{children}</div>
    </section>
  );
}

export default async function CaseFilePage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article className="mx-auto max-w-6xl">
      <BackLink href="/projects">Back to the cabinet</BackLink>

      {/* FOLDER */}
      <div className="relative mt-14">
        <div className="surface-manila absolute -top-9 left-0 h-10 rounded-t-lg px-5 pt-3 text-[11px] font-bold uppercase tracking-[0.25em] text-ink sm:left-6">
          Case file № {project.fileNo}
        </div>

        <div className="surface-manila shadow-paper-lg relative rounded-md rounded-tl-none px-4 py-8 sm:rounded-tl-md sm:px-8 md:px-12 md:py-12">
          <header className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-ink-muted">
                {project.category} · {project.year}
              </p>
              <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">{project.summary}</p>

              <Stamp tone={STATUS_TONE[project.status]} size="lg" className="animate-stamp-in mt-8 -rotate-8">
                {statusLabel[project.status]}
              </Stamp>
            </div>

            <Polaroid
              src={project.image}
              alt={project.title}
              caption={`fig. 1 — ${project.title.toLowerCase()}`}
              aspect="landscape"
              sizes="(min-width: 1024px) 420px, 90vw"
              priority
              imageClassName="sepia-[0.1]"
              className="mx-auto w-full max-w-md rotate-[1.5deg]"
            >
              <PaperClip className="-top-6 right-10 -rotate-6" />
            </Polaroid>
          </header>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_320px]">
            <div className="space-y-8">
              <CaseSheet label="01 / Brief" title="The brief">
                <p>{project.brief}</p>
              </CaseSheet>

              <CaseSheet label="02 / Problem" title="What was broken">
                <p>{project.problem}</p>
              </CaseSheet>

              <CaseSheet label="03 / Approach" title="How we fixed it">
                <ol className="space-y-4">
                  {project.approach.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ink/70 text-xs font-bold text-ink">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </CaseSheet>

              <CaseSheet label="04 / Outcome" title="What shipped">
                <p>{project.outcome}</p>
              </CaseSheet>
            </div>

            <aside className="space-y-10 lg:sticky lg:top-32 lg:self-start">
              <SpecReceipt project={project} />

              <StickyNote color="yellow" className="-rotate-2">
                <p className="font-hand text-2xl text-ink">Notes to self:</p>
                <ul className="mt-2 space-y-1 font-hand text-xl leading-snug text-ink/80">
                  {project.notes.map((note) => (
                    <li key={note}>— {note}</li>
                  ))}
                </ul>
              </StickyNote>
            </aside>
          </div>
        </div>
      </div>

      {/* PREV / NEXT */}
      <nav aria-label="More case files" className="mt-14 grid gap-4 sm:grid-cols-2">
        {[
          { label: "Previous file", project: prev },
          { label: "Next file", project: next },
        ].map(({ label, project: item }, i) => (
          <Link
            key={label}
            href={`/projects/${item.slug}`}
            className={`group surface-paper shadow-paper block p-5 transition-all hover:-translate-y-1 hover:rotate-0 ${
              i === 0 ? "-rotate-1" : "rotate-1 sm:text-right"
            }`}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink-muted">
              {i === 0 ? "← " : ""}
              {label}
              {i === 1 ? " →" : ""}
            </p>
            <p className="mt-1 font-display text-xl font-bold text-ink transition-colors group-hover:text-accent">
              {item.title}
            </p>
          </Link>
        ))}
      </nav>
    </article>
  );
}
