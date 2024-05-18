import React from 'react'
import { data } from './Data/Data'

function FootBar() {
    return (
        <div className='bg-dry py-4 border-2 border-black'>
            <div className='container mx-auto px-2'>
                <div className='grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 xl:ml-40 gap-5 sm-gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
                    {
                        data.map((link, index) => (
                            <div key={index} className='col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-4'>
                                <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5'>{link.title} </h3>
                                <ul className='text-sm '>{/* flex flex-col */}
                                    {
                                        link.link.map((text, inde) => (
                                            <li className='flex items-baseline text-border hover:text-subMain ' key={inde}>
                                                {text.name}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default FootBar