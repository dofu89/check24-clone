import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  technoProducts: [],
  beautyProducts: [],
  householdProducts: [],
  allProducts: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setTechnoProducts: (state, action) => {
      state.technoProducts = action.payload.technoProducts
    },
    setBeautyProducts: (state, action) => {
      state.beautyProducts = action.payload.beautyProducts
    },
    setHouseholdProducts: (state, action) => {
      state.householdProducts = action.payload.householdProducts
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload.allProducts
    },
  },
})

export const {
  setTechnoProducts,
  setBeautyProducts,
  setHouseholdProducts,
  setAllProducts,
} = productSlice.actions

export const selectTechnoProducts = (state) => state.products.technoProducts
export const selectBeautyProducts = (state) => state.products.beautyProducts
export const selectHouseholdProducts = (state) =>
  state.products.householdProducts
export const selectAllProducts = (state) => state.products.allProducts

export default productSlice.reducer
