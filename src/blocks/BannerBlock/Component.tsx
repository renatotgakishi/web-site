import React from 'react'
import Link from 'next/link'

type Props = {
  saudacao?: string
  nome?: string
  cargo?: string
  botaoTexto?: string
  botaoLink?: string
  foto?: any
}

export const BannerBlock: React.FC<Props> = ({
  saudacao,
  nome,
  cargo,
  botaoTexto,
  botaoLink,
  foto,
}) => {
  const imageUrl = typeof foto === 'object' ? foto?.url : null

  return (
    <section
      id="home"
      className="banner"
      style={
        {
          position: 'relative',
          minHeight: '100vh',
          width: '100%',
          backgroundColor: '#030303',
          backgroundImage: imageUrl ? `url(${imageUrl})` : undefined,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
          backgroundSize: 'contain',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '-150px',
          paddingTop: '150px',
        } as any
      }
    >
      <div className="textBx px-8 lg:px- relative z-10">
        <h2 className="text-white text-[2.5em] lg:text- font-medium leading-[1.5em]">
          {saudacao || 'Olá,'}
          <br />
          Eu sou <span className="text-[1.5em] font-bold">{nome || 'Renato Kishi'}</span>
        </h2>
        <h3 className="text-white text-[1.5em] font-medium mt-2">
          {cargo || 'Eu sou programador'}
        </h3>
        <Link
          href={botaoLink || '#about'}
          className="btn"
          style={
            {
              position: 'relative',
              background: 'linear-gradient(90deg, #F27A54 0%, #A154F2 100%)',
              display: 'inline-block',
              color: '#fff',
              marginTop: '20px',
              padding: '10px 30px',
              fontSize: '18px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              letterSpacing: '2px',
              fontWeight: 500,
            } as any
          }
        >
          {botaoTexto || 'Saiba mais :) '}
        </Link>
      </div>

      {/* overlay pra não ficar estourado */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/50 to-transparent pointer-events-none lg:hidden" />

      <style>{`
        @media (max-width: 768px) {
         .banner {
            background-size: cover!important;
            background-position: center!important;
          }
        }
      `}</style>
    </section>
  )
}

export const BannerBlockComponent = BannerBlock
