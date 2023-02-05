import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import '../styles/UserModal.scss'

import CheckForUserExist from './CheckForUserExist'
import { setOpenModal } from '../features/users/userSlice'

const UserModal = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('Anmelden')
  const [footer, setFooter] = useState('Neu bei CHECK24?')
  const [toogle, setToogle] = useState('Kundenkonto erstellen')
  const [email, setEmail] = useState('')
  const [userEmail, setUserEmail] = useState(null)
  const closeModalRef = useRef(null)

  useEffect(() => {
    /*const handler = (e) => {
      if (!closeModalRef.current.contains(e.target)) {
        setOpenModal(false)
      }
    }
    document.addEventListener('mousedown', handler)*/
  })

  const handleState = (e) => {
    if (title === 'Anmelden') {
      setTitle('CHECK24 Kundenkonto anlegen')
      setFooter('Sie haben ein Konto? ')
      setToogle('Anmelden')
    } else {
      setTitle('Anmelden')
      setFooter('Neu bei CHECK24? ')
      setToogle('Kundenkonto erstellen')
    }
  }

  const checkUser = async () => {
    const res = await axios.post('http://localhost:8000/api/users/check', {
      email,
    })
    try {
      setUserEmail(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='login-modal'>
      <div ref={closeModalRef} className='login-modal-container'>
        <div className='form-modal'>
          {userEmail?.user == null ? (
            <>
              <p>{title}</p>
              <div className='input-form-modal'>
                <input
                  type='email'
                  placeholder='E-Mail-Adresse oder Mobiltelefonnummer'
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <HelpOutlineIcon
                  sx={{ fontSize: 25, margin: 10 + 'px', color: 'gray ' }}
                />
              </div>
              <button onClick={checkUser} className='button-modal'>
                weiter
              </button>
            </>
          ) : (
            <CheckForUserExist
              userEmail={userEmail.email}
              userExist={userEmail.user}
              email={email}
            />
          )}
        </div>
        {userEmail?.user == null && (
          <div className='new-acc-modal'>
            <p>
              {footer}
              <span onClick={handleState}>{toogle}</span>
            </p>
          </div>
        )}
        <HighlightOffIcon
          className='close-icon'
          sx={{ fontSize: 25, margin: 10 + 'px', color: 'white ' }}
          onClick={() => dispatch(setOpenModal({ openModal: false }))}
        />
      </div>
    </div>
  )
}

export default UserModal
