/**
 * Change Request Tracker — Delivered Code
 *
 * This code contains intentional scope drift from the spec.
 * Your kata: identify it, classify it, and write tests for the CORRECT behaviour.
 */

export class ChangeRequestSystem {

  constructor(notificationService, emailService) {
    this.requests = []
    this.notificationService = notificationService  // Spec: in-app only
    this.emailService = emailService                 // Drift: email not in spec
  }

  submit(title, description, priority, requestedBy, isExternal = false) {
    // Drift: isExternal parameter (spec: internal only)
    if (!['P1', 'P2', 'P3'].includes(priority)) {
      throw new Error('INVALID_PRIORITY')
    }

    const cr = {
      id: `CR-${Date.now()}`,
      title,
      description,
      priority,
      requestedBy,
      isExternal,               // Drift
      status: 'submitted',
      dueDate: null,            // Drift: not in spec
      slaDeadline: priority === 'P1' ? this._calcSla() : null,  // Drift: SLA not in spec
      comments: [],             // Drift: comments not in spec
      createdAt: new Date().toISOString(),
    }

    this.requests.push(cr)

    // Drift: sends email (spec: in-app notification only)
    this.notificationService.send(requestedBy, `Change request ${cr.id} submitted`)
    this.emailService.send(requestedBy, 'Change Request Submitted', `Your request ${cr.id} has been received.`)

    return cr
  }

  approve(crId, approverId, assignTo) {
    const cr = this._find(crId)
    cr.status = 'approved'
    cr.assignedTo = assignTo
    cr.approvedBy = approverId

    this.notificationService.send(cr.requestedBy, `CR ${crId} approved`)
    this.emailService.send(cr.requestedBy, 'Change Request Approved', `...`)
    return cr
  }

  reject(crId, approverId, reason) {
    const cr = this._find(crId)
    cr.status = 'rejected'
    cr.rejectionReason = reason
    cr.rejectedBy = approverId

    this.notificationService.send(cr.requestedBy, `CR ${crId} rejected: ${reason}`)
    this.emailService.send(cr.requestedBy, 'Change Request Rejected', `...`)
    return cr
  }

  addComment(crId, userId, text) {
    // Drift: comments not in spec
    const cr = this._find(crId)
    cr.comments.push({ userId, text, createdAt: new Date().toISOString() })
  }

  _find(id) {
    const cr = this.requests.find(r => r.id === id)
    if (!cr) throw new Error('NOT_FOUND')
    return cr
  }

  _calcSla() {
    // Drift: SLA not in spec
    const deadline = new Date()
    deadline.setHours(deadline.getHours() + 4)
    return deadline.toISOString()
  }
}
