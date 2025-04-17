import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/Logo.png'
import './Header.css'

function Header() {
  return (
    <div className='admin_header'>

        <h1>Admin Portal</h1>

        <NavLink to='/'>
        <img src={logo}  className='admin_logo'/>
        </NavLink>





      
    </div>
  )
}

export default Header
