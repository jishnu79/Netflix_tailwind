import React from 'react'
import { FiUser } from 'react-icons/fi'

function Promo() {
    return (
        <div className='my-20 py-10 md:px-20 px-8 bg-dry'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-10 items-center'>
                <div className='flex lg:gap-10 gap-6 flex-col'>
                    <h1 className='text-xl xl:text-3xl capitalize font-medium'>Download Your Movies & Watch Offline.
                        <br /> Enjoy On Your Mobile</h1>
                    <p className='text-text text-sm xl:text-base leading-6 xl:leading-8'>
                        loewmgipsum nwe contet writing for new movies. enjoy this movie
                        loewmgipsum nwe contet writing for new movies. enjoy this movie
                        loewmgipsum nwe contet writing for new movies. enjoy this movie
                        loewmgipsum nwe contet writing for new movies. enjoy this movie
                        loewmgipsum nwe contet writing for new movies. enjoy this movie
                    </p>
                    <div className='flex gap-4 text-sm md:text-lg'>
                        <div className='flex-col bg-black text-subMain px-6 py-3 rounded font-bold'>
                            HD 4K
                        </div>
                        <div className='flex gap-1 bg-black text-subMain px-6 py-3 rounded font-bold'>
                            <FiUser/> 2k
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/image/netflix.jpg" alt="" className='w-full h-full object-contain' />
                </div>
            </div>
        </div>
    )
}

export default Promo