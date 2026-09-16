import React from 'react'
import config from '@payload-config'
import { getPayload } from 'payload'

export const ServicosBlockComponent: React.FC<any> = async ({ titulo, subtitulo }) => {
    const payload = await getPayload({ config })
    const { docs: servicos } = await payload.find({ collection: 'servicos', limit: 10 })

    return (
        <section className="py- px- max-:px- bg-[#111]" id="services">
            <div className="text-center mb-">
                <h2 className="text- font-semibold text-white">{titulo}</h2>
                <p className="text-white">{subtitulo}</p>
            </div>
            <div className="grid grid-cols-3 max-:grid-cols-1 gap-5">
                {servicos.map((s: any) => (
                    <div key={s.id} className="bg-[#222] p-10 text-center hover:bg-gradient-to-r from-[#F27A54] to-[#A154F2] transition-all">
                        <h3 className="text-white text-xl">{s.titulo}</h3>
                        <p className="text-white mt-2">{s.descricao}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}