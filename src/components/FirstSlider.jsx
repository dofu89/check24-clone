import '../styles/FirstSlider.scss'
import kfzFs from '../assets/imgs/kfz-fs.png'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import CheckIcon from '@mui/icons-material/Check'

const FirstSlider = ({ type }) => {
  return (
    <div className='first-slider'>
      <div className='first-slider-container'>
        <div className='container-top'>
          <div className='fs-content'>
            <div className='content-desc'>
              <h1>Deutschlands bester Vergleich</h1>
              <h1>für Kfz-Versicherungen</h1>
              <h3>
                <CheckIcon sx={{ color: '#005ea8' }} />
                330 Tarife im Vergleich
              </h3>

              <h3>
                <CheckIcon sx={{ color: '#005ea8' }} />
                Nirgendwo Günstiger Garantie
              </h3>

              <h3>
                <CheckIcon sx={{ color: '#005ea8' }} />
                Über 300 Experten sind für Sie da
              </h3>
            </div>
            <div className='kfz-img'>
              <img src={kfzFs} alt='' />
            </div>
          </div>
        </div>
        <div className={`container-bottom ${type}`}>
          <h3>Was möchten Sie versichern?</h3>
          <div className='bottom-content'>
            <div className='inp-container'>
              <label>
                <div className='label-div'>
                  <input type='radio' name='kfz' />
                  <div>
                    <h4>Neu angeschafftes Auto</h4>
                    <h6>gebraucht oder neu, Zulassung</h6>
                  </div>
                </div>
              </label>
              <label>
                <div className='label-div border'>
                  <input type='radio' name='kfz' />
                  <div>
                    <h4>Bestehendes Auto</h4>
                    <h6>Versicherung wechseln</h6>
                  </div>
                </div>
              </label>
            </div>
            <button>Tarife vergleichen</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSlider
