import React from 'react'
import { BsPhone, BsTelegram, BsInstagram, BsEnvelope } from 'react-icons/bs'

const contactMethods = [
  {
    icon: BsPhone,
    label: 'Phone',
    value: '+27 66 217 9993',
    href: 'tel:+27662179993',
    description: 'Call us directly',
  },
  {
    icon: BsTelegram,
    label: 'WhatsApp',
    value: '+27 77 695 41002',
    href: 'https://wa.me/277769541002',
    description: 'Message us on WhatsApp',
  },
  {
    icon: BsEnvelope,
    label: 'Email',
    value: 'dripanomicstutorials@gmail.com',
    href: 'mailto:dripanomicstutorials@gmail.com',
    description: 'Send us an email',
  },
  {
    icon: BsInstagram,
    label: 'Instagram',
    value: '@dripanomics.tutorials',
    href: 'https://www.instagram.com/dripanomics.tutorials',
    description: 'Follow us on Instagram',
  },
];

const ContactUs = () => {
  return (
    <section className='py-16 lg:py-24 bg-background'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
            Get in Touch
          </span>
          <h1 className='font-display font-bold text-4xl sm:text-5xl text-foreground mt-3'>
            Contact Us
          </h1>
          <p className='mt-4 text-muted-foreground max-w-lg mx-auto'>
            Have questions or ready to start your learning journey? We would love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className='grid sm:grid-cols-2 gap-4'>
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className='group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300'
            >
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 flex items-center justify-center bg-muted rounded-xl text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300'>
                  <method.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className='font-semibold text-foreground'>
                    {method.label}
                  </h3>
                  <p className='text-sm text-muted-foreground mt-1'>
                    {method.description}
                  </p>
                  <p className='text-sm font-medium text-foreground mt-2 truncate'>
                    {method.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Contact */}
        <div className='mt-12 text-center p-8 bg-card rounded-2xl border border-border'>
          <h3 className='font-display font-semibold text-lg text-foreground mb-2'>
            Alternative Email
          </h3>
          <p className='text-muted-foreground mb-4'>
            You can also reach us at:
          </p>
          <a 
            href="mailto:sekgobelajr@gmail.com"
            className="text-foreground font-medium hover:text-primary transition-colors"
          >
            sekgobelajr@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
