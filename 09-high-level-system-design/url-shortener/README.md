# Design URL Shortener

## Problem
Create short links and redirect users to original URLs.

## Functional requirements
- Create short URL
- Redirect by short code
- Optional expiry and analytics

## Non-functional requirements
- Low redirect latency
- Unique short codes
- Abuse protection

## Example APIs
- `POST /api/urls`
- `GET /:code`
- `GET /api/urls/:code/stats`

## Core data model
- Url { code, originalUrl, ownerId, createdAt, expiresAt }

## High-level approach
Use a unique index on code. Cache popular code-to-URL mappings. Generate codes with collision checks. Redirect with HTTP 301 or 302 depending on desired caching behavior.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
