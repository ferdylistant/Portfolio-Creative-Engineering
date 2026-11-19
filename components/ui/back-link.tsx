import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-accent"
    >
      <ArrowLeft aria-hidden size={16} className="transition-transform group-hover:-translate-x-1" />
      {children}
    </Link>
  );
}
