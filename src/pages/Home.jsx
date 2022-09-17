import { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'

import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import FirstSlider from '../components/FirstSlider'
import LoginHome from '../components/LoginHome'
import Footer from '../components/Footer'
import ProductsSlider from '../components/ProductsSlider'

import {
  getTechnoProducts,
  getBeautyProducts,
  getHouseholdProducts,
  getAllProducts,
} from '../utils/productAPI'
import '../styles/Home.scss'

const Home = () => {
  const [technoProducts, setTechnoProducts] = useState([])
  const [beautyProducts, setBeautyProducts] = useState([])
  const [householdProducts, setHouseholdProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const products = async () => {
      const techno = await getTechnoProducts()
      const beauty = await getBeautyProducts()
      const household = await getHouseholdProducts()
      const all = await getAllProducts()
      setTechnoProducts(techno.data)
      setBeautyProducts(beauty.data)
      setHouseholdProducts(household.data)
      setAllProducts(all.data)
    }

    products()
  }, [])

  const type = allProducts.map((product) => product.type)

  return (
    <div className='home'>
      <Navbar />
      <Menu />
      <div className='home-container'>
        <Carousel itemsToShow={1}>
          <FirstSlider />
          <FirstSlider />
        </Carousel>
        <LoginHome />
        <h1>
          Technik-Highlights entdecken und sparen <span>mehr</span>
        </h1>
        <ProductsSlider products={technoProducts} type={type} />
        <h1>
          Beauty Sommer-Highlights entdecken und punkten <span>mehr</span>
        </h1>
        <ProductsSlider products={beautyProducts} type={type} />
        <h1>
          Alles für Küche & Haushalt entdecken <span>mehr</span>
        </h1>
        <ProductsSlider products={householdProducts} type={type} />
        <h1>
          Alle Produte <span>mehr</span>
        </h1>
        <ProductsSlider products={allProducts} type={type} />
        <Footer />
      </div>
    </div>
  )
}

export default Home
