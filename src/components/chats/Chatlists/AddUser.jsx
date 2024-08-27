import React from 'react'

const AddUser = () => {
  return (
    <div className='fixed flex flex-col gap-4 top-1/2 left-1/2 p-8 rounded-xl bg-blue-950/50 backdrop-blur-lg -translate-x-1/2 -translate-y-1/2'>
        <form action="" className='flex gap-4'>
            <input type="text" placeholder='Username' className='p-2 rounded-xl outline-none' name='Username' />
            <button className='p-2 bg-blue-500 rounded-xl px-4'>search</button>
        </form>
        <div>
            <div className='flex gap-4 items-center p-4'>
                <img src="./avatar.png" className='size-16 rounded-xl' alt="" />
                <h2>Username</h2>
            </div>
            <button className='p-2 bg-blue-500 rounded-xl px-4'>Add user</button>
        </div>
    </div>
  )
}

export default AddUser