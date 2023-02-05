import React from 'react'
import SecondLogin from './SecondLogin'
import Register from './Register'

const CheckForUserExist = ({ userEmail, userExist, email, setUserEmail }) => {
  return (
    <div>
      {userExist ? (
        <SecondLogin userEmail={userEmail} setUserEmail={setUserEmail} />
      ) : (
        <Register newUser={email} setUserEmail={setUserEmail} />
      )}
    </div>
  )
}

export default CheckForUserExist
