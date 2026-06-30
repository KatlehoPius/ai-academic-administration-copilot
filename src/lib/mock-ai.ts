// Templated mock AI responses for demo purposes.

export function generateEmail({
  recipient,
  topic,
  tone,
}: {
  recipient: string;
  topic: string;
  tone: string;
}): string {
  return `Subject: ${topic}

Dear ${recipient || "Colleagues"},

I trust this message finds you well.

I am writing to you regarding ${topic.toLowerCase() || "the matter below"}. Following recent discussions within the Student Systems, Records and Registration portfolio, the following points require your attention:

1. Confirm alignment with current Senate-approved academic rules.
2. Ensure DHET reporting deadlines are met, with all supporting documentation submitted by the cut-off date.
3. Coordinate with the Faculty Officers to communicate timelines to affected students.

Kindly review the attached context and respond by the end of the week so that we may proceed.

${tone === "formal" ? "Yours sincerely" : tone === "friendly" ? "Kind regards" : "Regards"},

Deputy Director: Student Systems, Records and Registration
Nelson Mandela University`;
}

export function summarizeMeeting(text: string): string {
  const len = text.trim().length;
  return `Meeting Summary
================

Overview
${len ? `Source minutes: ${len} characters analysed.` : "No source minutes provided — illustrative summary shown."}

Key Decisions
- Approved revised registration window for the upcoming cycle.
- Endorsed late-registration fee structure pending Finance review.
- Mandated faculty-level readiness reports two weeks before opening.

Action Items
1. Faculty Officers — submit registration capacity confirmations (due Friday).
2. ICT Services — finalise SSO load-testing report (due in 5 working days).
3. Registrar's Office — circulate draft communication to students (due Monday).

Risks & Watchpoints
- Outstanding DHET HEMIS validation for prior cycle.
- Residence allocation dependency on registration confirmations.

Next Steps
- Re-convene in two weeks to review readiness scorecard.
- Escalate unresolved items to the Senate Executive Committee.`;
}

export function planRegistration(cycle: string): string {
  return `Registration Plan — ${cycle || "Upcoming Cycle"}
==========================================

Phase 1 — Pre-Registration (Weeks -4 to -1)
- Open online curriculum advising appointments.
- Run system readiness checks (SSO, ITS, Moodle integration).
- Publish registration timetable to students and staff.

Phase 2 — Registration Opens (Week 0)
- Senior students register first (priority on academic standing).
- Daily stand-up with Faculty Officers at 08:30.
- Live operations dashboard reviewed every 4 hours.

Phase 3 — Peak Window (Weeks 1-2)
- Walk-in support desks active across all campuses.
- Escalation matrix in effect for blocked accounts.
- Hourly capacity monitoring.

Phase 4 — Stabilisation (Week 3)
- Late-registration window with controlled approvals.
- Outstanding fees follow-up with Finance.
- DHET HEMIS preliminary extract.

Risks
- Residence allocations bottleneck.
- Funding confirmations from NSFAS.
- Module clashes for repeating students.

Owners: Registrar's Office · Faculty Officers · ICT Services · Finance.`;
}

export function researchPolicy(query: string): string {
  return `Executive Briefing — ${query || "Higher Education Policy Scan"}
================================================================

Context
A concise scan of relevant DHET circulars, university policies and sector commentary as it relates to "${query || "current academic administration practice"}".

Summary
- The policy landscape continues to emphasise data quality for HEMIS submissions.
- Recent guidance reinforces student-centred communication and reasonable accommodation.
- Internal rules must be aligned with the current Senate-approved General Prospectus.

Implications for Student Systems
1. Tighten verification workflows for biographical and qualification data.
2. Strengthen audit trails for registration overrides and concessions.
3. Improve responsiveness on appeals through a single intake channel.

Recommended Actions
- Commission a short compliance review against the latest DHET circular.
- Brief the Registration Committee at the next sitting.
- Update the standard operating procedure register.

This briefing is indicative and must be validated against primary source documents before circulation.`;
}
