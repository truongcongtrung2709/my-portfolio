import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlinePhone} from "react-icons/ai"
import {AiOutlineFacebook} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import emailjs from "emailjs-com"

// type FormValues = {

//   name: string, 
//   email: string, 
//   message: string
// }
const Contact = () => {
  
  // const {register, handleSubmit, formState: {errors}} =useForm<FormValues>();
  // const onSubmit = handleSubmit((data)=> {
    // emailjs.sendForm("service_3uz9b7a","template_tk7a46n",data,"bRBLPWN36inD5c5Oe")
    // console.log(data);
    
  // });
  const sendEmail = (data:React.FormEvent<HTMLFormElement>) => {
  data.preventDefault();
  emailjs.sendForm("service_3uz9b7a","template_tk7a46n",data.currentTarget,"bRBLPWN36inD5c5Oe").then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
  data.currentTarget.reset()
  };
  const [isAlert, setIsAlert ] = useState(false)
  const [alert, setAlert] = useState("hidden")
  const handleClick = () =>{
  setIsAlert(!isAlert)
  setAlert("");
  }
  
  return (
    <div id='contact' className='bg-background'>
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
    <form 
    // onSubmit={handleSubmit(onSubmit)}
    onSubmit={sendEmail}
     className="contact-form sm:w-1/2">
    <input name='name'  type="text" placeholder='Your Name' className='w-full rounded-lg p-2 mb-8' required
    // {...register('name', {required:{
    //   value:true,
    //   message:"Please enter your name"
    // }})}
    />
    <input name='email' type="text" placeholder='Your Email' className='w-full rounded-lg p-2 mb-8' required
    // 
    />
    <textarea name='message'  placeholder='Your Message' rows={4} cols={50} className='w-full rounded-lg p-4' required
  //    {...register('message', {required:{
  //     value:true,
  //     message:"Please enter your Message"

  //   },
    
  // },
  //   )}
    />
    {/* {errors.email && <span>{errors.email.message}</span>} */}
    <div className='text-center md:text-left'>
    <button onClick={handleClick} type='submit' className='bg-red text-white p-4 rounded-xl my-8 '>Send</button>
    <div className={`${alert} bg-primary border-t border-b border-blue-500 text-500 px-4 py-3`} role="alert">
  <p className="font-bold">Message successfully sent</p>
</div>
    </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Contact