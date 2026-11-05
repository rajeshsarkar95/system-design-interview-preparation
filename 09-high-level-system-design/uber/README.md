# Design Ride Hailing

## Problem
Riders request trips and drivers accept them.

## Functional requirements
- Request ride
- Match driver
- Track trip
- Pay and rate

## Non-functional requirements
- Location freshness
- Low matching latency
- Safety

## Example APIs
- `POST /api/rides`
- `GET /api/drivers/nearby`
- `WebSocket location updates`

## Core data model
- Rider
- Driver
- Ride
- LocationUpdate
- Payment

## High-level approach
Use geospatial indexes to find nearby available drivers. Stream location updates, manage ride state transitions and make matching resilient to stale locations.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
