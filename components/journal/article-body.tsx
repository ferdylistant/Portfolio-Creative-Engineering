import Tape from "@/components/ui/tape";
import type { JournalBlock } from "@/data/journal";

const DROP_CAP =
  "first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-7xl first-letter:font-black first-letter:leading-[0.8] first-letter:text-ink";

function Block({ block, isFirstParagraph }: { block: JournalBlock; isFirstParagraph: boolean }) {
  switch (block.type) {
    case "p":
      return <p className={isFirstParagraph ? DROP_CAP : undefined}>{block.text}</p>;

    case "h2":
      return <h2 className="pt-4 font-serif text-3xl font-black leading-tight text-ink">{block.text}</h2>;

    case "quote":
      return (
        <blockquote className="relative my-10 border-l-4 border-stamp py-1 pl-6">
          <p className="font-hand text-3xl leading-snug text-ink md:text-4xl">“{block.text}”</p>
        </blockquote>
      );

    case "list":
      return (
        <ul className="space-y-2 pl-1">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="mt-0.5 font-hand text-xl leading-none text-stamp">✗</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "code":
      return (
        <figure className="relative my-10 -rotate-[0.6deg]">
          <Tape className="-top-3 left-8 -rotate-3" />
          <Tape className="-top-3 right-8 rotate-2" />
          <pre className="overflow-x-auto rounded-sm bg-[#1b1b19] p-5 pt-7 font-mono text-[13px] leading-relaxed text-[#d4ffd4] shadow-[0_14px_28px_rgba(0,0,0,0.25)]">
            <code>{block.code}</code>
          </pre>
          <figcaption className="mt-2 text-right text-[10px] uppercase tracking-[0.25em] text-ink-muted">
            printout · {block.lang}
          </figcaption>
        </figure>
      );
  }
}

/** Renders structured journal content blocks. */
export default function ArticleBody({ blocks }: { blocks: JournalBlock[] }) {
  const firstParagraph = blocks.findIndex((block) => block.type === "p");

  return (
    <div className="space-y-6 font-serif text-[17px] leading-[1.8] text-ink/90 md:text-lg">
      {blocks.map((block, i) => (
        <Block key={i} block={block} isFirstParagraph={i === firstParagraph} />
      ))}
    </div>
  );
}
