import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-foreground rounded-full blur-3xl" />
      </div>

      <div className='relative z-10 max-w-5xl w-full mx-auto text-center px-4 sm:px-6 lg:px-8 py-20'>
        <p className='text-foreground text-sm font-medium tracking-wide mb-8 animate-fade-in'>
          Enriching lives through education
        </p>

        {/* Main Headline */}
        <h1 className='font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight animate-fade-in-up'>
          Tutoring for
          <span className="block mt-2">
            <Typewriter 
              words={['Accounting', 'Economics', 'Psychology', 'Mathematics', 'Business', 'Computer Science', 'Marketing', 'Tax']} 
              cursor
              cursorBlinking
              cursorStyle="|"
              typeSpeed={80} 
              backSpeed={60} 
              delaySpeed={2000}
              loop
            />
          </span>
        </h1>

        {/* Subheadline */}
        <p className='mt-8 text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200'>
          Expert tutors tailored to your learning style. Improve your grades with personalized one-on-one sessions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-fade-in-up delay-300">
          <Link to="/gettutor">
            <button className='px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-medium'>
              Get Started
            </button>
          </Link>
          <Link to="/modules">
            <button className='px-8 py-4 bg-transparent text-foreground font-semibold rounded-full border-2 border-foreground/30 hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-200'>
              View Modules
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-foreground/20 animate-fade-in-up delay-400">
          {[
            { value: '500+', label: 'Students Helped' },
            { value: '10+', label: 'Expert Tutors' },
            { value: '20+', label: 'Modules Covered' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl sm:text-3xl text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/70 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero;
