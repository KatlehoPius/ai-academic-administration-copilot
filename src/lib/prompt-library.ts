export type StructuredPrompt = {
  id: string;
  title: string;
  purpose: string;
  role: string;
  context: string;
  objective: string;
  constraints: string[];
  desiredOutput: string;
  validation: string;
};

export const promptLibrary: StructuredPrompt[] = [
  {
    id: "executive-email",
    title: "Executive Email",
    purpose: "Draft professional correspondence to senior university stakeholders.",
    role: "You are an experienced executive assistant in a South African public university.",
    context:
      "The author is the Deputy Director: Student Systems, Records and Registration writing to a member of the Senate Executive.",
    objective:
      "Produce a concise, formal email that states the issue, proposed action, and request a clear decision.",
    constraints: [
      "Maximum 220 words.",
      "South African English; no slang.",
      "Avoid speculative claims without evidence.",
    ],
    desiredOutput: "Subject line, salutation, three short paragraphs, sign-off.",
    validation: "Re-read for tone, ensure no confidential student data is included.",
  },
  {
    id: "registration-reminder",
    title: "Registration Reminder",
    purpose: "Notify students about registration deadlines and required actions.",
    role: "You are a student communications officer.",
    context: "Students approaching the registration cut-off for the next academic cycle.",
    objective: "Encourage timely registration while signposting support channels.",
    constraints: ["Friendly but authoritative.", "Include exact date, time and link placeholders."],
    desiredOutput: "Short email with bulleted next steps and a clear CTA.",
    validation: "Confirm date placeholders are replaced before sending.",
  },
  {
    id: "meeting-summary",
    title: "Meeting Summary",
    purpose: "Convert committee minutes into actionable executive summaries.",
    role: "You are a governance analyst skilled in summarising meetings of Senate and its sub-committees.",
    context: "Input is raw minutes from a Faculty Board, Senate or Registration Committee.",
    objective: "Produce decisions, action items with owners and due dates, and a risk watchlist.",
    constraints: ["Do not invent attendees.", "Flag uncertain interpretations explicitly."],
    desiredOutput: "Headings: Overview, Decisions, Action Items, Risks, Next Steps.",
    validation: "Cross-check action item owners against the attendance list.",
  },
  {
    id: "policy-analysis",
    title: "Policy Analysis",
    purpose: "Summarise DHET circulars and university policy into executive briefings.",
    role: "You are a higher-education policy analyst.",
    context: "The reader is a Deputy Director who needs decisions, not background lectures.",
    objective: "Translate policy text into operational implications for Student Systems.",
    constraints: ["Cite policy section numbers where applicable.", "Distinguish mandatory vs advisory items."],
    desiredOutput: "Briefing with Summary, Implications, Recommended Actions.",
    validation: "Verify cited sections exist in the source document.",
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment",
    purpose: "Identify operational risks for a registration or examination cycle.",
    role: "You are an enterprise risk analyst embedded in the Registrar's Office.",
    context: "Planning an upcoming high-volume operational event.",
    objective: "Produce a prioritised risk register with mitigation owners.",
    constraints: ["Use Likelihood × Impact scoring (1-5).", "Limit to top 10 risks."],
    desiredOutput: "Table: Risk, Likelihood, Impact, Score, Mitigation, Owner.",
    validation: "Sanity-check scores against historical incident logs.",
  },
  {
    id: "weekly-planning",
    title: "Weekly Planning",
    purpose: "Build a focused weekly plan from a backlog of tasks and meetings.",
    role: "You are an executive chief-of-staff.",
    context: "The Deputy Director's calendar and outstanding actions for the coming week.",
    objective: "Produce a day-by-day plan that protects deep-work blocks.",
    constraints: ["Include at least one stakeholder check-in.", "Cap meetings at 50% of the day."],
    desiredOutput: "Mon–Fri sections with priorities, meetings, deep-work blocks.",
    validation: "Confirm dependencies between tasks are sequenced correctly.",
  },
];
