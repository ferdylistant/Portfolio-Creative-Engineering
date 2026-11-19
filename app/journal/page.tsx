import type { Metadata } from "next";
import Link from "next/link";
import ClippingCard from "@/components/journal/clipping-card";
import { getReadingTime, journalPosts } from "@/data/journal";
import { site } from "@/data/site";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Journal",
  description: "The Dev Desk Gazette — notes on engineering, craft and shipping software.",
};

export default function JournalPage() {
  const [lead, ...rest] = journalPosts;
  const sidebar = rest.slice(0, 3);

  return (
    <div className="surface-newsprint shadow-paper-lg relative -rotate-[0.3deg] px-4 py-8 sm:px-8 md:px-12 md:py-12">
      {/* MASTHEAD */}
      <header className="border-b-[6px] border-double border-ink pb-4 text-center">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink/40 pb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-ink-muted">
          <span>Vol. III — No. {journalPosts.length}</span>
          <span className="hidden sm:inline">{site.location} edition</span>
          <span>Price: one coffee</span>
        </div>

        <h1 className="mt-5 font-serif text-[2.6rem] font-black leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl">
          The Dev Desk Gazette
        </h1>
        <p className="mt-3 font-serif text-base italic text-ink-muted md:text-lg">
          “All the code that&apos;s fit to print.”
        </p>
      </header>

      <div className="flex flex-wrap justify-between gap-2 border-b border-ink/40 py-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
        <span>Latest edition · {formatDate(lead.date)}</span>
        <span>{journalPosts.length} stories filed</span>
      </div>

      {/* LEAD STORY + SIDEBAR */}
      <section className="mt-8 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <article className="lg:border-r lg:border-ink/30 lg:pr-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-stamp">Front page · {lead.section}</p>
          <Link href={`/journal/${lead.slug}`} className="group">
            <h2 className="mt-3 font-serif text-4xl font-black leading-[1.05] text-ink transition-colors group-hover:text-accent md:text-6xl">
              {lead.title}
            </h2>
          </Link>
          <p className="mt-4 font-serif text-lg italic text-ink-muted md:text-xl">{lead.excerpt}</p>

          <div className="mt-6 gap-8 font-serif text-[15px] leading-relaxed text-ink md:columns-2">
            {lead.body
              .filter((block) => block.type === "p")
              .slice(0, 2)
              .map((block, i) => (
                <p
                  key={block.text}
                  className={
                    i === 0
                      ? "mb-4 first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-black first-letter:leading-[0.8]"
                      : "mb-4"
                  }
                >
                  {block.text}
                </p>
              ))}
          </div>

          <Link
            href={`/journal/${lead.slug}`}
            className="mt-4 inline-block border-b-2 border-ink text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Continue reading · {getReadingTime(lead)} min →
          </Link>
        </article>

        <aside aria-label="In this issue">
          <h2 className="border-b-2 border-ink pb-2 text-xs font-bold uppercase tracking-[0.3em] text-ink">In this issue</h2>
          <ol className="divide-y divide-ink/20">
            {sidebar.map((post, i) => (
              <li key={post.slug} className="py-4">
                <Link href={`/journal/${post.slug}`} className="group flex gap-4">
                  <span className="font-serif text-3xl font-black leading-none text-ink/30">{i + 2}</span>
                  <span>
                    <span className="block font-serif text-lg font-bold leading-snug text-ink transition-colors group-hover:text-accent">
                      {post.title}
                    </span>
                    <time dateTime={post.date} className="mt-1 block text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                      {formatDate(post.date)}
                    </time>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      {/* CLIPPINGS */}
      {rest.length > 0 && (
        <section aria-labelledby="clippings-title" className="mt-14 border-t-[6px] border-double border-ink pt-8">
          <h2 id="clippings-title" className="text-center text-xs font-bold uppercase tracking-[0.35em] text-ink">
            ✂ Clippings from the archive ✂
          </h2>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <li key={post.slug}>
                <ClippingCard post={post} index={i} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
