import React from 'react'
import config from '@payload-config'
import { getPayload } from 'payload'
import { Media } from '@/components/Media'

export const TrabalhosBlockComponent: React.FC<any> = async ({ titulo, subtitulo }) => {
    const payload = await getPayload({ config })
    const { docs: empresas } = await payload.find({ collection: 'empresas', limit: 20 })

    return (
        <section className="py- px- bg-white" id="work">
            <div className="text-center mb-10">
                <h2 className="text- font-semibold">{titulo}</h2>
                <p>{subtitulo}</p>
            </div>
            <div className="flex flex-wrap justify-between">
                {empresas.map((e: any) => (
                    <div key={e.id} className="w-[50%] max-:w-full p-5">
                        {e.logo && <Media resource={e.logo} className="max-w-" />}
                        <p className="mt-2">{e.nome}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}