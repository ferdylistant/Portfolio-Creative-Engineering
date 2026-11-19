import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/resume/print-button";
import BackLink from "@/components/ui/back-link";
import Stamp from "@/components/ui/stamp";
import { featuredProjects } from "@/data/projects";
import { bio, education, experience, skillGroups } from "@/data/profile";
import { site, socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.name}, ${site.role}.`,
};

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-black/15 py-7 sm:grid-cols-[150px_1fr] sm:gap-8 print:break-inside-avoid">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.3em] text-stamp print:text-black">{title}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  const github = socials.find((social) => social.label === "Github");

  return (
    <div className="mx-auto max-w-212.5">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <BackLink href="/about">Back to the notebook</BackLink>
        <PrintButton />
      </div>

      <article className="surface-paper shadow-paper-lg relative px-6 py-10 sm:px-12 md:px-16 md:py-14 print:bg-none print:p-0 print:shadow-none">
        <Stamp tone="blue" className="absolute right-6 top-6 hidden rotate-6 sm:inline-block print:hidden">
          Verified · {new Date().getFullYear()}
        </Stamp>

        <header className="pb-8">
          <h1 className="font-display text-4xl font-extrabold uppercase tracking-[-0.03em] text-ink sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.25em] text-accent print:text-black">{site.role}</p>

          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-muted">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
            {github && (
              <li>
                <a href={github.href} className="hover:text-accent">
                  {github.href.replace("https://", "")}
                </a>
              </li>
            )}
          </ul>
        </header>

        <ResumeSection title="Profile">
          <p className="text-sm leading-relaxed text-ink">{bio.slice(0, 2).join(" ")}</p>
        </ResumeSection>

        <ResumeSection title="Experience">
          <ol className="space-y-6">
            {experience.map((item) => (
              <li key={`${item.company}-${item.start}`} className="print:break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-display text-lg font-bold text-ink">
                    {item.role} · <span className="text-accent print:text-black">{item.company}</span>
                  </h3>
                  <p className="text-xs uppercase tracking-[0.15em] text-ink-muted">
                    {item.start} — {item.end}
                  </p>
                </div>
                <p className="mt-1 text-sm text-ink-muted">{item.summary}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink marker:text-ink-muted">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </ResumeSection>

        <ResumeSection title="Selected work">
          <ul className="space-y-3 text-sm">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="font-bold text-ink hover:text-accent">
                  {project.title}
                </Link>
                <span className="text-ink-muted"> — {project.summary}</span>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Skills">
          <dl className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-ink">{group.title}</dt>
                <dd className="mt-1 text-sm text-ink-muted">{group.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </ResumeSection>

        <ResumeSection title="Education">
          {education.map((item) => (
            <div key={item.school} className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="text-sm text-ink">
                <span className="font-bold">{item.degree}</span> — {item.school}
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-ink-muted">{item.period}</p>
            </div>
          ))}
        </ResumeSection>
      </article>
    </div>
  );
}
