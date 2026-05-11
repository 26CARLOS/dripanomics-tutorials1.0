import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/favicon.ico'

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  }

  const closeMobileNav = () => {
    setNav(true);
  }

  const navLinkClass = ({ isActive }) => 
    `px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
      isActive 
        ? 'text-foreground bg-muted' 
        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
    }`;

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-card/95 backdrop-blur-md shadow-soft border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className='flex items-center justify-between h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src={logo} 
              alt="Dripanomics Tutorials logo" 
              className='h-10 w-10 lg:h-12 lg:w-12 group-hover:scale-105 transition-transform duration-300'
            />
          </div>
          <span className='font-display font-bold text-xl lg:text-2xl text-foreground tracking-tight'>
            Dripanomics
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-1'>
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/tutors" className={navLinkClass}>Tutors</NavLink>
          <NavLink to="/modules" className={navLinkClass}>Modules</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link 
            to="/gettutor"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-full hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-soft"
          >
            Get a Tutor
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={handleNav} 
          className='md:hidden p-2 rounded-lg hover:bg-muted transition-colors'
          aria-label={nav ? 'Open menu' : 'Close menu'}
        >
          {!nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed inset-0 bg-card z-50 transition-transform duration-300 ease-out ${
        !nav ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between h-20 px-4 border-b border-border">
            <span className='font-display font-bold text-xl text-foreground'>
              Dripanomics
            </span>
            <button 
              onClick={closeMobileNav}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className='flex flex-col p-4 gap-2'>
            {[
              { to: '/', label: 'Home' },
              { to: '/tutors', label: 'Tutors' },
              { to: '/modules', label: 'Modules' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMobileNav}
                className={({ isActive }) => 
                  `px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground hover:bg-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mt-auto p-4 border-t border-border">
            <Link 
              to="/gettutor"
              onClick={closeMobileNav}
              className="flex items-center justify-center w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Get a Tutor
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
