import React from 'react';
import {Typewriter} from 'react-simple-typewriter';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='text-black flex flex-col py-20 lg:py-32'>
        <div className='max-w-[800px] w-full mx-auto text-center flex flex-col justify-center gap-6 px-4' >
            <p className='uppercase text-black text-xs tracking-widest font-bold p-2'>
               Enriching the lives of others through education.
            </p>
            {/* <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-black'>
                Grow with Dripanomics.
            </h1> */}
            <div className='flex justify-center items-center text-2xl lg:text-4xl'>
                <p className=' font-bold py-4 text-black'>
                    We offer tutoring for 
                </p>
                <div  className='font-bold pl-2 md:pl-2 text-black'>
                    <Typewriter 
                    words={['ACC', 'HRM', 'ATE', 'Econ', 'Psych','Math','BMA','CS','Tax','MAEB' ]} 
                    cursor
                    cursorBlinking
                    typeSpeed={100} 
                    backSpeed={110} 
                    loop={false}/>
                </div>  
            </div>
            <p className='md:font-2xl text-xl font-medium leading-relaxed text-gray-600 max-w-[600px] mx-auto'>We help you improve your results by giving you a tutoring experience tailored to you.</p>
            <Link to="/gettutor"> <button className='bg-black w-[200px] rounded-full shadow-lg font-medium my-6 mx-auto py-3 text-white hover:-translate-y-1 hover:shadow-xl hover:bg-gray-800 transition-all duration-300'>Get a Tutor</button></Link>
        </div>
        
    </div>
  )
}

export default Hero;
