import React, { useState } from 'react'

export default function Home_Slide() {

    const data = [
        {
            "img": 'https://freebw.com/templates/novas/images/hp-1-slide-bg-1.jpg'
        },
        {
            "img": 'https://freebw.com/templates/novas/images/hp-1-slide-bg-2.jpg'
        },
        {
            "img": 'https://freebw.com/templates/novas/images/hp-1-slide-bg-3.jpg'
        }
    ]

    const [Page, nextPage] = useState(0)
    function scrollleft() {
        const isFirstSlide = Page === 0
        const newIndex = isFirstSlide ? data.length - 1 : Page - 1
        nextPage(newIndex)
    }

    function scrollright() {
        const islanSlide = Page === data.length - 1
        const newIndex = islanSlide ? 0 : Page + 1
        nextPage(newIndex)
    }

    return (
        <>
            <div className='relative flex justify-center w-full h-full'>
                <div className='w-[90%] relative'>
                    <div className='relative z-10 object-cover'>
                        {data.map((item, index) => (
                            index == Page ? <img data-aos="fade-left" src={item.img} /> : ''
                        ))}
                    </div>
                    <div className='w-full p-2 absolute top-[20%] z-20 text-center text-white'>
                        <p className='lg:text-[22px] font-bold'>BEST SELLERS</p>
                        <p className='lg:text-[62px] md:text-[42px]'><span className='font-bold'>SOFA</span> COLLECTION</p>
                    </div>
                    <div className='p-2 md:absolute right-[2%] lg:bottom-[5%] bottom-[2%] z-20 text-center'>
                        <button className='border lg:p-2 mr-5' onClick={scrollleft}><i class="bi bi-chevron-compact-left"></i></button>
                        <span className='font-bold lg:text-[52px] text-[28px]'>{Page + 1}</span>
                        <span className='font-bold text-[22px]'>/ {data.length}</span>
                        <button className='border lg:p-2 ml-5' onClick={scrollright}><i class="bi bi-chevron-right"></i></button>
                    </div>

                </div>
            </div>
        </>
    )
}
