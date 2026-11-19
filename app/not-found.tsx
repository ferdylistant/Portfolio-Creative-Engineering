import Link from "next/link";
import StickerLink from "@/components/ui/sticker-link";
import Tape from "@/components/ui/tape";
import { navLinks } from "@/data/site";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl py-10">
      <div className="relative -rotate-2">
        <Tape className="-top-2 left-1/2 w-32 -translate-x-1/2 rotate-3" />

        <div className="surface-lined torn-top shadow-paper-lg px-6 pb-12 pt-16 sm:pl-16 sm:pr-12">
          <p className="font-display text-8xl font-extrabold leading-none tracking-[-0.06em] text-ink/15 sm:text-9xl">
            404
          </p>
          <h1 className="mt-4 font-hand text-4xl leading-tight text-ink sm:text-5xl">
            This page was torn out of the notebook.
          </h1>
          <p className="mt-4 leading-8 text-ink-muted">
            Either it never existed, or I ripped it out during a refactor. Try one of these instead:
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-hand text-2xl text-accent underline decoration-wavy underline-offset-4 hover:text-stamp"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <StickerLink href="/" className="mt-10 -rotate-1">
            Back to the desk
          </StickerLink>
        </div>
      </div>
    </div>
  );
}
