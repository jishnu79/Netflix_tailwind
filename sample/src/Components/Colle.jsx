import React, { useState } from 'react'
import axios from 'axios';
import YouTube from 'react-youtube';

function Colle({ movie }) {
    const [id, setId] = useState('')
    const opts = {
        height: '560',
        width: '500px',
        playerVars: {
            autoplay: 1,
        },
    };
    const trailer = async (id) => { 
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c57089eea8f386ce6e9559670e1ff424&language=en-US`)   ///movie/${id}/videos?api_key=c57089eea8f386ce6e9559670e1ff424&language=en-US
        if (res.data.results.length !== 0) {
            setId(res.data.results[0])
        } else {
            console.log("Array empty");
        }
    }
    console.log(movie);
    return (
        <>
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img
                    className='w-full h-40 block object-cover'
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt='hjhghj' onClick={() => trailer(movie.id)} />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80  hover:opacity-100   text-white'>
                <p  className='white-space-normal  text-xs md:text-sm font-bold flex justify-center items-end -mt-7 hover:mt-0 w-full h-full  text-center '>
                        {movie.original_title}
                    </p>
                    <p  className='white-space-normal  text-xs md:text-sm font-bold flex justify-center items-end -mt-7 hover:mt-0 w-full h-full  text-center '>
                        {movie.original_title}
                    </p>

                </div>

                {id && <YouTube opts={opts} videoId={id.key} />}
            </div>
        </>
    )
}

export default Colle


// {showModal ? (
//     <>
//         <div
//             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//         >
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//                 {/*content*/}
//                 <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                     {/*header*/}

//                     {/*body*/}
//                     <video width="750" height="500" controls autoPlay >
//                         <source src={id.key} type="video/mp4" />
//                     </video>
//                     {/*footer*/}
//                     <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                         <button
//                             className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                             type="button"
//                             onClick={() => setShowModal(false)}
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//     </>
// ) : null}