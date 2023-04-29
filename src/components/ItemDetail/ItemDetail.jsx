import React from 'react'

export const ItemDetail = ({item}) => {
  return (
    <div className='row g.0'>
        <div className='col-md-4'>
            <img src={`./img/pc/${item.img}`} alt={`Imagen de ${item.nombre}`} className='img-fluid rounded-start' />

        </div>

        <div className='col-md-8'>
            <div className='card-body'>
                <h5>
                    {item.nombre}
                </h5>
                <p className='card-text'>{item.plataforma}</p>
                <p className='card-text'>Precio: {item.precio} $</p>
                <p className='card-text'>{item.description}</p>
                <button className='btn btn-secondary'>Agregar al Carrito</button>
                
            </div>

        </div>

    </div>
  )
}
