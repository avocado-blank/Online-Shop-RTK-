import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import ProductsReducer, { ProductsFetch } from './features/ProductsSlice'
import SearchCartReducer from './features/SearchCartSlice'
import ShopCartReducer from './features/ShopCartSlice'

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    product: SearchCartReducer,
    cart: ShopCartReducer,
  },
  middleware: [thunk],
})

store.dispatch(ProductsFetch())
// store.dispatch(getTotal())
// store.dispatch(FetchSearchProduct(1))
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
