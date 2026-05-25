"use client";

import { useEffect, useState } from "react";

export default function TerminalSection() {
  const terminalText = "contact --email hello@alex.dev";

  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(terminalText.slice(0, index));
      index++;

      if (index > terminalText.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
  className="
    paper-shadow
    relative
    overflow-hidden
    rounded-lg
    border
    border-black/20
    bg-[#161616]
    p-6
    text-[var(--on-primary-container)]
    shadow-[0_20px_50px_rgba(0,0,0,0.35)]
    md:p-8
  "
>
  {/* TERMINAL GLOW */}
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />

{/* SCREEN NOISE */}
<div
  className="
    pointer-events-none
    absolute
    inset-0
    opacity-[0.06]
    mix-blend-screen
  "
  style={{
    backgroundImage: `
      repeating-radial-gradient(
        rgba(255,255,255,0.25) 0px,
        transparent 1px
      )
    `,
    backgroundSize: "3px 3px",
  }}
/>

{/* SCANLINES */}
<div
  className="
    pointer-events-none
    absolute
    inset-0
    opacity-[0.08]
  "
  style={{
    backgroundImage: `
      repeating-linear-gradient(
        to bottom,
        rgba(255,255,255,0.06) 0px,
        rgba(255,255,255,0.06) 1px,
        transparent 2px,
        transparent 4px
      )
    `,
  }}
/>
     <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
  <div className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
  <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]" />
  <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]" />

  <div className="ml-4 text-xs uppercase tracking-[0.3em] text-white/40">
    terminal.sys
  </div>
</div>

     <div className="space-y-3 font-mono text-sm leading-relaxed md:text-base">
        <p>
          <span className="text-[#7CFFB2]">
            alex@dev-desk:
          </span>
          <span className="text-[#d4ffd4]">~</span>$ cat contact.txt
        </p>

        <p className="text-[#d4ffd4]">
          Currently available for high-impact freelance opportunities and
          full-time senior engineering roles.
        </p>

        <p>
          <span className="text-[#7CFFB2]">
            alex@dev-desk:
          </span>
          <span className="text-[#d4ffd4]">~</span>$ ping availability
        </p>

        <p className="text-[#d4ffd4]">
          PING availability (127.0.0.1): 56 data bytes
        </p>

        <p className="text-[#d4ffd4]">
          64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms (Active Now)
        </p>

        <p>
          <span className="text-[#7CFFB2]">
            alex@dev-desk:
          </span>
          <span className="text-[#d4ffd4]">~</span>$

          <span className="typewriter text-[#d4ffd4]">
            {" "}
            {text}
          </span>
        </p>
      </div>
    </section>
  );
}