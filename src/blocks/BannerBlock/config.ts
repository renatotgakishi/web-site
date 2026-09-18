import { Block } from 'payload'

export const BannerBlock: Block = {
  slug: 'bannerBlock',
  interfaceName: 'BannerBlock',
  labels: {
    singular: 'Banner Home',
    plural: 'Banners Home',
  },
  fields: [
    { name: 'saudacao', type: 'text', defaultValue: 'Olá,' },
    { name: 'nome', type: 'text', defaultValue: 'Renato Kishi', required: true },
    { name: 'cargo', type: 'text', defaultValue: 'Eu sou programador' },
    { name: 'botaoTexto', type: 'text', defaultValue: 'Saiba mais :)' },
    { name: 'botaoLink', type: 'text', defaultValue: '#about' },
    { name: 'foto', type: 'upload', relationTo: 'media', required: true },
  ],
}
