import React, { useContext } from 'react'
import Form_Type from './Form.Type'
import { Context_Type } from './Product.type'
import Edit_Type from './Edit.type'

export default function Table_Type() {

    const { API, Delete } = useContext(Context_Type)

    let x = 1

    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="border-2 border-gray-200 rounded-lg dark:border-gray-200">
                    <div class="p-2 grid grid-cols-2 gap-4">
                        <div class="rounded">
                            <p class="text-2xl">ປະເພດສີນຄ້າ</p>
                        </div>
                        <div class="flex justify-end rounded">
                            <Form_Type />
                        </div>
                    </div>
                </div>


                <div class="relative overflow-x-auto shadow-md sm:rounded mt-2">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ປະເພດສີນຄ້າ
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ວັນທີ່ບັນທືກ
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ສະຖານະ
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    ຈັດການ
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {API.reverse().map((item) => (
                                <tr class="border-b dark:border-gray-200 text-black">
                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                                        {x++}
                                    </th>
                                    <td class="px-6 py-4">
                                        {item.pro_type}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.pro_curdate}
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td class="px-2 py-4">
                                        <button className='py-1 px-2 rounded bg-red-500 text-white mr-2' onClick={() => Delete(item)}><i class="bi bi-trash3-fill"></i> | Delete</button>
                                        <Edit_Type Items={item}/>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    )
}
