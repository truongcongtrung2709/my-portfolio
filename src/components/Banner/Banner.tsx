import React from 'react'

const Banner = () => {
  return (
    <div id='banner' className="bg-banner bg-cover bg-bannerSize w-full h-banner">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className='py-80'>
        <p className='text-sm md:text-lg lg:text-2xl mb-6'>Greeting,</p>
        <span className='text-3xl md:text-5xl lg:text-7xl'>My name is <span className='text-primary'>Trung</span></span>
        <p className='text-xl md:text-3xl lg:text-5xl mt-6'>Front-end Developer</p>
        </div>
      </div>
      </div>
     
  )
}

export default Banner