import axios from 'axios'

export const getTechnoProducts = async () => {
  const res = await axios.get('http://localhost:8000/api/products/techno')
  return res
}

export const getBeautyProducts = async () => {
  const res = await axios.get('http://localhost:8000/api/products/beauty')
  return res
}

export const getHouseholdProducts = async () => {
  const res = await axios.get('http://localhost:8000/api/products/household')
  return res
}

export const getAllProducts = async () => {
  const res = await axios.get('http://localhost:8000/api/products/')
  return res
}
