import React from 'react'
import Accordion from '../components/accordion'
import { HiOutlineMail } from 'react-icons/hi'
import { BsArrowRight } from 'react-icons/bs'

function Faqs() {
  return (
    <section className='py-24 lg:py-32 bg-background'>
      <div className='max-w-4xl mx-auto px-6 lg:px-8'>
        <Accordion />

        {/* Contact Support CTA */}
        <div className='mt-20 relative'>
          <div className='bg-foreground text-background rounded-3xl p-10 lg:p-14 text-center overflow-hidden'>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            <div className='relative z-10'>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-2xl mb-6">
                <HiOutlineMail className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-background mb-3">
                Still have questions?
              </h3>
              <p className='text-background/70 mb-8 max-w-md mx-auto'>
                Our support team is here to help you with any questions or concerns.
              </p>
              <a 
                href='mailto:dripanomicstutorials@gmail.com'
                className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:shadow-strong hover:scale-[1.02] transition-all duration-300"
              >
                <span>Contact Support</span>
                <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
