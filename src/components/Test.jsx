import '../styles/Versicherungen.scss'
import { useState } from 'react'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

const Versicherungen = () => {
  const [show, setShow] = useState(false)

  return (
    <Dropdown
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      show={show}
      className='dropdown'
      autoClose='outside'
    >
      <DropdownToggle className='dropdown' id='dropdown-autoclose-outside'>
        Versicherungen
      </DropdownToggle>
      <DropdownMenu className='drop-menu'>
        <DropdownItem>Kfz-Versicherung</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Versicherungen
