import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import {defineConfig} from 'sanity'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!!;
const dataset = process.env.SANITY_STUDIO_DATASET!!;

export default defineConfig({
  name: 'default',
  title: 'Portfolio-Studio',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
