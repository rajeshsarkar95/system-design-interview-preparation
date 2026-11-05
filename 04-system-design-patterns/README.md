# System Design Patterns

## Monolith
One deployable application. Simpler to build and operate initially; modules should still have clear boundaries.

## Microservices
Independent services organized around business capabilities. Benefits include independent deployment and scaling; costs include network failures, distributed data and operational complexity.

## Event-driven architecture
Components communicate through events. Producers publish facts; consumers react asynchronously.

## Pub/Sub
Publishers send messages to a topic/channel; subscribers receive them. Consider delivery guarantees, ordering, retries and duplicate events.

## Message queues
Queues buffer work between producers and consumers. Use acknowledgements, retries, dead-letter queues and idempotent handlers.

## Rate limiting
Controls request volume. Common algorithms: fixed window, sliding window, token bucket and leaky bucket.

## Circuit breaker
Stops repeated calls to a failing dependency, allowing recovery. Typical states: closed, open and half-open.

## Load balancing
Distributes traffic across instances and removes unhealthy targets from rotation.
