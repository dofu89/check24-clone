import '../styles/Navbar.scss'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import PhoneEnabledRoundedIcon from '@mui/icons-material/PhoneEnabledRounded'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { setUser, setOpenModal } from '../features/users/userSlice'
import axios from 'axios'

const Navbar = () => {
  const token = JSON.parse(localStorage.getItem('user'))
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleLogout = (e) => {
    e.preventDefault()
    return dispatch(setUser({ user: null })), localStorage.removeItem('user')
  }

  const handleClick = async () => {
    const res = await axios.get('http://localhost:8000/api/users/test', {
      headers: { authorization: token.token },
    })

    console.log(res.data)
  }
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
            <span>
              {user ? (
                <div className='user'>
                  <span onClick={handleClick}> {user.name}</span>
                  {' / '}
                  <span style={{ color: 'red' }} onClick={handleLogout}>
                    Logout
                  </span>
                </div>
              ) : (
                <div
                  onClick={() => dispatch(setOpenModal({ openModal: true }))}
                >
                  Mein Konto
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
