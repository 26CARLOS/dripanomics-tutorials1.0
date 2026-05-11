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

            <div className='w-full shadow-sm border border-gray-100 flex flex-col p-8 my-4 rounded-2xl bg-white transition-all duration-300'>
                <div className='flex flex-col items-center justify-center mx-auto w-24 h-24 rounded-full overflow-hidden'>
                    <img className='object-cover w-full h-full hover:scale-110 transition-transform duration-500' src={Tutors[currentIndex].profileImage} alt=''/>
                </div>
                <h2 onClick={toggleShowBio} className='text-sm md:text-2xl font-semibold text-center py-4 cursor-pointer hover:text-gray-500 transition-colors duration-200'>{Tutors[currentIndex].name}</h2>
                {currentIndex===0 ? <p className='text-sm text-center text-gray-500 font-medium'>Founder & Tutor</p>:<p className='text-sm text-center text-gray-500 font-medium'>Tutor</p>}
                <p className='text-md py-4 border-b border-gray-100 mx-8 mt-4 font-normal text-center'>{Tutors[currentIndex].modules}</p>
            </div>

        </div>

        <div onClick={prevSlide} className='block md:hidden md:group-hover:block absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/10 hover:bg-black/30 transition-colors text-black cursor-pointer shadow-sm'>
            <BsChevronCompactLeft size={30}/>
        </div>

        <div onClick={nextSlide} className='block md:hidden md:group-hover:block absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/10 hover:bg-black/30 transition-colors text-black cursor-pointer shadow-sm'>
            <BsChevronCompactRight  size={30}/>
        </div>

        <div className='flex justify-center items-center text-sm py-4'>
            {showBio && <p className='px-4 text-gray-600 text-justify text-sm leading-relaxed max-w-[600px] animate-fade-in'>{Tutors[currentIndex].bio}</p>}
        </div>
         
    </div>
  )
}

export default TutorCarousel;