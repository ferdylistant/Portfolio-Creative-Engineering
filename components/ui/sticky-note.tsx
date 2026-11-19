import type { NoteColor } from "@/data/profile";
import { cx } from "@/lib/utils";

const NOTE_COLORS: Record<NoteColor, string> = {
  yellow: "bg-note-yellow",
  pink: "bg-note-pink",
  blue: "bg-note-blue",
  green: "bg-note-green",
};

type Props = {
  children: React.ReactNode;
  color?: NoteColor;
  className?: string;
};

export default function StickyNote({ children, color = "yellow", className }: Props) {
  return <div className={cx("sticky-note p-5", NOTE_COLORS[color], className)}>{children}</div>;
}
