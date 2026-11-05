# Design Cloud File Storage

## Problem
Users upload, organize and share files.

## Functional requirements
- Upload/download
- Folders
- Sharing permissions
- Version history

## Non-functional requirements
- Durability
- Access control
- Large-file support

## Example APIs
- `POST /api/files`
- `GET /api/files/:id`
- `POST /api/files/:id/shares`

## Core data model
- User
- File
- Folder
- Permission
- FileVersion

## High-level approach
Store file bytes in object storage and metadata in a database. Use multipart/resumable uploads, checksums, versioning and explicit permission checks.

## Interview discussion
- What is the expected traffic and data volume?
- Which operations need strong consistency?
- What can be cached, and how is it invalidated?
- What happens when a dependency is unavailable?
- How will the system be monitored and secured?
