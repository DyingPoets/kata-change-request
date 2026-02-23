# Change Request Tracker — Scope Control + Drift

> **Branch:** `skill/scope-drift`
> **Skills:** W2 · Q2 · C1 · T2
> **Audience:** PM · Eng

---

## For the Facilitator

### Session Overview

| | |
|---|---|
| **Kata** | 9: Change Request Tracker |
| **Session** | Scope Control + Drift |
| **Skills** | W2 · Q2 · C1 · T2 |
| **Duration** | 2 hours (facilitated) + self-directed extension |
| **Slide Deck** | https://gamma.app/docs/340jwt3h3kgvqyd |
| **Miro Board** | https://miro.com/app/board/uXjVG8QDVHA%3D/ |

### Session Timing

| Time | Activity |
|------|----------|
| 0:00–0:15 | Concept framing — open the Gamma slide deck and walk through each slide |
| 0:15–0:30 | Orient to Miro board + this starting state |
| 0:30–1:05 | Step 1 exercise (Miro — Context frame) |
| 1:05–1:25 | Step 2 exercise (Miro — Exercise frame) |
| 1:25–1:30 | Step 3 wrap-up |
| 1:30–1:50 | Debrief — use Miro Debrief frame prompts |
| 1:50–2:00 | Extension brief — point to Extension Zone in Miro |

### What to Watch For

- Teams that classify everything as "intentional" — push for evidence (who decided? when?)
- Prevention mechanisms that are just rules without enforcement — "we should do X" is not a mechanism
- Agent configs that say what to do but not what NOT to do

### Facilitation Tips

- For each drift item: "Who made this decision? When? Can you point to it in Slack, Jira, or a commit message?" — absence of evidence = process gap
- For agent config: "What is the single most dangerous thing an agent could do here?" — inspires the prohibitions
- At debrief: ask teams to present their scope audit as if they're the project's postmortem facilitator

### Extension / Coaching Office Hours

Participants can continue extension work independently and bring it to **Coaching Office Hours**.
At Office Hours, focus on: what decision did they make, why, and what would they change?

---

## For Participants (Developer · PM · UX)

### Getting Started

```bash
git clone https://github.com/DyingPoets/kata-change-request
git checkout skill/scope-drift
```

Open the Miro board and the Gamma slide deck — have both visible during the session.

- **Slides:** https://gamma.app/docs/340jwt3h3kgvqyd
- **Miro Board:** https://miro.com/app/board/uXjVG8QDVHA%3D/

### What You'll Practice

- W2
- Q2
- C1
- T2

### Your Starting State

You have:
- `spec/change-request-spec.md` — the original approved spec
- `src/` — the delivered code with intentional scope drift baked in
- `git-log/sprint-history.md` — summary of what changed each sprint

Your goal: find the drift, classify it, and design mechanisms that would have prevented it.

### Step by Step

**Step 1:** Compare spec to delivered code. List every deviation. For each: intentional change (with evidence), scope creep, or bug?

**Step 2:** Design 3 prevention mechanisms: one in the WO template, one in the PR review process, one in agent configuration.

**Step 3:** Rewrite the `.cursorrules` for WO 2 to explicitly prohibit the scope additions you found. Add one test that would have caught the drift.

### What Good Looks Like

A scope audit where every "intentional change" can be traced to a decision with an owner. Prevention mechanisms that would be enforced by process, not good intentions.

See the `solutions/` directory for reference examples — but try the exercise first.

### Extension Work

- Write a 3-step "scope change protocol" for evaluating mid-sprint change requests
- Present the scope audit to the group as if you're the stakeholder who requested the changes — defend or retract each addition
- Write a test for the most impactful piece of scope creep you found

Bring your extension work to **Coaching Office Hours**. You'll get 15 minutes of focused feedback.

---

Part of the [PDLC Training Katas](https://github.com/DyingPoets) series.
