import React, { useState, useCallback, useEffect } from 'react'
import { BsChevronLeft, BsChevronRight, BsBook, BsAward } from 'react-icons/bs';
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
    <section className='py-24 lg:py-32 bg-background'>
      <div className='max-w-5xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-3xl mx-auto text-center mb-16 lg:mb-20'>
          <span className="inline-block text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
            Our Team
          </span>
          <h1 className='text-display-md text-foreground'>
            Meet Our Expert
            <span className='block text-muted-foreground'>Tutors</span>
          </h1>
          <p className='mt-6 text-lg text-muted-foreground max-w-xl mx-auto'>
            Dedicated educators committed to your academic success
          </p>
        </div>

        {/* Carousel */}
        <div 
          className='relative'
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Tutor Card */}
          <div className='max-w-2xl mx-auto'>
            <div className='bg-card rounded-3xl border border-border p-8 lg:p-12 shadow-soft'>
              <div className='flex flex-col items-center'>
                {/* Profile Image */}
                <div className='relative'>
                  <div className='w-32 h-32 lg:w-40 lg:h-40 rounded-3xl overflow-hidden ring-4 ring-muted'>
                    <img 
                      className='w-full h-full object-cover' 
                      src={currentTutor.profileImage} 
                      alt={currentTutor.name}
                    />
                  </div>
                  {/* Founder badge */}
                  {currentIndex === 0 && (
                    <div className='absolute -bottom-2 -right-2 w-10 h-10 bg-foreground rounded-xl flex items-center justify-center'>
                      <BsAward className='w-5 h-5 text-background' />
                    </div>
                  )}
                </div>

                {/* Name & Title */}
                <div className='text-center mt-8'>
                  <h2 
                    onClick={toggleShowBio}
                    className='text-2xl lg:text-3xl font-bold text-foreground cursor-pointer hover:opacity-70 transition-opacity'
                  >
                    {currentTutor.name}
                  </h2>
                  <span className='inline-block mt-2 px-4 py-1.5 bg-muted rounded-full text-sm font-medium text-muted-foreground'>
                    {currentIndex === 0 ? 'Founder & Lead Tutor' : 'Expert Tutor'}
                  </span>
                </div>

                {/* Modules */}
                <div className='mt-8 flex items-center gap-3 px-6 py-3 bg-muted rounded-2xl'>
                  <BsBook className='w-5 h-5 text-muted-foreground' />
                  <span className='font-medium text-foreground'>
                    {currentTutor.modules}
                  </span>
                </div>

              {/* Bio (expandable) */}
              <div className={`overflow-hidden transition-all duration-300 ${showBio ? 'max-h-48 mt-6' : 'max-h-0'}`}>
                <p className='text-xs text-muted-foreground text-center leading-relaxed max-w-lg'>
                  {currentTutor.bio}
                </p>
              </div>

                {/* View Bio Button */}
                <button 
                  onClick={toggleShowBio}
                  className='mt-6 text-sm font-semibold text-foreground hover:opacity-70 transition-opacity underline underline-offset-4'
                >
                  {showBio ? 'Hide Bio' : 'View Bio'}
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className='absolute left-0 lg:-left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-card rounded-2xl shadow-medium border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 text-foreground'
            aria-label="Previous tutor"
          >
            <BsChevronLeft className="w-5 h-5" />
          </button>

          <button 
            onClick={nextSlide}
            className='absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-card rounded-2xl shadow-medium border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 text-foreground'
            aria-label="Next tutor"
          >
            <BsChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-10 max-w-md mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-foreground rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / Tutors.length) * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-center mt-3 text-sm text-muted-foreground">
            <span>{currentIndex + 1} of {Tutors.length} tutors</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TutorCarousel;
