import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, FileText, BookOpen, CalendarDays, Clock, Target } from "lucide-react";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics · Academic Copilot" },
      { name: "description", content: "Productivity analytics across the copilot's AI tools." },
    ],
  }),
  component: AnalyticsPage,
});

const cards = [
  { label: "Emails Generated", value: "126", trend: "+18%", icon: Mail },
  { label: "Meetings Summarised", value: "14", trend: "+6%", icon: FileText },
  { label: "Documents Researched", value: "48", trend: "+22%", icon: BookOpen },
  { label: "Tasks Planned", value: "212", trend: "+11%", icon: CalendarDays },
  { label: "Average Time Saved", value: "12.4 hrs/wk", trend: "+4%", icon: Clock },
  { label: "Prompt Success Rate", value: "94%", trend: "+2%", icon: Target },
];

const weekly = [42, 58, 51, 67, 73, 80, 72];

function AnalyticsPage() {
  const max = Math.max(...weekly);
  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 p-6 lg:p-8">
      <PageHeader
        title="Analytics"
        description="Productivity improvements delivered by the copilot across the Registrar's portfolio."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <Card key={c.label}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-primary">{c.value}</p>
                  <p className="text-xs font-medium text-success">{c.trend} vs last month</p>
                </div>
                <div className="rounded-md bg-gold/15 p-2 text-primary">
                  <c.icon className="h-4 w-4" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Weekly AI activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-48 items-end gap-3">
            {weekly.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-md bg-primary"
                  style={{ height: `${(v / max) * 100}%` }}
                />
                <span className="text-xs text-muted-foreground">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
