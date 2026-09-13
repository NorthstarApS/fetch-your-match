import { createFileRoute } from "@tanstack/react-router";
import { SeoPillarPage } from "@/components/seo-pillar-page";
import { seoPillarHead } from "@/lib/seo-pillars";

export const Route = createFileRoute("/dating-uden-swipe")({
  head: () => seoPillarHead("/dating-uden-swipe"),
  component: () => <SeoPillarPage path="/dating-uden-swipe" />,
});
