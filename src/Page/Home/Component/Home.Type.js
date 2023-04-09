import React, { useState } from 'react'

export default function Home_Type() {

    return (
        <>
            <div className='relative flex justify-center w-full h-full'>
                <div className='w-[80%] relative py-[10%] md:flex grid gap-6'>
                    <div className='relative lg:w-[50vh] lg:h-[50vh] md:w-[30vh] md:h-[30vh] lg:mt-[2vh] overflow-hidden'>
                        <img src='https://freebw.com/templates/novas/images/hp-1-categories-1.jpg' className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                        <p className='absolute z-20 left-0 bottom-[5%] p-2 bg-white'><span className='lg:text-[22px]'>- Lighting</span> - 12 Products</p>
                    </div>
                    <div className='relative lg:w-[50vh] md:w-[30vh] lg:min-h-[55vh] md:min-h-[35vh] overflow-hidden'>
                        <img src='https://freebw.com/templates/novas/images/hp-1-categories-2.jpg' className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                        <p className='absolute z-20 left-0 bottom-[5%] p-2 bg-white'><span className='lg:text-[22px]'>- Furniture</span> - 15 Products</p>
                    </div>
                    <div className='relative lg:w-[50vh] lg:h-[50vh] md:w-[30vh] md:h-[30vh] lg:mt-[2vh] overflow-hidden'>
                        <img src='https://freebw.com/templates/novas/images/hp-1-categories-3.jpg' className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                        <p className='absolute z-20 left-0 bottom-[5%] p-2 bg-white'><span className='lg:text-[22px]'>- Decoration</span> - 20 Products</p>
                    </div>
                </div>
            </div>
        </>
    )
}
