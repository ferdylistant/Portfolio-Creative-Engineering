import "server-only";

import { Resend } from "resend";
import type { Letter } from "@/lib/contact";
import { site } from "@/data/site";

/**
 * Server-only email delivery via Resend.
 *
 * Env vars (see .env.example):
 *  - RESEND_API_KEY     required
 *  - CONTACT_TO_EMAIL   required, inbox that receives letters
 *  - CONTACT_FROM_EMAIL optional, must be on a domain verified in Resend.
 *                       Defaults to Resend's sandbox sender, which can only
 *                       deliver to the email address of your Resend account.
 */

const DEFAULT_FROM = "Portfolio Mail Room <onboarding@resend.dev>";

let client: Resend | null = null;

function getConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) return null;

  client ??= new Resend(apiKey);
  return { client, to, from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM };
}

export function isMailerConfigured() {
  return getConfig() !== null;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderText(letter: Letter) {
  return [
    `New letter from ${letter.name} <${letter.email}>`,
    `Topic: ${letter.topic}`,
    letter.budget ? `Budget: ${letter.budget}` : null,
    "",
    letter.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

function renderHtml(letter: Letter) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 16px 4px 0;color:#74777a;font-size:12px;text-transform:uppercase;letter-spacing:.1em">${label}</td><td style="padding:4px 0;font-weight:bold">${escapeHtml(value)}</td></tr>`;

  return `
  <div style="background:#f3ecdf;padding:32px 16px;font-family:Georgia,serif;color:#191c1e">
    <div style="max-width:560px;margin:0 auto;background:#fffdf6;border:1px solid #e5e3d8;padding:32px">
      <p style="margin:0 0 4px;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#b3261e">Mail room · new letter</p>
      <h1 style="margin:0 0 24px;font-size:26px">Dear ${escapeHtml(site.firstName)},</h1>
      <table style="border-collapse:collapse;margin-bottom:24px;font-family:Arial,sans-serif;font-size:14px">
        ${row("From", letter.name)}
        ${row("Email", letter.email)}
        ${row("Topic", letter.topic)}
        ${letter.budget ? row("Budget", letter.budget) : ""}
      </table>
      <p style="white-space:pre-wrap;line-height:1.7;font-size:16px;margin:0 0 24px">${escapeHtml(letter.message)}</p>
      <p style="margin:0;font-size:12px;color:#74777a;font-family:Arial,sans-serif">Hit reply to answer ${escapeHtml(letter.name)} directly.</p>
    </div>
  </div>`;
}

export async function deliverLetter(letter: Letter) {
  const config = getConfig();
  if (!config) throw new Error("Mailer is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL.");

  const { error } = await config.client.emails.send({
    from: config.from,
    to: config.to,
    replyTo: letter.email,
    subject: `✉ ${letter.name} — ${letter.topic}`,
    text: renderText(letter),
    html: renderHtml(letter),
  });

  if (error) throw new Error(`Resend error: ${error.message}`);
}
