import { redis, keys } from "./redis";

const WINDOW_SECONDS = 60;
const MAX_ATTEMPTS = 5;

export type RateLimitResult =
  | { success: true }
  | { success: false; retryAfter: number };

export async function checkRateLimit(
  ip: string,
  puzzleId: string,
): Promise<RateLimitResult> {
  const key = keys.rateLimitAttempts(ip, puzzleId);

  const attempts = await redis.incr(key);

  if (attempts === 1) {
    // First attempt in window — set expiry
    await redis.expire(key, WINDOW_SECONDS);
  }

  if (attempts > MAX_ATTEMPTS) {
    const ttl = await redis.ttl(key);
    return { success: false, retryAfter: ttl };
  }

  return { success: true };
}
