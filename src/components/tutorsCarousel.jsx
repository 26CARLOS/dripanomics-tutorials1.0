import React,{useState} from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs';
import Asonele from '../assets/Asonele.jpg';
import Bongiwe from '../assets/Bongiwe.jpg';
import Pierrette from '../assets/Pierrette.jpg';
import Reitumetse from '../assets/Reitumetse.jpg';
import Joachim from '../assets/Joachim.jpg';
import Remofilwe from '../assets/Remofilwe.jpg';
import Zandile from '../assets/Zandile.jpg';


const Tutors =[
    {profileImage:Remofilwe,
        name:'Remofilwe Sekgobela',
        modules:'CEO & Founder',
        bio:'',
    },

    {profileImage:Asonele,
    name: 'Asonele Mkatshane',
    modules:'Economics 1A & Economics 1B',
    bio:'I am a second-year University of Johannesburg Bachelor of Commerce student majoring in economics and econometrics. I have successfully completed my first year with 10 distinctions and an average percentage of 80%. I have also completed my training under the personal development program, and through it, I was able to put my abilities to use by leading a group on a research project for the Mastering of Academic and Professional Skills (MAPS). In addition, the MAPS curriculum taught me the fundamentals of Microsoft Word, Excel, and PowerPoint. In high school, I received leadership training through the Columba Leadership Programme (2021), and I was among the top three performing students in the commerce stream.'
    },

    {profileImage:Pierrette,
    name:'Pierrette Neudibel',
    modules:'Accounting A & Accounting B',
    bio:'I bring a multifaceted skill set to the table, encompassing a solid foundation in computer skills, including proficiency in MS Word, MS PowerPoint, and MS Excel. My adept communication skills, refined through active participation in public speaking during high school, enable me to excel in both verbal and written interactions. With a proven track record of successful team collaboration and goal achievement, particularly during my tenure in the student council, I have honed strong leadership abilities. My experiences have equipped me not only with technical prowess in essential software but also with the interpersonal and strategic decision-making skills crucial for navigating the professional landscape.'
    },

    {profileImage:Bongiwe,
    name:'Bongiwe Xulu',
    modules:'Psychology 1A/1B & Industrial Psychology 1A/1B',
    bio:'I am Bongiwe Xulu, a dedicated third-year BCom Industrial Psychology student at the University of Johannesburg. Passionate about integrating business and psychology, I aim to spark your interest in this dynamic intersection. As a member of the Golden Key International Honour Society, I bring a blend of academic excellence and practical experience in bookkeeping and admin. My volunteer work in diverse environments, from old age homes to aftercare facilities, reflects my commitment to helping individuals with school and homework. Known for my analytical prowess and diligence, I prioritize effectively and believe in the value of striking a balance between work and play. Let me assist you not only in achieving academic goals but also in managing time and exploring personal growth.'
    },

    {profileImage:Reitumetse,
    name:'Reitumetse Mollo',
    modules:'Analytical Techniques 1A & 1B',
    bio:'I am Reitumetse Gift Mollo, known as Reitumetse, with a fervent dedication to education that has spanned five years. My journey in teaching commenced in 2019 during my grade 9 years, evolving into six months of valuable tutoring experience. I possess core strengths in teaching, effective communication, and active listening, fostering a positive and engaging learning environment. Serving as Deputy Head Boy at Town View High School reflects my leadership qualities and commitment to contributing positively to the school community. Committed to making a difference in the lives of students through education, I eagerly anticipate the continuation of my journey as an educator.'
    },

    {profileImage:Joachim,
    name:'Joachim Ismail',
    modules:'Financial Management 1B and Business Management 1A&1B',
    bio:'A highly motivated and detail-oriented BCom Finance student at the University of Johannesburg, seeking a Financial Management Tutoring position to leverage my strong academic background, practical experience,and passion for finance to assist and inspire fellow students in mastering financial concepts.',
    },

    {profileImage:Zandile,
    name:'Zandile Mbele',
    modules:'Marketing 1A&1B',
    bio:'As a Top achiever in consumer studies from my previous high school it sparked an interest in me to apply for the Marketing. As an aspiring chef and a BCom in marketing management student at the University of JOHANNESBURG, I acquired fundamental knowledge of consumer behavior. Consumer Studies has enabled me with the practical abilities to market and produce different products and to think critically as a consumer.I am currently pursuing a skills development program in Excel training at one of the UJ libraries to the benefit of enhancing my computer skills and becoming more technologically savvy which I believe will be valuable to the internship.In the overpopulated and challenging business world, to effectively overcome rivals and any other difficulties, you must care about what you do. As the ideal candidate, I see myself as someone who is eager to take on challenges and wants to be prepared with the required abilities to do so.',
    },
]



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