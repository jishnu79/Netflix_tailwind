import React from 'react'
import NavBar from '../LayOut/NavBar'
import FootBar from '../LayOut/FootBar'

function Movies() {
  return (
    <div className=' bg-main text-white'>
        <NavBar/>
       <div className='bg-white text-black'>
       Movies
       </div>
        <FootBar/>
    </div>
  )
}

export default Movies