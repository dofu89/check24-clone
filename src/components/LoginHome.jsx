import { useState } from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

import UserModal from './UserModal'
import '../styles/LoginHome.scss'

const LoginHome = () => {
  const [openModal, setOpenModal] = useState(false)
  console.log(openModal)

  return (
    <div className='login-home'>
      <div className='login-home-container'>
        <AccountCircleOutlinedIcon
          sx={{ fontSize: 50, marginRight: 16 + 'px' }}
        />
        <span>
          Jetzt anmelden und von allen CHECK24 Vorteilen profitieren! <br />
          Gutscheine, CHECK24 Punkte und exklusive Angebote für CHECK24 Kunden.
        </span>
        {openModal && <UserModal setOpenModal={setOpenModal} />}
        <button onClick={() => setOpenModal(!openModal)}>anmelden</button>
      </div>
    </div>
  )
}

export default LoginHome
