import { cx } from "@/lib/utils";

/** Strip of washi tape. Pass size, position and rotation via className. */
export default function Tape({ className }: { className?: string }) {
  return <span aria-hidden className={cx("tape pointer-events-none absolute z-20 block h-7 w-24", className)} />;
}
