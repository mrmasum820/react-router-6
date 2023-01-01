import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/add-blogs" className='nav-link'>Add Blogs</NavLink>
            <NavLink to="/about" className='nav-link'>About</NavLink>
        </nav>
    )
}
