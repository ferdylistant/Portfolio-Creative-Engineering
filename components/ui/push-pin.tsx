import { cx } from "@/lib/utils";

const PIN_COLORS = {
  red: "border-red-900/20 from-red-300 via-red-500 to-red-800",
  blue: "border-blue-900/20 from-blue-300 via-blue-500 to-blue-800",
  yellow: "border-yellow-900/20 from-yellow-100 via-yellow-400 to-yellow-600",
  green: "border-green-900/20 from-green-200 via-green-500 to-green-800",
} as const;

export type PinColor = keyof typeof PIN_COLORS;

type Props = {
  color?: PinColor;
  /** Positioning classes, e.g. "-top-4 left-1/2 -translate-x-1/2". */
  className?: string;
};

export default function PushPin({ color = "red", className }: Props) {
  return (
    <div aria-hidden className={cx("pointer-events-none absolute z-30", className)}>
      <div className="absolute left-1/2 top-5 h-5 w-5 -translate-x-1/2 rounded-full bg-black/20 blur-md" />
      <div className="absolute left-1/2 top-4 h-6 w-[2px] -translate-x-1/2 bg-linear-to-b from-zinc-200 to-zinc-700" />
      <div
        className={cx(
          "relative h-8 w-8 rounded-full border bg-linear-to-b shadow-[0_8px_16px_rgba(0,0,0,0.25),inset_0_2px_3px_rgba(255,255,255,0.6)]",
          PIN_COLORS[color],
        )}
      >
        <div className="absolute left-1.5 top-1.25 h-2 w-2 rounded-full bg-white/70 blur-[1px]" />
      </div>
    </div>
  );
}
