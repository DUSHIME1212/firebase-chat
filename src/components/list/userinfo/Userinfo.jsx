import React from 'react'

const Userinfo = () => {
    const username = 'john doe'
  return (
    <div className='flex items-center justify-between p-4'>
        <div className='flex gap-4'>
            <img className='size-8 object-cover rounded-full' src="./avatar.png" alt="" />
            <h1 className='text-2xl capitalize'>{username}</h1>
        </div>
        <div className='flex gap-4'>
            <img src="./more.png" className='size-5' alt="" />
            <img src="./video.png" className='size-5' alt="" />
            <img src="./edit.png" className='size-5' alt="" />
        </div>
    </div>
  )
}

export default Userinfo