import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { setUser, setOpenModal } from '../features/users/userSlice'

const SecondLogin = ({ userEmail, setUserEmail }) => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [email] = useState(userEmail)
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const res = await axios.post('http://localhost:8000/api/users/login', {
      email,
      password,
    })
    try {
      dispatch(setUser({ user: res.data }))
      dispatch(setOpenModal({ openModal: false }))
      localStorage.setItem('user', JSON.stringify(res.data))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleLogin()
  }, [])

  return (
    <div className='form-user-exist'>
      <div className='fue-welcome'>
        <div>Willkommen</div>
        <div className='fue-acc'>
          <div className='fue-user-button'>{userEmail}</div>
          <a>aendern</a>
        </div>
        <div>Melden Sie sich mit Ihrem CHECK24 Kundenkonto an.</div>
      </div>
      <form>
        <button>mit Google anmelden</button>
        <div className='fue-social-divider'>oder mit CHECK24 Passwort</div>
        <input
          type='password'
          placeholder='CHECK24 Passwort'
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <a>Passwort vergessen</a>
      </form>
      <div className='fue-controlls'>
        <a style={{ cursor: 'pointer' }} on onClick={() => setUserEmail(null)}>
          zurück
        </a>
        <button onClick={handleLogin}>anmelden</button>
      </div>
    </div>
  )
}

export default SecondLogin
