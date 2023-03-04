import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import {defineConfig} from 'sanity'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID!!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET||;

export default defineConfig({
  name: 'default',
  title: 'sanity-portfolio',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
