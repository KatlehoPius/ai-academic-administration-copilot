import { ShieldCheck, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const principles = [
  "Verify recommendations before implementation",
  "Do not upload confidential student information",
  "AI outputs may contain inaccuracies",
  "Always follow university policy",
  "Human approval is mandatory before official use",
];

export function ResponsibleAIBadge() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-gold/20">
          <ShieldCheck className="h-3.5 w-3.5" />
          Responsible AI
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-primary">Responsible AI use</h4>
            <p className="text-xs text-muted-foreground">
              Guidelines for working with this copilot.
            </p>
          </div>
          <ul className="space-y-2">
            {principles.map((p) => (
              <li key={p} className="flex items-start gap-2 text-xs">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-success" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function ResponsibleAIFootnote() {
  return (
    <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
      <ShieldCheck className="h-3 w-3 text-gold" />
      AI-generated content. Verify and obtain human approval before official use.
    </p>
  );
}
