import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Home from './pages/Home'
import KFZVersicherung from './components/KFZVersicherung'
import ProductInfo from './pages/ProductInfo'
import { setUser } from './features/users/userSlice'

const App = () => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    dispatch(setUser({ user: user }))
  }, [user])

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
