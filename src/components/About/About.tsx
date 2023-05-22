import React, { useRef } from 'react'
interface aboutProps {
  titleRef: HTMLDivElement;
}
const About: React.FC<aboutProps> = ({titleRef}) => {
  return (
    <div ref={titleRef} className='max-w-screen-xl mx-auto py-5'>
      <h1 className='text-center'>About Me</h1>
      <div className="flex items-center">
        <img className='w-96 ' src="/images/avatar.jpg" alt="" />
        <p className='bg-primary p-4 rounded-3xl text-center'>Greeting, my name is Trung, I graduated at Hutech University, I'm Frontend Developer, my target is give clients have a new
and perfect experience.
<br />
My Short-term goals is to gain more knowledge and experience.
<br/>
My Long-term goals is become a Full-stack developer and further with higher positions
</p>
      </div>
    </div>
  )
}

export default About