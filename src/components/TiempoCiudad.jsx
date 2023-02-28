import React from 'react'
import { PronosticoTiempoCiudad } from './PronosticoTiempoCiudad';
import {
    TCStyle, TCPrincipal, TCNombre, TCTempActual, TCTemp, TCTempMax, TCImg,
    TCTempMin, TCVientoLluvia, TCViento, TCLluvia, TCDescrip, PronTitulo, TCImgFav
} from '../styles/StyledCiudad';

export const TiempoCiudad = ({ dato, nombreCiudad, handleCiudadesFavoritas, borrarCiudad, idProvincia, idCiudad }) => {
    const { lluvia, pronostico, stateSky, temperatura_actual, temperaturas, viento } = dato;

    const ciudadEnFavoritos = () => {
        let listaFavoritos = JSON.parse(localStorage.setItem("ciudadesFavoritas")).map((ciudad) => ciudad.idCiudad === idCiudad ? true : false);
        return listaFavoritos.incluides(true);
    }
    return (
        <TCStyle>
            {/*
            {ciudadEnFavoritos() ? <TCImgFav onClick={() => borrarCiudad(idCiudad)} src='https://user-images.githubusercontent.com/100948149/221852997-d5499012-4fb8-470b-86d1-d9607d232f65.png' alt='Ciudad en favoritos' /> : 
            <TCImgFav onClick={() => handleCiudadesFavoritas(idProvincia, idCiudad)} src='https://user-images.githubusercontent.com/100948149/221852914-6b3fc9d6-e78f-40a2-ae59-8022d631edca.png' alt='Ciudad no en favoritos' />}
            */}
            <TCPrincipal>
                <TCNombre>{nombreCiudad}</TCNombre>
                <TCTempActual>{temperatura_actual} ºC</TCTempActual>
                <TCTemp>
                    <TCTempMax>{temperaturas.max} ºC</TCTempMax>
                    <TCTempMin>{temperaturas.min} ºC</TCTempMin>
                </TCTemp>
                <TCVientoLluvia>
                    <TCImg src='https://raw.githubusercontent.com/Makin-Things/weather-icons/master/animated/wind.svg' alt='Velocidad del viento' />
                    <TCViento>{viento} km/h</TCViento>
                    <TCImg src='https://raw.githubusercontent.com/Makin-Things/weather-icons/master/animated/rainy-1-day.svg' alt='Probabilidad de lluvia' />
                    <TCLluvia>{lluvia}%</TCLluvia>
                </TCVientoLluvia>
                <TCDescrip>{stateSky.description}</TCDescrip>
            </TCPrincipal>
            <PronTitulo>Pronóstico de hoy:</PronTitulo>
            <PronosticoTiempoCiudad
                pronostico={pronostico.hoy}
            />
            <PronTitulo>Pronóstico de mañana:</PronTitulo>
            <PronosticoTiempoCiudad
                pronostico={pronostico.manana}
            />
        </TCStyle>
    )
}
