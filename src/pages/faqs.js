import React from 'react'
import Accordion from '../components/accordion'

  

function Faqs() {
  return (
  <div>


    <div className='p-4 bg-gray-100 rounded-lg mt-[70]'>
    <Accordion/>
  </div>

  <div className='bg-white text-center'>
    <p className='py-2'>
      If you have any other questions or need further assistance, feel free to contact our support team via
      <a className="px-2 font-bold" href='mailto: dripanomicstutorials@gmail.com'>
        dripanomicstutorials@gmail.com
      </a>
      </p>
  </div>
      
</div>
  )
}

export default Faqs

