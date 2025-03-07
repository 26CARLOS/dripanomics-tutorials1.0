import React from 'react'
import { Link} from 'react-router-dom'

const PromoBanner = () => {
  return (
    <div className='flex flex-col justify-center w-full h-[65vh]  md:h-[95vh]  bg-black text-white text-center text-xs md:text-2xl'> 
        <h2 className='py-2 font-bold'>Introducing the future of learning</h2>
        <h1 className='py-2 font-bold md:text-5xl'></h1>
        <p className='py-2 font-thin'>We are happy to announce our brand new innovation.</p>
        <p className='py-2 font-thin'> Our new online learning system better known as the <span className='font-bold'>Dripanomics Grail</span> </p>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div className=''>
                <h3 className='py-6'>What this means</h3>
                <ul className=' text-center font-light'>
                    <li>Unmatched Quality Education</li>
                    <li>All your modules in one place</li>
                    <li>Easier payment process</li>
                    <li>Dedicated Assistance</li>
                </ul>
            </div>
            <div>
                <h3 className='py-6'>Why join now?</h3>
                <ul className=' text-center font-light '>
                    <li>Make massive savings by taking advantage of our bundle offers</li>
                    <li>Stay ahead of your peers, stay on top of your academic game. The Dripanomics way.</li>
                </ul>
            </div>
        </div>
        <Link to="https://app.dripanomicstutorials.com"> <button className='bg-gray-400 w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>Enroll Now!</button></Link>
    </div>
  )
}

export default PromoBanner