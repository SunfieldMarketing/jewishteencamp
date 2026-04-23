'use client';
import * as React from 'react';
import dynamic from 'next/dynamic';
import { PLASMIC, registerComponents } from '../../plasmic-init';

/**
 * PLASMIC STUDIO HOST: ULTR-PURE CLIENT
 * We use dynamic(..., { ssr: false }) to completely bypass the 
 * hydration phase that causes React Error #329.
 */
const PlasmicCanvasHost = dynamic(
  () => import('@plasmicapp/loader-nextjs').then(mod => mod.PlasmicCanvasHost),
  { ssr: false }
);

export default function HostPage() {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    const run = async () => {
      await registerComponents();
      setInit(true);
    };
    run();
  }, []);

  if (!init) return <div style={{ padding: '20px', color: '#666' }}>Connecting Design System...</div>;

  return <PlasmicCanvasHost />;
}
