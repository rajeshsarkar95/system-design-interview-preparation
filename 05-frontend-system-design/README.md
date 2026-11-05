# Frontend System Design (React)

For each component, define requirements, props/API, state ownership, accessibility, loading/error/empty states, performance and tests.

## Autocomplete
Controlled input + debounce + request cancellation + keyboard navigation + accessible listbox.

## Infinite scroll
Use Intersection Observer to request the next page. Prevent duplicate requests and provide a manual load-more fallback.

## Reusable modal
Support focus trapping, Escape key, backdrop behavior, accessible title and portal rendering.

## Data table
Support stable row keys, sorting, filtering, pagination, loading/error states and server-side operations for large datasets.

## Shopping cart
Keep canonical product/price data on the server. Client state is for experience; validate price and inventory again at checkout.

## Multi-step form
Persist draft state across steps, validate each step and make final submission idempotent.

## File upload
Validate size/type, show progress, support cancellation and use presigned uploads for large files where appropriate.

## Chat interface
Handle optimistic messages, reconnects, message ordering, delivery state and pagination of history.
