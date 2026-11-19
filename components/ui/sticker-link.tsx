import Link from "next/link";
import { cx } from "@/lib/utils";

const VARIANTS = {
  primary:
    "sticker-btn border border-black/10 bg-accent text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]",
  outline:
    "border-2 border-ink bg-white/70 text-ink shadow-md hover:bg-ink hover:text-white",
} as const;

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  className?: string;
};

/** Tilted, paper-sticker style call-to-action link. */
export default function StickerLink({ href, children, variant = "primary", className }: Props) {
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-all hover:-translate-y-1 hover:rotate-0 md:px-10",
        VARIANTS[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
