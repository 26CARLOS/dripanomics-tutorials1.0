import React from 'react'
import { Link} from 'react-router-dom'

const PromoBanner = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-[60vh] py-20 lg:py-32 bg-black text-white text-center px-4'> 
        <div className='max-w-[800px] w-full flex flex-col gap-6'>
            <h2 className='text-sm md:text-base font-bold tracking-widest uppercase text-gray-300'>Introducing the future of learning</h2>
            <h1 className='font-bold text-4xl md:text-5xl lg:text-7xl'>Dripanomics Grail</h1>
            <div className='flex flex-col gap-2 md:text-xl text-gray-300 font-light mt-4'>
                <p>We are happy to announce our brand new innovation.</p>
                <p>Our new online learning system better known as the <span className='font-bold text-white'>Dripanomics Grail</span>.</p>
            </div>

            <Link to="https://app.dripanomicstutorials.com" className='mt-8'> 
                <button className='bg-white w-[180px] rounded-full shadow-lg font-medium py-4 text-black hover:-translate-y-1 hover:shadow-xl hover:bg-gray-100 transition-all duration-300'>Enroll Now!</button>
            </Link>
        </div>
    </div>
  )
}

export default PromoBanner