import Image from "next/image";
import { cx } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  sizes: string;
  aspect?: "square" | "landscape";
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  /** Decorations layered on the frame (tape, clips, pins). */
  children?: React.ReactNode;
};

export default function Polaroid({
  src,
  alt,
  caption,
  sizes,
  aspect = "square",
  priority,
  className,
  imageClassName = "grayscale-[0.6] sepia-[0.15] contrast-[1.05]",
  children,
}: Props) {
  return (
    <figure className={cx("polaroid relative", className)}>
      {children}
      <div
        className={cx(
          "relative overflow-hidden bg-paper-shadow",
          aspect === "square" ? "aspect-square" : "aspect-4/3",
        )}
      >
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cx("object-cover", imageClassName)} />
      </div>
      {caption && (
        <figcaption className="absolute inset-x-0 bottom-2 truncate px-3 text-center font-hand text-xl text-ink/80">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
