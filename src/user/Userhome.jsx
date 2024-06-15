import React, { useEffect, useState } from 'react'
import './Style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Userhome = () => {
  const [refresh,setRefresh]=useState(true)
  const [users,setUsers]=useState([])
  const navigate=useNavigate()

  




  return (
    <div className='first'>
      <div className='text-center font-serif text-[40px]  pt-56 animate-fadeIn'>Banking at your fingertips, anywhere, anytime</div>
    </div>
  )
}
