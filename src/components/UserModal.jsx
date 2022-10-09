import { useEffect, useRef } from 'react'

import '../styles/UserModal.scss'

const UserModal = ({ setOpenModal }) => {
  const closeModalRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (!closeModalRef.current.contains(e.target)) {
        console.log(e.target)
        setOpenModal(false)
      }
    }
    document.addEventListener('mousedown', handler)
  })

  return (
    <div className='login-modal'>
      <div ref={closeModalRef} className='login-modal-container'></div>
    </div>
  )
}

export default UserModal
