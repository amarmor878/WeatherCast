import React from 'react'

export const Pronostico = ({ temp, lluvia, velocidadViento, hora }) => {
    return (
        <div>
            <h4>{temp} ºC</h4>
            <h4>{lluvia} % de lluvias</h4>
            <h4>{velocidadViento} km/h</h4>
            <h4>{hora > 9 ? hora : "0" + hora}:00</h4>
        </div>
    )
}
