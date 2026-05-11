import React, { useState, useEffect, useCallback } from 'react'
import { BsChevronLeft, BsChevronRight, BsQuote } from 'react-icons/bs';
import test1 from '../assets/testimonials/test1.jpg'
import test2 from '../assets/testimonials/test2.jpg'
import test3 from '../assets/testimonials/test3.jpg'
import test4 from '../assets/testimonials/test4.jpg'
import test5 from '../assets/testimonials/test5.jpg'
import test6 from '../assets/testimonials/test6.jpg'
import test7 from '../assets/testimonials/test7.jpg'
import test8 from '../assets/testimonials/test8.jpg'
import test9 from '../assets/testimonials/test9.jpg'
import test10 from '../assets/testimonials/test10.jpg'
import test11 from '../assets/testimonials/test11.jpg'
import test12 from '../assets/testimonials/test12.jpg'
import test13 from '../assets/testimonials/test13.jpg'
import test14 from '../assets/testimonials/test14.jpg'
import test15 from '../assets/testimonials/test15.jpg'
import test16 from '../assets/testimonials/test16.jpg'
import test17 from '../assets/testimonials/test17.jpg'
import test18 from '../assets/testimonials/test18.jpg'
import test19 from '../assets/testimonials/test19.jpg'
import test20 from '../assets/testimonials/test20.jpg'
import test21 from '../assets/testimonials/test21.jpg'
import test22 from '../assets/testimonials/test22.jpg'
import test23 from '../assets/testimonials/test23.jpg'
import test24 from '../assets/testimonials/test24.jpg'
import test25 from '../assets/testimonials/test25.jpg'
import test26 from '../assets/testimonials/test26.jpg'
import test27 from '../assets/testimonials/test27.jpg'
import test28 from '../assets/testimonials/test28.jpg'
import test29 from '../assets/testimonials/test29.jpg'
import test30 from '../assets/testimonials/test30.jpg'
import test31 from '../assets/testimonials/test31.jpg'
import test32 from '../assets/testimonials/test32.jpg'
import test33 from '../assets/testimonials/test33.jpg'
import test34 from '../assets/testimonials/test34.jpg'
import test35 from '../assets/testimonials/test35.jpg'

const testimonialImages = [
  test1, test2, test3, test4, test5, test6, test7, test8, test9, test10,
  test11, test12, test13, test14, test15, test16, test17, test18, test19, test20,
  test21, test22, test23, test24, test25, test26, test27, test28, test29, test30,
  test31, test32, test33, test34, test35,
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prevSlide = useCallback(() => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? testimonialImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    const isLast = currentIndex === testimonialImages.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className='py-24 lg:py-32 bg-muted'>
      <div className='max-w-6xl mx-auto px-6 lg:px-8'>
        {/* Section Header */}
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <span className="inline-block text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-4">
            Success Stories
          </span>
          <h2 className='text-display-md text-foreground'>
            What Our Students
            <span className='block text-muted-foreground'>Are Saying</span>
          </h2>
          <p className='text-muted-foreground mt-6 max-w-xl mx-auto text-lg'>
            Real feedback from real students who transformed their academic journey with Dripanomics.
          </p>
        </div>

        {/* Carousel */}
        <div 
          className='relative'
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Card */}
          <div className='relative max-w-2xl mx-auto'>
            {/* Quote decoration */}
            <div className="absolute -top-6 left-6 lg:-top-8 lg:-left-8 w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center z-10">
              <BsQuote className="w-8 h-8 text-background rotate-180" />
            </div>

            {/* Image Container */}
            <div className='relative bg-card rounded-3xl overflow-hidden shadow-strong border border-border'>
              <div className='aspect-square sm:aspect-[4/3] lg:aspect-[16/10] p-6 lg:p-10'>
                <img 
                  key={currentIndex}
                  className='w-full h-full object-contain rounded-2xl animate-fade-in' 
                  src={testimonialImages[currentIndex]} 
                  alt={`Student testimonial ${currentIndex + 1}`}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className='absolute left-4 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-card rounded-full shadow-medium border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 text-foreground'
              aria-label="Previous testimonial"
            >
              <BsChevronLeft className="w-5 h-5" />
            </button>

            <button 
              onClick={nextSlide}
              className='absolute right-4 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-card rounded-full shadow-medium border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 text-foreground'
              aria-label="Next testimonial"
            >
              <BsChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="h-1 bg-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-foreground rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / testimonialImages.length) * 100}%` }}
              />
            </div>
            <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
              <span>{currentIndex + 1} of {testimonialImages.length}</span>
              <button 
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="hover:text-foreground transition-colors"
              >
                {isAutoPlaying ? 'Pause' : 'Play'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
