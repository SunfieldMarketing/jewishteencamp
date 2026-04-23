import {
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";
import { PLASMIC } from "../../plasmic-init";

export default async function PlasmicPage({ params }) {
  const segments = params.segments;
  const plasmicPath = segments ? `/${segments.join("/")}` : "/";
  
  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);
  if (!plasmicData) {
    notFound();
  }

  const pageMeta = plasmicData.entryCompMetas[0];
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}

// Tell Next.js to not try to pre-list pages during build
// This prevents the "TypeError" when the Plasmic project is empty
export const dynamicParams = true;

export async function generateStaticParams() {
  return [];
}
