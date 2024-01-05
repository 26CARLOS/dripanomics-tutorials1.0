import React from 'react'
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";

const Howto = () => {
  return (
    <div className=''>
        <div className='text-black text-center py-2'>
            <h1 className='text-4xl font-bold'>HOW TO GET STARTED?</h1>
        </div>
        <div className='w-full py-[5rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <div className='flex flex-col items-center text-6xl'>
                    <Bs1CircleFill/>
                </div>
                <h2 className='text-2xl font-bold text-center py-8'>Request a tutor</h2>
                    <p className='py-2 border-b mx-8 mt-8'>Provide your details and our consultants will contact you shortly.</p>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <div className='flex flex-col items-center text-6xl'>
                <Bs2Circle/>
                </div>
                <h2 className='text-2xl font-bold text-center py-8'>Make a payment</h2>
                <p className='py-2 border-b mx-8 mt-8'>Receive an instant quote and make a payment via EFT or an ATM cash deposit.</p>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <div className='flex flex-col items-center text-6xl'>
                    <Bs3CircleFill/>
                </div>                
                <h2 className='text-2xl font-bold text-center py-8'>You're all set!</h2>
                <p className='py-2 border-b mx-8 mt-8'>Your tutor will contact you and lessons will begin at your earliest convenience.</p>
            </div>
        
        </div>
        </div>
    </div>
    
  )
}

export default Howto