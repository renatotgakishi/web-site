import { Block } from 'payload'

export const Hero: Block = {
    slug: 'hero',
    fields: [
        { name: 'saudacao', type: 'text', defaultValue: 'Olá,' },
        { name: 'nome', type: 'text', defaultValue: 'Renato Kishi' },
        { name: 'subtitulo', type: 'text', defaultValue: 'Eu sou programador' },
        { name: 'textoBotao', type: 'text', defaultValue: 'Saiba mais :)' },
        { name: 'imagemFundo', type: 'upload', relationTo: 'media' },
    ]
}