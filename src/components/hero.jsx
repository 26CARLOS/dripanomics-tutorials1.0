import React from 'react';
import {Typewriter} from 'react-simple-typewriter';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='text-black'>
        <div className='max-w-[800px mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' >
            <p className='uppercase text-black font-bold p-2'>
               Enriching the lives of others through education.
            </p>
            {/* <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-black'>
                Grow with Dripanomics.
            </h1> */}
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl font-bold py-4 text-black'>
                    We offer tutoring for 
                </p>
                <div  className='md:text-5xl sm:text-4xl font-bold pl-2 md:pl-4 text-black'>
                    <Typewriter 
                    words={['Accounting', 'HRM', 'ATE', 'Econ', 'Fin-Man', 'Marketing', 'Psychology']} 
                    cursor
                    cursorBlinking
                    typeSpeed={100} 
                    backSpeed={110} 
                    loop={false}/>
                </div>
                
            </div>
            <p className='md:font-2xl text-xl font-bold text-gray-500'>We help you improve your results by giving you a tutoring experience tailored to you.</p>
            <Link to="/gettutor"> <button className='bg-gray-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>Get a Tutor</button></Link>
        </div>
        
    </div>
  )
}

export default Hero;
