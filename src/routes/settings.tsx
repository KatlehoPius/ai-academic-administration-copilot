import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings · Academic Copilot" },
      { name: "description", content: "Configure your copilot workspace." },
    ],
  }),
  component: SettingsPage,
});

function SettingsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-6 p-6 lg:p-8">
      <PageHeader title="Settings" description="Personalise your copilot workspace." />
      <Card>
        <CardContent className="space-y-5 p-5">
          <div className="space-y-1.5">
            <Label>Display name</Label>
            <Input defaultValue="Deputy Director" />
          </div>
          <div className="space-y-1.5">
            <Label>Email</Label>
            <Input defaultValue="director.records@mandela.ac.za" />
          </div>
          <Row label="Daily digest" desc="Email summary of yesterday's AI activity." />
          <Row label="Senate week alerts" desc="Heightened reminders during Senate week." defaultChecked />
          <Row label="Responsible AI banner" desc="Always show the Responsible AI badge in the top bar." defaultChecked />
        </CardContent>
      </Card>
    </div>
  );
}

function Row({ label, desc, defaultChecked }: { label: string; desc: string; defaultChecked?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4 border-t border-border pt-4">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}
