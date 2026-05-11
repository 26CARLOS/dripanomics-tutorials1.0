import React from 'react'
import { Link } from 'react-router-dom'
import Testimonials from './testimonials'
  

const AboutComponent = () => {
  return (
    <div className='flex flex-col items-center text-black py-20 lg:py-32 px-4'>
    <div className='max-w-[800px] w-full mx-auto text-center flex flex-col gap-12' >
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold text-black'>
                Who Are We?
            </h1>
            <p className='px-2 py-4 text-gray-600 leading-relaxed text-justify max-w-[700px]'>
            At Dripanomics, we're not just tutors – we're your dedicated learning allies. Passionate about education, we're a team committed to nurturing inquisitive minds. Our mission goes beyond grades; it's about fostering critical thinking, building confidence, and instilling a lasting love for learning. With expertise and enthusiasm, our tutors are here to illuminate your path to success. Join Dripanomics, where learning transcends the ordinary, and every student is empowered to thrive.
            </p>
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <h1 className='md:text-6xl sm:text-4xl text-3xl font-bold text-black'>
                Modules We Cover:
            </h1>
            <p className='px-2 py-4 text-gray-600 leading-relaxed text-justify max-w-[700px]'>
            At Dripanomics Tutorials, we offer tutoring services across a diverse array of subjects. Whether it's Pyschology, Statistics, Accounting, or any other discipline, our tutors are well-versed and equipped to provide guidance. Explore our comprehensive list of subjects and embark on a journey of academic excellence with us.            </p>
            <Link to='/modules'><button className='hidden md:block bg-black w-[220px] rounded-full shadow-lg font-medium mx-auto my-4 py-3 text-white hover:bg-gray-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300'>View Our Catalog</button></Link>
        </div>
        <div className='mt-16'>
       <Testimonials/>
        </div>
    </div>
</div>
  )
}

export default AboutComponent