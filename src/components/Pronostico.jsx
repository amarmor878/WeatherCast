import React from 'react'
import { PronPrinci, PronTemp, PronLluvia, PronViento, PronVel } from '../styles/StyledPronostico'

export const Pronostico = ({ temp, lluvia, velocidadViento, hora }) => {
    return (
        <PronPrinci>
            <PronTemp>{temp} ºC</PronTemp>
            <PronLluvia>{lluvia} % de lluvias</PronLluvia>
            <PronViento>{velocidadViento} <span>km/h</span></PronViento>
            <PronVel>{hora > 9 ? hora : "0" + hora}:00</PronVel>
        </PronPrinci>
    )
}
