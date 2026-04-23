'use client';
import * as React from 'react';
import dynamic from 'next/dynamic';
import { PLASMIC } from '../../plasmic-init';

const PlasmicCanvasHost = dynamic(
  () => import('@plasmicapp/loader-nextjs').then(mod => mod.PlasmicCanvasHost),
  { ssr: false }
);

export default function HostPage() {
  return PLASMIC ? <PlasmicCanvasHost /> : null;
}
