'use client';
import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
// This import ensures that all synchronous PLASMIC.registerComponent calls happen immediately
import { PLASMIC } from '../../plasmic-init';

export default function HostPage() {
  return PLASMIC && <PlasmicCanvasHost />;
}
