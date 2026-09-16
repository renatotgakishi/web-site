import React from 'react'

export const ContatoBlockComponent: React.FC<any> = ({ titulo, endereco, telefone, email }) => {
  return (
    <section className="py- px- bg-white" id="contact">
      <div className="text-center mb-10">
        <h2 className="text- font-semibold">{titulo}</h2>
      </div>
      <div className="flex max-:flex-col">
        <div className="w-1/2">
          <p className="mb-2">{endereco}</p>
          <p className="mb-2">{telefone}</p>
          <p className="mb-2">{email}</p>
        </div>
        <div className="w-1/2">
          <form className="flex flex-col gap-4">
            <input placeholder="Nome" className="border p-3" />
            <input placeholder="Email" className="border p-3" />
            <textarea placeholder="Mensagem" className="border p-3 h-32" />
            <button className="bg-gradient-to-r from-[#F27A54] to-[#A154F2] text-white p-3">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}