'use client'
import { Media } from '@/components/Media'
import styles from './styles.module.css'

type Props = {
  titulo?: string
  subtitulo?: string
  texto1?: string
  texto2?: string
  citacao?: string
  autorCitacao?: string
  imagem?: any
}

export const SobreBlock = ({
  titulo,
  subtitulo,
  texto1,
  texto2,
  citacao,
  autorCitacao,
  imagem,
}: Props) => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.heading}>
        <h2>{titulo || 'Sobre mim'}</h2>
      </div>

      <div className={styles.content}>
        <div className={`${styles.contentBx} ${styles.w70}`}>
          <h3>{subtitulo || 'Eu sou programador'}</h3>
          <p>{texto1}</p>
          <p>{texto2}</p>
          <p className={styles.quote}>{citacao}</p>
          <p className={styles.author}>{autorCitacao}</p>
        </div>

        <div className={styles.w30}>
          {imagem?.url ? (
            <Media resource={imagem} imgClassName={styles.img} />
          ) : (
            // fallback pra você ver a imagem mesmo sem cadastrar no admin
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
              alt=""
              className={styles.img}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export const SobreBlockComponent = SobreBlock
