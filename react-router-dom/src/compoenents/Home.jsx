import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
const navidate=useNavigate();
    return (
      <> 
      <h1>Home</h1>
      <button onClick={()=>navidate('ordercofrim')}>Place Order</button>
      </>
  )
}

export default Home