import axios from 'axios'

const config = {
  baseURL: 'http://localhost:8000/api',
}

const instance = axios.create(config)

const productAPI = {
  getTechnoProducts: instance.get('/products/techno'),
  getBeautyProducts: instance.get('/products/beauty'),
  getHouseholdProducts: instance.get('/products/household'),
  getAllProducts: instance.get('/products/'),
}

export default productAPI
