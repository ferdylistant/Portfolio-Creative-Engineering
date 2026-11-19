import "server-only";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Per-IP rate limiting for the contact form, backed by Upstash Redis.
 *
 * Env vars (see .env.example) — the Vercel/Upstash integration names work too:
 *  - UPSTASH_REDIS_REST_URL   (or KV_REST_API_URL)
 *  - UPSTASH_REDIS_REST_TOKEN (or KV_REST_API_TOKEN)
 *
 * When they are missing, limiting is skipped (fail-open) so local development
 * works without Redis; a warning is logged once.
 */

/** Letters allowed per IP in each sliding window. */
const CONTACT_LIMIT = 3;
const CONTACT_WINDOW = "10 m";

let limiter: Ratelimit | null | undefined;

function getLimiter() {
  if (limiter !== undefined) return limiter;

  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    console.warn("[rate-limit] Upstash env vars missing — contact form is NOT rate limited.");
    limiter = null;
    return limiter;
  }

  limiter = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(CONTACT_LIMIT, CONTACT_WINDOW),
    prefix: "ratelimit:contact",
    // If Redis is slow or unreachable, let the request through after 3s.
    timeout: 3000,
  });
  return limiter;
}

export type RateLimitResult = { allowed: true } | { allowed: false; retryAfterSeconds: number };

export async function limitContact(identifier: string): Promise<RateLimitResult> {
  const activeLimiter = getLimiter();
  if (!activeLimiter) return { allowed: true };

  try {
    const { success, reset } = await activeLimiter.limit(identifier);
    if (success) return { allowed: true };

    return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil((reset - Date.now()) / 1000)) };
  } catch (error) {
    // Fail open: a Redis outage shouldn't take the contact form down with it.
    console.error("[rate-limit] Upstash error, allowing request:", error);
    return { allowed: true };
  }
}

/** Best-effort client IP from proxy headers (Vercel, Cloudflare, Nginx…). */
export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || request.headers.get("cf-connecting-ip") || "unknown";
}
