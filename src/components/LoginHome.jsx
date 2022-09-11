import '../styles/LoginHome.scss'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

const LoginHome = () => {
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
        <button>anmelden</button>
      </div>
    </div>
  )
}

export default LoginHome
