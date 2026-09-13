import { createFileRoute } from "@tanstack/react-router";
import { SeoPillarPage } from "@/components/seo-pillar-page";
import { seoPillarHead } from "@/lib/seo-pillars";

export const Route = createFileRoute("/soeg-med-en-bedre-profil")({
  head: () => seoPillarHead("/soeg-med-en-bedre-profil"),
  component: () => <SeoPillarPage path="/soeg-med-en-bedre-profil" />,
});
