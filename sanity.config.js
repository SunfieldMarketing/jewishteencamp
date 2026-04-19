import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { presentationTool } from 'sanity/presentation';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Jewish Teen Camp',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/admin',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: typeof location === 'undefined' ? 'http://localhost:3000' : location.origin,
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
