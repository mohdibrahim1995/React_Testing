import React from 'react'

import { Outlet,NavLink } from 'react-router-dom' 


const Links = () => {
  return (
    <nav className='navbar flex  overflow-auto'>
        <NavLink to={'/'} className='nav-item'>Home</NavLink>
        <NavLink to={'/aboutus'} className='nav-item'>About us </NavLink>
        <NavLink to={'/product'} className='nav-item'>product </NavLink>
        
        
        <Outlet />
    </nav>
  )
}

export default Links