'use client';

import * as React from "react";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC, registerComponents } from "../../plasmic-init";

/**
 * DYNAMIC BRIDGE: ASYNC CLIENT-SIDE
 */
export default function PlasmicPage({ params }) {
  const [segments, setSegments] = React.useState(null);
  const [plasmicData, setPlasmicData] = React.useState(null);

  React.useEffect(() => {
    const load = async () => {
      // 1. Register components ASYNC
      await registerComponents();
      
      // 2. Unwrap params
      const p = await params;
      setSegments(p.segments);
      
      // 3. Fetch Data
      const path = p.segments ? `/${p.segments.join("/")}` : "/";
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
