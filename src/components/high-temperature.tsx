'use client'

import { useEffect, useState } from 'react'
import { Range } from 'react-range'
import Land from './icons/land'
import Landx from './icons/landx'
import Sun from './icons/sun'

const DATA = [
    {
        prevYear: 1850,
        nextYear: 1900,
        text: 'Les premiers signes du changement climatique',
        description: `Les premiers signes du changement climatique sont détectés. La température moyenne de la planète a augmenté de 0,6 °C depuis le début de l'ère industrielle. La première conférence internationale sur le changement climatique a lieu à Genève.`,
    },
    {
        prevYear: 1900,
        nextYear: 1950,
        text: "Essor de l'industrialisation et augmentation des émissions",
        description: `Le début du XXe siècle voit une montée rapide de l'industrialisation, entraînant une augmentation des émissions de gaz à effet de serre. La combustion de combustibles fossiles devient un contributeur majeur à la tendance actuelle du changement climatique.`,
    },
    {
        prevYear: 1950,
        nextYear: 2000,
        text: 'Boom économique post-Seconde Guerre mondiale et impact environnemental',
        description: `La période de l'après-Seconde Guerre mondiale connaît un important boom économique, accompagné d'une activité industrielle accrue et d'une consommation d'énergie plus élevée. Cette époque marque une augmentation de la pollution environnementale et de la libération de plus de gaz à effet de serre dans l'atmosphère.`,
    },
    {
        prevYear: 2000,
        nextYear: 2051,
        text: "Progrès dans la science du climat et appel à l'action",
        description: `Les progrès dans la science du climat conduisent à une compréhension plus claire du changement climatique d'origine humaine. Un consensus international sur la nécessité urgente d'agir se renforce, et des accords historiques tels que le Protocole de Kyoto et l'Accord de Paris sont établis pour traiter les problèmes climatiques.`,
    },
]

function interpolate(value: number) {
    const inputMin = 0
    const inputMax = 100
    const outputMin = 13.7
    const outputMax = 15.7

    const result =
        outputMin +
        (outputMax - outputMin) * ((value - inputMin) / (inputMax - inputMin))
    return result
}

const HighTemperature = () => {
    const [values, setValues] = useState([1850])
    const [percentage, setPercentage] = useState(0)
    const [averateTemperature, setAverageTemperature] = useState(0)

    useEffect(() => {
        setAverageTemperature(interpolate(percentage))
    }, [percentage])

    console.log(averateTemperature)

    useEffect(() => {
        setPercentage((values[0] - 1850) / 2)
    }, [values])
    return (
        <div className='relative  h-full overflow-hidden bg-gradient-to-b from-sky-600 to-[#b6fdff]'>
            <Range
                step={1}
                min={1850}
                max={2050}
                values={values}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className='relative mx-auto mt-8 h-4 w-full max-w-5xl rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-600'
                    >
                        {children}
                        <p className='absolute -right-60 -top-1 text-lg'>
                            Temperature moyone:{' '}
                            <span className=' font-bold'>
                                {averateTemperature.toFixed(2)} °C
                            </span>
                        </p>
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className='absolute flex h-6 items-center justify-center rounded-full border-none bg-white px-4 shadow-lg'
                    >
                        Glisser
                    </div>
                )}
            />

            <p className='mx-auto mb-2 max-w-2xl text-center text-8xl font-bold tracking-[-0.01em] text-sky-950'>
                {values[0]}
            </p>
            <div className='mx-auto mt-48 max-w-3xl'>
                {DATA.map((data) => {
                    if (
                        values[0] >= data.prevYear &&
                        values[0] < data.nextYear
                    ) {
                        return (
                            <div className='mb-16 text-center' key={data.text}>
                                <h2 className='mb-2 text-5xl font-bold tracking-[-0.01em] text-sky-950'>
                                    {data.text}
                                </h2>
                                <p className='text-2xl text-sky-950'>
                                    {data.description}
                                </p>
                            </div>
                        )
                    }
                })}
            </div>
            <Sun height={400} className='absolute -left-32 -top-32' />

            <Landx
                width={1920}
                className='absolute bottom-0 '
                seaPosition={-percentage / 4}
            />
            <Land
                width={1920}
                className='absolute bottom-0 z-10'
                seaPosition={-percentage / 4}
                style={{
                    opacity: 1 - percentage / 100,
                }}
            />
        </div>
    )
}

export default HighTemperature
