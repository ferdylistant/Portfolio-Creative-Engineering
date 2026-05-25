import { CheckCircle2, Pin } from "lucide-react";

const techStack = [
  {
    short: "Re",
    name: "React",
  },
  {
    short: "No",
    name: "Node.js",
  },
  {
    short: "Py",
    name: "Python",
  },
  {
    short: "Ts",
    name: "TypeScript",
  },
  {
    short: "Go",
    name: "GoLang",
  },
  {
    short: "Rs",
    name: "Rust",
  },
];

export default function StackSection() {
  return (
    <section
  id="stack"
  className="
    paper-shadow
    relative
    isolate
    rotate-[0.5deg]
    overflow-visible
    border
    border-black/[0.06]
    px-6
    py-16
    md:px-16
  "
>
  {/* BACK PAPER */}
  <div
    className="
      absolute
      inset-0
      -z-20
      translate-x-2
      translate-y-3
      rotate-[-1.2deg]
      bg-[#ddd5c5]
      shadow-2xl
    "
  />

  {/* MAIN PAPER */}
  <div
    className="
      absolute
      inset-0
      -z-10
      overflow-hidden
     bg-[#ece2cf]
    "
  >
    {/* vintage discoloration */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.7),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_45%)]" />

    {/* paper fibers */}
    <div
      className="
        absolute
        inset-0
        opacity-[0.07]
        mix-blend-multiply
      "
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            rgba(0,0,0,0.035) 0px,
            rgba(0,0,0,0.035) 1px,
            transparent 1px,
            transparent 4px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(255,255,255,0.18) 0px,
            rgba(255,255,255,0.18) 1px,
            transparent 1px,
            transparent 6px
          )
        `,
      }}
    />
{/* felt fibers */}
<div
  className="
    absolute
    inset-0
    opacity-[0.08]
    mix-blend-multiply
  "
  style={{
    backgroundImage: `
      radial-gradient(rgba(0,0,0,0.08) 0.7px, transparent 0.7px),
      radial-gradient(rgba(255,255,255,0.4) 0.5px, transparent 0.5px)
    `,
    backgroundSize: "6px 6px, 8px 8px",
    backgroundPosition: "0 0, 2px 2px",
  }}
/>
    {/* dirt / age spots */}
    <div className="absolute left-12 top-10 h-32 w-32 rounded-full bg-[#7b5d32]/[0.06] blur-3xl" />

    <div className="absolute bottom-10 right-12 h-40 w-40 rounded-full bg-black/[0.05] blur-3xl" />

    {/* REAL PAPER WRINKLE TEXTURE */}
<div
  className="
    absolute
    inset-0
    opacity-[0.9]
    mix-blend-multiply
    pointer-events-none
  "
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/736x/ab/54/40/ab5440e8f603e6b21bb4c5aeb2c94a1c.jpg')",
      // "url('https://png.pngtree.com/png-vector/20240617/ourmid/pngtree-vertical-close-up-of-brown-crumpled-paper-texture-background-png-image_12457533.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "grayscale(1) contrast(1.1)",
  }}
/>

    {/* edge wear */}
    <div className="absolute inset-0 ring-1 ring-black/[0.04] shadow-[inset_0_0_40px_rgba(0,0,0,0.05)]" />
  </div>
{/* NOTEBOOK HOLES */}
<div className="absolute bottom-0 left-0 top-0 z-20 flex w-10 flex-col items-center justify-around py-10">
  {Array.from({ length: 9 }).map((_, i) => (
    <div
      key={i}
      className="
        relative
        h-5
        w-5
        rounded-full
        bg-[#d8cfbf]
        shadow-[inset_0_2px_4px_rgba(0,0,0,0.18),0_1px_1px_rgba(255,255,255,0.4)]
      "
    >
      {/* inner depth */}
      <div className="absolute inset-[4px] rounded-full bg-[#b8ae9f]" />

      {/* paper tear */}
      <div className="absolute inset-0 rounded-full ring-1 ring-black/[0.05]" />
    </div>
  ))}
</div>
  <div className="grid grid-cols-1 items-center gap-16 pl-6 lg:grid-cols-2 lg:pl-10">
    <div>
      <h2 className="mb-6 font-[var(--font-hanken)] text-4xl font-bold text-[var(--primary)] md:text-5xl">
        Technical Stack
      </h2>

      <p className="mb-8 text-base leading-relaxed text-[var(--on-surface-variant)] md:text-lg">
        My tools are chosen for reliability and performance. I treat every
        line of code as a structural element—built to last and easy to
        maintain.
      </p>

      <ul className="space-y-4">
        <li className="flex items-center gap-4 font-bold text-[var(--primary)]">
          <CheckCircle2 className="text-[var(--secondary)]" />
          Architecting scalable cloud infrastructure
        </li>

        <li className="flex items-center gap-4 font-bold text-[var(--primary)]">
          <CheckCircle2 className="text-[var(--secondary)]" />
          Developing fluid, responsive UI systems
        </li>

        <li className="flex items-center gap-4 font-bold text-[var(--primary)]">
          <CheckCircle2 className="text-[var(--secondary)]" />
          Mentoring engineering teams
        </li>
      </ul>
    </div>

    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
      {techStack.map((tech, i) => (
        <div
          key={tech.name}
          className={`
            flex
            flex-col
            items-center
            gap-3
            transition-all
            duration-300
            hover:-translate-y-1
            hover:rotate-0
            ${i % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"}
          `}
        >
          <div
            className="
              relative
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-black/10
              bg-[#eee6d7]
              text-3xl
              font-bold
              text-[var(--outline)]
              shadow-[inset_0_2px_3px_rgba(255,255,255,0.9),0_6px_12px_rgba(0,0,0,0.08)]
            "
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_45%)]" />

            {tech.short}
          </div>

          <span className="text-sm uppercase tracking-wide text-[var(--primary)]">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* REALISTIC PIN */}
  <div className="absolute -top-5 left-1/2 z-50 -translate-x-1/2">
    {/* pin pressed shadow */}
    <div className="absolute left-1/2 top-6 h-5 w-5 -translate-x-1/2 rounded-full bg-black/25 blur-md" />

    {/* needle */}
    <div className="absolute left-1/2 top-5 h-7 w-[2px] -translate-x-1/2 bg-gradient-to-b from-zinc-200 to-zinc-700 shadow-sm" />

    {/* pin head */}
    <div
      className="
        relative
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-red-900/20
        bg-gradient-to-b
        from-red-300
        via-red-500
        to-red-800
        shadow-[0_10px_20px_rgba(0,0,0,0.28),inset_0_2px_4px_rgba(255,255,255,0.65)]
      "
    >
      {/* gloss */}
      <div className="absolute left-[7px] top-[5px] h-2.5 w-2.5 rounded-full bg-white/75 blur-[1px]" />

      <Pin
        size={15}
        className="rotate-[18deg] fill-white/90 text-white/90"
      />
    </div>
  </div>
</section>
  );
}