import React from 'react'
import Navbar_Admin from '../../../Component/Navbar/Navbar.Admin'
import useFunctions from './useFunctions'

export default function Dashboard() {

    let {
        APITYPE,
        APIUsers,
        APIITEMS
    } = useFunctions()

    return (
        <>
            <Navbar_Admin />
            <div class="p-4 sm:ml-64">
                <div class="border-gray-200 rounded-lg dark:border-gray-700">
                    <div class="grid gap-4 mb-4">
                        <div class="flex items-center h-[70px] px-5 rounded border-rounded bg-gray-800 text-white">
                            <p class="text-2xl">Dashboard</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-4 mb-4">
                        <div class="items-center p-5 rounded bg-gray-50 h-auto dark:bg-gray-800">
                            <p class="text-3xl text-white">{APITYPE.length}</p>
                            <p class="text-xl pb-2 text-gray-400">ປະເພດສີນຄ້າ ທັ້ງໝົດ</p>
                            <p class="text-xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div class="items-center p-5 rounded bg-gray-50 h-auto dark:bg-gray-800">
                            <p class="text-3xl text-white">{APIITEMS.length}</p>
                            <p class="text-xl pb-2 text-gray-400">ລາຍການສີນຄ້າ ທັ້ງໝົດ</p>
                            <p class="text-xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div class="items-center p-5 rounded bg-gray-50 h-auto dark:bg-gray-800">
                            <p class="text-3xl text-white">{APIUsers.length}</p>
                            <p class="text-xl pb-2 text-gray-400">All Users</p>
                            <p class="text-xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                    </div>
                    {/* <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                        <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
