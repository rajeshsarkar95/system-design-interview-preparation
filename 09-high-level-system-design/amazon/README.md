# Design E-commerce Marketplace

## Problem
Customers discover products, order and pay.

## Functional requirements
- Product search
- Cart and checkout
- Orders and shipment
- Reviews

## Non-functional requirements
- Correct inventory
- Secure payments
- Scalable catalog

## Example APIs
- `GET /api/products`
- `POST /api/orders`
- `POST /api/payments`

## Core data model
- User
- Product
- Cart
- Order
- Payment
- Inventory

## High-level approach
Validate prices and stock on the server. Reserve inventory during checkout, use idempotent payment handling and publish order events for downstream services.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
