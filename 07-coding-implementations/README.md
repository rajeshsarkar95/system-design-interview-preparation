# JavaScript Coding Implementations

Run examples with Node.js:
```bash
node lru-cache.js
node debounce.js
```

| File | Concept | Typical complexity |
|---|---|---|
| `debounce.js` | Delay execution until calls stop | O(1) timer state |
| `throttle.js` | Limit execution frequency | O(1) state |
| `lru-cache.js` | Least Recently Used cache | O(1) average get/put |
| `event-emitter.js` | Event subscription and dispatch | O(n) emit |
| `promise-all.js` | Promise aggregation | O(n) bookkeeping |
| `queue.js` | FIFO queue | O(1) amortized enqueue/dequeue |
| `pub-sub.js` | Topic-based messaging | O(n) publish |
| `rate-limiter.js` | Fixed-window request limiting | O(1) average lookup |
| `cache.js` | TTL cache | O(1) average lookup |

These are educational implementations, not drop-in production infrastructure.
