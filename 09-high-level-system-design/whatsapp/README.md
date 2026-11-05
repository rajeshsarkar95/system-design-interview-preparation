# Design Messaging Application

## Problem
One-to-one and group messaging with delivery status.

## Functional requirements
- Send/receive messages
- Conversation history
- Group membership
- Online presence

## Non-functional requirements
- Low message latency
- Durable message storage
- Privacy and authorization

## Example APIs
- `POST /api/conversations`
- `GET /api/conversations/:id/messages`
- `WebSocket send/receive events`

## Core data model
- User
- Conversation
- ConversationMember
- Message

## High-level approach
Use WebSockets for live delivery and a database for durable history. Authenticate sockets, authorize room membership, paginate history and use a shared adapter/broker when horizontally scaling.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
