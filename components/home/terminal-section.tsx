"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const COMMAND = `contact --email ${site.email}`;
const TYPE_SPEED_MS = 90;

function Prompt() {
  return (
    <>
      <span className="text-[#7CFFB2]">ferdy@dev-desk:</span>
      <span className="text-[#d4ffd4]">~</span>$
    </>
  );
}

export default function TerminalSection() {
  const [length, setLength] = useState(0);
  const done = length >= COMMAND.length;

  useEffect(() => {
    if (done) return;
    const timeout = setTimeout(() => setLength((value) => value + 1), TYPE_SPEED_MS);
    return () => clearTimeout(timeout);
  }, [length, done]);

  return (
    <section
      id="connect"
      aria-label="Connect"
      className="paper-shadow relative scroll-mt-32 overflow-hidden rounded-lg border border-black/20 bg-[#161616] p-5 text-(--on-primary-container) shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:p-6 md:p-8"
    >
      {/* TERMINAL GLOW */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />

      {/* SCANLINES */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 2px, transparent 4px)",
        }}
      />

      <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-4">
        <div className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
        <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.7)]" />
        <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.7)]" />
        <div className="ml-4 text-xs uppercase tracking-[0.3em] text-white/40">terminal.sys</div>
      </div>

      <div className="relative space-y-3 wrap-break-word font-mono text-sm leading-relaxed md:text-base">
        <p>
          <Prompt /> cat contact.txt
        </p>
        <p className="text-[#d4ffd4]">
          Currently available for high-impact freelance opportunities and
          full-time senior engineering roles.
        </p>

        <p>
          <Prompt /> ping availability
        </p>
        <p className="text-[#d4ffd4]">PING availability (127.0.0.1): 56 data bytes</p>
        <p className="text-[#d4ffd4]">
          64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.042 ms (Active Now)
        </p>

        <p>
          <Prompt />{" "}
          <span className={done ? "text-[#d4ffd4]" : "typewriter text-[#d4ffd4]"}>
            {COMMAND.slice(0, length)}
          </span>
        </p>

        {done && (
          <div className="animate-paper-drop flex flex-wrap gap-3 pt-3">
            <a
              href={`mailto:${site.email}`}
              className="border border-[#7CFFB2]/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#7CFFB2] transition-colors hover:bg-[#7CFFB2] hover:text-[#161616]"
            >
              ./send-email
            </a>
            <Link
              href="/contact"
              className="border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80 transition-colors hover:bg-white hover:text-[#161616]"
            >
              ./write-a-letter
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
