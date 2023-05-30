import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [itemMenu, setItemMenu] = useState(false)
    function Menu() {
        if (itemMenu === false) {
            setItemMenu(true)
        } else {
            setItemMenu(false)
        }
    }

    const [NavItems, setNavItems] = useState(1)

    return (
        <>
            <div className='p-8'></div>
            <nav class="bg-white fixed w-full z-50 top-0 left-0 border-b border-gray-200">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
                        <span class="self-center text-2xl font-semibold whitespace-nowrap">Featured Sale</span>
                    </a>
                    <div class="flex md:order-2">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                        <button type="button" onClick={Menu} class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${itemMenu === false ? 'hidden' : ''}`}>
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link to={'Home'} class={`block py-2 pl-3 pr-4  md:border-0 border md:hover:bg-white hover:bg-slate-200 md:hover:text-blue-500 ${NavItems == 1 ? 'bg-slate-200 md:text-blue-700' : ''} rounded md:bg-white md:p-0`} onClick={() => setNavItems(1)}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/'} class={`block py-2 pl-3 pr-4 md:border-0 border md:hover:bg-white hover:bg-slate-200 md:hover:text-blue-500 ${NavItems == 2 ? 'bg-slate-200 md:text-blue-700' : ''} rounded md:bg-white md:p-0`} onClick={() => setNavItems(2)}>Page - 1</Link>
                            </li>
                            <li>
                                <Link to={'/'} class={`block py-2 pl-3 pr-4 md:border-0 border md:hover:bg-white hover:bg-slate-200 md:hover:text-blue-500 ${NavItems == 3 ? 'bg-slate-200 md:text-blue-700' : ''} rounded md:bg-white md:p-0`} onClick={() => setNavItems(3)}>Page - 2</Link>
                            </li>
                            <li>
                                <Link to={'/'} class={`block py-2 pl-3 pr-4 md:border-0 border md:hover:bg-white hover:bg-slate-200 md:hover:text-blue-500 ${NavItems == 4 ? 'bg-slate-200 md:text-blue-700' : ''} rounded md:bg-white md:p-0`} onClick={() => setNavItems(4)}>Page - 3</Link>
                            </li>
                            <li>
                                <Link to={'/'} class={`block py-2 pl-3 pr-4 md:border-0 border md:hover:bg-white hover:bg-slate-200 md:hover:text-blue-500 ${NavItems == 5 ? 'bg-slate-200 md:text-blue-700' : ''} rounded md:bg-white md:p-0`} onClick={() => setNavItems(5)}>Page - 4</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}
