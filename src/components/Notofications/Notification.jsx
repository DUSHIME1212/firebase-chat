import React from 'react'
import { ToastContainer } from 'react-toastify'

const Notification = () => {
  return (
    <div className='fixed bg-white h-32'>
        <ToastContainer position='top-right'/>
    </div>
  )
}

export default Notification