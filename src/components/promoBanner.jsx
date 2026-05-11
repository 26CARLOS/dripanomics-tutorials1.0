import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const PromoBanner = () => {
  return (
    <section className='relative py-24 lg:py-32 bg-foreground overflow-hidden'>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-primary rounded-full" />
          <span className='text-primary text-sm font-semibold'>New Platform Launch</span>
        </div>

        {/* Heading */}
        <h2 className='font-display font-bold text-4xl md:text-5xl lg:text-6xl text-background leading-tight'>
          Introducing
          <span className="block text-primary mt-2">Dripanomics Grail</span>
        </h2>

        {/* Description */}
        <p className='mt-6 text-lg text-background/70 max-w-2xl mx-auto leading-relaxed'>
          Our revolutionary online learning platform. Access courses, track progress, and connect with tutors - all in one place.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Link 
            to="https://app.dripanomicstutorials.com"
            className='inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 hover:gap-4 transition-all duration-300 shadow-medium group'
          >
            <span>Enroll Now</span>
            <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Features pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['Interactive Lessons', 'Progress Tracking', 'Expert Support', '24/7 Access'].map((feature) => (
            <span 
              key={feature}
              className="px-4 py-2 bg-background/10 text-background/80 text-sm font-medium rounded-full border border-background/20"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
