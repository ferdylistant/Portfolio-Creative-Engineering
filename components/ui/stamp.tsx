import { cx } from "@/lib/utils";

const TONES = {
  red: "text-stamp",
  blue: "text-accent",
  ink: "text-ink",
  green: "text-green-800",
} as const;

const SIZES = {
  sm: "text-[9px]",
  md: "text-xs",
  lg: "text-base sm:text-xl",
} as const;

export type StampTone = keyof typeof TONES;

type Props = {
  children: React.ReactNode;
  tone?: StampTone;
  size?: keyof typeof SIZES;
  className?: string;
};

/** Rubber-stamp label with worn ink texture. */
export default function Stamp({ children, tone = "red", size = "md", className }: Props) {
  return <span className={cx("stamp", TONES[tone], SIZES[size], className)}>{children}</span>;
}
