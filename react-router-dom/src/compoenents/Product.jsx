import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Product = () => {
  return (
    <>
     <div>Product</div>
     <input type='search' placeholder='You can Enter your product'/>
     <nav className='m-10'>
      <Link to='addItem'  className='border-2 border-indigo-600 m-2 p-2' >AddItem</Link>
      <Link to='updateitem' className="border-2 border-indigo-600 m-2 p-2" >Updateitem</Link>

     </nav>
     <Outlet />
    
    </>
   

  )
}
