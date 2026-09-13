import { createFileRoute } from "@tanstack/react-router";
import { SeoPillarPage } from "@/components/seo-pillar-page";
import { seoPillarHead } from "@/lib/seo-pillars";

export const Route = createFileRoute("/datingsogning")({
  head: () => seoPillarHead("/datingsogning"),
  component: () => <SeoPillarPage path="/datingsogning" />,
});
