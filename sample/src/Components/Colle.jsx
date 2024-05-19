import React from 'react'

function Colle({ movie }) {
    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img
                className='w-full h-40 block object-cover' 
                src={`/image/movies/${movie.image}`}
                alt='hjhghj'
            />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {movie.name}
                </p>

            </div>
        </div>
    )
}

export default Colle