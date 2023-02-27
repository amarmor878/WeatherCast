import React from 'react'

export const OpcionesBuscador = ({ nombre, handleFin }) => {
  return (
    <div>
      <p className='opcionesBuscador' onClick={(() => handleFin(nombre))}>{nombre}</p>
    </div>
  )
}

export default OpcionesBuscador;