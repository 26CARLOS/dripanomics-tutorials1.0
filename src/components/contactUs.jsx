import React from 'react'
import { BsPhone, BsTelegram, BsInstagram, BsEnvelope, BsArrowUpRight } from 'react-icons/bs'

const contactMethods = [
  {
    icon: BsPhone,
    label: 'Phone',
    value: '+27 66 217 9993',
    href: 'tel:+27662179993',
    description: 'Call us directly for immediate assistance',
  },
  {
    icon: BsTelegram,
    label: 'WhatsApp',
    value: '+27 77 695 41002',
    href: 'https://wa.me/277769541002',
    description: 'Send us a message anytime',
  },
  {
    icon: BsEnvelope,
    label: 'Email',
    value: 'dripanomicstutorials@gmail.com',
    href: 'mailto:dripanomicstutorials@gmail.com',
    description: 'We reply within 24 hours',
  },
  {
    icon: BsInstagram,
    label: 'Instagram',
    value: '@dripanomics.tutorials',
    href: 'https://www.instagram.com/dripanomics.tutorials',
    description: 'Follow us for updates and tips',
  },
];

const ContactUs = () => {
  return (
    <section className='py-24 lg:py-32 bg-background'>
      <div className='max-w-5xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-2xl mx-auto text-center mb-16 lg:mb-20'>
          <span className="inline-block text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
            Get in Touch
          </span>
          <h1 className='text-display-lg text-foreground'>
            Let&apos;s Start a
            <span className='block text-muted-foreground'>Conversation</span>
          </h1>
          <p className='mt-6 text-lg text-muted-foreground'>
            Have questions or ready to start your learning journey? 
            We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className='grid sm:grid-cols-2 gap-6'>
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className='group relative bg-card rounded-3xl p-8 border border-border hover:border-foreground/20 hover:shadow-strong transition-all duration-500'
            >
              {/* Arrow indicator */}
              <div className='absolute top-8 right-8 w-10 h-10 flex items-center justify-center bg-muted rounded-xl text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300'>
                <BsArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

              {/* Icon */}
              <div className='w-14 h-14 flex items-center justify-center bg-foreground text-background rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                <method.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className='font-bold text-xl text-foreground mb-2'>
                {method.label}
              </h3>
              <p className='text-muted-foreground mb-4'>
                {method.description}
              </p>
              <p className='font-medium text-foreground'>
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Alternative Contact */}
        <div className='mt-16 text-center'>
          <div className='inline-block bg-muted rounded-3xl p-8 lg:p-12'>
            <h3 className='font-bold text-xl text-foreground mb-2'>
              Alternative Email
            </h3>
            <p className='text-muted-foreground mb-4'>
              You can also reach us at:
            </p>
            <a 
              href="mailto:sekgobelajr@gmail.com"
              className="inline-flex items-center gap-2 font-semibold text-foreground hover:opacity-70 transition-opacity"
            >
              sekgobelajr@gmail.com
              <BsArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
