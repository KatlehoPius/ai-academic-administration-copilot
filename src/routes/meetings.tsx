import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AiOutputCard } from "@/components/ai-output-card";
import { summarizeMeeting } from "@/lib/mock-ai";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/meetings")({
  head: () => ({
    meta: [
      { title: "Meeting Intelligence · Academic Copilot" },
      { name: "description", content: "Summarise Faculty Board, Senate and Registration Committee minutes." },
    ],
  }),
  component: MeetingsPage,
});

function MeetingsPage() {
  const [minutes, setMinutes] = useState("");
  const [output, setOutput] = useState("");
  const run = () => setOutput(summarizeMeeting(minutes));

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 p-6 lg:p-8">
      <PageHeader
        title="Meeting Intelligence"
        description="Convert committee minutes into concise summaries with decisions and action items."
      />
      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardContent className="space-y-4 p-5">
            <div className="space-y-1.5">
              <Label>Paste meeting minutes</Label>
              <Textarea
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                placeholder="Paste raw minutes from Faculty Board, Senate or Registration Committee…"
                className="min-h-[280px]"
              />
            </div>
            <Button onClick={run} className="w-full bg-primary hover:bg-primary/90">
              <Sparkles className="h-4 w-4" /> Summarise Meeting
            </Button>
          </CardContent>
        </Card>
        <div className="lg:col-span-3">
          <AiOutputCard
            title="Meeting Summary & Action Items"
            value={output}
            onChange={setOutput}
            onRegenerate={run}
          />
        </div>
      </div>
    </div>
  );
}
