import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTelegram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsArrowUpRight } from 'react-icons/bs'
import logo from '../assets/favicon.ico'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Find a Tutor', to: '/gettutor' },
      { label: 'Our Modules', to: '/modules' },
      { label: 'View Tutors', to: '/tutors' },
      { label: 'Dripanomics Grail', to: 'https://app.dripanomicstutorials.com', external: true },
    ],
    company: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'FAQs', to: '/faqs' },
    ],
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/dripanomics.tutorials', icon: FaInstagram },
      { label: 'Telegram', href: 'https://wa.me/277769541002', icon: FaTelegram },
      { label: 'Email', href: 'mailto:dripanomicstutorials@gmail.com', icon: HiOutlineMail },
    ],
  };

  return (
    <footer className='bg-foreground text-background relative overflow-hidden'>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Top Section - CTA */}
        <div className='py-16 lg:py-20 border-b border-background/10'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'>
            <div>
              <h3 className='text-display-sm text-background max-w-lg'>
                Ready to transform your academic journey?
              </h3>
            </div>
            <Link 
              to="/gettutor"
              className='group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:shadow-strong hover:scale-[1.02] transition-all duration-300 w-fit'
            >
              <span>Get Started</span>
              <BsArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Main Footer */}
        <div className='py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Brand */}
          <div className='lg:col-span-1'>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center">
                <img src={logo} alt="Dripanomics" className="w-7 h-7" />
              </div>
              <span className="font-bold text-xl text-background">Dripanomics</span>
            </Link>
            <p className='text-background/60 leading-relaxed'>
              Empowering minds, inspiring futures. Your dedicated partner in academic excellence.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-8">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center bg-background/10 rounded-xl hover:bg-background hover:text-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-background/50">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a 
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                      <BsArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  ) : (
                    <Link 
                      to={link.to}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-background/50">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.to}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-background/50">
              Contact
            </h4>
            <ul className="space-y-4 text-background/70">
              <li>
                <a href="tel:+27662179993" className="hover:text-background transition-colors">
                  +27 66 217 9993
                </a>
              </li>
              <li>
                <a href="tel:+277769541002" className="hover:text-background transition-colors">
                  +27 77 695 41002
                </a>
              </li>
              <li>
                <a href="mailto:dripanomicstutorials@gmail.com" className="hover:text-background transition-colors break-all">
                  dripanomicstutorials@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='py-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-background/40 text-sm'>
            {currentYear} Dripanomics Tutorials. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-background/40">
            <Link to="/faqs" className="hover:text-background transition-colors">
              FAQs
            </Link>
            <Link to="/contact" className="hover:text-background transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
