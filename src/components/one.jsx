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
                <p className=''>Embark on a personalized learning journey with our Face-to-Face Tutoring service. At Dripanomics, we believe in the power of one-on-one interactions to unlock your full academic potential. Our dedicated tutors are always at your service, providing tailored support that goes beyond the classroom. Whether you're tackling challenging concepts, seeking exam preparation, or simply aiming for academic excellence, our Face-to-Face Tutoring ensures a focused and collaborative environment where your unique learning needs take center stage. Join us, and let's navigate the path to success together, with dedicated support always by your side.
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
                <p className=''>Unlock learning excellence with our Online Tutoring service. Always at your service, our dedicated tutors bring personalized support directly to you. Experience the convenience and effectiveness of one-on-one interactions tailored to your unique learning needs. Whether you're mastering challenging concepts or striving for academic success, our Online Tutoring is here to guide you on your educational journey. Join us, and let's achieve your goals together, with dedicated support always within reach.
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