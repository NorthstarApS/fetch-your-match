import { createFileRoute } from "@tanstack/react-router";
import { SeoPillarPage } from "@/components/seo-pillar-page";
import { seoPillarHead } from "@/lib/seo-pillars";

export const Route = createFileRoute("/find-singler")({
  head: () => seoPillarHead("/find-singler"),
  component: () => <SeoPillarPage path="/find-singler" />,
});
