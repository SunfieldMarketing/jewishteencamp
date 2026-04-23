'use client';

import * as React from "react";
import dynamic from "next/dynamic";
import { PLASMIC, registerComponents } from "../../plasmic-init";

/**
 * PLASMIC COMPONENTS: DYNAMIC BROWSER-ONLY LOAD
 * We import from the main package to ensure compatibility.
 */
const PlasmicComponent = dynamic(
  () => import("@plasmicapp/loader-nextjs").then(mod => mod.PlasmicComponent),
  { ssr: false }
);

const PlasmicRootProvider = dynamic(
  () => import("@plasmicapp/loader-nextjs").then(mod => mod.PlasmicRootProvider),
  { ssr: false }
);

/**
 * DYNAMIC BRIDGE: HYDRATION-PROOF
 */
export default function PlasmicPage({ params }) {
  const [plasmicData, setPlasmicData] = React.useState(null);

  React.useEffect(() => {
    const load = async () => {
      // 1. Force registration
      await registerComponents();
      
      // 2. Unwrap params correctly for Next.js 14
      const p = await params;
      const path = p.segments ? `/${p.segments.join("/")}` : "/";
      
      // 3. Fetch Data
      const data = await PLASMIC.maybeFetchComponentData(path);
      setPlasmicData(data);
    };
    
    load();
  }, [params]);

  if (!plasmicData || !plasmicData.entryCompMetas?.length) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'white' }}>
        <div className="spinner" style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #C8922A', borderRadius: '50%' }}></div>
      </div>
    );
  }

  const pageMeta = plasmicData.entryCompMetas[0];
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={pageMeta.displayName || pageMeta.name} />
    </PlasmicRootProvider>
  );
}
