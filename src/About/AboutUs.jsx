import React from 'react'
import Vision from './Vision'
import Approach from './Approach'

const AboutUs = () => {
  return (
    <div className='pt-20'>
      <div>
        <h1 className='font-bold text-4xl text-center'>
            About <span className='text-blue-900'>Us</span>
        </h1>
      </div>
      <Vision/>
      <Approach/>
    </div>
  )
}

export default AboutUs
