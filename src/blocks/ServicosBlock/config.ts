import type { Block } from 'payload'

export const ServicosBlock: Block = {
    slug: 'servicosBlock',
    labels: { singular: 'Meus Serviços', plural: 'Meus Serviços' },
    fields: [
        { name: 'titulo', type: 'text', defaultValue: 'Meus Serviços' },
        { name: 'subtitulo', type: 'text', defaultValue: 'Tecnologias e habilidades adquiridas' },
    ]
}