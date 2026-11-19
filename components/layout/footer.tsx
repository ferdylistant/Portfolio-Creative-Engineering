import Link from "next/link";
import { navLinks, site, socials } from "@/data/site";
import { cx } from "@/lib/utils";

const SOCIAL_TILTS = ["-rotate-2", "rotate-1", "-rotate-1"];

export default function Footer() {
  return (
    <footer className="relative mt-20 px-4 pb-8 md:px-8 print:hidden">
      <div className="paper-texture relative mx-auto max-w-350 rotate-[0.25deg] overflow-hidden border border-black/6 bg-paper/95 px-5 py-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] md:px-10">
        {/* PAPER LIGHT */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_50%)]" />

        {/* EDGE */}
        <div aria-hidden className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.04)] ring-1 ring-black/4" />

        <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <Link href="/" className="font-display text-xl font-bold tracking-tighter text-ink">
              {site.name}
            </Link>
            <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-ink-muted">
              {site.tagline}
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.18em] text-ink-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            {socials.map((item, i) => {
              const external = item.href.startsWith("http");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  className={cx(
                    "relative border border-black/10 bg-paper-deep px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-ink shadow-[0_4px_10px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:rotate-0 hover:bg-accent hover:text-white",
                    SOCIAL_TILTS[i % SOCIAL_TILTS.length],
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative mt-8 border-t border-dashed border-black/10 pt-6 text-center text-xs leading-relaxed text-ink-muted">
          © {new Date().getFullYear()} {site.name}. All scraps preserved.
        </div>
      </div>
    </footer>
  );
}
