import * as React from "react";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";
import { PLASMIC, registerComponents } from "../../plasmic-init";

// Initialize components for this route
registerComponents();

export default async function PlasmicPage({ params }) {
  const segments = params.segments;
  const plasmicPath = segments ? `/${segments.join("/")}` : "/";
  
  let plasmicData = null;
  try {
    plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  } catch (e) {
    console.error("Plasmic fetching error:", e);
  }

  if (!plasmicData || !plasmicData.entryCompMetas?.length) {
    if (plasmicPath === '/') {
       // Root is handled by app/page.js, but we provide a safety fallback
       return notFound();
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
