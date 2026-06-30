import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Loader2, Play, FileDown } from "lucide-react";

export const Route = createFileRoute("/workflow")({
  head: () => ({
    meta: [
      { title: "Workflow Automation · Academic Copilot" },
      { name: "description", content: "End-to-end Senate minutes pipeline from upload to executive briefing." },
    ],
  }),
  component: WorkflowPage,
});

const steps = [
  { title: "Upload Senate Minutes", detail: "Ingest the source minutes document." },
  { title: "AI Summarisation", detail: "Condense into a structured overview." },
  { title: "Extract Decisions", detail: "Surface formal Senate resolutions." },
  { title: "Build Action List", detail: "Convert decisions into trackable tasks." },
  { title: "Assign Priorities", detail: "Rank by urgency and dependency." },
  { title: "Implementation Timeline", detail: "Schedule against operational calendar." },
  { title: "Draft Follow-up Emails", detail: "Pre-fill stakeholder communications." },
  { title: "Generate Executive Briefing", detail: "Compose a one-page leadership summary." },
  { title: "Export Complete Report", detail: "Package the full deliverable." },
];

function WorkflowPage() {
  const [active, setActive] = useState(-1);
  const [done, setDone] = useState<number[]>([]);

  const run = async () => {
    setDone([]);
    for (let i = 0; i < steps.length; i++) {
      setActive(i);
      await new Promise((r) => setTimeout(r, 550));
      setDone((d) => [...d, i]);
    }
    setActive(-1);
  };

  const finished = done.length === steps.length;

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 p-6 lg:p-8">
      <PageHeader
        title="Workflow Automation"
        description="Integrated administrative workflow: upload Senate minutes and let the copilot run the full pipeline."
      />

      <Card>
        <CardContent className="flex items-center justify-between p-5">
          <div>
            <p className="text-sm font-semibold text-primary">Senate Minutes Pipeline</p>
            <p className="text-xs text-muted-foreground">9 automated stages · approx. 5 seconds in demo mode</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={run} className="bg-primary hover:bg-primary/90">
              <Play className="h-4 w-4" /> Run workflow
            </Button>
            {finished && (
              <Button variant="outline">
                <FileDown className="h-4 w-4" /> Export report
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <ol className="relative space-y-3 border-l-2 border-border pl-6">
        {steps.map((s, i) => {
          const isDone = done.includes(i);
          const isActive = active === i;
          return (
            <li key={i} className="relative">
              <span
                className={`absolute -left-[33px] flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                  isDone
                    ? "border-gold bg-gold text-gold-foreground"
                    : isActive
                      ? "border-primary bg-background text-primary"
                      : "border-border bg-background text-muted-foreground"
                }`}
              >
                {isDone ? (
                  <Check className="h-3.5 w-3.5" />
                ) : isActive ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <span className="text-[10px] font-bold">{i + 1}</span>
                )}
              </span>
              <Card
                className={`transition-colors ${isActive ? "border-gold" : isDone ? "border-success/40" : ""}`}
              >
                <CardContent className="p-4">
                  <p className="text-sm font-semibold text-primary">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.detail}</p>
                </CardContent>
              </Card>
            </li>
          );
        })}
      </ol>

      {finished && (
        <Card className="border-gold/40 bg-gold/5">
          <CardContent className="p-5">
            <p className="text-sm font-semibold text-primary">Workflow complete</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Executive briefing, action register and stakeholder emails are ready for human review.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
