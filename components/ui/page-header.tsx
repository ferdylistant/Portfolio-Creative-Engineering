type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
};

/** Shared header for inner pages: label-maker eyebrow + display title. */
export default function PageHeader({ eyebrow, title, description, children }: Props) {
  return (
    <header className="relative mb-12 md:mb-16">
      <span className="label-maker -rotate-1">{eyebrow}</span>

      <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl">
        {title}
      </h1>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
          {description}
        </p>
      )}

      {children}
    </header>
  );
}
