import '../styles/ProductsSlider.scss'
import Carousel from 'react-elastic-carousel'
import { tehnoProducts } from '../utils/TehnoProducts'
import { useState } from 'react'

const ProductsSlider = () => {
  console.log(tehnoProducts)

  return (
    <div className='products-slider'>
      <div className='products-slider-container'>
        <Carousel itemsToShow={5} itemsToScroll={5} transitionMs={1200}>
          {tehnoProducts.map((product) => (
            <div className='product' key={product.id}>
              <div className='product-top'>
                <div className='img-wrapper'>
                  <img src={product.img} alt={product.name} />
                </div>
              </div>
              <div className='product-bottom'>
                <div className='p-desc'>{product.desc}</div>
                <div className='p-rating'>
                  <span className='rating-star'>rating</span>
                  <span className='rating-count'>{product.ratingCount}</span>
                </div>
                <span className='offer'>{product.availableSum} Angebote</span>
                <div className='p-discount'>
                  <span className='old-price'>{product.odlPrice}$</span>
                  <span className='discount'>-{product.discount}%</span>
                </div>
                <div className='p-price'>
                  <span className='p-from'>ab</span>
                  <span className='p-price-now'>{product.currentPrice} €</span>
                </div>
                <div className={product.premium ? 'p-premium' : 'p-none'}>
                  Premium
                </div>
              </div>
              <div className='p-punkte'>{product.punkte}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ProductsSlider
