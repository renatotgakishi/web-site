import React from 'react'
import config from '@payload-config'
import { getPayload } from 'payload'

export const DepoimentosBlockComponent: React.FC<any> = async ({ titulo }) => {
  const payload = await getPayload({ config })
  const { docs: depoimentos } = await payload.find({ collection: 'depoimentos', limit: 10 })

  return (
    <section className="py- px- bg-[#111] text-white" id="testimonial">
      <div className="text-center mb-10">
        <h2 className="text- font-semibold">{titulo}</h2>
      </div>
      <div className="grid grid-cols-2 max-:grid-cols-1 gap-8">
        {depoimentos.map((d: any) => (
          <div key={d.id} className="bg-[#222] p-10">
            <p>"{d.texto}"</p>
            <h3 className="mt-5 text-[#F27A54] font-bold">{d.nome}</h3>
            <p className="text-sm">{d.cargo} - {d.empresa}</p>
          </div>
        ))}
      </div>
    </section>
  )
}