import { useState } from "react";
import { Pencil, RefreshCw, Copy, FileDown, Save, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsibleAIFootnote } from "./responsible-ai-panel";
import { toast } from "sonner";

export function AiOutputCard({
  title = "AI Output",
  value,
  onChange,
  onRegenerate,
}: {
  title?: string;
  value: string;
  onChange: (v: string) => void;
  onRegenerate?: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const exportPdf = () => {
    if (typeof window === "undefined") return;
    const w = window.open("", "_blank");
    if (!w) return;
    w.document.write(
      `<pre style="font-family:Inter,sans-serif;padding:40px;white-space:pre-wrap;">${value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")}</pre>`,
    );
    w.document.close();
    w.print();
  };

  return (
    <Card className="border-border">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-base">{title}</CardTitle>
        <div className="flex flex-wrap gap-1">
          <Button size="sm" variant="ghost" onClick={() => setEditing((e) => !e)}>
            <Pencil className="h-3.5 w-3.5" /> {editing ? "Done" : "Edit"}
          </Button>
          {onRegenerate && (
            <Button size="sm" variant="ghost" onClick={onRegenerate}>
              <RefreshCw className="h-3.5 w-3.5" /> Regenerate
            </Button>
          )}
          <Button size="sm" variant="ghost" onClick={copy}>
            {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />} Copy
          </Button>
          <Button size="sm" variant="ghost" onClick={exportPdf}>
            <FileDown className="h-3.5 w-3.5" /> Export
          </Button>
          <Button size="sm" variant="ghost" onClick={() => toast.success("Saved to history")}>
            <Save className="h-3.5 w-3.5" /> Save
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {editing ? (
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-[260px] font-mono text-sm"
          />
        ) : (
          <div className="whitespace-pre-wrap rounded-md border border-border bg-surface/60 p-4 text-sm leading-relaxed">
            {value || (
              <span className="text-muted-foreground">No output yet. Run the tool to generate content.</span>
            )}
          </div>
        )}
        <ResponsibleAIFootnote />
      </CardContent>
    </Card>
  );
}
