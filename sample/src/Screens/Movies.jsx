import React from 'react'
import NavBar from '../LayOut/NavBar'
import FootBar from '../LayOut/FootBar'
import Moviess from '../Components/Colle'
import { Movie } from '../Data/MovieData'
import Baner from '../Components/Home/Baner'


function Movies() {
  return (
    <div className=' bg-main text-white '>
      <NavBar /> 
      <Baner/>
      <div className='mb-6 mt-4'>
        <h2 className='sm:text-xl font-bold text-lg  ml-5'>Popular Movies</h2>
        <div className='relative flex items-center'>
          <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {
              Movie.slice(0, 8).map((mov, ind) => (
                <Moviess key={ind} movie={mov} />
              ))
            }
          </div>
        </div>
      </div>
      <div className='mb-6 mt-4'>
        <h2 className='sm:text-xl font-bold text-lg  ml-5'>Trending</h2>
        <div className='relative flex items-center'>
          <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {
              Movie.slice(0, 8).map((mov, ind) => (
                <Moviess key={ind} movie={mov} />
              ))
            }
          </div>
        </div>
      </div>
      <div className='mb-6 mt-4'>
        <h2 className='sm:text-xl font-bold text-lg  ml-5'>Horer</h2>
        <div className='relative flex items-center'>
          <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {
              Movie.slice(0, 8).map((mov, ind) => (
                <Moviess key={ind} movie={mov} />
              ))
            }
          </div>
        </div>
      </div>
      <FootBar />
    </div>
  )
}

export default Movies