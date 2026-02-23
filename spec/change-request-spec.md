# Change Request Tracker — Original Specification
**Version:** 1.0
**Approved by:** IT Director
**Date:** [Sprint 0]

---

## Purpose

Track IT change requests from submission through approval and implementation.
Internal tool for IT team only.

## Functional Requirements

1. Submit a change request with: title, description, priority (P1–P3), requested by
2. IT manager can approve or reject requests
3. Approved requests can be assigned to an engineer
4. Status flow: Submitted → Approved/Rejected → In Progress → Completed
5. Requestor receives status updates via in-app notification
6. Search and filter change requests by status, priority, and assignee

## Non-Goals (Explicitly)

- No email notifications (in-app only)
- No SLA tracking
- No approval workflows (single approver: IT manager)
- No external integrations
- No public-facing submission (internal only)
