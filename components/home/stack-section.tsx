import { CheckCircle2 } from "lucide-react";
import PushPin from "@/components/ui/push-pin";
import { stackHighlights, techStack } from "@/data/profile";
import { cx } from "@/lib/utils";

const WRINKLE_TEXTURE = "url('https://i.pinimg.com/736x/ab/54/40/ab5440e8f603e6b21bb4c5aeb2c94a1c.jpg')";
const NOTEBOOK_HOLES = Array.from({ length: 9 }, (_, i) => i);

export default function StackSection() {
  return (
    <section
      id="stack"
      className="paper-shadow relative isolate scroll-mt-32 rotate-[0.5deg] overflow-visible border border-black/6 px-6 py-16 md:px-16"
    >
      {/* BACK PAPER */}
      <div aria-hidden className="absolute inset-0 -z-20 translate-x-2 translate-y-3 -rotate-[1.2deg] bg-[#ddd5c5] shadow-2xl" />

      {/* MAIN PAPER */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-[#ece2cf]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_45%)]" />
        <div className="absolute left-12 top-10 h-32 w-32 rounded-full bg-[#7b5d32]/6 blur-3xl" />
        <div className="absolute bottom-10 right-12 h-40 w-40 rounded-full bg-black/5 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-90 mix-blend-multiply"
          style={{
            backgroundImage: WRINKLE_TEXTURE,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(1) contrast(1.1)",
          }}
        />
        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] ring-1 ring-black/4" />
      </div>

      {/* NOTEBOOK HOLES */}
      <div aria-hidden className="absolute bottom-0 left-0 top-0 z-20 flex w-10 flex-col items-center justify-around py-10">
        {NOTEBOOK_HOLES.map((i) => (
          <div
            key={i}
            className="relative h-5 w-5 rounded-full bg-[#d8cfbf] shadow-[inset_0_2px_4px_rgba(0,0,0,0.18),0_1px_1px_rgba(255,255,255,0.4)]"
          >
            <div className="absolute inset-1 rounded-full bg-[#b8ae9f]" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 items-center gap-16 pl-6 lg:grid-cols-2 lg:pl-10">
        <div>
          <h2 className="mb-6 font-display text-4xl font-bold tracking-[-0.03em] text-ink md:text-5xl">
            Technical Stack
          </h2>

          <p className="mb-8 text-base leading-relaxed text-ink-muted md:text-lg">
            My tools are chosen for reliability and performance. I treat every
            line of code as a structural element—built to last and easy to
            maintain.
          </p>

          <ul className="space-y-4">
            {stackHighlights.map((item) => (
              <li key={item} className="flex items-center gap-4 font-bold text-ink">
                <CheckCircle2 aria-hidden className="shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {techStack.map((tech, i) => (
            <li
              key={tech.name}
              className={cx(
                "flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:rotate-0",
                i % 2 === 0 ? "-rotate-[1.5deg]" : "rotate-[1.5deg]",
              )}
            >
              <div
                aria-hidden
                className="relative flex h-16 w-16 items-center justify-center rounded-full border border-black/10 bg-[#eee6d7] text-3xl font-bold text-outline shadow-[inset_0_2px_3px_rgba(255,255,255,0.9),0_6px_12px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_45%)]" />
                {tech.short}
              </div>
              <span className="text-sm uppercase tracking-wide text-ink">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <PushPin className="-top-5 left-1/2 -translate-x-1/2" />
    </section>
  );
}
