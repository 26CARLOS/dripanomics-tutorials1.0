import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsPlayCircle } from 'react-icons/bs';

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-muted to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-40 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-muted to-transparent rounded-full blur-3xl opacity-40" />
      </div>

      <div className='relative z-10 max-w-6xl w-full mx-auto px-6 lg:px-8 py-32 lg:py-40'>
        <div className='flex flex-col items-center text-center'>
          {/* Main Headline */}
          <h1 className='animate-fade-up opacity-0 delay-100 text-display-xl text-foreground max-w-4xl'>
            Expert Tutoring for
            <span className="block mt-2 text-muted-foreground">
              <Typewriter 
                words={['Accounting', 'Economics', 'Psychology', 'Mathematics', 'Business', 'Marketing', 'Tax']} 
                cursor
                cursorBlinking
                cursorStyle="_"
                typeSpeed={80} 
                backSpeed={50} 
                delaySpeed={2500}
                loop
              />
            </span>
          </h1>

          {/* Subheadline */}
          <p className='animate-fade-up opacity-0 delay-200 mt-8 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed'>
            Personalized one-on-one sessions tailored to your learning style. 
            Improve your grades and build confidence with expert tutors.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up opacity-0 delay-300 flex flex-col sm:flex-row items-center gap-4 mt-12">
            <Link to="/gettutor">
              <button className='group flex items-center gap-3 px-8 py-4 bg-foreground text-background font-semibold rounded-full hover:shadow-strong hover:scale-[1.02] active:scale-[0.98] transition-all duration-300'>
                <span>Get Started</span>
                <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/about">
              <button className='group flex items-center gap-3 px-8 py-4 bg-transparent text-foreground font-semibold rounded-full border-2 border-border hover:border-foreground/30 hover:bg-muted transition-all duration-300'>
                <BsPlayCircle className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="animate-fade-up opacity-0 delay-400 flex flex-wrap items-center justify-center gap-8 lg:gap-16 mt-20 pt-12 border-t border-border">
            {[
              { value: '500+', label: 'Students Helped' },
              { value: '50+', label: 'Expert Tutors' },
              { value: '35+', label: 'Modules Covered' },
              { value: '98%', label: 'Pass Rate' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  )
}

export default Hero;
