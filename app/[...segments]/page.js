'use client';

import * as React from "react";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC, registerComponents } from "../../plasmic-init";

/**
 * DYNAMIC BRIDGE: CLIENT-SIDE ONLY
 * This avoids the 'TypeError: l is not a function' build crash 
 * by deferring the Plasmic render to the client.
 */
export default function PlasmicPage({ params }) {
  const [segments, setSegments] = React.useState(null);
  const [plasmicData, setPlasmicData] = React.useState(null);

  React.useEffect(() => {
    // We register components only on the client
    registerComponents();
    
    // Unwrap params
    const getParams = async () => {
      const p = await params;
      setSegments(p.segments);
      
      const path = p.segments ? `/${p.segments.join("/")}` : "/";
      const data = await PLASMIC.maybeFetchComponentData(path);
      setPlasmicData(data);
    };
    
    getParams();
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
