import React from 'react'
import { Media } from '@/components/Media'

export const SobreBlockComponent: React.FC<any> = ({ titulo, subtitulo, texto1, texto2, citacao, autorCitacao, imagem }) => {
    return (
        <section className="py- px- max-:px- bg-white" id="about">
            <div className="w-full text-center mb-">
                <h2 className="text- font-semibold">{titulo}</h2>
            </div>
            <div className="flex justify-between max-:flex-col">
                <div className="w-1/2 max-:w-full pr-5">
                    <h3 className="text- mb-">{subtitulo}</h3>
                    <p className="p-">{texto1}</p>
                    <p className="p-">{texto2}</p>
                    <p className="p- mt-4 italic">{citacao}</p>
                    <p className="font-bold">{autorCitacao}</p>
                </div>
                <div className="w-1/2 max-:w-full">
                    {imagem && <Media resource={imagem} className="max-w-full" />}
                </div>
            </div>
        </section>
    )
}