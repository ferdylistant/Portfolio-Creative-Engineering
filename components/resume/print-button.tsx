"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="sticker-btn inline-flex rotate-1 items-center gap-2 border border-black/10 bg-accent px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_6px_14px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-0.5 hover:rotate-0"
    >
      <Printer aria-hidden size={16} />
      Print / Save PDF
    </button>
  );
}
