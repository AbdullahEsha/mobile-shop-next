import React from "react";

const UserDetailsTable = () => {
  return (
    <div>
      <div className="relative overflow-x-auto border">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Otp-1
              </th>
              <th scope="col" className="px-6 py-3">
                Otp-2
              </th>
              <th scope="col" className="px-6 py-3">
                Otp-3
              </th>
              <th scope="col" className="px-6 py-3">
                Code
              </th>
              <th scope="col" className="px-6 py-3">
                Country
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                112233
              </th>
              <td className="px-6 py-4">01531314377</td>
              <td className="px-6 py-4">123456</td>
              <td className="px-6 py-4">123</td>
              <td className="px-6 py-4">234</td>
              <td className="px-6 py-4">445</td>
              <td className="px-6 py-4">20</td>
              <td className="px-6 py-4">Soudi Arabia</td>
              <td className="px-6 py-4">Mokka</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                112233
              </th>
              <td className="px-6 py-4">01531314377</td>
              <td className="px-6 py-4">123456</td>
              <td className="px-6 py-4">123</td>
              <td className="px-6 py-4">234</td>
              <td className="px-6 py-4">445</td>
              <td className="px-6 py-4">20</td>
              <td className="px-6 py-4">Soudi Arabia</td>
              <td className="px-6 py-4">Mokka</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                112233
              </th>
              <td className="px-6 py-4">01531314377</td>
              <td className="px-6 py-4">123456</td>
              <td className="px-6 py-4">123</td>
              <td className="px-6 py-4">234</td>
              <td className="px-6 py-4">445</td>
              <td className="px-6 py-4">20</td>
              <td className="px-6 py-4">Soudi Arabia</td>
              <td className="px-6 py-4">Mokka</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetailsTable;
