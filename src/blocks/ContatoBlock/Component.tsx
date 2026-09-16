'use client'
import './styles.css'

type Props = {
  titulo?: string
  subtitulo?: string
  email?: string
  telefone?: string
  endereco?: string
}

export const ContatoBlock = ({ titulo, subtitulo, email, telefone, endereco }: Props) => {
  return (
    <section id="contact" className="contact">
      <div className="heading">
        <h2>{titulo || 'Contato'}</h2>
        <p>{subtitulo || 'Entre em contato comigo'}</p>
      </div>

      <div className="content">
        <div className="contactInfo">
          <h3>Informações de Contato</h3>
          <div className="contactInfoBx">
            <div className="box">
              <div className="icon">📍</div>
              <div className="text">
                <h3>Endereço</h3>
                <p>{endereco || 'São Paulo, SP - Brasil'}</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">📞</div>
              <div className="text">
                <h3>Telefone</h3>
                <p>{telefone || '(11) 99999-9999'}</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">✉️</div>
              <div className="text">
                <h3>Email</h3>
                <p>{email || 'contato@seudominio.com'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="formBx">
          <form>
            <h3>Envie uma mensagem</h3>
            <input type="text" placeholder="Nome Completo" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Sua mensagem"></textarea>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </section>
  )
}

export const ContatoBlockComponent = ContatoBlock
