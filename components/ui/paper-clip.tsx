import { cx } from "@/lib/utils";

/** Metal paper clip. Position it with className (it is absolutely placed). */
export default function PaperClip({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 64"
      fill="none"
      className={cx(
        "pointer-events-none absolute z-30 h-16 w-6 text-zinc-500 drop-shadow-[1px_2px_1px_rgba(0,0,0,0.25)]",
        className,
      )}
    >
      <path
        d="M8 22v26a4 4 0 0 0 8 0V12a6 6 0 0 0-12 0v38a8 8 0 0 0 16 0V22"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
