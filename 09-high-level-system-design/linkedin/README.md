# Design Professional Network

## Problem
Members connect, publish updates and apply for jobs.

## Functional requirements
- Profiles
- Connections
- Job search
- Applications
- Messaging

## Non-functional requirements
- Search relevance
- Privacy
- Scalable feeds

## Example APIs
- `GET /api/jobs`
- `POST /api/jobs/:id/applications`
- `POST /api/connections`

## Core data model
- Member
- Connection
- Job
- Application
- Message

## High-level approach
Separate profile, job and feed domains. Use search indexing for job discovery and enforce visibility/authorization rules on profile data.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
