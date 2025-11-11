import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()
const initialState = { items: [] }

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const exists = state.items.find(i => i.id === action.item.id)
      if (exists) {
        return {
          ...state,
          items: state.items.map(it =>
            it.id === action.item.id ? { ...it, qty: it.qty + 1 } : it
          ),
        }
      }
      return { ...state, items: [...state.items, { ...action.item, qty: 1 }] }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.id !== action.id) }
    case 'CLEAR':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const add = item => dispatch({ type: 'ADD', item })
  const remove = id => dispatch({ type: 'REMOVE', id })
  const clear = () => dispatch({ type: 'CLEAR' })

  return (
    <CartContext.Provider value={{ cart: state, add, remove, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
export default CartContext
