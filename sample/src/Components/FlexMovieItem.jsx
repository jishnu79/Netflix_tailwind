import { FaRegCalendarAlt } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi'
import React from 'react'

function FlexMovieItem({ movie }) {
    return (
        <React.Fragment>
            <div className='flex items-center gap-2'>
                <span className='text-sm font-medium'>
                    {movie.release_date
}
                </span>
            </div>
            <div className='flex items-center gap-2'>
                <FaRegCalendarAlt className='text-subMain w-3 h-3'/>
                <span className='text-sm font-medium'>{movie.vote_count} </span>
            </div>
            <div className='flex items-center gap-2'>
                <BiTime className='text-subMain w-3 h-3'/>
                <span className='text-sm font-medium'>{movie.vote_average
} </span>
            </div>
        </React.Fragment>
    )
}

export default FlexMovieItem