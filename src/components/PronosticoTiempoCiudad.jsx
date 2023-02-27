import React from 'react'
import { Pronostico } from './Pronostico';

export const PronosticoTiempoCiudad = ({ pronostico }) => {
    let horaInicial = 24 - pronostico.temperatura.length;
    let listaDatos = pronostico.temperatura.map((elemento, index) => ({
        temp: pronostico.temperatura[index],
        lluvia: pronostico.precipitacion[index],
        viento: pronostico.viento[index],
        hora: horaInicial + index,
    }))
    return (
        <div>
            {listaDatos.map((elemento, index) => <Pronostico
                key={index}
                hora={elemento.hora}
                temp={elemento.temp}
                lluvia={elemento.lluvia}
                velocidadViento={elemento.viento.velocidad}
            />)}
        </div>
    )
}

