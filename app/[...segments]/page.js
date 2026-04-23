import {
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";
import { PLASMIC } from "../../plasmic-init";

export default async function PlasmicPage({ params }) {
  const segments = params.segments;
  const plasmicPath = segments ? `/${segments.join("/")}` : "/";
  
  let plasmicData = null;
  try {
    plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  } catch (e) {
    console.error("Plasmic fetch error:", e);
  }

  if (!plasmicData || !plasmicData.entryCompMetas.length) {
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
