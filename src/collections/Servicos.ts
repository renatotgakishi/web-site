import { CollectionConfig } from 'payload'

export const Servicos: CollectionConfig = {
    slug: 'servicos',
    admin: { useAsTitle: 'titulo' },
    fields: [
        { name: 'titulo', type: 'text', required: true }, // ex: Frontend
        { name: 'descricao', type: 'textarea', required: true },
        { name: 'icone', type: 'upload', relationTo: 'media', required: true },
        { name: 'ordem', type: 'number' },
    ]
}