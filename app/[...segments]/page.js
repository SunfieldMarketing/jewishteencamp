import * as React from "react";
import { initPlasmicLoader, PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";

export default async function PlasmicPage({ params }) {
  // Initialize INSIDE the function to hide from Vercel's build-time static analysis
  const PLASMIC = initPlasmicLoader({
    projects: [
      {
        id: "fBPwvBQ6Zs5GG7HUEDfovK",
        token: "7pce0ksh7FtkpYoMRammUOYbeO5WVTEJG9Gvbg9CEf6FVTNiEvwawAfHQsRhTW4i2NtnGokEEsMZ1j8ttgeg",
      },
    ],
    preview: false,
  });

  const segments = params.segments;
  const plasmicPath = segments ? `/${segments.join("/")}` : "/";
  
  let plasmicData = null;
  try {
    plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  } catch (e) {
    console.error("Plasmic connection error:", e);
  }

  if (!plasmicData || !plasmicData.entryCompMetas?.length) {
    notFound();
  }

  const pageMeta = plasmicData.entryCompMetas[0];
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}

export const dynamic = "force-dynamic";
