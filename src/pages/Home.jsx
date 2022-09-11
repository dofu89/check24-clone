import '../styles/Home.scss'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import FirstSlider from '../components/FirstSlider'
import LoginHome from '../components/LoginHome'
import Footer from '../components/Footer'
import ProductsSlider from '../components/ProductsSlider'

const Home = () => {
  return (
    <div className='home' id='top'>
      <Navbar />
      <Menu />
      <div className='home-container'>
        <FirstSlider />
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
