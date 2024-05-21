import React from 'react'

function TopRated() {
  return (
    <div className='mb-6 mt-4'>
        <h2 className='sm:text-xl font-bold text-lg  ml-5'>Popular Movies</h2>
        <div className='relative flex items-center'>
          <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
            {
              Movie?.map((mov, ind) => (
                <Moviess key={ind} movie={mov} />
              ))
            }
          </div>
        </div>
      </div>
  )
}

export default TopRated