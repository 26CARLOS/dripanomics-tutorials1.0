import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsBook, BsPeople, BsLightbulb } from 'react-icons/bs'
import Testimonials from './testimonials'

const values = [
  {
    icon: BsPeople,
    title: 'Dedicated Tutors',
    description: 'Expert educators passionate about helping you succeed.',
  },
  {
    icon: BsLightbulb,
    title: 'Personalized Learning',
    description: 'Tailored approaches that match your unique learning style.',
  },
  {
    icon: BsBook,
    title: 'Comprehensive Coverage',
    description: 'Wide range of modules across multiple academic disciplines.',
  },
];

const AboutComponent = () => {
  return (
    <div className='py-16 lg:py-24'>
      {/* Hero Section */}
      <section className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
          About Dripanomics
        </span>
        <h1 className='font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mt-4 text-balance'>
          Who Are We?
        </h1>
        <p className='mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
          At Dripanomics, we are not just tutors - we are your dedicated learning allies. Passionate about education, we are a team committed to nurturing inquisitive minds.
        </p>
      </section>

      {/* Values Grid */}
      <section className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16'>
        <div className='grid md:grid-cols-3 gap-6'>
          {values.map((value) => (
            <div 
              key={value.title}
              className='p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300'
            >
              <div className='w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-primary mb-4'>
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className='font-display font-semibold text-lg text-foreground'>
                {value.title}
              </h3>
              <p className='mt-2 text-muted-foreground text-sm leading-relaxed'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center'>
        <h2 className='font-display font-bold text-3xl sm:text-4xl text-foreground'>
          Our Mission
        </h2>
        <p className='mt-6 text-muted-foreground leading-relaxed'>
          Our mission goes beyond grades - it is about fostering critical thinking, building confidence, and instilling a lasting love for learning. With expertise and enthusiasm, our tutors are here to illuminate your path to success. Join Dripanomics, where learning transcends the ordinary, and every student is empowered to thrive.
        </p>
      </section>

      {/* Modules CTA */}
      <section className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-20'>
        <div className='bg-foreground text-background rounded-2xl p-8 sm:p-12 text-center'>
          <h2 className='font-display font-bold text-2xl sm:text-3xl'>
            Explore Our Modules
          </h2>
          <p className='mt-4 text-background/70 max-w-lg mx-auto'>
            We offer tutoring services across a diverse array of subjects. Whether it is Psychology, Statistics, Accounting, or any other discipline, our tutors are well-versed and equipped to provide guidance.
          </p>
          <div className="mt-8">
            <Link 
              to='/modules'
              className='inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 hover:gap-3 transition-all duration-200 group'
            >
              <span>View Our Catalog</span>
              <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className='mt-20'>
        <Testimonials />
      </div>
    </div>
  )
}

export default AboutComponent
