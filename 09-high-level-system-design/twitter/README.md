# Design Microblogging Platform

## Problem
Users publish short posts and view timelines.

## Functional requirements
- Publish posts
- Follow accounts
- Like/repost
- Read timeline

## Non-functional requirements
- Low feed latency
- High read throughput
- Reliable fan-out

## Example APIs
- `POST /api/posts`
- `GET /api/timeline`
- `POST /api/users/:id/follow`

## Core data model
- User
- Post
- Follow
- Like

## High-level approach
Timeline generation can use fan-out-on-write, fan-out-on-read or a hybrid. Cache recent timelines and paginate using cursors.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
