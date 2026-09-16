import { Block } from 'payload'

export const BlogBlock: Block = {
  slug: 'blogBlock',
  interfaceName: 'BlogBlock',
  labels: {
    singular: 'Blog - Últimos Posts',
    plural: 'Blog Blocks',
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      defaultValue: 'Últimos Posts',
    },
  ],
}
