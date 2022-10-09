import { useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import { useDispatch, useSelector } from 'react-redux'

import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import FirstSlider from '../components/FirstSlider'
import LoginHome from '../components/LoginHome'
import Footer from '../components/Footer'
import ProductsSlider from '../components/ProductsSlider'
import UserModal from '../components/UserModal'

import productAPI from '../features/products/productAPI'
import {
  setTechnoProducts,
  setBeautyProducts,
  setHouseholdProducts,
  setAllProducts,
} from '../features/products/productSlice'
import '../styles/Home.scss'

const Home = () => {
  const dispatch = useDispatch()
  const { technoProducts, beautyProducts, householdProducts, allProducts } =
    useSelector((state) => state.products)

  const getTechnoProducts = async () => {
    try {
      const res = await productAPI.getTechnoProducts
      dispatch(setTechnoProducts({ technoProducts: res.data }))
    } catch (err) {
      console.log(err)
    }
  }
  const getBeautyProducts = async () => {
    try {
      const res = await productAPI.getBeautyProducts
      dispatch(setBeautyProducts({ beautyProducts: res.data }))
    } catch (err) {
      console.log(err)
    }
  }
  const getHouseholdProducts = async () => {
    try {
      const res = await productAPI.getHouseholdProducts
      dispatch(setHouseholdProducts({ householdProducts: res.data }))
    } catch (err) {
      console.log(err)
    }
  }
  const getAllProducts = async () => {
    try {
      const res = await productAPI.getAllProducts
      dispatch(setAllProducts({ allProducts: res.data }))
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
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
