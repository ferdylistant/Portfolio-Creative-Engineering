"use client";
import { Menu, Terminal, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-5 z-50 px-4 md:px-8">
      <div
        className="
          paper-texture
          relative
          mx-auto
          flex
          max-w-[1400px]
          rotate-[-0.4deg]
          items-center
          justify-between
          overflow-visible
          border
          border-black/[0.06]
          bg-[#f3ecdf]/95
          px-5
          py-4
          shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          backdrop-blur-md
          md:px-10
        "
      >
        {/* BACK PAPER */}
        <div
          className="
            absolute
            inset-0
            -z-20
            translate-y-2
            rotate-[1deg]
            bg-[#ddd5c6]
            opacity-70
            shadow-xl
          "
        />

        {/* PAPER LIGHT */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_50%)]" />

        {/* WRINKLES */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.18]
            mix-blend-multiply
          "
          style={{
            backgroundImage: `
              linear-gradient(
                120deg,
                transparent 0%,
                transparent 46%,
                rgba(0,0,0,0.05) 48%,
                rgba(255,255,255,0.16) 50%,
                transparent 53%
              ),

              linear-gradient(
                -70deg,
                transparent 0%,
                transparent 62%,
                rgba(0,0,0,0.04) 64%,
                rgba(255,255,255,0.12) 66%,
                transparent 69%
              )
            `,
          }}
        />

        {/* EDGE WEAR */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-black/[0.04] shadow-[inset_0_0_30px_rgba(0,0,0,0.04)]" />

        {/* TAPE LEFT */}
        <div
          className="
            absolute
            -left-3
            top-1/2
            h-10
            w-6
            -translate-y-1/2
            rotate-[-8deg]
            border
            border-white/20
            bg-[#f6edd0]/70
            shadow-sm
            backdrop-blur-sm
          "
        />

        {/* TAPE RIGHT */}
        <div
          className="
            absolute
            -right-3
            top-1/2
            h-10
            w-6
            -translate-y-1/2
            rotate-[7deg]
            border
            border-white/20
            bg-[#f6edd0]/70
            shadow-sm
            backdrop-blur-sm
          "
        />

        {/* BRAND */}
        <div className="relative flex items-center gap-3">
          {/* STAMP */}
          <div
            className="
              relative
              flex
              h-10
              w-10
              rotate-[-4deg]
              items-center
              justify-center
              rounded-sm
              border
              border-black/10
              bg-[#ebe3d3]
              shadow-[inset_0_2px_2px_rgba(255,255,255,0.7),0_4px_8px_rgba(0,0,0,0.08)]
            "
          >
            <Terminal size={18} className="text-[var(--primary)]" />
          </div>

          <div className="leading-none">
            <div className="font-[var(--font-hanken)] text-2xl font-extrabold tracking-[-0.05em] text-[var(--primary)]">
              Ferdy Listant
            </div>

            <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[var(--on-surface-variant)]">
              creative engineering
            </div>
          </div>
        </div>

        {/* NAV */}
        <div className="hidden items-center gap-8 md:flex">
          {[
            "Projects",
            "Stack",
            "Process",
            "Connect",
          ].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`
                relative
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                ${
                  i === 0
                    ? "text-[var(--secondary)]"
                    : "text-[var(--on-surface-variant)] hover:text-[var(--secondary)]"
                }
              `}
            >
              {item}

              <span
                className="
                  absolute
                  -bottom-1
                  left-0
                  h-[2px]
                  w-0
                  bg-[var(--secondary)]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="relative flex items-center gap-3">
          {/* button shadow paper */}
          <div
            className="
              absolute
              inset-0
              translate-x-1
              translate-y-1
              rotate-[2deg]
              bg-black/10
              blur-sm
            "
          />

          <button
  className="
    sticker-btn
    relative
    rotate-[1deg]
    overflow-hidden
    border
    border-black/10
    bg-[var(--secondary)]
    px-3
    py-2.5
    text-xs
    font-bold
    uppercase
    tracking-[0.12em]
    text-white
    shadow-[0_6px_14px_rgba(0,0,0,0.18)]
    transition-all
    duration-300
    hover:-translate-y-[2px]
    hover:rotate-0
    md:px-6
    md:text-sm
  "
>
            {/* glossy */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_45%)]" />

           <span className="hidden sm:inline">Resume</span>
<span className="sm:hidden">CV</span>
          </button>
          {/* MOBILE MENU */}
          <button
            onClick={() => setOpen(!open)}
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-sm
              border
              border-black/10
              bg-[#ebe3d3]
              shadow-[inset_0_2px_2px_rgba(255,255,255,0.7),0_4px_8px_rgba(0,0,0,0.08)]
              md:hidden
            "
          >
            {open ? (
              <X size={20} className="text-[var(--primary)]" />
            ) : (
              <Menu size={20} className="text-[var(--primary)]" />
            )}
          </button>
        </div>
{/* MOBILE DROPDOWN */}
{open && (
  <div
    className="
      absolute
      left-0
      top-[calc(100%+14px)]
      w-full
      px-2
      md:hidden
    "
  >
    <div
      className="
        paper-texture
        overflow-hidden
        border
        border-black/10
        bg-[#f3ecdf]
        p-4
        shadow-[0_12px_30px_rgba(0,0,0,0.16)]
      "
    >
      <div className="flex flex-col gap-2">
        {[
          "Projects",
          "Stack",
          "Process",
          "Connect",
        ].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="
              border-b
              border-black/5
              px-2
              py-3
              text-sm
              font-bold
              uppercase
              tracking-[0.18em]
              text-[var(--primary)]
            "
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </div>
)}
        {/* PUSH PIN */}
        <div className="absolute -top-4 left-1/2 z-50 -translate-x-1/2">
          {/* shadow */}
          <div className="absolute left-1/2 top-5 h-5 w-5 -translate-x-1/2 rounded-full bg-black/20 blur-md" />

          {/* needle */}
          <div className="absolute left-1/2 top-4 h-6 w-[2px] -translate-x-1/2 bg-gradient-to-b from-zinc-200 to-zinc-700" />

          {/* head */}
          <div
            className="
              relative
              h-8
              w-8
              rounded-full
              border
              border-red-900/20
              bg-gradient-to-b
              from-red-300
              via-red-500
              to-red-800
              shadow-[0_8px_16px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)]
            "
          >
            <div className="absolute left-[6px] top-[5px] h-2 w-2 rounded-full bg-white/70 blur-[1px]" />
          </div>
        </div>
      </div>
    </nav>
  );
}