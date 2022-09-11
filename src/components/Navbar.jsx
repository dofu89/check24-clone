import '../styles/Navbar.scss'
import { Link } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

const Navbar = () => {
  return (
    <div className='navbar1'>
      <div className='navbar-container'>
        <div className='navbar-left'>
          <div className='logo'>
            <Link to={'/'}>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd64D5oQnYGJQNZMx7IExpVxZsPjRT1CA4ycNSiyqFEZQpXB1M9RMyTIMOjnO2ZaZP8RQ&usqp=CAU'
                alt=''
              />
            </Link>
          </div>
          <div className='search'>
            <input placeholder='Was möchten Sie vergleichen?' />
            <div className='button'>
              <SearchIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
        </div>
        <div className='navbar-right'>
          <div className='wish-list'>
            <FavoriteBorderIcon sx={{ fontSize: 30 }} />
            <span>Merkzettel</span>
          </div>
          <div className='notification'>
            <NotificationsNoneIcon sx={{ fontSize: 30 }} />
          </div>
          <div className='help-contact'>
            <PhoneEnabledRoundedIcon sx={{ fontSize: 30 }} />
            <span>Hilfe und Kontakt</span>
          </div>
          <div className='account'>
            <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} />
            <span>Mein Konto</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
