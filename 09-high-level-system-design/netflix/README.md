# Design Subscription Streaming

## Problem
Subscribers browse and stream licensed content.

## Functional requirements
- Catalog browsing
- Playback
- Subscription management
- Watch history

## Non-functional requirements
- Global low-latency playback
- Availability
- Access control

## Example APIs
- `GET /api/catalog`
- `POST /api/playback-sessions`
- `GET /api/watch-history`

## Core data model
- User
- Title
- Subscription
- PlaybackSession

## High-level approach
Use a catalog service, entitlement checks, media processing pipeline, object storage and CDN. Keep playback authorization separate from media delivery.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
