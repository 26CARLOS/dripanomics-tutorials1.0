import React from 'react'
import { BsPersonPlus, BsCreditCard, BsCheckCircle, BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const steps = [
  {
    icon: BsPersonPlus,
    number: '01',
    title: 'Request a Tutor',
    description: 'Fill out our simple form with your details and module requirements. Our team will match you with the perfect tutor within 24 hours.',
  },
  {
    icon: BsCreditCard,
    number: '02',
    title: 'Secure Payment',
    description: 'Receive a transparent quote and complete your payment securely via EFT or ATM deposit. No hidden fees, no surprises.',
  },
  {
    icon: BsCheckCircle,
    number: '03',
    title: 'Start Learning',
    description: 'Your matched tutor will contact you to schedule sessions at your convenience. Begin your path to academic excellence.',
  },
];

const Howto = () => {
  return (
    <section className='py-24 lg:py-32 bg-background'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <span className="inline-block text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
            How It Works
          </span>
          <h2 className='text-display-md text-foreground'>
            Three Simple Steps to
            <span className='block text-muted-foreground'>Academic Success</span>
          </h2>
        </div>

        {/* Steps */}
        <div className='relative'>
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 z-0" />
          
          <div className='grid lg:grid-cols-3 gap-8 lg:gap-6 relative z-10'>
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className='group relative'
              >
                {/* Card */}
                <div className='bg-card rounded-3xl p-8 lg:p-10 border border-border hover:border-foreground/20 hover:shadow-strong transition-all duration-500'>
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-7xl lg:text-8xl font-bold text-muted/50 group-hover:text-muted transition-colors">
                      {step.number}
                    </span>
                    <div className='w-14 h-14 flex items-center justify-center bg-foreground text-background rounded-2xl group-hover:scale-110 transition-transform duration-300'>
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className='text-xl font-bold text-foreground mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 w-6 h-6 bg-background border border-border rounded-full items-center justify-center z-20 -translate-y-1/2">
                    <BsArrowRight className="w-3 h-3 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <Link 
            to="/gettutor"
            className='group inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background font-semibold rounded-full hover:shadow-strong hover:scale-[1.02] transition-all duration-300'
          >
            <span>Start Your Journey</span>
            <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            No commitment required. Response within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Howto
