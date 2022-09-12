import '../styles/Home.scss'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import FirstSlider from '../components/FirstSlider'
import LoginHome from '../components/LoginHome'
import Footer from '../components/Footer'
import ProductsSlider from '../components/ProductsSlider'

import Carousel from 'react-elastic-carousel'

const Home = () => {
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
        <ProductsSlider />
        <Footer />
      </div>
    </div>
  )
}

export default Home
