'use client'
import './styles.css'

type Servico = {
  titulo: string
  descricao: string
  icone?: string
}

type Props = {
  titulo?: string
  servicos?: Servico[]
}

export const ServicosBlock = ({ titulo, servicos }: Props) => {
  const lista = servicos || [
    {
      titulo: 'Desenvolvimento Web',
      descricao: 'Sites e sistemas com Next.js, Payload e performance de verdade.',
      icone: '💻',
    },
    {
      titulo: 'Gestão de Projetos',
      descricao: 'Organização, liderança e entrega com foco em solução simples.',
      icone: '🚀',
    },
    {
      titulo: 'Arquitetura de Sistemas',
      descricao: 'Da ideia ao deploy, estruturando projetos que escalam.',
      icone: '🏗️',
    },
  ]

  return (
    <section id="services" className="services">
      <div className="heading">
        <h2>{titulo || 'Meus Serviços'}</h2>
      </div>

      <div className="content">
        {lista.map((servico, i) => (
          <div key={i} className="servicesBx">
            <div className="icon">{servico.icone}</div>
            <h3>{servico.titulo}</h3>
            <p>{servico.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export const ServicosBlockComponent = ServicosBlock
