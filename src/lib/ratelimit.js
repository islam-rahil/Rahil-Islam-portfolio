// lib/rateLimit.js
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 m"),
});

export async function checkRate(ip) {
  try {
    const { success } = await rateLimit.limit(ip);
    if (!success) {
      await redis.set(`block:${ip}`, "1", { ex: 45 });
      return { blocked: true };
    }

    const isBlocked = await redis.get(`block:${ip}`);
    return { blocked: Boolean(isBlocked) };
  } catch (error) {
    console.error("Rate limit error:", error);
    return { blocked: false }; 
  }
}

export { rateLimit };