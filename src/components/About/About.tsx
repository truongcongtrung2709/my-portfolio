import React from 'react'

const About: React.FC = () => {
  return (
    <div id='about'  className='max-w-screen-xl mx-auto py-5'>
      <h1 className='text-center text-4xl sm:text-6xl'>About Me</h1>
      <div className="flex flex-col sm:flex-row items-center">
        <div className=" w-full h-full">
        <img className='w-96 mx-auto ' src="/images/avatar.jpg" alt="" />
        </div>
        <p className='bg-primary p-4 rounded-3xl text-center md:text-2xl text-sm'>Greeting, my name is Trung, I live in Ho Chi Minh city, VietNam. I graduated at Hutech University, I'm Frontend Developer, my target is give clients have a new
and perfect experience.
<br />
My Short-term goals is to gain more knowledge and experience.
<br/>
My Long-term goals is become a Full-stack developer and further with higher positions
</p>
      </div>
      <div className="btn-cv text-center m-6">
<a href='https://drive.google.com/file/d/1b6J2Nd6IMxInCDWW79mkb0kdRRSslGdI/view?usp=sharing' className='bg-secondary rounded-full p-4  shadow-lg hover:shadow-none transition-all text-sm'>Download My CV</a>
</div>
    </div>
  )
}

export default About