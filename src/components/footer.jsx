import React from 'react'
import{
FaCopyright,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex flex-col border-t border-gray-200 bg-white py-12 mt-auto'>
        <div className='max-w-[1240px] mx-auto px-4 w-full'>
            <div className='hidden lg:flex flex-col items-center gap-4 mb-8 text-center'>
                <h1 className='text-2xl font-bold text-black tracking-wide'>DRIPANOMICS TUTORIALS.</h1>
                <p className='text-gray-500 max-w-[800px] leading-relaxed'>
                    Empowering Minds, Inspiring Futures - Dripanomics Tutorials is your dedicated partner in academic excellence. Join us on a journey of discovery, where learning knows no bounds. Unleash your potential with our expert tutors and embrace a world of knowledge tailored just for you.
                </p>
            </div>
        </div>
        <div className='flex flex-col items-center text-sm text-gray-400'>
            <div className='flex flex-row justify-center items-center gap-1'>
                <FaCopyright/><p>2026 Dripanomics Tutorials</p>
            </div>
        </div>
    </div>
    

  )
}

export default Footer;