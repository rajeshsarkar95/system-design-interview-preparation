# Design Food Delivery Platform

## Problem
Customers order food and track delivery.

## Functional requirements
- Browse restaurants
- Place order
- Assign courier
- Track delivery

## Non-functional requirements
- Accurate order state
- Location updates
- Reliable payments

## Example APIs
- `GET /api/restaurants`
- `POST /api/orders`
- `GET /api/orders/:id/tracking`

## Core data model
- Customer
- Restaurant
- MenuItem
- Order
- Courier
- Payment

## High-level approach
Model order state transitions explicitly. Coordinate restaurant acceptance, courier assignment and payment through events and idempotent handlers.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
