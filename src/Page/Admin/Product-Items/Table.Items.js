import React, { useContext } from 'react'
import { Context_Items } from './Product.Items'
import data from './data'
import Form_Items from './Form.Items'

export default function Table_Items() {

  const { API, Delete } = useContext(Context_Items)

  let x = 1

  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="border-2 border-gray-200 rounded-lg dark:border-gray-200">
          <div class="p-2 grid grid-cols-2 gap-4">
            <div class="rounded">
              <p class="text-2xl">ຂໍ້ມູນສີນຄ້າ</p>
            </div>
            <div class="flex justify-end rounded">
              <Form_Items />
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
                  ຮູບພາຍ
                </th>
                <th scope="col" class="px-6 py-3">
                  ປະເພດສີນຄ້າ
                </th>
                <th scope="col" class="px-6 py-3">
                  ສີນຄ້າ
                </th>
                <th scope="col" class="px-6 py-3">
                  ຂະໜາດ
                </th>
                <th scope="col" class="px-6 py-3">
                  ຈຳນວນ
                </th>
                <th scope="col" class="px-6 py-3">
                  ລາຄາ
                </th>
                <th scope="col" class="px-6 py-3">
                  ເງີນລວມ
                </th>
                <th scope="col" class="px-6 py-3">
                  ຈັດການ
                </th>

              </tr>
            </thead>
            <tbody>
              {API.map((item) => (
                <tr class="border-b dark:border-gray-200 text-black hover:bg-gray-200">
                  <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
                    {x++}
                  </th>
                  <td class="px-6 py-4">
                    <img src={data.IMG + item.v2image} className='w-[100px] rounded'/>
                  </td>
                  <td class="px-6 py-4">
                    {item.v1typeId?.pro_type}
                  </td>
                  <td class="px-6 py-4">
                    {item.v2Items}
                  </td>
                  <td class="px-6 py-4">
                    {item.v2size}
                  </td>
                  <td class="px-6 py-4">
                    {item.v2qty}
                  </td>

                  <td class="px-6 py-4">
                    {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.v2sprice)}
                  </td>
                  <td class="px-6 py-4">
                    {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'LAK' }).format(item.v2sprice * item.v2qty)}
                  </td>

                  <td class="px-2 py-4">
                    <button className='py-1 px-2 rounded bg-red-500 text-white mr-2' onClick={() => Delete(item)}><i class="bi bi-trash3-fill"></i> | Delete</button>
                    {/* <Edit_Type Items={item} /> */}
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
