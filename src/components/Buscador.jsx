import React, { useState, useEffect } from "react";
import OpcionesBuscador from "./OpcionesBuscador";
import { helpHttps } from "../helper/helpHttps";

const api = helpHttps();
let listaCiudad = null;

export const Buscador = ({ handleCiudad }) => {
  //Funcion para obtener la lista de ciudades y almacenarla en la variable global listaCiudad
  const getListaCiudades = () => {
    let url = "https://www.el-tiempo.net/api/json/v2/municipios";

    //peticion https con fetch
    api.get(url).then((res) => {
      if (!res.err) {
        //si no hay error, se filtra la lista de ciudades y se almacena en listaCiudad
        let nuevoDato = res.map((elemento) => ({
          idProvincia: elemento.CODPROV, //codigo de la provincia
          idCiudad: elemento.CODIGOINE.slice(0, 5), //codigo de la ciudad sin el codigo de la provincia
          nombre: elemento.NOMBRE.includes(";") ? elemento.NOMBRE.split(";")[1] : elemento.NOMBRE, //nombre de la ciudad sin el nombre de la provincia
          poblacion: elemento.POBLACION_MUNI, //poblacion de la ciudad
        }));
        nuevoDato.sort((a, b) => b.poblacion - a.poblacion); //ordenar la lista de ciudades por poblacion
        listaCiudad = nuevoDato;
      }
    });
  };

  const [texto, setTexto] = useState("");
  const [buscador, setBuscador] = useState([]);
  const [finBuscador, setFinBuscador] = useState(false);

  const handleFin = (nombreCiudad) => {
    setFinBuscador(true);
    setTexto(nombreCiudad);
    let ciudadSeleccionada = listaCiudad.filter((ciudad) => ciudad.nombre === nombreCiudad)[0];
    handleCiudad(ciudadSeleccionada);
    setBuscador([]);
  }

  //funcion que se ejecuta cada vez que cambia el estado texto
  useEffect(() => {
    if (finBuscador) {
      setFinBuscador(false);
      return;
    }
    !listaCiudad && getListaCiudades();
    (!listaCiudad || !texto) ? setBuscador([]) : setBuscador(listaCiudad.filter((ciudad) => ciudad.nombre.indexOf(texto) === 0));
  }, [texto]);

  //funcion que se ejecuta cada vez que se escribe en el buscador
  const handleChange = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <input
        type="buscador"
        placeholder="Municipio"
        name="ciudadBuscador"
        value={texto}
        onChange={handleChange}
        id="buscador"
        onKeyDown={(e) => e.key === 'Enter' && handleFin(texto)}
      />
      <div className="opcionesBuscador">
        {buscador &&
          buscador.map(
            (elemento, index) => index < 8 && <OpcionesBuscador key={index} nombre={elemento.nombre} handleFin={handleFin} />
          )}
      </div>
    </div>
  );
};

export default Buscador;
