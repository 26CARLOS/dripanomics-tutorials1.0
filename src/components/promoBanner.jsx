import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsLightning, BsCheck2 } from 'react-icons/bs'

const PromoBanner = () => {
  const features = [
    'Interactive Video Lessons',
    'Progress Tracking Dashboard', 
    'Expert Support 24/7',
    'Offline Access Available'
  ];

  return (
    <section className='relative py-24 lg:py-32 bg-foreground overflow-hidden'>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-background to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
          {/* Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 rounded-full mb-8">
              <BsLightning className="w-4 h-4 text-background" />
              <span className='text-background text-sm font-medium'>New Platform Launch</span>
            </div>

            {/* Heading */}
            <h2 className='text-display-md text-background'>
              Introducing
              <span className="block text-background/60 mt-1">Dripanomics Grail</span>
            </h2>

            {/* Description */}
            <p className='mt-6 text-lg text-background/70 leading-relaxed max-w-lg'>
              Our revolutionary online learning platform. Access courses, track your progress, 
              and connect with tutors - all from anywhere, anytime.
            </p>

            {/* Features List */}
            <ul className='mt-8 space-y-3'>
              {features.map((feature, index) => (
                <li key={index} className='flex items-center gap-3 text-background/80'>
                  <div className='w-5 h-5 flex items-center justify-center bg-background/20 rounded-full'>
                    <BsCheck2 className='w-3 h-3 text-background' />
                  </div>
                  <span className='font-medium'>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <Link 
                to="https://app.dripanomicstutorials.com"
                className='group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground font-semibold rounded-full hover:shadow-strong hover:scale-[1.02] transition-all duration-300'
              >
                <span>Enroll Now</span>
                <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-background/10 rounded-3xl rotate-6" />
              <div className="absolute inset-4 border-2 border-background/10 rounded-3xl -rotate-3" />
              
              {/* Main card */}
              <div className="relative bg-background/10 backdrop-blur-sm rounded-3xl p-8 h-full flex flex-col justify-center items-center border border-background/20">
                <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center mb-6">
                  <BsLightning className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-background text-center">
                  Grail Learning
                </h3>
                <p className="text-background/60 text-center mt-2">
                  The future of online education
                </p>
                
                {/* Stats inside card */}
                <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                  <div className="bg-background/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-background">100+</div>
                    <div className="text-xs text-background/60">Video Lessons</div>
                  </div>
                  <div className="bg-background/10 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-background">24/7</div>
                    <div className="text-xs text-background/60">Access</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
