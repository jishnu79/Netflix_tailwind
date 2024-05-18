import React from 'react'
import NavBar from '../LayOut/NavBar'
import FootBar from '../LayOut/FootBar'

function AboutUs() {
  return (
    <div className=' bg-main text-white'>
        <NavBar/>
       <div className='bg-white text-black'>
       about us
       </div>
        <FootBar/>
    </div>
  )
}

export default AboutUs