import React from 'react'
import { Link } from 'react-router-dom'
import moduleData from './moduleData'
import { BsArrowRight, BsPlus } from 'react-icons/bs'

const ModuleCards = () => {
  return (
    <section className='py-16 lg:py-24 bg-background'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
            Academic Subjects
          </span>
          <h1 className='font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3'>
            Modules We Offer
          </h1>
          <p className='mt-4 text-muted-foreground max-w-xl mx-auto'>
            Explore our comprehensive range of tutoring subjects
          </p>
        </div>

        {/* Module Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {moduleData.map((module, id) => (
            <Link 
              to="/gettutor" 
              key={id}
              className='group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-medium transition-all duration-300'
            >
              {/* Image */}
              <div className='relative aspect-[4/3] overflow-hidden'>
                <img 
                  src={module.picture} 
                  alt={module.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className='p-5'>
                <h3 className='font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors'>
                  {module.name}
                </h3>
                <div className='flex items-center gap-1 mt-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors'>
                  <span>Get a tutor</span>
                  <BsArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}

          {/* Coming Soon Card */}
          <div className='bg-muted/50 rounded-2xl border border-dashed border-border flex flex-col items-center justify-center p-8 min-h-[280px]'>
            <div className='w-12 h-12 flex items-center justify-center bg-muted rounded-xl text-muted-foreground mb-4'>
              <BsPlus className="w-6 h-6" />
            </div>
            <h3 className='font-display font-semibold text-lg text-muted-foreground'>
              More Coming Soon
            </h3>
            <p className='text-sm text-muted-foreground/70 mt-2 text-center'>
              We are constantly expanding our offerings
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className='text-center mt-12'>
          <Link 
            to="/gettutor"
            className='inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:opacity-90 hover:gap-3 transition-all duration-200 group'
          >
            <span>Get Started Today</span>
            <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ModuleCards
