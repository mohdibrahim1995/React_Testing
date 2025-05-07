import React from 'react'
import { useNavigate } from 'react-router-dom'

export const OrderConfirm = () => {
     const navigator= useNavigate()
  return (
<>
<h1>OrderConfirm</h1>
    
    <button onClick={()=>navigator('/')}>Go To Home </button>
    </>
  )
}

