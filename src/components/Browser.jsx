import React, { useState, useEffect } from "react";
import BrowserOptions from "./BrowserOptions";
import helpHttps from "../helper/helpHttps";

const api = helpHttps(); //helper para peticiones https con fetch
let listaCiudad = null; //variable global para almacenar la lista de ciudades

//Componente que renderiza el buscador de ciudades
export const Browser = () => {
  const [texto, setTexto] = useState(""); //estado para el texto del buscador
  const [buscador, setBuscador] = useState([]); //estado para el resultado del buscador

  //funcion para obtener la lista de ciudades y almacenarla en la variable global listaCiudad
  const getListaCiudades = () => {
    let url = "https://www.el-tiempo.net/api/json/v2/municipios";

    //peticion https con fetch
    api.get(url).then((res) => {
      if (!res.err) {
        //si no hay error, se filtra la lista de ciudades y se almacena en listaCiudad
        let nuevoDato = res.map((el) => ({
          idProvincia: el.CODPROV, //codigo de la provincia
          idCiudad: el.CODIGOINE.slice(0, 5), //codigo de la ciudad sin el codigo de la provincia
          nombre: el.NOMBRE.includes(";") ? el.NOMBRE.split(";")[1] : el.NOMBRE, //nombre de la ciudad sin el nombre de la provincia
          poblacion: el.POBLACION_MUNI, //poblacion de la ciudad
        }));
        nuevoDato.sort((a, b) => b.poblacion - a.poblacion); //ordenar la lista de ciudades por poblacion
        listaCiudad = nuevoDato;
      }
    });
  };

  //funcion que se ejecuta cada vez que cambia el estado texto
  useEffect(() => {
    //si no hay lista de ciudades, se obtiene la lista de ciudades
    if (!listaCiudad) {
      getListaCiudades();
    }
    //si no hay lista de ciudades o no hay texto en el buscador, se vacia el estado buscador
    if (!listaCiudad || !texto) {
      setBuscador([]);
      return;
    }

    //se filtra la lista de ciudades por el texto del buscador y se almacena en el estado buscador
    let resultado = listaCiudad.filter(
      (ciudad) => ciudad.nombre.indexOf(texto) === 0
    );
    setBuscador(resultado);
  }, [texto]);

  //funcion que se ejecuta cada vez que se escribe en el buscador
  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  //renderizado del buscador y de las opciones del buscador
  return (
    <div>
      <input
        type="buscador"
        placeholder="Municipio"
        name="ciudadBuscador"
        value={texto}
        onChange={handleChange}
        id="buscador"
      />
      <div className="opcionesBuscador">
        {buscador &&
          buscador.map(
            (el, i) => i < 8 && <BrowserOptions key={i} nombre={el.nombre} />
          )}
      </div>
    </div>
  );
};

export default Browser;
