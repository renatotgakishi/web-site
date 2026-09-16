import type { Block } from 'payload'

export const DepoimentosBlock: Block = {
    slug: 'depoimentosBlock',
    labels: { singular: 'Depoimentos', plural: 'Depoimentos' },
    fields: [
        { name: 'titulo', type: 'text', defaultValue: 'Depoimentos' },
    ]
}