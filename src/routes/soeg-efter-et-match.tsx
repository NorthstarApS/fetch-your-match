import { createFileRoute } from "@tanstack/react-router";
import { SeoPillarPage } from "@/components/seo-pillar-page";
import { seoPillarHead } from "@/lib/seo-pillars";

export const Route = createFileRoute("/soeg-efter-et-match")({
  head: () => seoPillarHead("/soeg-efter-et-match"),
  component: () => <SeoPillarPage path="/soeg-efter-et-match" />,
});
