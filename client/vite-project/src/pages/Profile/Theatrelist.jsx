import { Button } from 'antd'
import React, { useState } from 'react'
import TheaterFormModel from './TheaterFormModel'
function Theatrelist() {
  const [isModalOpen , setIsModalOpen] = useState(false)
  return (
   <>
    <div style={{display:"flex" , justifyContent:"flex-end"}}>
      <Button onClick={()=>setIsModalOpen(true)} type='primary'>Add Theater</Button>


      {isModalOpen && <TheaterFormModel isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
      
    </div>
   </>
  )
}

export default Theatrelist