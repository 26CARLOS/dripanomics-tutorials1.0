import React from 'react'
import{
FaCopyright,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex flex-col'>
        <div className='max-w-[1240px] mx-auto py-8 text-gray-300 pl-2 mt-16'>
        <div className='hidden lg:block'>
            <h1 className=' w-full text-2xl text-center font-bold text-black'>DRIPANOMICS TUTORIALS.</h1>
            <p className='lg:block'>Empowering Minds, Inspiring Futures - Dripanomics Tutorials is your dedicated partner in academic excellence. Join us on a journey of discovery, where learning knows no bounds. Unleash your potential with our expert tutors and embrace a world of knowledge tailored just for you</p>
        </div>
        </div>
        <div className='flex flex-col items-center text-sm text-gray-400'>
            <div className='flex flex-row justify-center'>
            <FaCopyright className='mt-1'/><p>2024 Dripanomics Tutorials</p>
            </div>
             <a href='https://instagram.com/carlosjxma'><p className='text-black font-semibold'>Designed & Built by Carlos</p></a>
        </div>
    </div>
    

  )
}

export default Footer;