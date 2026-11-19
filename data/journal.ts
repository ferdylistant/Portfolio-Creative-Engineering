// Dummy articles — swap for MDX or a CMS later; only this file needs to change.

export type JournalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; lang: string; code: string };

export type JournalPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date, e.g. "2026-10-28" */
  date: string;
  section: "Engineering" | "Craft" | "Notes";
  tags: string[];
  body: JournalBlock[];
};

const posts: JournalPost[] = [
  {
    slug: "boring-sql",
    title: "Why I still write boring SQL",
    excerpt:
      "ORMs are great until the query plan isn't. A case for keeping a little SQL in your back pocket.",
    date: "2026-10-28",
    section: "Engineering",
    tags: ["postgres", "performance"],
    body: [
      {
        type: "p",
        text: "Every few months someone asks why our codebase still has hand-written SQL files sitting next to a perfectly good ORM. The honest answer is that the ORM is wonderful for ninety percent of our queries and quietly dangerous for the other ten.",
      },
      {
        type: "p",
        text: "The dangerous ten percent are the reports, the aggregations, the joins across five tables that someone wrote at 6pm on a Thursday. They work in development, and then production has two million rows and the page takes eleven seconds.",
      },
      { type: "h2", text: "Read the plan, not the code" },
      {
        type: "p",
        text: "When a query is slow, the code is rarely the right place to look. The query plan is. Writing the SQL yourself means the thing you read and the thing the database runs are the same thing.",
      },
      {
        type: "code",
        lang: "sql",
        code: "EXPLAIN ANALYZE\nSELECT o.id, SUM(i.qty * i.price) AS total\nFROM orders o\nJOIN order_items i ON i.order_id = o.id\nWHERE o.created_at > now() - interval '7 days'\nGROUP BY o.id;",
      },
      {
        type: "quote",
        text: "Boring code is code you can still read at 3am during an incident.",
      },
      {
        type: "list",
        items: [
          "Keep raw SQL in its own folder, with tests.",
          "Name queries after the question they answer.",
          "Review query plans in pull requests for anything touching reports.",
        ],
      },
      {
        type: "p",
        text: "None of this is anti-ORM. It's pro-knowing-what-your-database-is-doing.",
      },
    ],
  },
  {
    slug: "interfaces-like-paper",
    title: "Designing interfaces that feel like paper",
    excerpt:
      "Texture, imperfection and the subtle rotation that makes a screen feel touched by human hands.",
    date: "2026-09-14",
    section: "Craft",
    tags: ["design", "css"],
    body: [
      {
        type: "p",
        text: "Screens are perfectly flat, perfectly aligned and perfectly lit. Paper is none of those things — which is exactly why paper-inspired interfaces feel warm when they are done with restraint.",
      },
      { type: "h2", text: "Imperfection, on purpose" },
      {
        type: "p",
        text: "A one-degree rotation is enough. Two degrees starts to look like a mistake. The trick is to make imperfection deterministic, so the layout looks hand-placed but never jumps between renders.",
      },
      {
        type: "code",
        lang: "ts",
        code: 'const TILTS = ["-rotate-1", "rotate-1", "rotate-[0.4deg]"];\nexport const tilt = (i: number) => TILTS[i % TILTS.length];',
      },
      {
        type: "p",
        text: "Texture should be cheap. An inline SVG noise filter weighs a few hundred bytes and needs no network request — a photo of real paper can weigh hundreds of kilobytes.",
      },
      {
        type: "quote",
        text: "If everyone notices the effect, it's too strong.",
      },
    ],
  },
  {
    slug: "queue-backpressure",
    title: "A field guide to queue backpressure",
    excerpt:
      "What happens when producers outrun consumers, and the three knobs I reach for first.",
    date: "2026-07-02",
    section: "Engineering",
    tags: ["queues", "distributed systems"],
    body: [
      {
        type: "p",
        text: "Queues are shock absorbers. They smooth out bursts so your workers can process at a steady pace. But a shock absorber that never rebounds is just a very slow failure.",
      },
      { type: "h2", text: "The three knobs" },
      {
        type: "list",
        items: [
          "Bound the queue — an unbounded queue is a memory leak with extra steps.",
          "Shed load early — reject at the edge with a clear retry-after.",
          "Scale consumers on lag, not on CPU.",
        ],
      },
      {
        type: "p",
        text: "Most incidents I have seen were not caused by the queue filling up. They were caused by nobody noticing it was filling up.",
      },
      {
        type: "quote",
        text: "Alert on queue age, not queue length.",
      },
    ],
  },
  {
    slug: "shipping-on-friday",
    title: "Notes from shipping on a Friday",
    excerpt:
      "Deploying on Friday is not reckless if rolling back is boring. A short checklist.",
    date: "2026-05-19",
    section: "Notes",
    tags: ["devops", "process"],
    body: [
      {
        type: "p",
        text: "The rule against Friday deploys is really a rule against deploys you can't undo. Fix that, and Friday becomes just another day.",
      },
      {
        type: "list",
        items: [
          "Feature flags for anything user-facing.",
          "One-command rollback, practised monthly.",
          "Dashboards open before you press the button.",
          "A human on call who knows what changed.",
        ],
      },
      {
        type: "p",
        text: "That said, I still don't migrate databases at 5pm. Confidence is not the same as bravado.",
      },
    ],
  },
  {
    slug: "small-tools",
    title: "Small tools, sharp edges",
    excerpt:
      "On building tiny internal tools that save hours, and knowing when to throw them away.",
    date: "2026-03-08",
    section: "Craft",
    tags: ["tooling", "productivity"],
    body: [
      {
        type: "p",
        text: "Some of the most valuable code I have written was under two hundred lines: a script that replays failed webhooks, a page that shows which feature flags are on in production.",
      },
      { type: "h2", text: "Disposable by design" },
      {
        type: "p",
        text: "Internal tools should be cheap to build and cheap to delete. If a tool needs a roadmap, it has become a product — and should be treated like one.",
      },
      {
        type: "quote",
        text: "The best internal tool is the one people forget is there.",
      },
    ],
  },
];

/** All posts, newest first. */
export const journalPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return journalPosts.find((post) => post.slug === slug);
}

export function getReadingTime(post: JournalPost) {
  const words = post.body
    .flatMap((block) => {
      if (block.type === "list") return block.items;
      if (block.type === "code") return [block.code];
      return [block.text];
    })
    .join(" ")
    .split(/\s+/).length;

  return Math.max(1, Math.round(words / 220));
}

export function getAdjacentPosts(slug: string) {
  const index = journalPosts.findIndex((post) => post.slug === slug);

  return {
    newer: index > 0 ? journalPosts[index - 1] : undefined,
    older: index < journalPosts.length - 1 ? journalPosts[index + 1] : undefined,
  };
}
