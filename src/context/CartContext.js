import React from 'react'

const CartContext=React.createContext({
    products:[],
    addToCart:(product)=>{},
    removeFromCart:(id)=>{}
})

export default CartContext