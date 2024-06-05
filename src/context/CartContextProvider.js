import React, { useState, useEffect } from 'react'
import CartContext from './CartContext'
// import axios from 'axios'

// const axiosInstance=axios.create({baseURL:'https://crudcrud.com/api/3cb0038832b64454b1f5b269cd17b166',headers:{'Access-Control-Allow-Origin':'*'}})

const CartContextProvider = (props) => {
  let initialValue
  const email = localStorage.getItem('email')
  const reqEmail = email.split('@').join("").split('.').join("")
  useEffect(async () => {
    try {
      const response = await fetch(`https://crudcrud.com/api/072132452d284dd7a4b7b236cc729570/cart${reqEmail}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.ok) {
        const data = response.json()
        initialValue = data[0]
        delete initialValue._id
      }
      else if(!response.ok){
        throw new Error('Something went wrong')
      }

    } catch (error) {
      console.log(error)
    }
  }, [reqEmail])

  // const [products, setProducts] = useState([])
  const [products, setProducts] = useState(initialValue)

  const addToCartHandler = async (product) => {
    try {
      const existingProduct = products.find((cartItem) => cartItem.title === product.title)
      // console.log(existingProduct)
      // const email = localStorage.getItem('email')
      // const reqEmail = email.split('@').join("").split('.').join("")
      const url=`https://crudcrud.com/api/072132452d284dd7a4b7b236cc729570/cart${reqEmail}`
      if (existingProduct) {
        const crudId=localStorage.getItem('_id')
        const updatedProducts = products.map((cartItem) =>
          cartItem.id === product.id ? { ...cartItem, quantity: Number(cartItem.quantity) + 1 } : cartItem
      );
      // setProducts(updatedProducts);
        const response = await fetch(`${url}/${crudId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedProducts)
        })
        if (response.ok) {
          const data = await response.json()
          setProducts(updatedProducts);
          console.log(data)
        }
        else if (!response.ok) {
          throw new Error('Something went wrong')
        }
      }
      else {
        // setProducts([...products, { ...product, quantity: 1 }])
        const response=await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(products)
        })
        if (response.ok) {
          const data = await response.json()
          localStorage.setItem('_id', data._id)
          setProducts([...products, { ...product, quantity: 1 }])
        }
        else if (!response.ok) {
          throw new Error('Something went wrong')
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const removeToCartHandler = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id)
    setProducts([...updatedProducts])
  }

  const cartContextValues = {
    products: products,
    addToCart: addToCartHandler,
    removeFromCart: removeToCartHandler
  }
  return (
    <CartContext.Provider value={cartContextValues}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContextProvider