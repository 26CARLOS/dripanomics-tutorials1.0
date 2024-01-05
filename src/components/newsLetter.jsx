import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white bg-gray-400 mt-8'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2 my-4'>
                <h1 className='font-medium md:text-4xl sm:text-3x text-2xl'>Want tips and tricks to optimize your studying?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 w-full rounded-md text-black' type='text' placeholder='Enter Email address'></input>
                    <div className='mt-2'>
                    <button type='submit' className='bg-black text-gray-400 rounded-md font-medium w-[200px] ml-4 mx-6 py-3'>Notify me!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter;