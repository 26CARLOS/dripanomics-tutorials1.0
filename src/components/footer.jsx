import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTelegram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
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
    <footer className='bg-foreground text-background mt-auto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer */}
        <div className='py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
          {/* Brand */}
          <div className='lg:col-span-1'>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Dripanomics" className="w-10 h-10" />
              <span className="font-display font-bold text-xl">Dripanomics</span>
            </Link>
            <p className='text-background/70 leading-relaxed text-sm'>
              Empowering minds, inspiring futures. Your dedicated partner in academic excellence.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/50">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a 
                      href={link.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-background/70 hover:text-background transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.to}
                      className="text-background/70 hover:text-background transition-colors text-sm"
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
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/50">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.to}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-background/50">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-background/70">
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
                <a href="mailto:dripanomicstutorials@gmail.com" className="hover:text-background transition-colors">
                  dripanomicstutorials@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='py-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-background/50 text-sm'>
            {currentYear} Dripanomics Tutorials. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <Link to="/faqs" className="hover:text-background transition-colors">
              FAQs
            </Link>
            <span className="text-background/30">|</span>
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
