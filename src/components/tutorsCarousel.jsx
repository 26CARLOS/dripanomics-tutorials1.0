import React, { useState, useCallback, useEffect } from 'react'
import { BsChevronLeft, BsChevronRight, BsBook } from 'react-icons/bs';
import Tutors from './TutorData.js'

const TutorCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBio, setShowBio] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prevSlide = useCallback(() => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? Tutors.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setShowBio(false);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLast = currentIndex === Tutors.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setShowBio(false);
  }, [currentIndex]);

  const toggleShowBio = () => {
    setShowBio(!showBio);
  }

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const currentTutor = Tutors[currentIndex];

  return (
    <section className='py-16 lg:py-24 bg-background'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
            Our Team
          </span>
          <h1 className='font-display font-bold text-3xl sm:text-4xl text-foreground mt-3'>
            Meet Our Tutors
          </h1>
          <p className='mt-4 text-muted-foreground max-w-xl mx-auto'>
            Expert educators dedicated to helping you achieve academic success
          </p>
        </div>

        {/* Carousel */}
        <div 
          className='relative group'
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Tutor Card */}
          <div className='bg-card rounded-2xl border border-border p-8 sm:p-10 shadow-soft'>
            <div className='flex flex-col items-center'>
              {/* Profile Image */}
              <div className='w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-primary/20 mb-6'>
                <img 
                  className='w-full h-full object-cover' 
                  src={currentTutor.profileImage} 
                  alt={currentTutor.name}
                />
              </div>

              {/* Name & Title */}
              <h2 
                onClick={toggleShowBio}
                className='font-display font-bold text-xl sm:text-2xl text-foreground cursor-pointer hover:text-primary transition-colors'
              >
                {currentTutor.name}
              </h2>
              <span className='mt-1 text-sm text-muted-foreground font-medium'>
                {currentIndex === 0 ? 'Founder & Tutor' : 'Tutor'}
              </span>

              {/* Modules */}
              <div className='mt-6 flex items-center gap-2 px-4 py-2 bg-muted rounded-full'>
                <BsBook className='w-4 h-4 text-muted-foreground' />
                <span className='text-sm font-medium text-foreground'>
                  {currentTutor.modules}
                </span>
              </div>

              {/* Bio (expandable) */}
              <div className={`overflow-hidden transition-all duration-300 ${showBio ? 'max-h-48 mt-6' : 'max-h-0'}`}>
                <p className='text-muted-foreground text-center leading-relaxed max-w-lg'>
                  {currentTutor.bio}
                </p>
              </div>

              {/* View Bio Button */}
              <button 
                onClick={toggleShowBio}
                className='mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors'
              >
                {showBio ? 'Hide Bio' : 'View Bio'}
              </button>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className='absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 p-3 bg-card rounded-full shadow-soft border border-border hover:shadow-medium hover:border-primary/30 transition-all duration-200 text-foreground'
            aria-label="Previous tutor"
          >
            <BsChevronLeft className="w-5 h-5" />
          </button>

          <button 
            onClick={nextSlide}
            className='absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 p-3 bg-card rounded-full shadow-soft border border-border hover:shadow-medium hover:border-primary/30 transition-all duration-200 text-foreground'
            aria-label="Next tutor"
          >
            <BsChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Tutors.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setShowBio(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentIndex === index 
                  ? 'bg-primary w-6' 
                  : 'bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Go to tutor ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-4 text-sm text-muted-foreground">
          {currentIndex + 1} / {Tutors.length}
        </div>
      </div>
    </section>
  )
}

export default TutorCarousel;
