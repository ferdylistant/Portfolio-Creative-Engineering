/**
 * Contact form logic shared by the client form and the /api/contact
 * Route Handler. Keep this file free of server-only code.
 */

export const LETTER_TOPICS = ["a new project", "a full-time role", "a collaboration", "just saying hi"] as const;
export const LETTER_BUDGETS = ["< $2k", "$2k – $10k", "$10k +", "not sure yet"] as const;

/** Hidden field bots love to fill in. Real people never see it. */
export const HONEYPOT_FIELD = "website";

const LIMITS = { name: 100, email: 200, message: 5000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type Letter = {
  name: string;
  email: string;
  topic: string;
  budget: string;
  message: string;
};

export type LetterErrors = Partial<Record<keyof Letter, string>>;

/** Normalise unknown input (FormData or parsed JSON) into a Letter. */
export function toLetter(source: FormData | Record<string, unknown>): Letter {
  const read = (key: keyof Letter) =>
    String((source instanceof FormData ? source.get(key) : source[key]) ?? "").trim();

  return {
    name: read("name"),
    email: read("email"),
    topic: read("topic"),
    budget: read("budget"),
    message: read("message"),
  };
}

export function validateLetter(letter: Letter): LetterErrors {
  const errors: LetterErrors = {};

  if (letter.name.length < 2) errors.name = "who's writing?";
  else if (letter.name.length > LIMITS.name) errors.name = "that's a long name";

  if (!EMAIL_PATTERN.test(letter.email) || letter.email.length > LIMITS.email) {
    errors.email = "that address won't get a reply";
  }

  if (!(LETTER_TOPICS as readonly string[]).includes(letter.topic)) errors.topic = "pick one";

  if (letter.budget && !(LETTER_BUDGETS as readonly string[]).includes(letter.budget)) {
    errors.budget = "pick one of these";
  }

  if (letter.message.length < 10) errors.message = "a few more words, please";
  else if (letter.message.length > LIMITS.message) errors.message = "save some for the reply!";

  return errors;
}

export type SendResult =
  | { ok: true }
  | { ok: false; errors?: LetterErrors; message: string };

/** Client-side transport: posts the letter to the Route Handler. */
export async function sendLetter(letter: Letter, honeypot = ""): Promise<SendResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...letter, [HONEYPOT_FIELD]: honeypot }),
    });

    if (response.ok) return { ok: true };

    const body = (await response.json().catch(() => ({}))) as Partial<SendResult>;
    return {
      ok: false,
      errors: "errors" in body ? body.errors : undefined,
      message: ("message" in body && body.message) || "The mail truck broke down. Please try again.",
    };
  } catch {
    return { ok: false, message: "Couldn't reach the post office. Check your connection and try again." };
  }
}
