# Caching
Caching stores frequently accessed data closer to the application to reduce latency and backend load.
## Cache-aside
1. Read cache.
2. On hit, return cached value.
3. On miss, read database.
4. Populate cache with a TTL.
5. Return result.
## Write-through
Write to cache and backing store as part of the write path. Can improve read freshness but adds write latency.
## Write-back
Write to cache first and persist later. Fast, but requires careful durability and recovery design.
## Cache invalidation
Invalidate or update cached data when source data changes. Common approaches: TTL, explicit invalidation, versioned keys and event-driven invalidation.
## Redis
An in-memory data store commonly used for caching, counters, distributed locks (with care), sessions, rate limiting and queues.
## CDN
A content delivery network caches static or cacheable content near users geographically.
