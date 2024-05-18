import React from 'react'
import Movies from '../Movies'
import { Movie } from '../../Data/MovieData'

function PoppulerMovie() {
  return (
    <div className='my-16'>
      <h2 className='sm:text-xl font-bold text-lg  ml-5'>Popular Movies</h2>
      <div className='grid grid-cols-1 sm:mt-12 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 mt-12 gap-10'>
        {
          Movie.slice(0, 8).map((mov, ind) => (
            <Movies key={ind} movie={mov}/>
          ))
        }
      </div>
    </div> 
  )
}

export default PoppulerMovie