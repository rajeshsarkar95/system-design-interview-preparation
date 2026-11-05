// LRU cache using Map insertion order. get/put are O(1) average.
class LRUCache {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity < 1) {
      throw new Error("capacity must be a positive integer");
    }
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      const leastRecentlyUsedKey = this.cache.keys().next().value;
      this.cache.delete(leastRecentlyUsedKey);
    }
  }
}

if (require.main === module) {
  const cache = new LRUCache(2);
  cache.put("a", 1);
  cache.put("b", 2);
  console.log(cache.get("a")); // 1
  cache.put("c", 3);           // evicts b
  console.log(cache.get("b")); // -1
}

module.exports = LRUCache;
