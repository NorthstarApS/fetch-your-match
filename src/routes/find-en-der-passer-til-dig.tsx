import { createFileRoute } from "@tanstack/react-router";
import { SeoPillarPage } from "@/components/seo-pillar-page";
import { seoPillarHead } from "@/lib/seo-pillars";

export const Route = createFileRoute("/find-en-der-passer-til-dig")({
  head: () => seoPillarHead("/find-en-der-passer-til-dig"),
  component: () => <SeoPillarPage path="/find-en-der-passer-til-dig" />,
});
