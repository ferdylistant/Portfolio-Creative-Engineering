import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody from "@/components/journal/article-body";
import BackLink from "@/components/ui/back-link";
import Tape from "@/components/ui/tape";
import { getAdjacentPosts, getPost, getReadingTime, journalPosts } from "@/data/journal";
import { site } from "@/data/site";
import { formatDate } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/journal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { type: "article", publishedTime: post.date, tags: post.tags },
  };
}

export default async function JournalPostPage({ params }: PageProps<"/journal/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { newer, older } = getAdjacentPosts(slug);

  return (
    <article className="mx-auto max-w-3xl">
      <BackLink href="/journal">Back to the Gazette</BackLink>

      <div className="surface-paper shadow-paper-lg relative mt-10 px-5 pb-12 pt-12 sm:px-10 md:px-16 md:pb-16 md:pt-16">
        <Tape className="-top-3 left-6 w-28 -rotate-6" />
        <Tape className="-top-3 right-6 w-28 rotate-4" />

        <header className="border-b border-dashed border-black/20 pb-8">
          <p className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-bold uppercase tracking-[0.25em] text-ink-muted">
            <span className="text-stamp">{post.section}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{getReadingTime(post)} min read</span>
          </p>

          <h1 className="mt-4 font-serif text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-5 font-serif text-lg italic leading-relaxed text-ink-muted md:text-xl">{post.excerpt}</p>
        </header>

        <div className="pt-10">
          <ArticleBody blocks={post.body} />
        </div>

        <footer className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-dashed border-black/20 pt-8">
          <ul className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag} className="bg-paper-deep px-3 py-1 text-xs font-semibold text-ink">
                #{tag}
              </li>
            ))}
          </ul>
          <p className="font-hand text-3xl text-ink/80">— {site.firstName}</p>
        </footer>
      </div>

      {(newer || older) && (
        <nav aria-label="More stories" className="mt-12 grid gap-4 sm:grid-cols-2">
          {older && (
            <Link href={`/journal/${older.slug}`} className="group surface-newsprint shadow-paper block -rotate-1 p-5 transition-all hover:rotate-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink-muted">← Older story</p>
              <p className="mt-1 font-serif text-xl font-bold text-ink group-hover:text-accent">{older.title}</p>
            </Link>
          )}
          {newer && (
            <Link href={`/journal/${newer.slug}`} className="group surface-newsprint shadow-paper block rotate-1 p-5 transition-all hover:rotate-0 sm:col-start-2 sm:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink-muted">Newer story →</p>
              <p className="mt-1 font-serif text-xl font-bold text-ink group-hover:text-accent">{newer.title}</p>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
