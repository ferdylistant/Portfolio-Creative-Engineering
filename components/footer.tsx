export default function Footer() {
  return (
    <footer className="relative mt-20 px-4 md:px-8">
      <div
        className="
          paper-texture
          relative
          mx-auto
          max-w-[1400px]
          rotate-[0.25deg]
          overflow-hidden
          border
          border-black/[0.06]
          bg-[#f3ecdf]/95
          px-5
          py-8
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
            rotate-[-1deg]
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
            opacity-[0.16]
            mix-blend-multiply
          "
          style={{
            backgroundImage: `
              linear-gradient(
                120deg,
                transparent 0%,
                transparent 46%,
                rgba(0,0,0,0.04) 48%,
                rgba(255,255,255,0.14) 50%,
                transparent 53%
              ),

              linear-gradient(
                -70deg,
                transparent 0%,
                transparent 62%,
                rgba(0,0,0,0.03) 64%,
                rgba(255,255,255,0.1) 66%,
                transparent 69%
              )
            `,
          }}
        />

        {/* EDGE */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-black/[0.04] shadow-[inset_0_0_30px_rgba(0,0,0,0.04)]" />

        {/* TAPE LEFT */}
        <div
          className="
            absolute
            -left-3
            top-8
            h-10
            w-6
            rotate-[-10deg]
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
            bottom-8
            h-10
            w-6
            rotate-[8deg]
            border
            border-white/20
            bg-[#f6edd0]/70
            shadow-sm
            backdrop-blur-sm
          "
        />

        <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <div className="font-[var(--font-hanken)] text-xl font-extrabold tracking-[-0.05em] text-[var(--primary)]">
              Ferdy Listant
            </div>

            <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[var(--on-surface-variant)]">
              creative engineering
            </div>
          </div>

          {/* CENTER */}
          <div className="max-w-[420px] text-center text-sm leading-relaxed text-[var(--on-surface-variant)]">
  © 2024 Ferdy Listant. All scraps preserved.
</div>

          {/* RIGHT */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            {["Github", "LinkedIn", "RSS"].map((item, i) => (
              <a
                key={item}
                href="#"
                className={`
                  relative
                  rotate-[${
                    i === 0 ? "-2deg" : i === 1 ? "1deg" : "-1deg"
                  }]
                  border
                  border-black/10
                  bg-[#ebe3d3]
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[var(--primary)]
                  shadow-[0_4px_10px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:rotate-0
                  hover:bg-[var(--secondary)]
                  hover:text-white
                `}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM SCRATCH */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-2
            left-1/2
            h-[1px]
            w-[80%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-black/10
            to-transparent
          "
        />
      </div>
    </footer>
  );
}