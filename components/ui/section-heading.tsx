import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  meta: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
};

/** Home-page section heading with a file-path caption. */
export default function SectionHeading({ title, meta, icon: Icon, action }: Props) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-4">
      <div>
        <h2 className="font-display text-4xl font-bold tracking-[-0.03em] text-ink md:text-5xl">
          {title}
        </h2>
        <p className="mt-2 text-sm text-ink-muted">{meta}</p>
      </div>

      {action ?? (Icon && <Icon aria-hidden className="hidden size-10 text-outline md:block" />)}
    </div>
  );
}
