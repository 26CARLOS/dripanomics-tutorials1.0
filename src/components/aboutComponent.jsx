import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsBook, BsPeople, BsLightbulb, BsAward, BsHeart } from 'react-icons/bs'
import Testimonials from './testimonials'

const values = [
  {
    icon: BsPeople,
    title: 'Dedicated Tutors',
    description: 'Expert educators passionate about student success and committed to your academic growth.',
  },
  {
    icon: BsLightbulb,
    title: 'Personalized Learning',
    description: 'Tailored approaches that match your unique learning style and pace.',
  },
  {
    icon: BsBook,
    title: 'Comprehensive Coverage',
    description: 'Wide range of modules across multiple academic disciplines and levels.',
  },
];

const stats = [
  { value: '500+', label: 'Students Helped' },
  { value: '98%', label: 'Pass Rate' },
  { value: '50+', label: 'Expert Tutors' },
  { value: '5+', label: 'Years Experience' },
];

const AboutComponent = () => {
  return (
    <div className='py-24 lg:py-32'>
      {/* Hero Section */}
      <section className='max-w-5xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          <div>
            <span className="inline-block text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
              About Dripanomics
            </span>
            <h1 className='text-display-lg text-foreground'>
              Who We Are
            </h1>
            <p className='mt-6 text-lg text-muted-foreground leading-relaxed'>
              At Dripanomics, we are not just tutors - we are your dedicated learning allies. 
              Passionate about education, we are a team committed to nurturing inquisitive minds 
              and fostering academic excellence.
            </p>
            <p className='mt-4 text-lg text-muted-foreground leading-relaxed'>
              Our mission goes beyond grades - it&apos;s about fostering critical thinking, 
              building confidence, and instilling a lasting love for learning.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="bg-card rounded-3xl p-6 lg:p-8 border border-border text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className='max-w-6xl mx-auto px-6 lg:px-8 mt-24 lg:mt-32'>
        <div className='text-center mb-16'>
          <span className="inline-block text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
            Our Values
          </span>
          <h2 className="text-display-sm text-foreground">
            What Sets Us Apart
          </h2>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {values.map((value) => (
            <div 
              key={value.title}
              className='group bg-card rounded-3xl p-8 lg:p-10 border border-border hover:border-foreground/20 hover:shadow-strong transition-all duration-500'
            >
              <div className='w-14 h-14 flex items-center justify-center bg-foreground text-background rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className='font-bold text-xl text-foreground mb-3'>
                {value.title}
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className='max-w-6xl mx-auto px-6 lg:px-8 mt-24 lg:mt-32'>
        <div className='bg-muted rounded-3xl p-10 lg:p-16'>
          <div className='max-w-3xl mx-auto text-center'>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground text-background rounded-2xl mb-8">
              <BsHeart className="w-7 h-7" />
            </div>
            <h2 className='text-display-sm text-foreground mb-6'>
              Our Mission
            </h2>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              Our mission goes beyond grades - it&apos;s about fostering critical thinking, 
              building confidence, and instilling a lasting love for learning. With expertise 
              and enthusiasm, our tutors are here to illuminate your path to success. 
              Join Dripanomics, where learning transcends the ordinary, and every student 
              is empowered to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Modules CTA */}
      <section className='max-w-5xl mx-auto px-6 lg:px-8 mt-24 lg:mt-32'>
        <div className='bg-foreground text-background rounded-3xl p-10 lg:p-16 relative overflow-hidden'>
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className='relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8'>
            <div className='max-w-xl'>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-background rounded-2xl mb-6">
                <BsAward className="w-7 h-7 text-foreground" />
              </div>
              <h2 className='text-display-sm text-background'>
                Explore Our Modules
              </h2>
              <p className='mt-4 text-background/70 text-lg'>
                We offer tutoring services across a diverse array of subjects. Whether it&apos;s 
                Psychology, Statistics, Accounting, or any other discipline, our tutors are 
                well-versed and equipped to provide guidance.
              </p>
            </div>
            <Link 
              to='/modules'
              className='group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:shadow-strong hover:scale-[1.02] transition-all duration-300 w-fit'
            >
              <span>View Catalog</span>
              <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className='mt-24 lg:mt-32'>
        <Testimonials />
      </div>
    </div>
  )
}

export default AboutComponent
