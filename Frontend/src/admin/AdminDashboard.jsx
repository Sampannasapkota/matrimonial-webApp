import React from 'react'
import { FaRegCircleUser } from 'react-icons/fa6';
import { MdDashboard, MdNotifications } from 'react-icons/md';

const AdminDashboard = () => {
  return (
    <div id="admin">
      <nav className="flex items-center justify-between h-20 p-8 text-2xl text-white item bg-slate-600">
        <h1 className="flex items-center gap-x-2">
          <MdDashboard />
          Admin Dashboard
        </h1>
        {/* icon box */}
        <div className="flex gap-x-4">
          <MdNotifications />
          <FaRegCircleUser />
        </div>
      </nav>
      {/* Profile Report */}

      <div className="h-screen bg-slate-300">
        <h1 className='mb-5 text-xl font-bold text-center text-red-700'>Profile Reports!</h1>

        <div class="relative overflow-x-auto   shadow-md sm:rounded-lg mx-8  ">
          <table class="w-full text-md text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3">
                  ID
                </th>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Reported By
                </th>
                <th scope="col" class="px-6 py-3">
                  Reported Reason
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd:bg-white even:bg-gray-200 border-b ">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  1
                </th>
                <td class="px-6 py-4">Manish</td>
                <td class="px-6 py-4">Sampanna</td>
                <td class="px-6 py-4">Harrasment</td>
                <td class="px-6 py-4">
                  <a
                    href="#"
                    class=" text-blue-600 hover:underline"
                  >
                    <button className='px-3 mr-2 text-white bg-red-600 rounded-lg'>Block</button>
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard