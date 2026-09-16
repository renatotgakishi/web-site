'use client'
import './styles.css'

type Depoimento = {
  nome?: string
  cargo?: string
  texto?: string
  foto?: any
}

type Props = {
  titulo?: string
  depoimentos?: Depoimento[]
}

export const DepoimentosBlock = ({ titulo, depoimentos }: Props) => {
  const lista = depoimentos || [
    {
      nome: 'João Silva',
      cargo: 'CEO, Empresa X',
      texto:
        'Profissional extremamente competente, entregou tudo antes do prazo e com qualidade impecável.',
    },
    {
      nome: 'Maria Souza',
      cargo: 'Gerente de Projetos',
      texto: 'Resolveu problemas complexos com soluções simples. Recomendo de olhos fechados.',
    },
  ]

  return (
    <section id="testimonial" className="testimonial">
      <div className="heading">
        <h2>{titulo || 'Depoimentos'}</h2>
      </div>

      <div className="content">
        {lista.map((item, i) => (
          <div key={i} className="testimonialBx">
            <p>{item.texto}</p>
            <h3>
              {item.nome}
              <br />
              <span>{item.cargo}</span>
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export const DepoimentosBlockComponent = DepoimentosBlock
