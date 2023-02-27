import React, { useEffect, useState } from "react";
import Buscador from "./Buscador";
import { TiempoCiudad } from "./TiempoCiudad";
import helpHttps from "../helper/helpHttps";

const api = helpHttps();

export const MenuPrincipal = () => {
  const [ciudad, setCiudad] = useState(null);
  const [dato, setDato] = useState(null);

  const handleCiudad = (ciudad) => {
    setCiudad(ciudad)
  }

  useEffect(() => {
    if (!ciudad) return;

    //Consultamos a la API para obtener los datos de la provincia y cuidad seleccionados.
    let url = `https://www.el-tiempo.net/api/json/v2/provincias/${ciudad.idProvincia}/municipios/${ciudad.idCiudad}`;
    api.get(url).then((res) => {
      if (!res.err) {
        setDato(res);
        //TODO descomentar
        console.log(res) //informacion de la api en tiempo real
      }
    });
  }, [ciudad]);

  return (
    <div className="menuPrincipal">
      <Buscador handleCiudad={handleCiudad} />
      {dato && <TiempoCiudad dato={dato} nombreCiudad={ciudad.nombre} />}
    </div>);
};

export default MenuPrincipal;
