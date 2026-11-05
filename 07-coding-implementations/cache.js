// Small TTL cache for learning. Not shared across processes.
class TTLCache {
  constructor() {
    this.items = new Map();
  }

  set(key, value, ttlMs) {
    this.items.set(key, { value, expiresAt: Date.now() + ttlMs });
  }

  get(key) {
    const entry = this.items.get(key);
    if (!entry) return undefined;
    if (Date.now() >= entry.expiresAt) {
      this.items.delete(key);
      return undefined;
    }
    return entry.value;
  }

  delete(key) {
    return this.items.delete(key);
  }
}

module.exports = TTLCache;
