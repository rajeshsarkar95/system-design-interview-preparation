# Design Collaborative Document Editor

## Problem
Multiple users edit the same document concurrently.

## Functional requirements
- Create/edit documents
- Live collaboration
- Comments
- Version history

## Non-functional requirements
- Low collaboration latency
- Conflict handling
- Durability

## Example APIs
- `POST /api/documents`
- `GET /api/documents/:id`
- `WebSocket operations`

## Core data model
- Document
- Collaborator
- Operation
- Revision

## High-level approach
Use Operational Transformation or CRDT techniques to merge concurrent edits. Persist snapshots and operation history; broadcast updates over WebSockets.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
