import React from 'react'
import useFunctions_Sale from '../useFunctions.Sale'
import data from '../data'

export default function Home_Sale() {

    let {
        APIIT
    } = useFunctions_Sale()

    return (
        <div className='relative flex justify-center w-full h-full'>
            <div className='w-[80%] relative pb-[10%]'>
                <div className='w-full text-center'>
                    <p className='text-[42px] font-bold'>Featured Sale</p>
                    <div className='flex justify-center'>
                        <p className='bg-black w-[15vh] h-[3px]'></p>
                    </div>
                </div>
                <div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 py-[5%] '>
                    {APIIT.map((item) => (
                        <div className='relative border md:w-[260px] rounded overflow-hidden bg-white hover:shadow-lg hover:shadow-cyan-500/50 ease-in duration-200'>
                            <div className='absolute top-[5%] w-full z-20'>
                                <span className='bg-blue-500 text-white px-2 py-1 text-[12px] tracking-widest opacity-[0.6]'>NEW</span>
                                <span className='float-right'><i class="bi bi-heart mr-3"></i></span>
                            </div>
                            <div className='md:w-[260px] md:h-[300px]'>
                                <img src={data.IMG + item.v2image} className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                            </div>
                            <div className='relative z-20 p-5 flex'>
                                <div className='w-[80%]'>
                                    <p className='text-[18px] font-bold'>{item.v2Items} {item.v1typeId?.pro_type}</p>
                                    <p className='text-[16px]'>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.v2sprice)}</p>
                                </div>
                                <div className='w-[10%]'>
                                    <button className='border p-2 rounded w-[40px]'><i class="bi bi-bag-heart-fill"></i></button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='relative border md:w-[260px] rounded overflow-hidden bg-white hover:shadow-lg hover:shadow-cyan-500/50 ease-in duration-200'>
                        <div className='absolute top-[5%] w-full z-20'>
                            <span className='bg-red-500 text-white px-2 py-1 text-[12px] tracking-widest opacity-[0.6]'>SALE</span>
                            <span className='float-right'><i class="bi bi-heart mr-3"></i></span>
                        </div>
                        <div className='md:w-[260px] md:h-[300px]'>
                            <img src='https://freebw.com/templates/novas/images/hp-1-featured-11.jpg' className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                        </div>
                        <div className='relative z-20 p-5 flex'>
                            <div className='w-[80%]'>
                                <p className='text-[18px] font-bold'>Ta-bl Side Table</p>
                                <p className='text-[16px]'>₭ 150.000</p>
                            </div>
                            <div className='w-[10%]'>
                                <button className='border p-2 rounded w-[40px]'><i class="bi bi-bag-heart-fill"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='relative border md:w-[260px] rounded overflow-hidden bg-white hover:shadow-lg hover:shadow-cyan-500/50 ease-in duration-200'>
                        <div className='absolute top-[5%] w-full z-20'>
                            <span className='bg-red-500 text-white px-2 py-1 text-[12px] tracking-widest opacity-[0.6]'>SALE</span>
                            <span className='float-right'><i class="bi bi-heart mr-3"></i></span>
                        </div>
                        <div className='md:w-[260px] md:h-[300px]'>
                            <img src='https://freebw.com/templates/novas/images/hp-1-featured-11.jpg' className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                        </div>
                        <div className='relative z-20 p-5 flex'>
                            <div className='w-[80%]'>
                                <p className='text-[18px] font-bold'>Ta-bl Side Table</p>
                                <p className='text-[16px]'>₭ 150.000</p>
                            </div>
                            <div className='w-[10%]'>
                                <button className='border p-2 rounded w-[40px]'><i class="bi bi-bag-heart-fill"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='relative border md:w-[260px] rounded overflow-hidden bg-white hover:shadow-lg hover:shadow-cyan-500/50 ease-in duration-200'>
                        <div className='absolute top-[5%] w-full z-20'>
                            {/* <span className='bg-red-500 text-white px-2 py-1 text-[12px] tracking-widest opacity-[0.6]'>SALE</span> */}
                            <span className='float-right'><i class="bi bi-heart mr-3"></i></span>
                        </div>
                        <div className='md:w-[260px] md:h-[300px]'>
                            <img src='https://freebw.com/templates/novas/images/hp-1-featured-11.jpg' className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                        </div>
                        <div className='relative z-20 p-5 flex'>
                            <div className='w-[80%]'>
                                <p className='text-[18px] font-bold'>Ta-bl Side Table</p>
                                <p className='text-[16px]'>₭ 150.000</p>
                            </div>
                            <div className='w-[10%]'>
                                <button className='border p-2 rounded w-[40px]'><i class="bi bi-bag-heart-fill"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='relative border md:w-[260px] rounded overflow-hidden bg-white hover:shadow-lg hover:shadow-cyan-500/50 ease-in duration-200'>
                        <div className='absolute top-[5%] w-full z-20'>
                            <span className='bg-blue-500 text-white px-2 py-1 text-[12px] tracking-widest opacity-[0.6]'>NEW</span>
                            <span className='float-right'><i class="bi bi-heart mr-3"></i></span>
                        </div>
                        <div className='md:w-[260px] md:h-[300px]'>
                            <img src='https://freebw.com/templates/novas/images/hp-1-featured-11.jpg' className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                        </div>
                        <div className='relative z-20 p-5 flex'>
                            <div className='w-[80%]'>
                                <p className='text-[18px] font-bold'>Ta-bl Side Table</p>
                                <p className='text-[16px]'>₭ 150.000</p>
                            </div>
                            <div className='w-[10%]'>
                                <button className='border p-2 rounded w-[40px]'><i class="bi bi-bag-heart-fill"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='relative border md:w-[260px] rounded overflow-hidden bg-white hover:shadow-lg hover:shadow-cyan-500/50 ease-in duration-200'>
                        <div className='absolute top-[5%] w-full z-20'>
                            {/* <span className='bg-red-500 text-white px-2 py-1 text-[12px] tracking-widest opacity-[0.6]'>SALE</span> */}
                            <span className='float-right'><i class="bi bi-heart mr-3"></i></span>
                        </div>
                        <div className='md:w-[260px] md:h-[300px]'>
                            <img src='https://freebw.com/templates/novas/images/hp-1-featured-11.jpg' className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                        </div>
                        <div className='relative z-20 p-5 flex'>
                            <div className='w-[80%]'>
                                <p className='text-[18px] font-bold'>Ta-bl Side Table</p>
                                <p className='text-[16px]'>₭ 150.000</p>
                            </div>
                            <div className='w-[10%]'>
                                <button className='border p-2 rounded w-[40px]'><i class="bi bi-bag-heart-fill"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='relative border md:w-[260px] rounded overflow-hidden bg-white hover:shadow-lg hover:shadow-cyan-500/50 ease-in duration-200'>
                        <div className='absolute top-[5%] w-full z-20'>
                            <span className='bg-red-500 text-white px-2 py-1 text-[12px] tracking-widest opacity-[0.6]'>New 50%</span>
                            <span className='float-right'><i class="bi bi-heart mr-3"></i></span>
                        </div>
                        <div className='md:w-[260px] md:h-[300px]'>
                            <img src='https://freebw.com/templates/novas/images/hp-1-featured-11.jpg' className='relative z-10 object-cover w-full h-full scale-100 hover:scale-110 ease-in duration-200' />
                        </div>
                        <div className='relative z-20 p-5 flex'>
                            <div className='w-[80%]'>
                                <p className='text-[18px] font-bold'>Ta-bl Side Table</p>
                                <p className='text-[16px]'>₭ 150.000</p>
                            </div>
                            <div className='w-[10%]'>
                                <button className='border p-2 rounded w-[40px]'><i class="bi bi-bag-heart-fill"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center text-center'>
                    <button className='px-7 py-3 border'>View All <i class="bi bi-arrow-right-short"></i></button>
                </div>
            </div>
        </div>
    )
}
