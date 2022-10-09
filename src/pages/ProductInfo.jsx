import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import productAPI from '../features/products/productAPI'
import '../styles/ProductInfo.scss'
import ProductsSlider from '../components/ProductsSlider'

const ProductInfo = () => {
  const location = useLocation()
  const { type } = location.state
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [similarProducts, setSimilarProducts] = useState([])

  const { technoProducts, beautyProducts, householdProducts, allProducts } =
    useSelector((state) => state.products)

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productAPI.getProductByTypeAndId(type, id)
      setProduct(res.data)
    }
    switch (type) {
      case 'techno':
        sessionStorage.getItem('techno')
          ? JSON.parse(sessionStorage.getItem('techno'))
          : sessionStorage.setItem('techno', JSON.stringify(technoProducts))
        setSimilarProducts(
          JSON.parse(sessionStorage.getItem('techno')) || technoProducts
        )
        break
      case 'beauty':
        sessionStorage.getItem('beauty')
          ? JSON.parse(sessionStorage.getItem('beauty'))
          : sessionStorage.setItem('beauty', JSON.stringify(beautyProducts))
        setSimilarProducts(
          JSON.parse(sessionStorage.getItem('beauty')) || beautyProducts
        )
        break
      case 'household':
        setSimilarProducts(householdProducts)
        sessionStorage.getItem('household')
          ? JSON.parse(sessionStorage.getItem('household'))
          : sessionStorage.setItem(
              'household',
              JSON.stringify(householdProducts)
            )
        setSimilarProducts(
          JSON.parse(sessionStorage.getItem('household')) || householdProducts
        )
        break
      default:
        break
    }
    fetchProduct()
  }, [id, type])

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
          <p>{product?.availableSum} Angebote</p>
          <p className='pi-price'>
            {product?.currentPrice}$
            <span className='discount'>-{product?.discount}%</span>
          </p>
        </div>
      </div>
      <div className='pi-similar'>
        <h1>ähnlichen Produkten</h1>
        <ProductsSlider info='info' products={similarProducts} />
      </div>
    </div>
  )
}

export default ProductInfo
