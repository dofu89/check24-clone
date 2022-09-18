import '../styles/Menu.scss'
import { useState } from 'react'
import Versicherungen from './Versicherungen'

const Menu = () => {
  return (
    <div className='menu'>
      <div className='menu-container'>
        <div className='list'>
          <Versicherungen />
          <li>Konto & Kredit</li>
          <li>Strom & Gas</li>
          <li>DSL</li>
          <li>Handy</li>
          <li>Reise</li>
          <li>Flüge</li>
          <li>Hotel</li>
          <li>Mietwagen</li>
          <li>Profis</li>
          <li title='Shopping'>Shopping</li>
          <li>Steuer</li>
        </div>
        <div className='punkte'>Punkteteilnehmer werden: 5 € sichern</div>
        <div>
          <span>Nachhaltigkeit</span>
        </div>
      </div>
    </div>
  )
}

export default Menu
