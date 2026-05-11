import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
import logo from '../assets/favicon.ico'

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/tutors', label: 'Tutors' },
    { to: '/modules', label: 'Modules' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 glass border-b border-border shadow-soft' 
        : 'py-6 bg-transparent'
    }`}>
      <div className='flex items-center justify-between max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center bg-foreground rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <img 
              src={logo} 
              alt="Dripanomics" 
              className='w-8 h-8 object-contain brightness-0 invert'
            />
          </div>
          <div className="hidden sm:block">
            <span className='font-bold text-xl text-foreground tracking-tight'>
              Dripanomics
            </span>
            <span className='font-bold text-xl text-muted-foreground tracking-tight'>.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex items-center gap-1'>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 
                `relative px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-foreground' 
                    : 'text-muted-foreground hover:text-foreground'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-foreground rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            to="/gettutor"
            className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium text-sm rounded-full hover:shadow-strong transition-all duration-300"
          >
            <span>Get a Tutor</span>
            <BsArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={handleNav} 
          className='lg:hidden p-3 rounded-xl hover:bg-muted transition-colors'
          aria-label={nav ? 'Open menu' : 'Close menu'}
        >
          {!nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          !nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileNav}
      />

      {/* Mobile Navigation Panel */}
      <div className={`fixed top-0 right-0 w-full max-w-sm h-full bg-card z-50 lg:hidden transition-transform duration-500 ease-smooth-out ${
        !nav ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className='font-bold text-xl text-foreground tracking-tight'>
              Menu
            </span>
            <button 
              onClick={closeMobileNav}
              className="p-2 rounded-xl hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <AiOutlineClose size={22} />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className='flex-1 overflow-y-auto p-6'>
            <div className='space-y-2'>
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMobileNav}
                  className={({ isActive }) => 
                    `flex items-center justify-between p-4 text-lg font-medium rounded-2xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-foreground text-background' 
                        : 'text-foreground hover:bg-muted'
                    }`
                  }
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                  <BsArrowRight className="w-5 h-5 opacity-50" />
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-border">
            <Link 
              to="/gettutor"
              onClick={closeMobileNav}
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-foreground text-background font-semibold rounded-2xl hover:shadow-strong transition-all"
            >
              Get a Tutor
              <BsArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Start your learning journey today
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;
