"use client";

import { type FormEvent, useState } from "react";
import SentEnvelope from "@/components/contact/sent-envelope";
import {
  LETTER_BUDGETS,
  LETTER_TOPICS,
  type LetterErrors,
  readLetter,
  sendLetter,
  validateLetter,
} from "@/lib/contact";
import { site } from "@/data/site";
import { cx } from "@/lib/utils";

type Status = "idle" | "sending" | "sent";

function PenError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <span id={id} role="alert" className="ml-2 inline-block font-hand text-xl leading-none text-stamp">
      ← {message}
    </span>
  );
}

const BLANK =
  "inline-block w-full border-0 border-b-2 border-dashed border-ink/30 bg-transparent px-1 font-hand text-2xl leading-7 text-accent placeholder:text-ink/25 focus:border-solid focus:border-accent focus:outline-none aria-invalid:border-stamp sm:w-60";

function Choice({ name, value, onSelect }: { name: string; value: string; onSelect?: (value: string) => void }) {
  return (
    <label className="cursor-pointer">
      <input type="radio" name={name} value={value} onChange={() => onSelect?.(value)} className="peer sr-only" />
      <span className="inline-block rounded-[50%] border-2 border-transparent px-3 py-0.5 font-hand text-2xl leading-8 text-ink/70 transition-all hover:text-ink peer-checked:-rotate-2 peer-checked:border-stamp peer-checked:text-stamp peer-focus-visible:outline-2 peer-focus-visible:outline-accent">
        {value}
      </span>
    </label>
  );
}

/** Fill-in-the-blanks letter. Submission is simulated via `sendLetter`. */
export default function LetterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<LetterErrors>({});
  const [signer, setSigner] = useState("");
  const [topic, setTopic] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const letter = readLetter(new FormData(event.currentTarget));
    const found = validateLetter(letter);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    await sendLetter(letter);
    setStatus("sent");
  }

  function reset() {
    setStatus("idle");
    setErrors({});
    setSigner("");
    setTopic("");
  }

  if (status === "sent") return <SentEnvelope name={signer} onReset={reset} />;

  const sending = status === "sending";
  const fieldProps = (name: keyof LetterErrors) => ({
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-label="Write a letter"
      className="surface-lined shadow-paper-lg relative -rotate-[0.4deg] px-5 pb-12 pt-10 text-[15px] leading-8 text-ink sm:pl-16 sm:pr-10"
    >
      <p className="font-hand text-4xl leading-tight">Dear {site.firstName},</p>

      <p className="mt-6">
        My name is{" "}
        <input {...fieldProps("name")} aria-label="Your name" autoComplete="name" placeholder="your name" onChange={(e) => setSigner(e.target.value)} className={BLANK} />
        <PenError id="name-error" message={errors.name} /> and you can reach me at{" "}
        <input {...fieldProps("email")} type="email" aria-label="Your email" autoComplete="email" placeholder="you@email.com" className={BLANK} />
        <PenError id="email-error" message={errors.email} />.
      </p>

      <fieldset className="mt-6" aria-describedby={errors.topic ? "topic-error" : undefined}>
        <legend className="float-left mr-2">I&apos;m writing about</legend>
        <div className="flex flex-wrap gap-x-1">
          {LETTER_TOPICS.map((value) => (
            <Choice key={value} name="topic" value={value} onSelect={setTopic} />
          ))}
          <PenError id="topic-error" message={errors.topic} />
        </div>
      </fieldset>

      {topic !== "just saying hi" && (
        <fieldset className="mt-4">
          <legend className="float-left mr-2">and the budget is roughly</legend>
          <div className="flex flex-wrap gap-x-1">
            {LETTER_BUDGETS.map((value) => (
              <Choice key={value} name="budget" value={value} />
            ))}
          </div>
        </fieldset>
      )}

      <label htmlFor="message" className="mt-6 block">
        Here&apos;s the story: <PenError id="message-error" message={errors.message} />
      </label>
      <textarea
        id="message"
        {...fieldProps("message")}
        rows={5}
        placeholder="Tell me what you're building, what's broken, or what's on your mind…"
        className="mt-0 block w-full resize-y border-0 bg-transparent p-0 font-hand text-2xl leading-8 text-accent placeholder:text-ink/25 focus:outline-none"
      />

      <div className="mt-8 flex flex-col-reverse items-start justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <p>Warmly,</p>
          <p className={cx("font-hand text-4xl leading-tight", signer ? "text-accent" : "text-ink/25")}>
            {signer || "your signature"}
          </p>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="group flex flex-col items-center gap-2 self-center disabled:cursor-wait sm:self-auto"
        >
          <span
            aria-hidden
            className={cx(
              "flex h-20 w-20 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#e0574f,#a11d17_60%,#6e0f0b)] font-serif text-3xl font-black text-[#5a0b08] shadow-[0_6px_14px_rgba(110,15,11,0.45),inset_0_-4px_8px_rgba(0,0,0,0.3),inset_0_3px_6px_rgba(255,255,255,0.25)] transition-transform group-hover:rotate-12 group-hover:scale-105 [text-shadow:0_1px_0_rgba(255,255,255,0.25)]",
              sending && "animate-pulse",
            )}
          >
            {site.firstName[0]}
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-ink">
            {sending ? "Sealing…" : "Seal & send"}
          </span>
        </button>
      </div>
    </form>
  );
}
