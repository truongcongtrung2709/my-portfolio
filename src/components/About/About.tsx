import React from 'react'

const About: React.FC = () => {
  return (
    <div id='about'  className='max-w-screen-xl mx-auto py-5'>
      <h1 className='text-center text-4xl sm:text-6xl'>About Me</h1>
      <div className="flex flex-col sm:flex-row items-center">
        <div className=" w-full h-full">
        <img className='w-96 mx-auto ' src="/images/avatar.jpg" alt="" />
        </div>
        <p className='bg-primary p-4 rounded-3xl text-center md:text-2xl text-sm'>Hi there, my name's Trung, and I live in Ho Chi Minh City, Vietnam. I graduated from Hutech University and work as a Frontend Developer. My main goal is to make sure clients have an awesome and brand-new experience.
<br />
In the short term, I want to learn more and gain more experience. In the long term, I want to become a Full-stack Developer and reach higher positions in my career.
<br/>
Thank you for taking the time to read a little bit about me and what I hope to achieve. I'm really excited about the opportunity to use my skills and knowledge in future projects.
</p>
      </div>
      <div className="btn-cv text-center m-6">
<a href='https://drive.google.com/file/d/1b6J2Nd6IMxInCDWW79mkb0kdRRSslGdI/view?usp=sharing' className='bg-secondary rounded-full p-4  shadow-lg hover:shadow-none transition-all text-sm'>Download My CV</a>
</div>
    </div>
  )
}

export default About