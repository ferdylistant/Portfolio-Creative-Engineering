"use client";

import { useEffect, useRef } from "react";
import { site } from "@/data/site";

const today = () =>
  new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "short", year: "numeric" }).format(new Date());

/** Success state: a sealed, postmarked envelope. */
export default function SentEnvelope({ name, onReset }: { name: string; onReset: () => void }) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="surface-kraft shadow-paper-lg animate-paper-drop relative overflow-hidden rounded-sm px-6 pb-12 pt-32 text-center sm:px-12 sm:pt-40">
      {/* FLAP */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-28 bg-black/10 sm:h-36"
        style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
      />

      {/* POSTAGE + POSTMARK */}
      <div aria-hidden className="absolute right-5 top-5 rotate-3">
        <div className="postage h-20 w-16 shadow-md">
          <div className="flex h-full items-center justify-center bg-accent font-serif text-2xl font-black text-white">
            {site.firstName[0]}
          </div>
        </div>
      </div>
      <div
        aria-hidden
        className="stamp animate-stamp-in absolute right-16 top-14 flex h-24 w-24 -rotate-12 flex-col items-center justify-center rounded-full p-0 text-[9px] text-stamp"
      >
        <span>Delivered</span>
        <span className="mt-1 text-[8px] tracking-[0.1em]">{today()}</span>
      </div>

      <h2 ref={headingRef} tabIndex={-1} className="font-hand text-5xl leading-tight text-ink focus:outline-none">
        Thanks{name ? `, ${name}` : ""}!
      </h2>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink/80">
        Your letter is sealed and in the mailbag. Expect a reply {site.responseTime}.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-8 border-2 border-ink bg-paper-light/70 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"
      >
        Write another letter
      </button>
    </div>
  );
}
