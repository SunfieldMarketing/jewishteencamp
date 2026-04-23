import * as React from "react";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";
import { PLASMIC } from "../../plasmic-init";

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
       // Temporarily disabling fallback to isolate the build error
       return (
         <div className="min-h-screen flex items-center justify-center bg-primary text-white">
           <h1 className="text-2xl font-bold">Jewish Teen Camp - Site Loading...</h1>
         </div>
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
