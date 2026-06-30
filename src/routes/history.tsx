import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Activity History · Academic Copilot" },
      { name: "description", content: "Complete history of AI-assisted activity." },
    ],
  }),
  component: HistoryPage,
});

const items = [
  { time: "Today · 10:24", tag: "Email", text: "Senate Executive memo on late registration" },
  { time: "Today · 09:11", tag: "Meeting", text: "Faculty Board (24 May) summary" },
  { time: "Yesterday · 16:48", tag: "Policy", text: "DHET circular 03/2026 briefing" },
  { time: "Yesterday · 14:02", tag: "Planner", text: "Registration plan — 2026/1 cycle" },
  { time: "Mon · 11:20", tag: "Email", text: "Student communication — late fee waiver" },
  { time: "Mon · 09:34", tag: "Chat", text: "Q&A on residence allocation policy" },
  { time: "Last week", tag: "Workflow", text: "End-to-end Senate pipeline (full report)" },
];

function HistoryPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 p-6 lg:p-8">
      <PageHeader title="Activity History" description="Everything the copilot has produced, in order." />
      <Card>
        <CardContent className="p-0">
          <ul className="divide-y divide-border">
            {items.map((i, idx) => (
              <li key={idx} className="flex items-center justify-between p-4 text-sm">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-[10px]">{i.tag}</Badge>
                  <span>{i.text}</span>
                </div>
                <span className="text-xs text-muted-foreground">{i.time}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
