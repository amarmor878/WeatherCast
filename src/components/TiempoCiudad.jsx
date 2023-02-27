import React from 'react'
import { PronosticoTiempoCiudad } from './PronosticoTiempoCiudad';

export const TiempoCiudad = ({ dato, nombreCiudad }) => {
    const { lluvia, pronostico, stateSky, temperatura_actual, temperaturas, viento } = dato;
    return (
        <div className='tiempoCiudad'>
            <div>
                <h2>{nombreCiudad}</h2>
                <h4>{temperatura_actual} ºC</h4>
                <div>
                    <h4>{temperaturas.max} ºC</h4>
                    <h4>{temperaturas.min} ºC</h4>
                </div>
                <div>
                    <h4>{viento} km/h</h4>
                    <h4>{lluvia}</h4>
                </div>
                <h2>{stateSky.description}</h2>
            </div>
            <h2>Pronóstico de hoy:</h2>
            <PronosticoTiempoCiudad
                pronostico={pronostico.hoy}
            />
            <h2>Pronóstico de mañana:</h2>
            <PronosticoTiempoCiudad
                pronostico={pronostico.manana}
            />
        </div>
    )
}
