import React from 'react'
import { Link } from 'react-router-dom'
import Accounting from '../assets/accounting.jpg'
import Analytical from '../assets/analytical.jpg'
import AppliedMath from '../assets/appliedMath.jpg'
import Business from '../assets/busMan.jpg'
import CompSci from '../assets/compSci.jpg'
import Economics from '../assets/economics.jpg'
import FinMan from '../assets/finMan.jpg'
import HR from '../assets/humanRes.jpg'
import Industrial from '../assets/industrial.jpg'
import Marketing from '../assets/marketing.jpg'
import Psychology from '../assets/psychology.jpg'


const ModuleCards = () => {
  return (
    <div className=''>
    <div className='text-black text-center py-2'>
        <h1 className='text-4xl font-bold'>Modules  Offer:</h1>
        <p className='px-2 py-2 text-gray-500'> The wide variety of modules we tutor.</p>
    </div>
    <div className='w-full py-[5rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>

            <div className='flex flex-col items-center text-6xl'>
                <img src={Accounting} alt="Accounting" className='rounded-lg'/>
            </div>
            <h2 className='text-2xl font-bold text-center py-8'>Accounting A/B</h2>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={Analytical} alt="Analytical Techniques" className='rounded-lg'/>
            </div>                
            <h2 className='text-2xl font-bold text-center py-8'>Analytical Techniques 1A/B</h2>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={AppliedMath} alt="Applied Mathematics" className='rounded-lg'/>
            </div>
            <div className=''>
            <h2 className='text-2xl font-bold text-center py-8'>Applied Mathematics</h2>
            </div>               
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>       
                <img src={Business} alt="Business Management" className='rounded-lg'/>
            </div>
            <h2 className='text-2xl font-bold text-center py-8'>Business Management 1A/B</h2>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={CompSci} alt="Computer Science" className='rounded-lg'/>
            </div>
            <div className=''>
            <h2 className='text-2xl font-bold text-center py-8'>Computer Science 1A/B</h2>
            </div>               
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={Economics} alt="Economics" className='rounded-lg'/>
            </div>                
            <h2 className='text-2xl font-bold text-center py-8'>Economics 1A/B</h2>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={FinMan} alt="Financial Management" className='rounded-lg'/>
            </div>                
            <h2 className='text-2xl font-bold text-center py-8'>Financial-Management 1A/B</h2>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={HR} alt="Human Resources" className='rounded-lg'/>
            </div>                
            <h2 className='text-2xl font-bold text-center py-8'>Human Resource Management 1A/B</h2>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={Industrial} alt="Industrial Psychology" className='rounded-lg '/>
            </div>                
            <h2 className='text-2xl font-bold text-center py-8'>Industrial Psychlogy 1A/B</h2>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={Marketing} alt="Marketing" className='rounded-lg'/>
            </div>                
            <div className=''>
            <h2 className='text-2xl font-bold text-center py-8'>Marketing 1A/B</h2>
            </div>          
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={Psychology} alt="Psychology" className='rounded-lg'/>
            </div>
            <div className=''>
            <h2 className='text-2xl font-bold text-center py-8'>Psychology 1A/B</h2>
            </div>               
        </div>

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