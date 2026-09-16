'use client'
import { Media } from '@/components/Media'
import './styles.css'

type Trabalho = {
  titulo?: string
  descricao?: string
  imagem?: any
  link?: string
}

type Props = {
  titulo?: string
  trabalhos?: Trabalho[]
}

export const TrabalhosBlock = ({ titulo, trabalhos }: Props) => {
  const lista = trabalhos || [
    { titulo: 'Projeto 1' },
    { titulo: 'Projeto 2' },
    { titulo: 'Projeto 3' },
    { titulo: 'Projeto 4' },
  ]

  return (
    <section id="work" className="work">
      <div className="heading">
        <h2>{titulo || 'Meus Trabalhos'}</h2>
        <p>Alguns projetos recentes que desenvolvi</p>
      </div>

      <div className="content">
        {lista.map((item, i) => (
          <div key={i} className="workBx">
            {item.imagem ? (
              <Media resource={item.imagem} imgClassName="img" />
            ) : (
              <img
                src={`https://picsum.photos/400/300?random=${i}`}
                alt={item.titulo}
                className="img"
              />
            )}
            <div className="overlay">
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const TrabalhosBlockComponent = TrabalhosBlock
