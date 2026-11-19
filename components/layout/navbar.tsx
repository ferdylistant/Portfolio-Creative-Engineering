"use client";

import { Menu, Terminal, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PushPin from "@/components/ui/push-pin";
import { navLinks, site } from "@/data/site";
import { cx } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the mobile menu whenever the route changes.
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <nav aria-label="Main" className="sticky top-5 z-50 px-4 md:px-8 print:hidden">
      <div className="paper-texture relative mx-auto flex max-w-350 -rotate-[0.4deg] items-center justify-between overflow-visible border border-black/6 bg-paper/95 px-5 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md md:px-10">
        {/* BACK PAPER */}
        <div aria-hidden className="absolute inset-0 -z-20 translate-y-2 rotate-1 bg-paper-shadow opacity-70 shadow-xl" />

        {/* PAPER LIGHT */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_50%)]" />

        {/* WRINKLES */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
          style={{
            backgroundImage: `
              linear-gradient(120deg, transparent 0%, transparent 46%, rgba(0,0,0,0.05) 48%, rgba(255,255,255,0.16) 50%, transparent 53%),
              linear-gradient(-70deg, transparent 0%, transparent 62%, rgba(0,0,0,0.04) 64%, rgba(255,255,255,0.12) 66%, transparent 69%)
            `,
          }}
        />

        {/* EDGE WEAR */}
        <div aria-hidden className="pointer-events-none absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.04)] ring-1 ring-black/4" />

        {/* SIDE TAPES */}
        <span aria-hidden className="tape absolute -left-3 top-1/2 h-10 w-6 -translate-y-1/2 -rotate-8" />
        <span aria-hidden className="tape absolute -right-3 top-1/2 h-10 w-6 -translate-y-1/2 rotate-7" />

        {/* BRAND */}
        <Link href="/" className="relative flex items-center gap-3" aria-label={`${site.name} — home`}>
          <div className="relative flex h-10 w-10 -rotate-4 items-center justify-center rounded-sm border border-black/10 bg-paper-deep shadow-[inset_0_2px_2px_rgba(255,255,255,0.7),0_4px_8px_rgba(0,0,0,0.08)]">
            <Terminal aria-hidden size={18} className="text-ink" />
          </div>

          <div className="leading-none">
            <div className="font-display text-xl font-extrabold tracking-[-0.05em] text-ink sm:text-2xl">
              {site.name}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-ink-muted">
              {site.tagline}
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cx(
                    "group relative text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-px",
                    active ? "text-accent" : "text-ink-muted hover:text-accent",
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={cx(
                      "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="relative flex items-center gap-3">
          <Link
            href="/resume"
            className="sticker-btn relative rotate-1 overflow-hidden border border-black/10 bg-accent px-3 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_6px_14px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:rotate-0 md:px-6 md:text-sm"
          >
            <span aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent_45%)]" />
            <span className="relative hidden sm:inline">Resume</span>
            <span className="relative sm:hidden">CV</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-11 w-11 items-center justify-center rounded-sm border border-black/10 bg-paper-deep shadow-[inset_0_2px_2px_rgba(255,255,255,0.7),0_4px_8px_rgba(0,0,0,0.08)] md:hidden"
          >
            {open ? <X size={20} className="text-ink" /> : <Menu size={20} className="text-ink" />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div id="mobile-menu" className="animate-paper-drop absolute left-0 top-[calc(100%+14px)] w-full px-2 md:hidden">
            <ul className="paper-texture flex flex-col gap-1 overflow-hidden border border-black/10 bg-paper p-4 shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
              {[{ label: "Home", href: "/" }, ...navLinks].map((link) => {
                const active = link.href === "/" ? pathname === "/" : isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cx(
                        "block border-b border-black/5 px-2 py-3 text-sm font-bold uppercase tracking-[0.18em]",
                        active ? "text-accent" : "text-ink",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <PushPin className="-top-4 left-1/2 -translate-x-1/2" />
      </div>
    </nav>
  );
}
