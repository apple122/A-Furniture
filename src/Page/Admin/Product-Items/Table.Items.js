import React, { useContext } from 'react'
import { Context_Items } from './Product.Items'

export default function Table_Items() {
  const { MS, setMS } = useContext(Context_Items)
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div class="border-2 border-gray-200 rounded-lg dark:border-gray-200">
          <div class="p-2 grid grid-cols-2 gap-4">
            <div class="rounded">
              <p class="text-2xl">ຂໍ້ມູນສີນຄ້າ</p>
            </div>
            <div class="flex justify-end rounded">
              {/* <Form_Type /> */}
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
                  ຈັດການ
                </th>

              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>


      </div>
    </>
  )
}
