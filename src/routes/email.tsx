import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AiOutputCard } from "@/components/ai-output-card";
import { generateEmail } from "@/lib/mock-ai";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/email")({
  head: () => ({
    meta: [
      { title: "Smart Email Generator · Academic Copilot" },
      { name: "description", content: "Draft executive, Senate and student correspondence with AI assistance." },
    ],
  }),
  component: EmailPage,
});

function EmailPage() {
  const [recipient, setRecipient] = useState("Senate Executive");
  const [topic, setTopic] = useState("Revised late-registration window");
  const [tone, setTone] = useState("formal");
  const [notes, setNotes] = useState("");
  const [output, setOutput] = useState("");

  const run = () => setOutput(generateEmail({ recipient, topic, tone }));

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 p-6 lg:p-8">
      <PageHeader
        title="Smart Email Generator"
        description="Draft registration notices, Senate correspondence, student communication and executive emails."
      />
      <div className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardContent className="space-y-4 p-5">
            <div className="space-y-1.5">
              <Label>Recipient</Label>
              <Input value={recipient} onChange={(e) => setRecipient(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Subject / Topic</Label>
              <Input value={topic} onChange={(e) => setTopic(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label>Tone</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="formal">Formal</SelectItem>
                  <SelectItem value="neutral">Neutral</SelectItem>
                  <SelectItem value="friendly">Friendly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Additional context</Label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Key points, decisions, dates, attachments…"
                className="min-h-[120px]"
              />
            </div>
            <Button onClick={run} className="w-full bg-primary hover:bg-primary/90">
              <Sparkles className="h-4 w-4" /> Generate Email
            </Button>
          </CardContent>
        </Card>
        <div className="lg:col-span-3">
          <AiOutputCard
            title="Drafted Email"
            value={output}
            onChange={setOutput}
            onRegenerate={run}
          />
        </div>
      </div>
    </div>
  );
}
