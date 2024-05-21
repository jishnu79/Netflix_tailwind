import Colle from '../../Components/Colle'
import React, { useEffect, useState } from 'react'

function Trending() {
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
    <div className=' mb-6 mt-4'>

      <h2 className='sm:text-xl font-bold text-lg  ml-5'>Trending</h2>
      <div className='relative flex items-center'>
        <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          {
            Movie?.map((mov, ind) => (
              <Colle key={ind} movie={mov} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Trending