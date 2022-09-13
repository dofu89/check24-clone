import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import KFZVersicherung from './components/KFZVersicherung'
import ProductInfo from './pages/ProductInfo'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kfz-versicherung' element={<KFZVersicherung />} />
          <Route path='/products/:id' element={<ProductInfo />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
