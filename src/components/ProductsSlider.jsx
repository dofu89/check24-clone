import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'

import { getProducts } from '../utils/productAPI'
import '../styles/ProductsSlider.scss'

const ProductsSlider = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const product = async () => {
      const res = await getProducts()
      setProducts(res.data)
    }
    product()
  }, [])

  return (
    <div className='products-slider'>
      <div className='products-slider-container'>
        <Carousel itemsToShow={5} itemsToScroll={5} transitionMs={1200}>
          {!products ? (
            <></>
          ) : (
            products?.map((product) => (
              <Link to={`/products/${product._id}`} key={product._id}>
                <div className='product'>
                  <div className='product-top'>
                    <div className='img-wrapper'>
                      <img src={product.img} alt={product.name} />
                    </div>
                  </div>
                  <div className='product-bottom'>
                    <div className='p-desc'>{product.desc}</div>
                    <div className='p-rating'>
                      <span className='rating-star'>rating</span>
                      <span className='rating-count'>
                        {product.ratingCount}
                      </span>
                    </div>
                    <span className='offer'>
                      {product.availableSum} Angebote
                    </span>
                    <div className='p-discount'>
                      <span className='old-price'>{product.odlPrice}$</span>
                      <span className='discount'>-{product.discount}%</span>
                    </div>
                    <div className='p-price'>
                      <span className='p-from'>ab</span>
                      <span className='p-price-now'>
                        {product.currentPrice} €
                      </span>
                    </div>
                    <div className={product.premium ? 'p-premium' : 'p-none'}>
                      Premium
                    </div>
                  </div>
                  <div className='p-punkte'>{product.punkte}</div>
                </div>
              </Link>
            ))
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default ProductsSlider
