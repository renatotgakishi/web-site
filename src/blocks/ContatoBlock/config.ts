import type { Block } from 'payload'

export const ContatoBlock: Block = {
    slug: 'contatoBlock',
    labels: { singular: 'Contato', plural: 'Contato' },
    fields: [
        { name: 'titulo', type: 'text', defaultValue: 'Contate me' },
        { name: 'endereco', type: 'text' },
        { name: 'telefone', type: 'text' },
        { name: 'email', type: 'text' },
    ]
}