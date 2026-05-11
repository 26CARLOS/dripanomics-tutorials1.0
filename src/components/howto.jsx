import React from 'react'
import { BsPersonPlus, BsCreditCard, BsCheckCircle, BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const steps = [
  {
    icon: BsPersonPlus,
    number: '01',
    title: 'Request a Tutor',
    description: 'Fill out our simple form with your details and module requirements. Our consultants will reach out to match you with the perfect tutor.',
  },
  {
    icon: BsCreditCard,
    number: '02',
    title: 'Make Payment',
    description: 'Receive an instant quote and complete your payment securely via EFT or ATM cash deposit. Simple and hassle-free.',
  },
  {
    icon: BsCheckCircle,
    number: '03',
    title: 'Start Learning',
    description: 'Your matched tutor will contact you to schedule sessions at your convenience. Begin your journey to academic success.',
  },
];

const Howto = () => {
  return (
    <section className='py-24 lg:py-32 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
            Simple Process
          </span>
          <h2 className='font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3'>
            How to Get Started
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Three easy steps to connect with your perfect tutor
          </p>
        </div>

        {/* Steps Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className='group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300'
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8 px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                {step.number}
              </div>

              {/* Icon */}
              <div className='w-14 h-14 flex items-center justify-center bg-muted rounded-xl text-foreground mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300'>
                <step.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className='font-display font-bold text-xl text-foreground mb-3'>
                {step.title}
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                {step.description}
              </p>

              {/* Connector Line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-border" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/gettutor"
            className='inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:opacity-90 hover:gap-3 transition-all duration-200 group'
          >
            <span>Get Started Now</span>
            <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Howto
