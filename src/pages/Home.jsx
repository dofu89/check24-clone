import { useState, useEffect } from 'react'
import Carousel from 'react-elastic-carousel'

import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import FirstSlider from '../components/FirstSlider'
import LoginHome from '../components/LoginHome'
import Footer from '../components/Footer'
import ProductsSlider from '../components/ProductsSlider'

import productAPI from '../utils/productAPI'
import '../styles/Home.scss'

const Home = () => {
  const [technoProducts, setTechnoProducts] = useState([])
  const [beautyProducts, setBeautyProducts] = useState([])
  const [householdProducts, setHouseholdProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const getTechnoProducts = async () => {
      try {
        const res = await productAPI.getTechnoProducts
        setTechnoProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    const getBeautyProducts = async () => {
      try {
        const res = await productAPI.getBeautyProducts
        setBeautyProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    const getHouseholdProducts = async () => {
      try {
        const res = await productAPI.getHouseholdProducts
        setHouseholdProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    const getAllProducts = async () => {
      try {
        const res = await productAPI.getAllProducts
        setAllProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getTechnoProducts()
    getBeautyProducts()
    getHouseholdProducts()
    getAllProducts()
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
