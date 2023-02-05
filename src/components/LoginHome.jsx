import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { useSelector, useDispatch } from 'react-redux'

import UserModal from './UserModal'
import { setOpenModal } from '../features/users/userSlice'
import '../styles/LoginHome.scss'

const LoginHome = () => {
  const dispatch = useDispatch()
  const { openModal } = useSelector((state) => state.user)

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
        <button onClick={() => dispatch(setOpenModal({ openModal: true }))}>
          anmelden
        </button>
      </div>
    </div>
  )
}

export default LoginHome
