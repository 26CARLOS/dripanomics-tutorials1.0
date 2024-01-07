import React from 'react'
import BecomeTutor from '../components/becomeTutor'
import TutorCarousel from '../components/tutorsCarousel'

function Tutors() {
  return (
    <div>
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
      <BecomeTutor />
    </div>

  )
}

export default Tutors