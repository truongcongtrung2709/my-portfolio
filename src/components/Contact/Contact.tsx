import React from 'react'
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlinePhone} from "react-icons/ai"
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"

const Contact = () => {
  return (
    <div className='bg-background'>
      <div className="max-w-screen-xl mx-auto">
      <h1 className='text-center py-4 mb-6 text-4xl sm:text-6xl '>Contact</h1>
    <div className="sm:flex justify-between items-center">
    <div className="contact-info sm:w-1/2 my-8">
        <a href="" className='gmail flex items-center'>
          <span className='text-red pr-4 text-2xs sm:text-xs md:text-sm' ><AiOutlineMail/></span>
          <span className=' text-2xs sm:text-xs md:text-sm'>truongcongtrung2709@gmail.com</span>
        </a>
        <a href="" className='flex gmail  items-center my-4'>
          <span className='text-red  pr-4 text-2xs  sm:text-xs md:text-sm'><AiOutlinePhone/></span>
          <span className=' text-2xs sm:text-xs md:text-sm'>(+84)778046560</span>
        </a>
        <a className='social flex items-center my-4' href="https://www.facebook.com/truongcotrung/">
            <span className='text-primary pr-4 text-xs  sm:text-2xs md:text-sm'><AiOutlineFacebook/></span>
            <span className=' text-2xs sm:text-xs md:text-sm'>https://www.facebook.com/truongcotrung/</span>
            </a>
        <a className='social flex items-center' href="https://www.facebook.com/truongcotrung/">
            <span className='text-red   pr-4 text-2xs  sm:text-xs md:text-sm'><AiOutlineInstagram/></span>
            <span className=' text-2xs sm:text-xs md:text-sm'>https://www.instagram.com/truongcongtrung/</span>
        </a>
    </div>
    <form className="contact-form sm:w-1/2">
    <input type="text" placeholder='Your Name' className='w-full rounded-lg p-2 mb-8'/>
    <input type="text" placeholder='Your Email' className='w-full rounded-lg p-2 mb-8'/>
    <textarea   placeholder='Your Message' rows={4} cols={50} className='w-full rounded-lg p-4'/>
    <div className='text-center md:text-left'>
    <button className='bg-red text-white p-4 rounded-xl my-8 '>Send</button>
    </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Contact