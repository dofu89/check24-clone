import axios from 'axios'

export const getProducts = async () => {
  const res = await axios.get('http://localhost:8000/api/products')
  return res
}
