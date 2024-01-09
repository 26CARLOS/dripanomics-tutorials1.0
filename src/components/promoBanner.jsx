import React from 'react'
import { Link} from 'react-router-dom'

const PromoBanner = () => {
  return (
    <div className='flex flex-col justify-center w-full h-[65vh]  md:h-[95vh]  bg-black text-white text-center text-xs md:text-2xl'> 
        <h2 className='py-2 font-bold'>Unlock Sucess with Our Exclusive Semester Prep Combo!</h2>
        <h1 className='py-2 font-bold md:text-5xl'>Limited-Time Offer: Enroll Now and Save up to 35%</h1>
        <p className='py-4 font-thin'>Are you ready to ace your semester?</p>
        <p className='py-2 font-thin'>Our Semester Prep Combo is designed to elevate your performance and boost your confidence.</p>
        <p className='py-2 font-thin'> Act fast, as this exclusive offer is available for a <span className='font-bold'>limited time only!</span> </p>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div className=''>
                <h3 className='py-6'>Why Choose Our Combo:</h3>
                <ul className=' text-center font-light'>
                    <li>Unmatched Quality Education</li>
                    <li>Expert Tutors Tailoring Sessions to Your Needs</li>
                    <li>Boost Your Grades and Confidence</li>
                </ul>
            </div>
            <div>
                <h3 className='py-6'>Why the Urgency:</h3>
                <ul className=' text-center font-light '>
                    <li>Save up to 35% when you enrol before 30 April 2024!</li>
                    <li>Don't miss out on this exclusive oppotunity to excel in your exams!</li>
                </ul>
            </div>
        </div>
        <Link to="/gettutor"> <button className='bg-gray-400 w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>Enroll Now!</button></Link>
    </div>
  )
}

export default PromoBanner