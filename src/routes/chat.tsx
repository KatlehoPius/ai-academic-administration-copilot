import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Sparkles } from "lucide-react";
import { ResponsibleAIFootnote } from "@/components/responsible-ai-panel";

export const Route = createFileRoute("/chat")({
  head: () => ({
    meta: [
      { title: "AI Chat · Academic Copilot" },
      { name: "description", content: "Ask questions about registration, policy and operations." },
    ],
  }),
  component: ChatPage,
});

type Msg = { role: "user" | "assistant"; content: string };

const welcome: Msg = {
  role: "assistant",
  content: `Hello. I'm your Academic Administration Copilot.

I can help you:
• Draft professional correspondence
• Summarise committee meetings
• Explain university policies
• Prepare executive briefings
• Plan registration operations
• Research higher education regulations`,
};

const suggestions = [
  "Draft a memo on late registration",
  "Summarise the last Senate meeting",
  "What are the DHET HEMIS deadlines?",
  "Build me a 2-week registration plan",
];

function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([welcome]);
  const [input, setInput] = useState("");
  const taRef = useRef<HTMLTextAreaElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    taRef.current?.focus();
  }, []);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (text?: string) => {
    const content = (text ?? input).trim();
    if (!content) return;
    const reply: Msg = {
      role: "assistant",
      content: `Here is an outline based on your request:\n\n"${content}"\n\n1. Confirm the policy context and timeline.\n2. Identify stakeholders and required approvals.\n3. Draft the communication or document.\n4. Route for human review before issuing.\n\nLet me know which part you'd like to expand.`,
    };
    setMessages((m) => [...m, { role: "user", content }, reply]);
    setInput("");
    setTimeout(() => taRef.current?.focus(), 0);
  };

  return (
    <div className="mx-auto flex h-[calc(100vh-3.5rem)] w-full max-w-4xl flex-col p-6 lg:p-8">
      <PageHeader
        title="AI Chat"
        description="Ask questions about registration procedures, academic policies or operational planning."
      />
      <Card className="mt-4 flex flex-1 flex-col overflow-hidden">
        <CardContent className="flex flex-1 flex-col gap-4 overflow-y-auto p-5">
          {messages.map((m, i) => (
            <div
              key={i}
              className={m.role === "user" ? "ml-auto max-w-[80%]" : "max-w-[85%]"}
            >
              {m.role === "user" ? (
                <div className="rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                  {m.content}
                </div>
              ) : (
                <div className="flex gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gold/20 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">{m.content}</div>
                </div>
              )}
            </div>
          ))}
          <div ref={endRef} />
        </CardContent>
        <div className="border-t border-border p-4">
          {messages.length === 1 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs hover:bg-muted"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
          <div className="flex items-end gap-2">
            <Textarea
              ref={taRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Ask the copilot…"
              className="min-h-[44px] resize-none"
            />
            <Button onClick={() => send()} className="bg-primary hover:bg-primary/90">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <ResponsibleAIFootnote />
        </div>
      </Card>
    </div>
  );
}
