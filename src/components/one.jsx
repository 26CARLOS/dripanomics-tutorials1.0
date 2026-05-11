import React from 'react'
import { Link } from 'react-router-dom';
import onlineTut from '../assets/onlineTut.jpg';
import girls from '../assets/girls-tutoring.jpg'
import { BsArrowRight, BsPeople, BsLaptop } from 'react-icons/bs'

const FeatureCard = ({ image, icon: Icon, label, title, description, imageFirst = true }) => {
  const content = (
    <>
      {/* Image */}
      <div className={`relative ${imageFirst ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative overflow-hidden rounded-2xl shadow-strong">
          <img 
            className='w-full aspect-[4/3] object-cover' 
            src={image} 
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        </div>
        {/* Floating badge */}
        <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-primary p-4 rounded-xl shadow-medium">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center ${imageFirst ? 'lg:order-2' : 'lg:order-1'}`}>
        <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
          {label}
        </span>
        <h3 className='font-display font-bold text-3xl sm:text-4xl text-foreground mt-3'>
          {title}
        </h3>
        <p className='mt-4 text-muted-foreground leading-relaxed'>
          {description}
        </p>
        <div className="mt-8">
          <Link 
            to="/gettutor"
            className='inline-flex items-center gap-2 text-foreground font-semibold hover:gap-3 transition-all duration-200 group'
          >
            <span>Get Started</span>
            <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
      {content}
    </div>
  );
};

const One = () => {
  return (
    <section className='py-24 lg:py-32 bg-card'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Flexible Learning Options
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Choose the tutoring style that works best for you
          </p>
        </div>

        {/* Features */}
        <div className="space-y-24 lg:space-y-32">
          <FeatureCard 
            image={girls}
            icon={BsPeople}
            label="Face-to-Face Tutoring"
            title="Always at your service."
            description="Embark on a personalized learning journey with our Face-to-Face Tutoring service. Our dedicated tutors provide tailored support that goes beyond the classroom. Whether you're tackling challenging concepts, seeking exam preparation, or simply aiming for academic excellence, our Face-to-Face Tutoring ensures a focused and collaborative environment."
            imageFirst={true}
          />

          <FeatureCard 
            image={onlineTut}
            icon={BsLaptop}
            label="Online Tutoring"
            title="Learn from anywhere."
            description="Unlock learning excellence with our Online Tutoring service. Our dedicated tutors bring personalized support directly to you, wherever you are. Experience the convenience and effectiveness of one-on-one interactions tailored to your unique learning needs. Whether you're mastering challenging concepts or striving for academic success."
            imageFirst={false}
          />
        </div>
      </div>
    </section>
  )
}

export default One;
