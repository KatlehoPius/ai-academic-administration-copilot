import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { promptLibrary, type StructuredPrompt } from "@/lib/prompt-library";
import { Copy, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/prompts")({
  head: () => ({
    meta: [
      { title: "Prompt Library · Academic Copilot" },
      { name: "description", content: "Structured prompts engineered for academic administration tasks." },
    ],
  }),
  component: PromptsPage,
});

function PromptsPage() {
  const [open, setOpen] = useState<StructuredPrompt | null>(null);

  const copyFull = (p: StructuredPrompt) => {
    const text = `Role: ${p.role}\nContext: ${p.context}\nObjective: ${p.objective}\nConstraints:\n- ${p.constraints.join("\n- ")}\nDesired Output: ${p.desiredOutput}\nValidation: ${p.validation}`;
    navigator.clipboard.writeText(text);
    toast.success("Prompt copied");
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 p-6 lg:p-8">
      <PageHeader
        title="Prompt Library"
        description="Structured prompts engineered for academic administration tasks. Each prompt follows a Role / Context / Objective / Constraints / Output / Validation structure."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {promptLibrary.map((p) => (
          <Card key={p.id} className="flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <p className="text-sm text-muted-foreground">{p.purpose}</p>
              <div className="mt-4 flex items-center gap-2">
                <Button size="sm" variant="outline" onClick={() => setOpen(p)}>
                  View <ChevronRight className="h-3.5 w-3.5" />
                </Button>
                <Button size="sm" variant="ghost" onClick={() => copyFull(p)}>
                  <Copy className="h-3.5 w-3.5" /> Copy
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-2xl">
          {open && (
            <>
              <DialogHeader>
                <DialogTitle>{open.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm">
                <Field label="Role" value={open.role} />
                <Field label="Context" value={open.context} />
                <Field label="Objective" value={open.objective} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Constraints</p>
                  <ul className="mt-1 list-disc pl-5">
                    {open.constraints.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <Field label="Desired Output" value={open.desiredOutput} />
                <Field label="Validation Instructions" value={open.validation} />
                <Button onClick={() => copyFull(open)} className="w-full bg-primary">
                  <Copy className="h-4 w-4" /> Copy full prompt
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className="mt-1">{value}</p>
    </div>
  );
}
