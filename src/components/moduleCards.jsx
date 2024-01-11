import React from 'react'
import { Link } from 'react-router-dom'
import moduleData from './moduleData'


const ModuleCards = () => {
  return (
    <div className=' mt-[95px]'>
    <div className='text-black text-center py-2'>
        <h1 className='text-4xl font-bold'>Modules  Offer:</h1>
        <p className='px-2 py-2 text-gray-500'> The wide variety of modules we tutor.</p>
    </div>
    <div className='w-full py-[5rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {moduleData.map((module, id) => (
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300' key={id} value={module}>
                    <div className='flex flex-col items-center text-6xl'>
                    <Link to="/gettutor"><img src={module.picture} alt={module.name} className='rounded-lg'/></Link>
                    </div>
                    <h2 className='text-2xl font-bold text-center py-8'>{module.name}</h2>
                </div>
          
        ))}
        <div className='w-full shadow-xl flex flex-col justify-center p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className=''>
            <h2 className='text-2xl font-bold text-center py-8'>More on the way...</h2>
            </div>               
        </div>

    </div>
    <div className='flex justify-center'>
        <Link to="/gettutor"> <button className='bg-gray-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300'>Get a Tutor</button></Link>
    </div>
    </div>
</div>
  )
}

export default ModuleCards