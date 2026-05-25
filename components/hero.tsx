export default function Hero() {
  return (
    <section className="relative flex min-h-[760px] items-center justify-center py-20">
      
      {/* Back paper layer */}
      <div className="absolute inset-0 translate-x-5 translate-y-5 rotate-[1.8deg] rounded-[2px] bg-[#e9e6da] opacity-70 shadow-2xl" />

      {/* Mid paper layer */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rotate-[-0.8deg] rounded-[2px] border border-black/5 bg-[#f5f2e8] shadow-xl" />

      {/* Main paper */}
      <div
        className="
        folded-edge
        paper-texture
        paper-shadow
        paper-edge
        paper-light
        absolute
        inset-0
        -z-10
        rotate-[-1deg]
        overflow-hidden
        border
        border-black/10
        bg-[var(--surface-container-lowest)]
      "
      >
        {/* paper stains */}
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-black/[0.015] blur-3xl" />

        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-black/[0.02] blur-3xl" />

        {/* fold lighting */}
        <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-black/[0.05] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center md:px-8">
        <span className="mb-4 block text-xs font-bold tracking-[0.25em] text-[var(--secondary)]">
          FULL-STACK ENGINEER
        </span>

        <h1 className="mb-8 text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--primary)] md:text-7xl">
          Hello, I'm Ferdy. I build
          <span className="mx-2 inline-block rotate-[-1deg] bg-[var(--secondary-fixed)] px-3 py-1 shadow-md">
            digital experiences
          </span>
          with grit and grain.
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-[var(--on-surface-variant)] md:text-lg">
          Full-stack engineer specializing in robust backends and tactile
          interfaces. Currently exploring the intersection of distributed
          systems and creative coding.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button
            className="
            sticker-btn
            rotate-[-2deg]
            border
            border-black/10
            bg-[var(--secondary)]
            px-10
            py-4
            font-bold
            text-white
            shadow-[0_10px_30px_rgba(0,0,0,0.18)]
            transition-all
            hover:-translate-y-1
            hover:rotate-0
          "
          >
            VIEW PROJECTS
          </button>

          <button
            className="
            rotate-[1deg]
            border-2
            border-[var(--primary)]
            bg-white/70
            px-10
            py-4
            font-bold
            text-[var(--primary)]
            shadow-md
            backdrop-blur-sm
            transition-all
            hover:-translate-y-1
            hover:bg-[var(--primary)]
            hover:text-white
          "
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Realistic tape */}
      <div
        className="
        absolute
        left-1/2
        top-0
        h-10
        w-36
        -translate-x-1/2
        -translate-y-3
        rotate-[2deg]
      "
      >

        <div
  className="
    absolute
    inset-0
    opacity-[1]
    mix-blend-multiply
    pointer-events-none
  "
  style={{
    backgroundImage:
      // "url('https://png.pngtree.com/png-vector/20240617/ourmid/pngtree-vertical-close-up-of-brown-crumpled-paper-texture-background-png-image_12457533.png')",
      "url('https://cdn.pixabay.com/photo/2015/09/22/12/18/paper-951489_1280.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // filter: "grayscale(1) contrast(1.1)",
  }}
/>
        {/* <div className="absolute inset-0 opacity-40 mix-blend-overlay">
          <div className="h-full w-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_25%,rgba(255,255,255,0.3)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.3)_75%)] bg-[length:12px_12px]" />
        </div> */}
      </div>
    </section>
  );
}