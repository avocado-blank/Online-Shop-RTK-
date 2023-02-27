import { createSlice } from '@reduxjs/toolkit'
import { setLocal } from '../ulti'

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: localStorage.getItem('cartQuantity')
    ? JSON.parse(localStorage.getItem('cartQuantity'))
    : 0,
  cartTotalAmount: localStorage.getItem('total')
    ? JSON.parse(localStorage.getItem('total'))
    : 0,
}

const ShopCart = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addToCart(state, action) {

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
      } else {
        const item = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(item)
      }

      state.cartTotalQuantity = state.cartItems.length
      let total = state.cartItems.map((item) => item.price * item.cartQuantity)
      console.log(total)
      state.cartTotalAmount = total.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      )

      let setlocaldata = [
        { name: 'cartItems', data: state.cartItems },
        { name: 'cartQuantity', data: state.cartTotalQuantity },
        { name: 'total', data: state.cartTotalAmount }
      ]
      setLocal(setlocaldata)
    },

    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      )
      state.cartItems.splice(itemIndex, 1)
      state.cartTotalQuantity = state.cartItems.length
      let total = state.cartItems.map((item) => item.price * item.cartQuantity)
      console.log(total)
      state.cartTotalAmount = total.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      )
      let setlocaldata = [
        { name: 'cartItems', data: state.cartItems },
        { name: 'cartQuantity', data: state.cartTotalQuantity },
        { name: 'total', data: state.cartTotalAmount }
      ]
      setLocal(setlocaldata)
    },

    removeAllFromCart(state) {
      state.cartItems = []
      state.cartTotalQuantity = state.cartItems.length
      let total = state.cartItems.map((item) => item.price * item.cartQuantity)
      console.log(total)
      state.cartTotalAmount = total.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      )
      let setlocaldata = [
        { name: 'cartItems', data: state.cartItems },
        { name: 'cartQuantity', data: state.cartTotalQuantity },
        { name: 'total', data: state.cartTotalAmount }
      ]
      setLocal(setlocaldata)
    },

    addQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      )
      state.cartItems[itemIndex].cartQuantity += 1
      let total = state.cartItems.map((item) => item.price * item.cartQuantity)
      console.log(total)
      state.cartTotalAmount = total.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      )
      let setlocaldata = [
        { name: 'cartItems', data: state.cartItems },
        { name: 'cartQuantity', data: state.cartTotalQuantity },
        { name: 'total', data: state.cartTotalAmount }
      ]
      setLocal(setlocaldata)
    },

    decreaseQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      )
      state.cartItems[itemIndex].cartQuantity -= 1

      if (state.cartItems[itemIndex].cartQuantity === 0) {
        state.cartItems.splice(itemIndex, 1)
        state.cartTotalQuantity = state.cartItems.length
      }
      let total = state.cartItems.map((item) => item.price * item.cartQuantity)
      console.log(total)
      state.cartTotalAmount = total.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
      )
      let setlocaldata = [
        { name: 'cartItems', data: state.cartItems },
        { name: 'cartQuantity', data: state.cartTotalQuantity },
        { name: 'total', data: state.cartTotalAmount }
      ]
      setLocal(setlocaldata)
    },
  },
})

export default ShopCart.reducer
export const {
  addToCart,
  removeFromCart,
  removeAllFromCart,
  addQuantity,
  decreaseQuantity,
} = ShopCart.actions
