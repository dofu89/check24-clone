import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import productReducer from '../features/products/productSlice'
import userReducer from '../features/users/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    user: userReducer,
  },
})
