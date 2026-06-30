import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  FileText,
  CalendarDays,
  BookOpen,
  MessageSquare,
  Clock,
  FileCheck2,
  Sparkles,
  Users2,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard · AI Academic Administration Copilot" },
      {
        name: "description",
        content:
          "Intelligent assistance for Student Systems, Records and Registration at Nelson Mandela University.",
      },
    ],
  }),
  component: Dashboard,
});

const kpis = [
  { label: "Hours Saved", value: "12.4", unit: "hrs/week", icon: Clock },
  { label: "Documents Processed", value: "48", unit: "this month", icon: FileCheck2 },
  { label: "AI Drafts Generated", value: "126", unit: "lifetime", icon: Sparkles },
  { label: "Meetings Summarized", value: "14", unit: "this month", icon: Users2 },
];

const modules = [
  {
    title: "Smart Email Generator",
    desc: "Draft registration notices, Senate correspondence, student communication and executive emails.",
    icon: Mail,
    href: "/email" as const,
  },
  {
    title: "Meeting Intelligence",
    desc: "Convert Faculty Board, Senate and Registration Committee minutes into concise summaries with action items.",
    icon: FileText,
    href: "/meetings" as const,
  },
  {
    title: "Registration Planner",
    desc: "Build intelligent registration schedules, prioritise activities and identify operational risks.",
    icon: CalendarDays,
    href: "/registration" as const,
  },
  {
    title: "Policy Research Assistant",
    desc: "Summarise DHET circulars, university policies and compliance requirements into executive briefings.",
    icon: BookOpen,
    href: "/policy" as const,
  },
  {
    title: "AI Chat",
    desc: "Ask questions about registration procedures, academic policies or operational planning.",
    icon: MessageSquare,
    href: "/chat" as const,
  },
  {
    title: "Workflow Automation",
    desc: "End-to-end Senate minutes pipeline: summarise, extract decisions, schedule and brief.",
    icon: Workflow,
    href: "/workflow" as const,
  },
];

const alerts = [
  { tone: "warning" as const, text: "Registration deadline approaching — 5 days remaining" },
  { tone: "warning" as const, text: "Missing documentation detected on 12 student records" },
  { tone: "danger" as const, text: "Senate approval outstanding for revised academic rule 4.2" },
  { tone: "warning" as const, text: "DHET reporting due in 3 days" },
];

const activity = [
  { time: "10 min ago", text: "Drafted Senate Executive memo on late registration", tag: "Email" },
  { time: "1 hr ago", text: "Summarised Faculty Board minutes (24 May)", tag: "Meeting" },
  { time: "3 hrs ago", text: "Generated DHET circular briefing", tag: "Policy" },
  { time: "Yesterday", text: "Built registration timeline for Cycle 2026/1", tag: "Planner" },
];

function Dashboard() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8 p-6 lg:p-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-primary px-8 py-10 text-primary-foreground shadow-sm">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 opacity-30"
          style={{
            background:
              "radial-gradient(circle at center, var(--gold) 0, transparent 60%)",
          }}
        />
        <svg
          aria-hidden
          className="pointer-events-none absolute right-6 bottom-0 h-40 w-40 text-gold opacity-70"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <polygon points="50,5 95,90 5,90" />
          <polygon points="30,55 55,95 5,95" opacity="0.5" />
          <polygon points="70,45 95,90 45,90" opacity="0.4" />
        </svg>
        <div className="relative max-w-2xl">
          <Badge className="mb-4 border border-gold/40 bg-gold/15 text-gold hover:bg-gold/20">
            Powered by GPT · Human Review Required
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Your AI Academic Administration Copilot
          </h1>
          <p className="mt-3 max-w-xl text-sm text-primary-foreground/80 md:text-base">
            Automate registration planning, summarise committee meetings, draft professional
            correspondence, research higher education policies, and streamline academic
            administration workflows from one intelligent workspace.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
              <Link to="/registration">
                Plan Registration Cycle <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/chat">Open AI Assistant</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k) => (
          <Card key={k.label}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {k.label}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-primary">{k.value}</p>
                  <p className="text-xs text-muted-foreground">{k.unit}</p>
                </div>
                <div className="rounded-md bg-gold/15 p-2 text-primary">
                  <k.icon className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Modules */}
      <section>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-lg font-semibold text-primary">AI Productivity Modules</h2>
            <p className="text-sm text-muted-foreground">Purpose-built tools for the Registrar's portfolio.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <Card key={m.href} className="group transition-shadow hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-primary">
                  <m.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{m.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
                <Link
                  to={m.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
                >
                  Open Tool <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Executive Dashboard */}
      <section className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Registration Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-primary">Registration Progress</span>
                <span className="font-semibold text-primary">82%</span>
              </div>
              <Progress value={82} className="h-2 [&>div]:bg-gold" />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "Students Registered", value: "18,432" },
                { label: "Pending Cases", value: "247" },
                { label: "Late Applications", value: "84" },
                { label: "System Incidents", value: "3" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg border border-border bg-surface/60 p-3">
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="mt-1 text-lg font-bold text-primary">{s.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">Operational Alerts</CardTitle>
            <Badge variant="outline" className="text-[10px]">AI Generated</Badge>
          </CardHeader>
          <CardContent className="space-y-2">
            {alerts.map((a, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 rounded-md border p-2.5 text-xs ${
                  a.tone === "danger"
                    ? "border-destructive/30 bg-destructive/5 text-destructive"
                    : "border-warning/30 bg-warning/10 text-warning"
                }`}
              >
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span className="text-foreground">{a.text}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Recent Activity */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="divide-y divide-border">
              {activity.map((a, i) => (
                <li key={i} className="flex items-center justify-between py-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-[10px]">{a.tag}</Badge>
                    <span>{a.text}</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    {a.time} <ChevronRight className="h-3 w-3" />
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
