import React from 'react'
import {BsPhone,} from 'react-icons/bs'
import { HiOutlineMail } from "react-icons/hi";
import {FaWhatsapp,FaInstagram} from 'react-icons/fa'
 
const ContactUs = () => {
  return (
    <div className='max-w-[800px] w-full h-[50vh] mx-auto text-center flex flex-col items-center  mt-[95px]' >
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-6 text-black'>
            Contact Us:
        </h1>
        <div className='flex justify-center items-center'>
            <p className='px-2 py-2 text-gray-500 text-justify'>
                Get in touch with us, we would love to hear from you.
            </p>
        </div>
        <div className='text-normal md:text-2xl'>
            <h2>Contact Info:</h2>
            <div className='flex flex-row justify-center mt-2'>
                <BsPhone className='' size={30}/><p>: <a href='tel:+27793388864'>079 338 8864</a></p>
            </div>

            <div className='flex flex-row justify-center mt-2'>
                <FaWhatsapp className='' size={30}/><p>: <a href="https://wa.me/27793388864"> 079 338 8864</a></p>
            </div>

            <div className='flex flex-row justify-center mt-2'>
                <HiOutlineMail className='' size={30}/><p>: <a href="mailto:dripanomicstutorials@gmail.com ">dripanomicstutorials@gmail.com</a></p>
            </div>

            <div className='flex flex-row justify-center mt-2'>
                <HiOutlineMail className='' size={30}/><p>: <a href="mailto:sekgobelajr@gmail.com ">sekgobelajr@gmail.com</a></p>
            </div>

            <div className='flex flex-row justify-center mt-2'>
                <FaInstagram className='' size={30}/><p>: <a href="https://www.instagram.com/dripanomics.tutorials?igsh=MWhnaDJvb3BkZ3R2MQ">@dripanomics.tutorials</a></p>
            </div>
            
        </div>
    </div>
  )
}

export default ContactUs