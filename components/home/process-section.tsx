import { Workflow } from "lucide-react";
import PushPin, { type PinColor } from "@/components/ui/push-pin";
import SectionHeading from "@/components/ui/section-heading";
import StickyNote from "@/components/ui/sticky-note";
import { processSteps } from "@/data/profile";
import { cx, tilt } from "@/lib/utils";

const PIN_COLORS: PinColor[] = ["red", "blue", "yellow", "green"];

/** "How I work" — sticky notes pinned to kraft paper, joined by red string. */
export default function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-32 space-y-12">
      <SectionHeading title="How I Work" meta="FILE: ~/notes/process.md" icon={Workflow} />

      <div className="surface-kraft shadow-paper-lg relative overflow-hidden rounded-[3px] px-5 pb-12 pt-14 md:px-10">
        {/* red string connecting the pins (desktop only) */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-x-[12%] top-[3.6rem] z-20 hidden h-8 w-[76%] lg:block"
          viewBox="0 0 300 20"
          preserveAspectRatio="none"
        >
          <path
            d="M0 4 Q50 20 100 4 Q150 20 200 4 Q250 20 300 4"
            fill="none"
            stroke="#b3261e"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ol className="relative grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((step, i) => (
            <li key={step.title} className={cx("relative pt-4 transition-transform duration-300 hover:-translate-y-1 hover:rotate-0", tilt(i))}>
              <PushPin color={PIN_COLORS[i % PIN_COLORS.length]} className="-top-2 left-1/2 -translate-x-1/2" />

              <StickyNote color={step.color} className="flex h-full flex-col px-6 pb-6 pt-9">
                <span className="font-hand text-3xl leading-none text-ink/60">Step {i + 1}</span>
                <h3 className="mt-2 font-display text-2xl font-extrabold tracking-[-0.03em] text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/80">{step.description}</p>
                <p className="mt-5 border-t border-dashed border-black/20 pt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink/70">
                  → {step.deliverable}
                </p>
              </StickyNote>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
