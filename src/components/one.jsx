import React from 'react'
import { Link } from 'react-router-dom';
import onlineTut from '../assets/onlineTut.jpg';
import girls from '../assets/girls-tutoring.jpg'
import { BsArrowRight, BsPeople, BsLaptop, BsCheck2Circle } from 'react-icons/bs'

const FeatureCard = ({ image, icon: Icon, label, title, description, benefits, reverse = false }) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:direction-rtl' : ''}`}>
      {/* Image */}
      <div className={`relative ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="relative group">
          {/* Background decoration */}
          <div className="absolute -inset-4 bg-muted rounded-3xl -z-10 group-hover:scale-[1.02] transition-transform duration-500" />
          
          {/* Main image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              className='w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700' 
              src={image} 
              alt={title}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-foreground text-background p-5 rounded-2xl shadow-strong">
            <Icon className="w-7 h-7" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`${reverse ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}>
        <span className="inline-block text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
          {label}
        </span>
        <h3 className='text-display-sm text-foreground'>
          {title}
        </h3>
        <p className='mt-4 text-lg text-muted-foreground leading-relaxed'>
          {description}
        </p>

        {/* Benefits list */}
        <ul className={`mt-6 space-y-3 ${reverse ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
          {benefits.map((benefit, index) => (
            <li key={index} className='flex items-center gap-3 text-foreground'>
              <BsCheck2Circle className='w-5 h-5 text-muted-foreground flex-shrink-0' />
              <span className='font-medium'>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className={`mt-8 ${reverse ? 'lg:flex lg:justify-end' : ''}`}>
          <Link 
            to="/gettutor"
            className='group inline-flex items-center gap-2 text-foreground font-semibold hover:gap-3 transition-all duration-200'
          >
            <span>Get Started</span>
            <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const One = () => {
  return (
    <section className='py-24 lg:py-32 bg-card'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
          <span className="inline-block text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
            Learning Options
          </span>
          <h2 className="text-display-md text-foreground">
            Choose Your
            <span className='block text-muted-foreground'>Learning Style</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible tutoring options designed to fit your schedule and preferences. 
            Learn at your own pace, your own way.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-24 lg:space-y-32">
          <FeatureCard 
            image={girls}
            icon={BsPeople}
            label="Face-to-Face Tutoring"
            title="Personalized In-Person Sessions"
            description="Experience the power of direct interaction with our face-to-face tutoring service. Build strong connections with your tutor while receiving immediate feedback and support."
            benefits={[
              'Direct engagement and interaction',
              'Immediate feedback and clarification',
              'Personalized learning environment',
            ]}
            reverse={false}
          />

          <FeatureCard 
            image={onlineTut}
            icon={BsLaptop}
            label="Online Tutoring"
            title="Learn From Anywhere"
            description="Break geographical barriers with our online tutoring platform. Access expert tutors from the comfort of your home with flexible scheduling that works for you."
            benefits={[
              'Study from anywhere, anytime',
              'Flexible scheduling options',
              'Screen sharing for visual learning',
            ]}
            reverse={true}
          />
        </div>
      </div>
    </section>
  )
}

export default One;
