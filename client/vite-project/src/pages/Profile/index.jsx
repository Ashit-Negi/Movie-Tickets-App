import React, { Children } from 'react'
import { Tabs } from 'antd'
import { useSelector } from 'react-redux'
import Theatre from './Theatrelist'
import Booking from './Booking'


function Profile() {
  const {user} = useSelector((state)=>state.user)
  const TabItem =[
    {
      key:"1",
      label: "Theaters",
      children: <Theatre />
    },
    {
      key:'2',
      label: 'Booking',
      children:<Booking />
    },
  ]
  return (
    <div>
      <h1>Welcome {user.name}! to your Profile</h1>
      <Tabs defaultActiveKey='1' items={TabItem}/>
    </div>
   
  )
}

export default Profile