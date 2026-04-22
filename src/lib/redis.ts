import { Redis } from "@upstash/redis";

export const redis = Redis.fromEnv();

export const keys = {
  solveCount: (puzzleId: string) => `puzzle:${puzzleId}:solves`,
  rateLimitAttempts: (ip: string, puzzleId: string) =>
    `ratelimit:${ip}:${puzzleId}`,
  pageVisits: (slug: string) => `page:${slug}:visits`,
};
