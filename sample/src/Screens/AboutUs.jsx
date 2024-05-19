import React from 'react'
import NavBar from '../LayOut/NavBar'
import FootBar from '../LayOut/FootBar'
import { Movie } from '../Data/MovieData'

function AboutUs() {
  return (
    <div className=' bg-main text-white'>
      <NavBar />
      <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
        <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
          <div className='flex lg:gap-10 gap-6 flex-col'>
            <h1 className='text-xl xl:text-3xl capitalize font-medium'>Lorem ipsum,  known,
              <br /> is dummy  graphic or web designs.</h1>
            <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
              Filler text is text that shares some rem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter.
            </p>
            <div className='flex gap-5 -mt-4 mb-6 items-center'>
              <div className='bg-subMain hover:text-main transition text-white  px-8 py-3 rounded font-medium text-xs sm:text-sm '>
                Read more...
              </div>
            </div>
          </div>
          <div>
            <img src="/image/pop.jpg" alt="" className='w-full h-full object-contain' />
          </div>
        </div>
      </div>
      <FootBar />
    </div>
  )
}

export default AboutUs