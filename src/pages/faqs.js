import React from 'react'
import Accordion from '../components/accordion'
import { HiOutlineMail } from 'react-icons/hi'

function Faqs() {
  return (
    <section className='py-16 lg:py-24 bg-background'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Accordion />

        {/* Contact Support */}
        <div className='mt-16 text-center p-8 bg-card rounded-2xl border border-border'>
          <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-4">
            <HiOutlineMail className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display font-semibold text-lg text-foreground mb-2">
            Still have questions?
          </h3>
          <p className='text-muted-foreground mb-4'>
            Our support team is here to help you.
          </p>
          <a 
            href='mailto:dripanomicstutorials@gmail.com'
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  )
}

export default Faqs
