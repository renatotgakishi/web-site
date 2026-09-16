import { CollectionConfig } from 'payload'
// Empresas.ts
export const Empresas: CollectionConfig = {
    slug: 'empresas',
    admin: { useAsTitle: 'nome' },
    fields: [
        { name: 'nome', type: 'text', required: true },
        { name: 'logo', type: 'upload', relationTo: 'media', required: true },
        { name: 'ordem', type: 'number' },
    ]
}
