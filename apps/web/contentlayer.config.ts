import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const LinksDocument = defineDocumentType(() => ({
  name: 'LinksDocument',
  filePathPattern: 'links/*.md',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    url: {
      type: 'string',
      required: true,
    },
  },
}))

export default makeSource({
  contentDirPath: './data',
  documentTypes: [LinksDocument],
})
