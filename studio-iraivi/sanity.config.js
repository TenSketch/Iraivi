import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemas/index.js';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'g8mcplw1';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'iraivi',
  title: 'Iraivi CMS',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
