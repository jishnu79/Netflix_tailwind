import { FaHeart } from 'react-icons/fa'
import React from 'react'

function Movies({ movie }) {
  return (
    <div className='border border-border p-1 hover:scale-105 transition relative rounded overflow-hidden'>
      <div className='w-full'>
        <img src={`/image/movies/${movie.image}`} alt={movie.name}
         className='w-full h-64 object-cover' />
      </div>
      <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 px-4 py-3'> 
        <h3 className='font-semibold'>{movie.name} </h3>
        <button className='h-9 w-9 text-sm flex-colo transition hover:bg-inherit border-2 border-subMain rounded-md bg-subMain text-white'>
          <FaHeart/>
        </button>
      </div>
    </div>
  )
}

export default Movies