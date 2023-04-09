import React from 'react'

export default function Home_Follow() {
    return (
        <div className='relative flex justify-center w-full h-full'>
            <div className='w-[80%] relative pb-[5%]'>
                <div className='text-center w-full'>
                    <p className='font-bold text-[42px]'>Follow Facebook</p>
                    <p className='text-[18px]'>@Apple Phomsungcan</p>
                </div>
                <div className='grid grid-cols-5 gap-5 py-10'>
                    <div>
                        <a href='https://www.facebook.com/' target='_blank' className='w-[50vh] h-[50vh]'>
                            <img src='https://freebw.com/templates/novas/images/hp-1-ig-1.jpg' className='object-cover' />
                        </a>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/' target='_blank' className='w-[50vh] h-[50vh]'>
                            <img src='https://freebw.com/templates/novas/images/hp-1-ig-2.jpg' className='object-cover' />
                        </a>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/' target='_blank' className='w-[50vh] h-[50vh]'>
                            <img src='https://freebw.com/templates/novas/images/hp-1-ig-3.jpg' className='object-cover' />
                        </a>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/' target='_blank' className='w-[50vh] h-[50vh]'>
                            <img src='https://freebw.com/templates/novas/images/hp-1-ig-4.jpg' className='object-cover' />
                        </a>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/' target='_blank' className='w-[50vh] h-[50vh]'>
                            <img src='https://freebw.com/templates/novas/images/hp-1-ig-5.jpg' className='object-cover' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
