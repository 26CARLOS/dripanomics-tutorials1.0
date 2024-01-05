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
import HealthPsych from '../assets/HealthPsych.jpg'
import ReseatchModules from '../assets/ResearchModules.jpg'
import Economics2C from '../assets/Economics2C.jpg';
import Economics2D from '../assets/economics2D.jpg'
import tax200 from '..//assets/tax200.jpg';
import AccStudies from '../assets/AccountingStudies.jpg';

const ModuleCards = () => {
  return (
    <div className=' mt-[95px]'>
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
            <h2 className='text-2xl font-bold text-center py-8'>Accounting A/B & 1A/1B</h2>
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

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={HealthPsych} alt="Health Psychology" className='rounded-lg'/>
            </div>
            <div className=''>
            <h2 className='text-2xl font-bold text-center py-8'>Psychology 2C</h2>
            </div>               
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={ReseatchModules} alt="Research Modules" className='rounded-lg'/>
            </div>
            <div className=''>
            <h2 className='text-2xl font-bold text-center py-8'>Research Modules</h2>
            </div>               
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={tax200} alt="Taxation" className='rounded-lg'/>
            </div>
            <div className=''>
            <h2 className='text-2xl font-bold text-center py-8'>Taxation 200</h2>
            </div>               
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={Economics2C} alt="Economics" className='rounded-lg'/>
            </div>
            <div className=''>
            <h2 className='text-2xl font-bold text-center py-8'>Economics 2C</h2>
            </div>               
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={Economics2D} alt="Economics" className='rounded-lg'/>
            </div>
            <div className=''>
            <h2 className='text-2xl font-bold text-center py-8'>Economics 2D</h2>
            </div>               
        </div>


        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <div className='flex flex-col items-center text-6xl'>
            <img src={AccStudies} alt="ccounting Studies" className='rounded-lg'/>
            </div>
            <div className=''>
            <h2 className='text-2xl font-bold text-center py-8'>Accounting Studies 200</h2>
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