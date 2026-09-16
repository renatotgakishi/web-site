import { CollectionConfig } from 'payload'
// Depoimentos.ts
export const Depoimentos: CollectionConfig = {
    slug: 'depoimentos',
    fields: [
        { name: 'texto', type: 'textarea', required: true },
        { name: 'nome', type: 'text', required: true },
        { name: 'cargo', type: 'text' },
    ]
}