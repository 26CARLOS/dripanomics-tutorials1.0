import React from 'react'
import { BsArrowRight, BsSend, BsShieldCheck } from 'react-icons/bs'

const NewsLetter = () => {
  return (
    <section className='py-20 lg:py-28'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-background rounded-3xl mb-8">
            <BsSend className="w-9 h-9 text-foreground" />
          </div>

          {/* Heading */}
          <h2 className='text-display-md text-background'>
            Stay in the Loop
          </h2>
          <p className='mt-4 text-background/70 max-w-xl mx-auto text-lg'>
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
            className="mt-10"
          >
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto'>
              <div className="relative flex-1 w-full">
                <input 
                  name="email_address" 
                  aria-label="Email Address"
                  placeholder="Enter your email address"
                  required
                  type="email"
                  className='w-full px-6 py-4 bg-background text-foreground placeholder:text-muted-foreground rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-background/50 shadow-medium'
                />
              </div>
              <button 
                type="submit"
                className='group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:shadow-strong hover:scale-[1.02] transition-all duration-300'
              >
                <span>Subscribe</span>
                <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-background/60">
              <BsShieldCheck className="w-4 h-4" />
              <span>No spam ever. Unsubscribe anytime.</span>
            </div>
          </form>

          {/* Social proof */}
          <div className="mt-12 pt-8 border-t border-background/10">
            <p className="text-background/50 text-sm">
              Join <span className="text-background font-semibold">500+</span> students already receiving our weekly insights
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter;
