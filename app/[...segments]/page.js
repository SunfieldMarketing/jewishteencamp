import * as React from "react";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";
import { PLASMIC } from "../../plasmic-init";
import HomeTemplate from "../../components/HomeTemplate";

export default async function PlasmicPage({ params }) {
  const segments = params.segments;
  const plasmicPath = segments ? `/${segments.join("/")}` : "/";
  
  let plasmicData = null;
  try {
    plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  } catch (e) {
    console.error("Plasmic connection error:", e);
  }

  // If no Plasmic page exists yet, and we are on the Home Page, 
  // show the "ThemedHome" template automatically!
  if (!plasmicData || !plasmicData.entryCompMetas?.length) {
    if (plasmicPath === '/') {
      return (
        <PlasmicRootProvider loader={PLASMIC}>
          <HomeTemplate />
        </PlasmicRootProvider>
      );
    }
    notFound();
  }

  const pageMeta = plasmicData.entryCompMetas[0];
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={pageMeta.displayName || pageMeta.name} />
    </PlasmicRootProvider>
  );
}

export const dynamic = "force-dynamic";
