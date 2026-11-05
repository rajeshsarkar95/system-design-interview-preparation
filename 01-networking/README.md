# Networking and API Design

## HTTP and HTTPS
HTTP is an application protocol. HTTPS protects HTTP traffic using TLS encryption and certificate-based server authentication.

## REST
REST is an architectural style for networked APIs. Common methods:
- GET: retrieve
- POST: create or trigger processing
- PUT: replace
- PATCH: partially update
- DELETE: remove

Use meaningful resource paths, appropriate status codes, validation and consistent error responses.

## TCP vs UDP
TCP provides reliable, ordered byte-stream delivery. UDP is connectionless and has lower protocol overhead but does not guarantee delivery or ordering.

## DNS
DNS resolves domain names to IP addresses. Caching reduces repeated lookups.

## Load balancer
Distributes incoming requests across healthy server instances. Common strategies include round robin, least connections and weighted routing.

## WebSockets
A persistent, bidirectional connection useful for chat, live dashboards and collaboration. Authenticate connections, handle reconnects and plan for multiple server instances.

## API gateway
A common entry point for routing, authentication, rate limiting, request aggregation and observability.
