import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa'

function Movies({ movie }) {
  const [Movie, setState] = useState()
  const apiFun = async () => {
    try {
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=c57089eea8f386ce6e9559670e1ff424")
        .then(res => res.json())
        .then(res => setState(res.results))
    } catch (error) {
      console.log(error);
    }
  }
 
  useEffect(() => {
    apiFun()
  }, [])
  return (
    <div className='border border-border p-1 hover:scale-105 transition relative rounded overflow-hidden'>
      <div className='w-full'>
        <img  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.name}
          className='w-full h-64 object-cover'  />
      </div>
      <div className='absolute flex-btn gap-2 bottom-0 right-0 left-0 bg-main bg-opacity-60 px-4 py-3'>
        <h3 className='font-semibold'>{movie.title} </h3>
        <button className='h-9 w-9 text-sm flex-colo transition hover:bg-inherit border-2 border-subMain rounded-md bg-subMain text-white'>
          <FaHeart />
        </button>
      </div>
    
    </div>
  )
}

export default Movies