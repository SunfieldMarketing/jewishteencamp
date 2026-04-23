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

export async function generateStaticParams() {
  const pages = await PLASMIC.fetchPages();
  return pages.map((page) => ({
    segments: page.path.substring(1).split("/"),
  }));
}

