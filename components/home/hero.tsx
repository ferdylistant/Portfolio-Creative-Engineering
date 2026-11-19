import StickerLink from "@/components/ui/sticker-link";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-150 items-center justify-center py-20 md:min-h-190">
      {/* Back paper layer */}
      <div aria-hidden className="absolute inset-0 translate-x-5 translate-y-5 rotate-[1.8deg] rounded-[2px] bg-[#e9e6da] opacity-70 shadow-2xl" />

      {/* Mid paper layer */}
      <div aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 -rotate-[0.8deg] rounded-[2px] border border-black/5 bg-[#f5f2e8] shadow-xl" />

      {/* Main paper */}
      <div
        aria-hidden
        className="folded-edge paper-texture paper-shadow paper-edge paper-light absolute inset-0 -z-10 -rotate-1 overflow-hidden border border-black/10 bg-(--surface-container-lowest)"
      >
        {/* paper stains */}
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-black/1.5 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-black/2 blur-3xl" />

        {/* fold lighting */}
        <div className="absolute right-0 top-0 h-32 w-32 bg-linear-to-bl from-black/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl px-4 text-center sm:px-6 md:px-8">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.25em] text-accent">
          {site.role}
        </span>

        <h1 className="mb-8 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl md:text-7xl">
          Hello, I&apos;m {site.firstName}. I build
          <span className="mx-2 inline-block -rotate-1 bg-accent-soft px-3 py-1 shadow-md">
            digital experiences
          </span>
          with grit and grain.
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
          Full-stack engineer specializing in robust backends and tactile
          interfaces. Currently exploring the intersection of distributed
          systems and creative coding.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <StickerLink href="/projects" className="-rotate-2">
            View projects
          </StickerLink>
          <StickerLink href="/contact" variant="outline" className="rotate-1">
            Get in touch
          </StickerLink>
        </div>
      </div>

      {/* Realistic tape */}
      <div aria-hidden className="absolute left-1/2 top-0 h-10 w-36 -translate-x-1/2 -translate-y-3 rotate-2">
        <div
          className="pointer-events-none absolute inset-0 mix-blend-multiply"
          style={{
            backgroundImage: "url('https://cdn.pixabay.com/photo/2015/09/22/12/18/paper-951489_1280.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
}
