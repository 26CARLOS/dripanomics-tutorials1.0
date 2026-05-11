import React from 'react'
import { Link } from 'react-router-dom'
import moduleData from './moduleData'
import { BsArrowRight, BsArrowUpRight, BsPlus } from 'react-icons/bs'

const ModuleCards = () => {
  return (
    <section className='py-24 lg:py-32 bg-background'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-3xl mx-auto text-center mb-16 lg:mb-20'>
          <span className="inline-block text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
            Academic Subjects
          </span>
          <h1 className='text-display-lg text-foreground'>
            Modules We
            <span className='block text-muted-foreground'>Offer</span>
          </h1>
          <p className='mt-6 text-lg text-muted-foreground max-w-xl mx-auto'>
            Explore our comprehensive range of tutoring subjects designed to help you excel
          </p>
        </div>

        {/* Module Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {moduleData.map((module, id) => (
            <Link 
              to="/gettutor" 
              key={id}
              className='group relative bg-card rounded-3xl border border-border overflow-hidden hover:border-foreground/20 hover:shadow-strong transition-all duration-500'
            >
              {/* Image */}
              <div className='relative aspect-[4/3] overflow-hidden'>
                <img 
                  src={module.picture} 
                  alt={module.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className='font-bold text-xl text-background mb-2'>
                    {module.name}
                  </h3>
                  <div className='flex items-center gap-2 text-background/80 group-hover:text-background transition-colors'>
                    <span className='text-sm font-medium'>Get a tutor</span>
                    <BsArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Coming Soon Card */}
          <div className='bg-muted rounded-3xl border border-dashed border-border flex flex-col items-center justify-center p-10 min-h-[280px]'>
            <div className='w-16 h-16 flex items-center justify-center bg-card rounded-2xl text-muted-foreground mb-6 border border-border'>
              <BsPlus className="w-8 h-8" />
            </div>
            <h3 className='font-bold text-xl text-muted-foreground text-center'>
              More Coming Soon
            </h3>
            <p className='text-sm text-muted-foreground/70 mt-2 text-center max-w-xs'>
              We are constantly expanding our offerings to serve you better
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className='text-center mt-16 lg:mt-20'>
          <Link 
            to="/gettutor"
            className='group inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background font-semibold rounded-full hover:shadow-strong hover:scale-[1.02] transition-all duration-300'
          >
            <span>Get Started Today</span>
            <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Select your module and we&apos;ll match you with the perfect tutor
          </p>
        </div>
      </div>
    </section>
  )
}

export default ModuleCards
