/**
 * Contact form logic, kept separate from the UI so the dummy `sendLetter`
 * can later be swapped for a real endpoint (Route Handler, Server Action,
 * Formspree, Resend…) without touching the component.
 */

export const LETTER_TOPICS = ["a new project", "a full-time role", "a collaboration", "just saying hi"] as const;
export const LETTER_BUDGETS = ["< $2k", "$2k – $10k", "$10k +", "not sure yet"] as const;

export type Letter = {
  name: string;
  email: string;
  topic: string;
  budget: string;
  message: string;
};

export type LetterErrors = Partial<Record<keyof Letter, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readLetter(form: FormData): Letter {
  const field = (key: keyof Letter) => String(form.get(key) ?? "").trim();
  return {
    name: field("name"),
    email: field("email"),
    topic: field("topic"),
    budget: field("budget"),
    message: field("message"),
  };
}

export function validateLetter(letter: Letter): LetterErrors {
  const errors: LetterErrors = {};
  if (letter.name.length < 2) errors.name = "who's writing?";
  if (!EMAIL_PATTERN.test(letter.email)) errors.email = "that address won't get a reply";
  if (!letter.topic) errors.topic = "pick one";
  if (letter.message.length < 10) errors.message = "a few more words, please";
  return errors;
}

/** Dummy transport — simulates network latency. */
export async function sendLetter(letter: Letter): Promise<{ ok: true }> {
  void letter;
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return { ok: true };
}
