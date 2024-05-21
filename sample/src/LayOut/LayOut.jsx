import React from 'react'
import NavBar from './NavBar'
import FootBar from './FootBar'
import PoppulerMovie from '../Components/Home/PoppulerMovie'
import Baner from '../Components/Home/Baner'
import Promo from '../Components/Home/Promo'
import TopRated from '../Components/Home/TopRate'

function LayOut() {
  return (
    <div  className='bg-main text-white'>
        <NavBar/> 
        <Baner/> 
        <PoppulerMovie/>
        <Promo/> 
        <TopRated/>
        <FootBar/>
    </div> 
  )
}

export default LayOut