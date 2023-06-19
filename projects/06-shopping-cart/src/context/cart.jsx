import { createContext, useState } from 'react'

// 1.crear contexto
export const cartContext = createContext()

// 2. crear  provider
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // check if product already in car.
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      // una forma seria usando structuredClone
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // producto no está en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <cartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </cartContext.Provider>
  )
}
