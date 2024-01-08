import CustomizedAccordions from '@/components/CustomizedAccordions'
import NavBar from '@/components/admin/NavBar'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const User = () => {
  const token = Cookies.get('token')
  const router = useRouter()
  const [users, setUsers] = useState([]) //

  // check if token is valid
  useEffect(() => {
    if (!token) {
      router.push('/admin-login')
      toast.error('Please login first')
    }
    // fetch users
    const url = `${process.env.API_URL}/api/admin/users`
    const fetchUsers = async () => {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      if (!res.ok) {
        toast.error(data.message)
      } else {
        setUsers(data)
      }
    }
    fetchUsers()

    // return () => {
    //   cleanup
    // }
  }, [router, token]) // Include dependencies for re-running the effect

  return (
    <>
      <NavBar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          New User
        </h2>
        {/* use grid cols to create user inputs with only email and password */}
        <div className="md:grid md:grid-cols-3 md:gap-2">
          {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
          <div className="rounded-md shadow-sm">
            <input
              id="email"
              type="email"
              required
              placeholder="Email"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm sm:leading-5"
            />
          </div>
          <div className="rounded-md shadow-sm">
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm sm:leading-5"
            />
          </div>
          {/* button for submit */}
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Create
          </button>
          {/* </form> */}
        </div>

        <div className="mt-4">
          <CustomizedAccordions users={users} />
        </div>
      </div>
    </>
  )
}

export default User
