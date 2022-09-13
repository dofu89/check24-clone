import '../styles/ProductInfo.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Navbar from '../components/Navbar'
import Menu from '../components/Menu'

const ProductInfo = () => {
  const { id } = useParams()

  const [product, setProduct] = useState(null)
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(
        `http://localhost:8000/api/products/find/${id}`
      )
      setProduct(res.data)
    }
    fetchProduct()
  }, [id])

  return (
    <div className='product-info'>
      <Navbar />
      <Menu />
      <div className='product-info-container'>
        <div className='img-wrapper'>
          <img src={product?.img} alt={product?.name} />
        </div>
        <div className='pi-info'>
          <h1>{product?.name}</h1>
          <p>{product?.desc}</p>
          <div className='pi-rating'>
            <p>{product?.rating}</p>
            <p>{product?.ratingCount} Bewertungen</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
