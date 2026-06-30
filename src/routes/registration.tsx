import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutputCard } from "@/components/ai-output-card";
import { planRegistration } from "@/lib/mock-ai";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Registration Planner · Academic Copilot" },
      { name: "description", content: "Build intelligent registration schedules and identify operational risks." },
    ],
  }),
  component: RegistrationPage,
});

function RegistrationPage() {
  const [cycle, setCycle] = useState("2026 Semester 1");
  const [output, setOutput] = useState("");
  const run = () => setOutput(planRegistration(cycle));

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 p-6 lg:p-8">
      <PageHeader
        title="Registration Planner"
        description="Build intelligent registration schedules, prioritise activities and identify operational risks."
      />
      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardContent className="space-y-4 p-5">
            <div className="space-y-1.5">
              <Label>Cycle</Label>
              <Input value={cycle} onChange={(e) => setCycle(e.target.value)} />
            </div>
            <Button onClick={run} className="w-full bg-primary hover:bg-primary/90">
              <Sparkles className="h-4 w-4" /> Generate Plan
            </Button>
          </CardContent>
        </Card>
        <div className="lg:col-span-3">
          <AiOutputCard
            title="Registration Plan"
            value={output}
            onChange={setOutput}
            onRegenerate={run}
          />
        </div>
      </div>
    </div>
  );
}
