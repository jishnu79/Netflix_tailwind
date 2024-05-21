import { FaSearch, FaHeart } from 'react-icons/fa'
import { CgUser } from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

function NavBar() {
  let [open, setOpen] = useState(false);
  const hover = 'hover:text-subMain transitions text-white'
  const Hover = ({ isActive }) => isActive ? 'text-subMain' : hover
  return (

    <div className='bg-main shadow-md sticky top-0 z-20'>
      <div className='container max-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
        <div className='col-span-1 lg:block'>

          <div className='col-span-1 lg:block hidden'>
            <Link to="/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmquSprvWMl9rWJi-7pTdXSbIiPB44egZnA&usqp=CAU"
                className='w-full h-12 object-contain  '
                alt="" />
            </Link>
          </div>
          <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer lg:hidden xl:hidden w-7 h-7 text-white'>
            {
              open ? <XMarkIcon /> : <Bars3BottomRightIcon />
            }
          </div>
        </div>
        <div className='col-span-3 ' >
          <form action="" className='w-4/5 sm:w-4/5 text-sm bg-dryGray rounded flex gap-4'>
            <button className='bg-subMain w-12 flex-colo h-12 rounded text-white '
              type='submit'>
              <FaSearch className=' justify-center' />
            </button>
            <input type="text"
              className='font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black'
              placeholder='Search movie from here' />
          </form>
        </div>

        <div className={` col-span-3 font-medium text-sm  xl:gap-14 2xl:gap-19 justify-between lg:flex xl:justify-end items-center ${open ? 'mt-5 sm:ml-5 sm:gap-30 flex' : 'hidden'}`}>
          <NavLink to='/movies' className={Hover}>
            Movies
          </NavLink>
          <NavLink to='/about-us' className={Hover}>
            About-Us
          </NavLink>
          <NavLink to='/contact-us' className={Hover}>
            Contact-Us
          </NavLink>
          <FaHeart className='text-white w-8 h-8' />
          <p><CgUser className='w-8 h-8 text-white' /></p>
        </div>
      </div>
    </div>

  )
}

export default NavBar
// const hover = 'hover:text-subMain transitions text-white'
// const Hover = ({ isActive }) => isActive ? 'text-subMain' : hover
{/* <div className='bg-main shadow-md sticky top-0 z-20'>
    <div className='container max-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
        <div className='col-span-1 lg:block'>

            <div className='col-span-1 lg:block '>
                <Link to="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmquSprvWMl9rWJi-7pTdXSbIiPB44egZnA&usqp=CAU"
                        className='w-full h-12 object-contain'
                        alt="" />
                </Link>
            </div>
        </div>
        <div className='col-span-3' >
            <form action="" className='w-full text-sm bg-dryGray rounded flex gap-4'>
                <button className='bg-subMain w-12 flex-colo h-12 rounded text-white '
                    type='submit'>
                    <FaSearch className=' justify-center' />
                </button>
                <input type="text"
                    className='font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black'
                    placeholder='Search movie from here' />
            </form>
        </div>
        <div className='col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-19 justify-between lg:flex xl:justify-end items-center'>

            <NavLink to='/movies' className={Hover}>
                Movies
            </NavLink>
            <NavLink to='/about-us' className={Hover}>
                About-Us
            </NavLink>
            <NavLink to='/contact-us' className={Hover}>
                Contact-Us
            </NavLink>
            <FaHeart className='w-8 h-8' />
            <p><CgUser className='w-8 h-8' /></p>
        </div>
    </div>
</div> */}