// In-memory fixed-window limiter for learning only.
// Production multi-instance systems should use a shared store such as Redis.
class FixedWindowRateLimiter {
  constructor({ limit, windowMs }) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.clients = new Map();
  }

  allow(key, now = Date.now()) {
    let entry = this.clients.get(key);
    if (!entry || now >= entry.resetAt) {
      entry = { count: 0, resetAt: now + this.windowMs };
    }

    if (entry.count >= this.limit) {
      this.clients.set(key, entry);
      return { allowed: false, remaining: 0, resetAt: entry.resetAt };
    }

    entry.count += 1;
    this.clients.set(key, entry);
    return {
      allowed: true,
      remaining: this.limit - entry.count,
      resetAt: entry.resetAt
    };
  }
}

module.exports = FixedWindowRateLimiter;
