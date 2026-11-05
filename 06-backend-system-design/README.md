# Backend System Design (Node.js)

## Layering
A practical structure is routes -> middleware -> controllers -> services -> repositories/models. Keep business logic out of route handlers.

## Authentication
Verify identity using secure sessions or tokens. Hash passwords with a modern password hashing algorithm. Never store plaintext passwords.

## Authorization / RBAC
Authentication asks who the user is; authorization asks what they may do. Check permissions on every protected operation and enforce resource ownership.

## Error handling
Use consistent error responses, centralized middleware and safe logging. Do not expose stack traces or secrets to clients.

## Rate limiting
Apply per-IP or per-user limits. For multiple instances, use a shared store such as Redis.

## Background jobs
Move slow work such as email, PDF generation and image processing to a durable queue and workers.

## Payments
Calculate amounts server-side, verify provider signatures/webhooks, use idempotency keys and reconcile payment state.

## Webhooks
Verify signatures, persist event IDs, acknowledge quickly and process asynchronously. Handle duplicate and out-of-order delivery.
