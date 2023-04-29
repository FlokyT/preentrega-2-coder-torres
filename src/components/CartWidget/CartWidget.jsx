import React from 'react'

export const CartWidget = ({cantCarrito}) => {
    return (
        <div>
            <p>carrito</p>
            <p>{cantCarrito}</p>
            <i className="bi bi-cart-fill"></i>
        </div>
    )
}