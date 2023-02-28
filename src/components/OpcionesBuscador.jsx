import React from 'react'
import { BuscadorOpciones } from '../styles/StyledTiempo'

export const OpcionesBuscador = ({ nombre, handleFin }) => {
  return (
    <div>
      <BuscadorOpciones onClick={(() => handleFin(nombre))}>{nombre}</BuscadorOpciones>
    </div>
  )
}

export default OpcionesBuscador;