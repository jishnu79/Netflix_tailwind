import React, { useEffect, useState } from 'react'
import NavBar from '../LayOut/NavBar'
import FootBar from '../LayOut/FootBar'
import Moviess from '../Components/Colle'
import Baner from '../Components/Home/Baner'
import Trending from './MovieCollections.jsx/Trending'
import TopRated from '../Components/Home/TopRate'


function Movies() {
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
    <div className=' bg-main text-white '>
      <NavBar />
      <Baner />

     <Trending/>

      <TopRated/>
      
      <FootBar />
    </div>
  )
}

export default Movies