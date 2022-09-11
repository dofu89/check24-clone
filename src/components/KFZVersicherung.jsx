import '../styles/KFZVersicherung.scss'
import Menu from './Menu'
import Navbar from './Navbar'
import FirstSlider from './FirstSlider'

const KFZVersicherung = () => {
  return (
    <div className='kfz'>
      <Navbar />
      <Menu />
      <div className='kfz-container'>
        <FirstSlider type='kfz' />
      </div>
    </div>
  )
}

export default KFZVersicherung
