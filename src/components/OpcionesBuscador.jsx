import React from 'react'
import { OpcionesBuscadorStyled } from '../styles/OpcionesBuscadorStyled'

export const OpcionesBuscador = ({ nombre, handleFin }) => {
  return (
    <div>
      <OpcionesBuscadorStyled onClick={(() => handleFin(nombre))}>{nombre}</OpcionesBuscadorStyled>
    </div>
  )
}

export default OpcionesBuscador;