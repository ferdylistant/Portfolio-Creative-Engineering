import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { cx } from "@/lib/utils";

const CARD_TILTS = ["paper-rotate-ccw", "paper-rotate-cw", "paper-rotate-subtle"];

const CRUMPLED_TEXTURE =
  "url('https://png.pngtree.com/png-vector/20240617/ourmid/pngtree-vertical-close-up-of-brown-crumpled-paper-texture-background-png-image_12457533.png')";

type Props = {
  project: Project;
  index: number;
};

/** Featured project on torn paper — used on the home page. */
export default function ProjectCard({ project, index }: Props) {
  const { slug, title, summary, image, stack } = project;

  return (
    <article
      className={cx(
        "group relative isolate overflow-visible transition-all duration-500 hover:-translate-y-2 hover:rotate-[0.2deg]",
        CARD_TILTS[index % CARD_TILTS.length],
        index % 3 === 1 && "md:mt-14",
      )}
    >
      <Link href={`/projects/${slug}`} className="relative block focus-visible:outline-offset-8">
        {/* BACK PAPER STACK */}
        <div aria-hidden className="absolute inset-0 translate-x-5 translate-y-5 rotate-[2.2deg] rounded-[2px] bg-[#ddd6c7] opacity-80 shadow-[0_18px_40px_rgba(0,0,0,0.14)]" />
        <div aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 -rotate-[1.2deg] rounded-[2px] border border-black/3 bg-[#f1eadc] shadow-[0_10px_24px_rgba(0,0,0,0.1)]" />

        {/* MAIN PAPER */}
        <div className="torn-edge paper-texture paper-light paper-edge relative overflow-hidden border border-black/6 p-6 md:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50 mix-blend-multiply"
            style={{
              backgroundImage: CRUMPLED_TEXTURE,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(1) contrast(1.1)",
            }}
          />
          <div aria-hidden className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-black/3 blur-3xl" />
          <div aria-hidden className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/40 blur-3xl" />

          {/* IMAGE */}
          <div className="relative mb-6 rotate-[0.3deg] overflow-hidden border border-black/10 bg-[#ddd7ca] p-2 shadow-inner">
            <div aria-hidden className="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_40px_rgba(0,0,0,0.15)]" />
            <div className="relative h-56 overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                className="object-cover brightness-[0.98] contrast-[1.05] grayscale saturate-[0.92] sepia-[0.08] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="relative z-20">
            <h3 className="mb-3 flex items-start justify-between gap-3 font-display text-2xl font-bold tracking-[-0.03em] text-ink md:text-3xl">
              {title}
              <ArrowUpRight
                aria-hidden
                className="mt-1 size-6 shrink-0 text-outline transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </h3>

            <p className="mb-6 leading-relaxed text-ink-muted">{summary}</p>

            <ul className="flex flex-wrap gap-2">
              {stack.slice(0, 3).map((item, i) => (
                <li
                  key={item}
                  className={cx(
                    "border border-black/5 bg-[#ece7da] px-3 py-1 text-sm font-semibold text-ink shadow-sm",
                    i % 2 === 0 ? "-rotate-1" : "rotate-1",
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* BOTTOM PAPER CURL */}
          <div aria-hidden className="absolute bottom-0 right-0 h-16 w-16 bg-linear-to-tl from-black/5 to-transparent opacity-60" />
        </div>
      </Link>
    </article>
  );
}
