import { PLASMIC } from "../../plasmic-init";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { notFound } from "next/navigation";

export default async function PlasmicPage(props) {
  const { segments } = props.params;
  const path = segments ? `/${segments.join("/")}` : "/";
  
  const plasmicData = await PLASMIC.maybeFetchComponentData(path);
  if (!plasmicData) {
    // If no Plasmic page exists at this path, return 404
    notFound();
  }

  return (
    <PlasmicComponent component={plasmicData.entryCompMetadatas[0].name} />
  );
}

// Optional: Pre-render all Plasmic pages for speed
export async function generateStaticParams() {
  const pages = await PLASMIC.fetchAllPages();
  return pages.map((page) => ({
    segments: page.path.slice(1).split("/"),
  }));
}
