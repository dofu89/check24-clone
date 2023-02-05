import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setOpenModal } from '../features/users/userSlice'

const Register = ({ newUser, setUserEmail }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email] = useState(newUser)
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    await axios.post('http://localhost:8000/api/users/register', {
      name,
      email,
      password,
    })
    try {
      console.log('user has been registred')
      dispatch(setOpenModal({ openModal: false }))
    } catch (error) {
      console.log(error)
    }
  }
  console.log('name:', name, 'pw:', password, 'email:', email)

  return (
    <div className='form-user-exist'>
      <div className='fue-welcome'>
        <div>Kundenkonto anlegen und Vorteile nutzen!</div>
        <div className='fue-acc'>
          <div className='fue-user-button'>{newUser}</div>
          <a>aendern</a>
        </div>
        <div>Kundenkonto anlegen und Vorteile nutzen!</div>
      </div>
      <form>
        <label name='name'>Name</label>
        <input
          type='name'
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label name='password'>Passwort</label>

        <input
          type='password'
          placeholder='Passwort'
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p
          style={{
            fontSize: 13 + 'px',
            lineHeight: 12 + 'px',
            paddingTop: 10 + 'px',
          }}
        >
          Wenn ich fortfahre, erkläre ich mich mit den Nutzungsbedingungen der
          CHECK24 GmbH einverstanden. Die Datenschutzhinweise finde ich hier.
        </p>
      </form>
      <div className='fue-controlls'>
        <a style={{ cursor: 'pointer' }} on onClick={() => setUserEmail(null)}>
          zurück
        </a>
        <button onClick={handleRegister}>register</button>
      </div>
    </div>
  )
}

export default Register
