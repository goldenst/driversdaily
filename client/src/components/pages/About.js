import React from 'react'
import Preloader from '../layout/Preloader';

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className='my-1'>
      This is a drivers log App
      </p>
      <p className='pg-dark p'>
      <strong>Version</strong>1.0.0
      </p>
      <Preloader />
    </div>
  )
}

export default About


