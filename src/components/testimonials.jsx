import React, { useState, useEffect, useCallback } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
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
    <section className='py-20 lg:py-28 bg-card'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-12'>
          <span className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
            Student Success
          </span>
          <h2 className='font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3'>
            What Our Students Say
          </h2>
          <p className='text-muted-foreground mt-4 max-w-xl mx-auto'>
            Real feedback from students who have improved their grades with Dripanomics Tutorials.
          </p>
        </div>

        {/* Carousel */}
        <div 
          className='relative group'
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Image Container */}
          <div className='relative bg-muted rounded-2xl overflow-hidden shadow-soft'>
            <div className='aspect-square max-w-lg mx-auto p-4'>
              <img 
                className='w-full h-full object-contain rounded-xl transition-opacity duration-500' 
                src={testimonialImages[currentIndex]} 
                alt={`Student testimonial ${currentIndex + 1}`}
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className='absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 bg-card/90 backdrop-blur-sm rounded-full shadow-soft hover:bg-card hover:shadow-medium transition-all duration-200 text-foreground'
            aria-label="Previous testimonial"
          >
            <BsChevronLeft className="w-5 h-5" />
          </button>

          <button 
            onClick={nextSlide}
            className='absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 bg-card/90 backdrop-blur-sm rounded-full shadow-soft hover:bg-card hover:shadow-medium transition-all duration-200 text-foreground'
            aria-label="Next testimonial"
          >
            <BsChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {testimonialImages.slice(0, 10).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentIndex === index 
                  ? 'bg-primary w-6' 
                  : 'bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
          {testimonialImages.length > 10 && (
            <span className="text-xs text-muted-foreground ml-2">
              +{testimonialImages.length - 10} more
            </span>
          )}
        </div>

        {/* Counter */}
        <div className="text-center mt-4 text-sm text-muted-foreground">
          {currentIndex + 1} / {testimonialImages.length}
        </div>
      </div>
    </section>
  )
}

export default Testimonials;
