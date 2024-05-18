import React from 'react'
import { FaSearch, FaHeart } from 'react-icons/fa'
import { CgUser } from 'react-icons/cg'

function NavBar() {
    return (
        <div className='bg-main shadow-md sticky top-0 z-20'>
            <div className='container max-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
                <div className='col-span-1 lg:block'>

                    <div className='col-span-1 lg:block '>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmquSprvWMl9rWJi-7pTdXSbIiPB44egZnA&usqp=CAU"
                            className='w-full h-12 object-contain'
                            alt="" />
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
                    <p>Movies</p>
                    <p>About</p>
                    <p>contact</p>
                    <p>Movies</p>
                    <p><FaHeart className='w-8 h-8 ' />
                        <div className='w-5 h-5 flex-col text-center rounded-full text-xs bg-subMain text-white absolute top-5 right-19'>
                            3
                        </div>
                    </p>
                    <p><CgUser className='w-8 h-8' /></p>
                </div>
            </div>
        </div>
    )
}

export default NavBar