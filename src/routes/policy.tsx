import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutputCard } from "@/components/ai-output-card";
import { researchPolicy } from "@/lib/mock-ai";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/policy")({
  head: () => ({
    meta: [
      { title: "Policy Research Assistant · Academic Copilot" },
      { name: "description", content: "Summarise DHET circulars and university policies into briefings." },
    ],
  }),
  component: PolicyPage,
});

function PolicyPage() {
  const [query, setQuery] = useState("Late registration concessions");
  const [output, setOutput] = useState("");
  const run = () => setOutput(researchPolicy(query));

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 p-6 lg:p-8">
      <PageHeader
        title="Policy Research Assistant"
        description="Summarise DHET circulars, university policies and compliance requirements into executive briefings."
      />
      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardContent className="space-y-4 p-5">
            <div className="space-y-1.5">
              <Label>Research topic</Label>
              <Input value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <Button onClick={run} className="w-full bg-primary hover:bg-primary/90">
              <Sparkles className="h-4 w-4" /> Generate Briefing
            </Button>
          </CardContent>
        </Card>
        <div className="lg:col-span-3">
          <AiOutputCard
            title="Executive Briefing"
            value={output}
            onChange={setOutput}
            onRegenerate={run}
          />
        </div>
      </div>
    </div>
  );
}
