import React from 'react'
import NavBar from './NavBar'
import FootBar from './FootBar'
import PoppulerMovie from '../Components/Home/PoppulerMovie'
import Baner from '../Components/Home/Baner'
import Promo from '../Components/Home/Promo'

function LayOut() {
  return (
    <div  className=' bg-main text-white'>
        <NavBar/> 
        <Baner/>
        <PoppulerMovie/>
        <Promo/> 
        <FootBar/>
    </div> 
  )
}

export default LayOut