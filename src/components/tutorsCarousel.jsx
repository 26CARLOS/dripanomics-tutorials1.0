import React,{useState} from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs';
import Tutors from './TutorData.js'



const TutorCarousel = () => {
const [currentIndex,setCurrentIndex] = useState(0);
const [showBio,setShowBio] = useState(false);

const prevSlide =()=>{
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? Tutors.length-1:currentIndex-1;
    setCurrentIndex(newIndex);
};

const nextSlide =()=>{
    const isLast =currentIndex===Tutors.length-1;
    const newIndex = isLast?0:currentIndex+1;
    setCurrentIndex(newIndex);
};

const toggleShowBio=()=>{
    setShowBio(!showBio);
}

return(
    <div className='max-w-[1400] w-full m-auto py-6 px-4 relative group'>

        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

            <div className='w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <div className='flex flex-col items-center w-25 h-25 hover:scale-150'>
                    <img className='rounded-full object-cover w-20 h-20' src={Tutors[currentIndex].profileImage} alt=''/>
                </div>
                <h2 onClick={toggleShowBio} className='text-sm md:text-2xl font-medium text-center py-8 cursor-pointer'>{Tutors[currentIndex].name}</h2>
                {currentIndex===0 ? <p className='text-sm'>Founder & Tutor</p>:<p className='text-sm'>Tutor</p>}
                <p className='text-md py-2 border-b mx-8 mt-8 font-normal'>{Tutors[currentIndex].modules}</p>
            </div>

        </div>

        <div onClick={nextSlide} className='block md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft size={30}/>
        </div>

        <div onClick={prevSlide} className='bllock md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight  size={30}/>
        </div>

        <div className='flex justify-center items-center text-sm'>
            {showBio && <p className='px-2 text-gray-500 text-justify text-'>{Tutors[currentIndex].bio}</p>}
        </div>
         
    </div>
  )
}

export default TutorCarousel;