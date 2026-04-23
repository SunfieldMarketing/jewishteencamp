'use client';
import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC, registerComponents } from '../../plasmic-init';

/**
 * PLASMIC STUDIO HOST
 * This is the doorway the visual editor uses to talk to your code.
 */
export default function HostPage() {
  React.useEffect(() => {
    // We must register components for the Studio to see them!
    const init = async () => {
      await registerComponents();
    };
    init();
  }, []);

  return PLASMIC && <PlasmicCanvasHost />;
}
