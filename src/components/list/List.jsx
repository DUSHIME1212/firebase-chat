import React from 'react'
import Userinfo from './userinfo/Userinfo'
import Chatlists from '../chats/Chatlists/Chatlists'

const List = () => {
  return (
    <div className='flex-1'>
        <Userinfo/>
        <Chatlists/>
    </div>
  )
}

export default List