import type { Metadata } from "next";
import TicketStub from "@/components/about/ticket-stub";
import PageHeader from "@/components/ui/page-header";
import Polaroid from "@/components/ui/polaroid";
import Stamp from "@/components/ui/stamp";
import StickerLink from "@/components/ui/sticker-link";
import Tape from "@/components/ui/tape";
import { bio, experience, offTheClock, principles, quickFacts } from "@/data/profile";
import { site } from "@/data/site";
import { cx, tilt } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: `Field notes about ${site.name}: background, experience and principles.`,
};

const SPIRAL_RINGS = Array.from({ length: 14 }, (_, i) => i);
const STAMP_TONES = ["red", "blue", "ink", "green"] as const;

export default function AboutPage() {
  return (
    <div className="space-y-24">
      <PageHeader
        eyebrow="Field notes · vol. 01"
        title={
          <>
            About <span className="font-hand font-normal text-accent">me</span>
          </>
        }
        description="A few pages torn from the notebook I keep on my desk."
      />

      {/* NOTEBOOK SPREAD */}
      <section aria-label="Introduction" className="relative">
        <div className="shadow-paper-lg relative grid overflow-hidden rounded-md lg:grid-cols-2">
          {/* LEFT PAGE */}
          <div className="surface-lined relative px-6 pb-10 pt-12 sm:pl-16 sm:pr-10 lg:pb-14">
            <div className="flex flex-col items-start gap-8 sm:flex-row">
              <Polaroid
                src="https://picsum.photos/seed/ferdy-portrait/600/600"
                alt={`Portrait of ${site.name}`}
                caption="me, probably debugging"
                sizes="200px"
                priority
                className="w-44 shrink-0 -rotate-3 sm:w-48"
              >
                <Tape className="-top-3 left-1/2 w-20 -translate-x-1/2 rotate-2" />
              </Polaroid>

              <div>
                <p className="font-hand text-4xl leading-none text-ink sm:text-5xl">Hi, I&apos;m {site.firstName}!</p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-ink-muted">{site.role}</p>
              </div>
            </div>

            <div className="mt-8 space-y-[2rem] text-[15px] leading-[2rem] text-ink">
              {bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* SPIRAL BINDING (desktop) */}
          <div aria-hidden className="absolute inset-y-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col justify-between lg:flex">
            {SPIRAL_RINGS.map((i) => (
              <span
                key={i}
                className="block h-3 w-10 rounded-full border-2 border-zinc-500 bg-linear-to-b from-zinc-200 to-zinc-400 shadow-[0_2px_3px_rgba(0,0,0,0.25)]"
              />
            ))}
          </div>

          {/* RIGHT PAGE */}
          <div className="surface-grid relative border-t border-black/10 px-6 pb-12 pt-10 sm:px-10 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-12">
            <h2 className="font-hand text-4xl text-ink">Quick facts</h2>

            <dl className="mt-6 divide-y divide-dashed divide-black/15 border-y border-dashed border-black/15">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-ink-muted">{fact.label}</dt>
                  <dd className="font-display text-lg font-bold text-ink sm:text-right">{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Stamp tone="green" size="lg" className="-rotate-6">
                Available
              </Stamp>
              <p className="max-w-56 font-hand text-2xl leading-tight text-ink/80">{site.availability}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section aria-labelledby="timeline-title" className="space-y-10">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-4">
          <h2 id="timeline-title" className="font-display text-4xl font-bold tracking-[-0.03em] text-ink md:text-5xl">
            The ride so far
          </h2>
          <p className="text-sm text-ink-muted">{experience.length} tickets punched</p>
        </div>

        <ol className="space-y-6">
          {experience.map((item, i) => (
            <li key={`${item.company}-${item.start}`}>
              <TicketStub item={item} index={i} />
            </li>
          ))}
        </ol>
      </section>

      {/* PRINCIPLES */}
      <section aria-labelledby="principles-title" className="surface-kraft shadow-paper-lg relative rounded-[3px] px-6 py-14 sm:px-10">
        <h2 id="principles-title" className="font-display text-4xl font-bold tracking-[-0.03em] text-ink md:text-5xl">
          Stamped principles
        </h2>
        <p className="mt-3 max-w-xl text-ink/75">The rules I keep coming back to, in ink so they don&apos;t wash off.</p>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, i) => (
            <li key={principle.title} className={cx("surface-paper shadow-paper p-6 text-center", tilt(i))}>
              <Stamp tone={STAMP_TONES[i % STAMP_TONES.length]} className={i % 2 ? "rotate-3" : "-rotate-3"}>
                {principle.title}
              </Stamp>
              <p className="mt-5 text-sm leading-relaxed text-ink-muted">{principle.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* OFF THE CLOCK */}
      <section aria-labelledby="offclock-title" className="space-y-10">
        <h2 id="offclock-title" className="font-display text-4xl font-bold tracking-[-0.03em] text-ink md:text-5xl">
          Off the clock
        </h2>

        <ul className="grid grid-cols-1 gap-10 px-4 sm:grid-cols-3 sm:px-0">
          {offTheClock.map((item, i) => (
            <li key={item.seed} className={cx("mx-auto w-full max-w-xs transition-transform hover:rotate-0 hover:scale-[1.02]", i % 2 ? "rotate-3" : "-rotate-2", i === 1 && "sm:mt-10")}>
              <Polaroid
                src={`https://picsum.photos/seed/${item.seed}/600/600`}
                alt={item.caption}
                caption={item.caption}
                sizes="(min-width: 640px) 30vw, 80vw"
              >
                <Tape className="-top-3 left-1/2 w-20 -translate-x-1/2 -rotate-3" />
              </Polaroid>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center gap-6 text-center">
        <p className="font-hand text-4xl text-ink">Want the short version?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <StickerLink href="/resume" className="-rotate-1">
            Read the resume
          </StickerLink>
          <StickerLink href="/contact" variant="outline" className="rotate-1">
            Write me a letter
          </StickerLink>
        </div>
      </section>
    </div>
  );
}
