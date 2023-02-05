import React from 'react'
import SecondLogin from './SecondLogin'
import Register from './Register'

const CheckForUserExist = ({ userEmail, userExist, email }) => {
  return (
    <div>
      {userExist ? (
        <SecondLogin userEmail={userEmail} />
      ) : (
        <Register newUser={email} />
      )}
    </div>
  )
}

export default CheckForUserExist
