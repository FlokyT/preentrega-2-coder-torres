import React from 'react'
import { Item } from '../item/item'

export const ItemList = ({productos}) => {
    console.log(productos)
  return (
    <>
       {productos.map(producto => <Item key={producto.id} item={producto}/>)}
    </>
  )
}
