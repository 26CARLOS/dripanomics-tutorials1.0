import React,{useState} from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs';
import test1 from '../assets/testimonials/test1.jpg'
import test2 from '../assets/testimonials/test2.jpg'
import test3 from '../assets/testimonials/test3.jpg'
import test4 from '../assets/testimonials/test4.jpg'
import test5 from '../assets/testimonials/test5.jpg'
import test6 from '../assets/testimonials/test6.jpg'
import test7 from '../assets/testimonials/test7.jpg'
import test8 from '../assets/testimonials/test8.jpg'
import test9 from '../assets/testimonials/test9.jpg'
import test10 from '../assets/testimonials/test10.jpg'
import test11 from '../assets/testimonials/test11.jpg'
import test12 from '../assets/testimonials/test12.jpg'
import test13 from '../assets/testimonials/test13.jpg'
import test14 from '../assets/testimonials/test14.jpg'
import test15 from '../assets/testimonials/test15.jpg'
import test16 from '../assets/testimonials/test16.jpg'
import test17 from '../assets/testimonials/test17.jpg'
import test18 from '../assets/testimonials/test18.jpg'
import test19 from '../assets/testimonials/test19.jpg'
import test20 from '../assets/testimonials/test20.jpg'
import test21 from '../assets/testimonials/test21.jpg'
import test22 from '../assets/testimonials/test22.jpg'



const testimonialImages = [test1,test2,test3,test4,test5,test6,test7,test8,test9,test10,test11,test12,test13,test14,test15,test16,test17,test18,test19,test20,test21,test22];

const Testimonials = () => {
    const [currentIndex,setCurrentIndex] = useState(0);
    // const [showBio,setShowBio] = useState(false);
    
    const prevSlide =()=>{
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? testimonialImages.length-1:currentIndex-1;
        setCurrentIndex(newIndex);
    };
    
    const nextSlide =()=>{
        const isLast =currentIndex===testimonialImages.length-1;
        const newIndex = isLast?0:currentIndex+1;
        setCurrentIndex(newIndex);
    };
    
    // const toggleShowBio=()=>{
    //     setShowBio(!showBio);
    // }
    
    return(
        < >
        <div className='text-center mt-20'>       
            <h1 className='md:text-6xl sm:text-5xl text-2xl font-bold md:py-6 text-black'>
                Testimonials:
            </h1>
            <p className='text-gray-400'>Have a look at what our students have to say about Dripanomics Tutorials.</p>
        </div>
        <div className='max-w-[1400] w-full m-auto py-6 px-4 relative group'>
            
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
    
                <div className='w-full flex flex-col items-center p-4 my-4 rounded-lg border'>
                    <div className='flex flex-row justify-center items-center w-[450px] h-[450px] transition ease-in-out duration-1000'>
                        <img className='rounded-sm object-scale-down w-[450px] h-[450px]' src={testimonialImages[currentIndex]} alt=''/>
                    </div>
                </div>
    
            </div>
    
            <div onClick={nextSlide} className='block md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft size={30}/>
            </div>
    
            <div onClick={prevSlide} className='bllock md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight  size={30}/>
            </div>
        </div>
        </>
        
      )
    }
    
    export default Testimonials;