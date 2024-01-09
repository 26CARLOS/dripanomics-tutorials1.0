import React,{useState} from 'react'
import { BsChevronCompactLeft,BsChevronCompactRight } from 'react-icons/bs';
import Asonele from '../assets/Asonele.jpg';
import Bongiwe from '../assets/Bongiwe.jpg';
import Pierrette from '../assets/Pierrette.jpg';
import Reitumetse from '../assets/Reitumetse.jpg';
import Joachim from '../assets/Joachim.jpg';
import Remofilwe from '../assets/Remofilwe.jpg';
import Zandile from '../assets/Zandile.jpg';
import Lindokuhle from '../assets/Lindokuhle.jpg';
import Miesie from '../assets/Miesie.jpg';
import Sphesihle from '../assets/Spesihle.jpg';
import Rorisang from '../assets/Rorisang.jpg';
import Lungile from '../assets/Lungile.jpg';
import Koketso from '../assets/Koketso.jpg';


const Tutors =[
    {profileImage:Remofilwe,
        name:'Remofilwe Sekgobela',
        modules:'Accounting 1A/1B',
        bio:'I am Remofilwe Kagiso Sekgobela, founder and CEO of Dripanomics Tutorials, and a former top-performing matric student at Curro Academy Pretoria in 2021. Despite challenges like Covid-19 restrictions and load shedding, I achieved academic excellence, securing a fully paid bursary for 2022-2024. As a dedicated and results-driven educator, I have a proven track record in fostering academic excellence, particularly in accounting. My success lies in providing targeted support to struggling students, facilitating a deeper understanding of complex concepts. I hold distinctions in my BCom in Business Management from the University of Johannesburg, reflecting my commitment to academic achievement. I possess strong communication, conflict management, planning, organizing, and writing skills, making me an ideal candidate for any business or academic opportunity.',
    },

    {profileImage:Asonele,
    name: 'Asonele Mkatshane',
    modules:'Economics 1A/1B',
    bio:'I am a second-year University of Johannesburg Bachelor of Commerce student majoring in economics and econometrics. I have successfully completed my first year with 10 distinctions and an average percentage of 80%. I have also completed my training under the personal development program, and through it, I was able to put my abilities to use by leading a group on a research project for the Mastering of Academic and Professional Skills (MAPS). In addition, the MAPS curriculum taught me the fundamentals of Microsoft Word, Excel, and PowerPoint. In high school, I received leadership training through the Columba Leadership Programme (2021), and I was among the top three performing students in the commerce stream.'
    },

    {profileImage:Pierrette,
    name:'Pierrette Neudibel',
    modules:'Accounting A/B',
    bio:'I bring a multifaceted skill set to the table, encompassing a solid foundation in computer skills, including proficiency in MS Word, MS PowerPoint, and MS Excel. My adept communication skills, refined through active participation in public speaking during high school, enable me to excel in both verbal and written interactions. With a proven track record of successful team collaboration and goal achievement, particularly during my tenure in the student council, I have honed strong leadership abilities. My experiences have equipped me not only with technical prowess in essential software but also with the interpersonal and strategic decision-making skills crucial for navigating the professional landscape.'
    },

    {profileImage:Bongiwe,
    name:'Bongiwe Xulu',
    modules:'Psychology 1A/1B & Industrial Psychology 1A/1B',
    bio:'I am Bongiwe Xulu, a dedicated third-year BCom Industrial Psychology student at the University of Johannesburg. Passionate about integrating business and psychology, I aim to spark your interest in this dynamic intersection. As a member of the Golden Key International Honour Society, I bring a blend of academic excellence and practical experience in bookkeeping and admin. My volunteer work in diverse environments, from old age homes to aftercare facilities, reflects my commitment to helping individuals with school and homework. Known for my analytical prowess and diligence, I prioritize effectively and believe in the value of striking a balance between work and play. Let me assist you not only in achieving academic goals but also in managing time and exploring personal growth.'
    },

    {profileImage:Reitumetse,
    name:'Reitumetse Mollo',
    modules:'Analytical Techniques 1A/1B',
    bio:'I am Reitumetse Gift Mollo, known as Reitumetse, with a fervent dedication to education that has spanned five years. My journey in teaching commenced in 2019 during my grade 9 years, evolving into six months of valuable tutoring experience. I possess core strengths in teaching, effective communication, and active listening, fostering a positive and engaging learning environment. Serving as Deputy Head Boy at Town View High School reflects my leadership qualities and commitment to contributing positively to the school community. Committed to making a difference in the lives of students through education, I eagerly anticipate the continuation of my journey as an educator.'
    },

    {profileImage:Joachim,
    name:'Joachim Ismail',
    modules:'Financial Management 1B & Business Management 1A&1B',
    bio:'A highly motivated and detail-oriented BCom Finance student at the University of Johannesburg, seeking a Financial Management Tutoring position to leverage my strong academic background, practical experience,and passion for finance to assist and inspire fellow students in mastering financial concepts.',
    },

    {profileImage:Zandile,
    name:'Zandile Mbele',
    modules:'Marketing 1A/1B',
    bio:'As a Top achiever in consumer studies from my previous high school it sparked an interest in me to apply for the Marketing. As an aspiring chef and a BCom in marketing management student at the University of JOHANNESBURG, I acquired fundamental knowledge of consumer behavior. Consumer Studies has enabled me with the practical abilities to market and produce different products and to think critically as a consumer.I am currently pursuing a skills development program in Excel training at one of the UJ libraries to the benefit of enhancing my computer skills and becoming more technologically savvy which I believe will be valuable to the internship.In the overpopulated and challenging business world, to effectively overcome rivals and any other difficulties, you must care about what you do. As the ideal candidate, I see myself as someone who is eager to take on challenges and wants to be prepared with the required abilities to do so.',
    },

    {profileImage:Lindokuhle,
    name:'Lindokuhle',
    modules:'Business Information Systems 2A/2B & Accounting 2A/2B',
    bio:'I am Lindokuhle, and I see tutoring as a profound learning experience where I share academic insights and strategies for growth. As an aspiring serial entrepreneur, this venture is my initial step towards refining crucial skills like effective communication and persuasion. While acknowledging imperfections, particularly in time management, I recognize this tutoring opportunity as a chance to contribute to something greater than myself. With confidence as my ally, I approach challenges optimistically, viewing failure not as a setback but a stepping stone for improvement. I embrace the chance to stumble and learn in front of others, understanding it is through these experiences that true growth occurs.',
    },

    {profileImage:Miesie,
    name:'Miesie Moloto',
    modules:'Psychology 2C & Research Modules',
    bio:'I am Miesie Moloto, a Golden Key recipient committed to academic excellence. With a cum laude degree and proficiency in Microsoft PowerPoint and Word, I offer guidance in creating impactful presentations and refining document creation skills. My tutoring philosophy prioritizes a collaborative and supportive learning environment, aiming to instill values of leadership and excellence in students. Excited about the opportunity, I look forward to mutual growth in navigating academics and enhancing computer proficiency.',
    },

    {profileImage:Sphesihle,
    name:'Sphesihle Nkosi',
    modules:'Economics 2C&2D',
    bio:'I am Sphesihle Nkosi, a dedicated member of the Golden Key International Honour Society since 2022, driven by a commitment to academic excellence and a passion for nurturing talent. My adaptable approach ensures personalized tutoring sessions tailored to your unique learning style. With honed leadership skills, I am here to guide and inspire you on your academic journey, aiming to illuminate your path with insights, encouragement, and the knowledge needed for success. Beyond imparting information, I strive to ignite your curiosity, fuel your passion for learning, and empower you to overcome any academic challenge.'
    },

    {profileImage:Rorisang,
    name:'Rorisang Mbele',
    modules:'Mathematical Analysis A',
    bio:'Rorisang Biko Mbele, a dedicated advocate for academic excellence, maintains a 93% overall average and emphasizes the transformative power of patience in education. Passionate about collaborative learning, Rorisang thrives on working with people and has a high level of emotional intelligence to create a supportive learning environment. Viewing challenges as opportunities for growth, Rorisang is committed to leveraging their strengths and experiences to positively impact the academic community.'
},

    {profileImage:Lungile,
    name:'Lungile Kubayi',
    modules:'Basic Maths & Application in Economics & Business',
    bio:'Hello! I am Lungile Kubayi, a passionate advocate for academic excellence and proven leader in education. Achieving Gauteng Top Honors in Accounting and Mathematics, I also excel in MAEB (Mathematics, Accounting, Economics, and Business Studies) disciplines and received the Tshwane North 2022 Accounting Top Achiever award. As a Ujenius and Golden Key member, I am dedicated to continuous learning and community service. With a vision to inspire and contribute positively to academia, I am committed to empowering others to reach their full potential.',
    },

    {profileImage:Koketso,
    name:'Koketso Mathole',
    modules:'Computer Science 1A & Applied Mathematics',
    bio:'Koketso B. Mathole, a fourth-year student at the University of Johannesburg pursuing a BSc in Mathematics in Applied Mathematics and Computer Science, is deeply passionate about problem-solving. With a unique fusion of mathematics and programming, particularly in Java and C++, Koketso turns these subjects into engaging hobbies, unlocking a realm of creativity and exhilarating problem-solving. As a dedicated tutor, Koketso aims to nurture minds, foster a love for learning, and instill confidence in tackling academic challenges, offering an educational journey where each session becomes an opportunity for growth and discovery.'
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