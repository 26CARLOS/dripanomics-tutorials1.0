import React from 'react'
import { Link } from 'react-router-dom'
import TutorCarousel from './tutorsCarousel'
  

const AboutComponent = () => {
  return (
    <div className='text-black  mt-[95px]'>
    <div className='max-w-[800px] mt-[20px] w-full h-[80vh] mx-auto text-center flex flex-col' >
        <h1 className='md:text-6xl sm:text-5xl text-2xl font-bold md:py-6 text-black'>
            Who Are We?
        </h1>
        <div className='flex justify-center items-center'>
            <p className='px-2 py-2 text-gray-500 text-justify'>
            At Dripanomics, we're not just tutors – we're your dedicated learning allies. Passionate about education, we're a team committed to nurturing inquisitive minds. Our mission goes beyond grades; it's about fostering critical thinking, building confidence, and instilling a lasting love for learning. With expertise and enthusiasm, our tutors are here to illuminate your path to success. Join Dripanomics, where learning transcends the ordinary, and every student is empowered to thrive.
            </p>
        </div>
        <h1 className='md:text-6xl sm:text-4xl text-2xl font-bold md:py-6 text-black'>
            Modules We Cover:
        </h1>
        <div className='flex flex-col justify-center items-center'>
            <p className='px-2 py-2 text-gray-500 text-justify'>
            At Dripanomics Tutorials, we offer tutoring services across a diverse array of subjects. Whether it's Pyschology, Statistics, Accounting, or any other discipline, our tutors are well-versed and equipped to provide guidance. Explore our comprehensive list of subjects and embark on a journey of academic excellence with us.            </p>
            <Link to='/modules'><button className='hidden md:block bg-gray-400 w-[200px] rounded-md font-medium mx-auto my-auto py-3 text-black hover:scale-105 duration-300'>View Our Catalouge</button></Link>
        </div>
    </div>
    <div className='max-w-[800px] w-full mx-auto mt-16 text-center flex flex-col' >
        <h1 className='md:text-6xl sm:text-5xl text-2xl font-bold md:py-6 text-black  mt-[95px] md:mt[10px]'>
            Meet The Team:
            <div className='flex flex-col justify-center items-center'>
            <p className='px-2 py-2 text-gray-500 text-justify text-xs'>Click on a tutor's name to read their bio below their card.</p>
            </div>
            <div>
                <TutorCarousel/>
            </div>
        </h1>
    </div>
    
</div>
  )
}

export default AboutComponent