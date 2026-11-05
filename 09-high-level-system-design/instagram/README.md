# Design Social Photo Sharing

## Problem
Users publish media and follow other users.

## Functional requirements
- Upload posts
- Follow users
- Like/comment
- View feed

## Non-functional requirements
- Fast feed reads
- Media availability
- Abuse prevention

## Example APIs
- `POST /api/posts`
- `POST /api/users/:id/follow`
- `GET /api/feed`

## Core data model
- User
- Post
- Follow
- Comment
- Like

## High-level approach
Store media in object storage and serve via CDN. Keep metadata in a database. Consider fan-out-on-write for ordinary users and fan-out-on-read for accounts with very large follower counts.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
