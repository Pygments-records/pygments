import {defineConfig} from 'sanity'
import {ListItemBuilder, StructureBuilder, deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'
import {commonDocumentKeys, documents, singletonDocumentKeys} from './schemas/document'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
const dataset = process.env.SANITY_STUDIO_DATASET!

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
const singletonTypes = new Set(singletonDocumentKeys as unknown as string[])

export default defineConfig({
  name: 'default',
  title: 'pygments-studio',

  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: (S) => S.list().title('Content').items(getDeskItems(S)),
    }),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({schemaType}) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({action}) => action && singletonActions.has(action))
        : input,
  },
})

const getDeskItems = (S: StructureBuilder): ListItemBuilder[] => {
  const singletonItems = singletonDocumentKeys.map((singletonKey) =>
    S.listItem().title(documents[singletonKey].title).id(documents[singletonKey].name).child(
      // Instead of rendering a list of documents, we render a single
      // document, specifying the `documentId` manually to ensure
      // that we're editing the single instance of the document
      S.document().schemaType(documents[singletonKey].name).documentId(documents[singletonKey].name)
    )
  )
  const commonItems = commonDocumentKeys.map((commonKey) =>
    S.documentTypeListItem(documents[commonKey].name).title(documents[commonKey].title)
  )
  return [...commonItems, ...singletonItems]
}
