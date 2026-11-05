# Design Video Conferencing

## Problem
Participants join meetings with audio/video.

## Functional requirements
- Create/join meeting
- Audio/video
- Screen share
- Meeting chat

## Non-functional requirements
- Low latency
- Adaptive quality
- Secure sessions

## Example APIs
- `POST /api/meetings`
- `POST /api/meetings/:id/join`
- `Signaling WebSocket`

## Core data model
- User
- Meeting
- Participant

## High-level approach
Use a signaling service to establish WebRTC sessions. STUN/TURN assists connectivity; an SFU forwards media streams for larger meetings.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
