import Link from "next/link";
import { type JournalPost, getReadingTime } from "@/data/journal";
import { cx, formatDate, tilt } from "@/lib/utils";

/** Newspaper clipping linking to a journal post. */
export default function ClippingCard({ post, index }: { post: JournalPost; index: number }) {
  return (
    <Link
      href={`/journal/${post.slug}`}
      className={cx(
        "group block h-full drop-shadow-[0_10px_14px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-1 hover:rotate-0",
        tilt(index + 1),
      )}
    >
      <article className="clipping surface-newsprint flex h-full flex-col px-6 pb-8 pt-7">
        <div className="flex items-center justify-between border-b border-ink/70 pb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-ink-muted">
          <span>{post.section}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>

        <h3 className="mt-4 font-serif text-2xl font-black leading-tight text-ink transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 font-serif text-[15px] leading-relaxed text-ink-muted">{post.excerpt}</p>

        <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
          {getReadingTime(post)} min read <span aria-hidden>→</span>
        </p>
      </article>
    </Link>
  );
}
