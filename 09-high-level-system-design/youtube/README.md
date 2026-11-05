# Design Video Platform

## Problem
Upload, process, discover and stream videos.

## Functional requirements
- Upload videos
- Browse/search
- Stream playback
- Like/comment

## Non-functional requirements
- High bandwidth
- Global delivery
- Durable media

## Example APIs
- `POST /api/videos`
- `GET /api/videos/:id`
- `GET /api/search`

## Core data model
- Video
- Channel
- Comment
- View

## High-level approach
Upload to object storage, transcode into multiple renditions, store metadata and deliver segments through a CDN using adaptive bitrate streaming.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
