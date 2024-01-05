import React from 'react'
import { Link } from 'react-router-dom';
import onlineTut from '../assets/onlineTut.jpg';
import girls from '../assets/girls-tutoring.jpg'

const One = () => {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-w[1024px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4  rounded-lg shadow-md ' src={girls} alt="One on one Tutorial"/>
            <div className='flex flex-col justify-center pl-4'>
                <p className='text-gray-400 font-bold'>
                    Face-to-Face Tutoring
                </p>
                <h1 className='text-4xl sm:text-3xl font-bold py-2'>
                    Always at your service.
                </h1>
                <div>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Facere laudantium deserunt nam maiores. Commodi, quam voluptatem harum impedit porro deleniti.
                Neque, quo. Illum nulla iste aliquid sit deleniti tempore ut.
                </p>
                </div> 
                <div className='flex justify-end'>
                <Link to="/gettutor"> <button className='hidden lg:flex justify-center bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-gray-400 hover:scale-105 duration-300'>Get a Tutor</button></Link>
                </div>
            </div>
        </div>
        <div className='max-w[1024px] mx-auto grid md:grid-cols-2 py-6'>
            <div className='flex flex-col justify-center pl-4 pr-2 '>
                <p className='text-gray-400 font-bold'>
                    Online Tutoring
                </p>
                <h1 className='text-4xl sm:text-3xl font-bold py-2'>
                    Anywhere.
                </h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Facere laudantium deserunt nam maiores. Commodi, quam voluptatem harum impedit porro deleniti.
                Neque, quo. Illum nulla iste aliquid sit deleniti tempore ut.
                </p>
                <div className='flex justify-start'>
                <Link to="/gettutor"><button className='hidden lg:flex justify-center bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-gray-400 hover:scale-105 duration-300'>Get a Tutor</button></Link>
                </div>
            </div>
            <img className='w-[500px] mx-auto my-4 rounded-lg shadow-md' src={onlineTut} alt="One on one Tutorial"/>
        </div>
        <div className='w-full flex justify-center text-center'>
        <Link to="/gettutor"><button className=' lg:hidden bg-[black] w-[200px] rounded-md font-medium my-6 md:mx-0 py-3 text-gray-400 hover:scale-105 duration-300'>Get a Tutor</button></Link>
        </div>
    </div>
  )
}

export default One;