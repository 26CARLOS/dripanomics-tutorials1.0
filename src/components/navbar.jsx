import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from '../assets/favicon.ico'

const Navbar = () => {

const[nav, setNav] =useState(true);

const handleNav = () =>{
    setNav(!nav);
}

const closeMobileNav =() =>{
    setNav(true);
}
  return (
    <div className='w-full fixed top-0 bg-white'>
        <div className='flex flex-wrap justify-between items-center h-24 max-w-[1480px] mx-auto px-4 text-black'>
        <Link to="/">
            <div className='flex flex-row items-center justify-center'>
                <img src={logo} alt="Dripanomics Tutorials logo." className='h-10 w-10 lg:h-16 md:w-16'/><h1 className=' font-bold md:text-3xl text-black'>Dripanomics Tutorials.</h1>
            </div>
        </Link>

        <ul className='hidden md:flex'>
            <NavLink to="/" ><li className='p-4'>Home</li></NavLink> 
            <NavLink to="/tutors" ><li className='p-4'>Tutors</li></NavLink>
            <NavLink to="/gettutor" ><li className='p-4 flex flex-wrap'>Get A Tutor</li></NavLink>
            <NavLink to="/modules" ><li className='p-4'>Modules</li></NavLink>
            <NavLink to="/about" ><li className='p-4'>About</li></NavLink>
            <NavLink to="/contact" ><li className='p-4'>Contact</li></NavLink>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose  size={20}/>:<AiOutlineMenu size={20}/>}
        </div>
        <div className ={!nav ? 'fixed left-0 top-0 w-[85%] h-[100%] border-r-gray-900 bg-white':'fixed left-[-120%] ease-in-out duration-3s'} >
            <h1 className='w-full text-3xl font-bold text-black m-4'>Dripanomics Tutorials.</h1>
            <ul className='pt-12 uppercase p-4' >
                <li className='p-4 border-b border-gray-600 ' onClick={closeMobileNav}><NavLink to="/">Home</NavLink></li>
                <li className='p-4 border-b border-gray-600 'onClick={closeMobileNav}><NavLink to="/tutors">Tutors</NavLink></li>
                <li className='p-4 border-b border-gray-600 'onClick={closeMobileNav}><NavLink to="/modules">Modules</NavLink></li>
                <li className='p-4 border-b border-gray-600 'onClick={closeMobileNav}><NavLink to="/about">About</NavLink> </li>
                <li className='p-4 border-b border-gray-600'onClick={closeMobileNav}><NavLink to="/contact">Contact</NavLink></li>
                <li className='p-4 border-b border-gray-600'onClick={closeMobileNav}><NavLink to="/gettutor">Get A Tutor</NavLink></li>
            </ul>
        </div>
    </div>
    </div>
    
  )
}

export default Navbar;