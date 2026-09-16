import type { Block } from 'payload'

export const SobreBlock: Block = {
  slug: 'sobreBlock',
  interfaceName: 'SobreBlock',
  labels: { singular: 'Sobre Mim', plural: 'Sobre Mim' },
  fields: [
    { name: 'titulo', type: 'text', defaultValue: 'Sobre mim' },
    { name: 'subtitulo', type: 'text', defaultValue: 'Eu sou programador' },
    {
      name: 'texto1',
      type: 'textarea',
      defaultValue: 'Sou apenas um profissional de tecnologia...',
    },
    { name: 'texto2', type: 'textarea' },
    { name: 'citacao', type: 'text', defaultValue: 'Sua tarefa é descobrir o seu trabalho...' },
    { name: 'autorCitacao', type: 'text', defaultValue: 'Buda B' },
    { name: 'imagem', type: 'upload', relationTo: 'media' },
  ],
}
