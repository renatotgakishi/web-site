import type { Block } from 'payload'

export const TrabalhosBlock: Block = {
    slug: 'trabalhosBlock',
    labels: { singular: 'Trabalhos', plural: 'Trabalhos' },
    fields: [
        { name: 'titulo', type: 'text', defaultValue: 'Últimos Trabalhos' },
        { name: 'subtitulo', type: 'text', defaultValue: 'Empresas que atuei' },
    ]
}