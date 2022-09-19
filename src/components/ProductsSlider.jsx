import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'

import '../styles/ProductsSlider.scss'

const ProductsSlider = ({ products, info }) => {
  const hasProducts = () => {
    return products && products.length > 0
  }
  console.log(info)
  return (
    <div className={`products-slider ${info}`}>
      <div className='products-slider-container'>
        <Carousel
          itemsToShow={info ? 5 : 4}
          itemsToScroll={4}
          transitionMs={1200}
        >
          {hasProducts() &&
            products?.map((product) => (
              <Link
                to={`/products/${product._id}`}
                key={product._id}
                state={{ type: product.type }}
              >
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
            ))}
        </Carousel>
      </div>
    </div>
  )
}

export default ProductsSlider
