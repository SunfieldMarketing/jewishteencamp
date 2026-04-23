'use client';
import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '../../plasmic-init';

export default function HostPage() {
  return PLASMIC ? <PlasmicCanvasHost /> : <div>Initializing Bridge...</div>;
}
