import React, { useEffect, useState } from 'react'
import Movies from '../Movies'

function PoppulerMovie() {
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
    <div className='my-16'>
      <h2 className='sm:text-xl font-bold text-lg  ml-5'>Popular Movies</h2>
      <div className='grid grid-cols-1 sm:mt-12 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 mt-12 gap-10'>
        {
          Movie?.map((movi,ind) => (  
             <Movies key={ind}  movie={movi}/>
          ))
        }
      </div>
    </div>
  )
}

export default PoppulerMovie