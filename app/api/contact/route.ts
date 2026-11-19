import { HONEYPOT_FIELD, toLetter, validateLetter } from "@/lib/contact";
import { deliverLetter, isMailerConfigured } from "@/lib/mailer";

const MAX_BODY_BYTES = 20_000;

export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return Response.json({ ok: false, message: "That letter is too heavy to post." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ ok: false, message: "That letter got smudged in transit." }, { status: 400 });
  }

  // Bots fill the hidden field: pretend success so they don't retry.
  if (typeof body[HONEYPOT_FIELD] === "string" && body[HONEYPOT_FIELD] !== "") {
    return Response.json({ ok: true });
  }

  const letter = toLetter(body);
  const errors = validateLetter(letter);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors, message: "A few blanks still need filling." }, { status: 422 });
  }

  if (!isMailerConfigured()) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is missing.");
    return Response.json(
      { ok: false, message: "The mail room is closed right now. Please email me directly." },
      { status: 503 },
    );
  }

  try {
    await deliverLetter(letter);
    return Response.json({ ok: true });
  } catch (error) {
    console.error("[contact] delivery failed:", error);
    return Response.json(
      { ok: false, message: "The mail truck broke down. Please try again or email me directly." },
      { status: 502 },
    );
  }
}
