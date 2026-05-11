import React from 'react'
import { BsArrowRight, BsEnvelope } from 'react-icons/bs'

const NewsLetter = () => {
  return (
    <section className='py-20 lg:py-28 bg-primary'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto bg-primary-foreground/10 rounded-2xl flex items-center justify-center mb-6">
            <BsEnvelope className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className='font-display font-bold text-3xl sm:text-4xl text-primary-foreground'>
            Stay in the Loop
          </h2>
          <p className='mt-4 text-primary-foreground/80 max-w-xl mx-auto'>
            Get study tips, exam strategies, and exclusive offers delivered straight to your inbox.
          </p>

          {/* Form */}
          <form 
            action="https://app.convertkit.com/forms/6045800/subscriptions"
            method="post"
            data-sv-form="6045800"
            data-uid="a7ec921feb"
            data-format="inline"
            data-version="5"
            className="mt-8"
          >
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto'>
              <div className="relative flex-1 w-full">
                <input 
                  name="email_address" 
                  aria-label="Email Address"
                  placeholder="Enter your email"
                  required
                  type="email"
                  className='w-full px-5 py-4 bg-primary-foreground text-primary placeholder:text-primary/50 rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-primary-foreground/50'
                />
              </div>
              <button 
                type="submit"
                className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-full hover:opacity-90 hover:gap-3 transition-all duration-200 group'
              >
                <span>Subscribe</span>
                <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/60">
              Join 500+ students already subscribed. No spam, unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter;
