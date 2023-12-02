import { useDispatch } from 'react-redux'
import Image from 'next/image'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false)

  // logout
  const dispatch = useDispatch()
  const logout = () => {
    dispatch({
      type: 'AUTH_LOGIN/logout',
    })
    toast.success('Logout successfully!')
  }

  return (
    <nav className="bg-teal-300 border-gray-200 dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/iphone-logo.png"
            width={100}
            height={60}
            alt="Logo"
            priority={true}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Digitoakart
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          onClick={() => setNavToggle(!navToggle)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={` w-full md:block md:w-auto ${
            navToggle ? 'block' : 'hidden'
          }`}
          id="navbar-default"
        >
          {/* log out button */}
          <button
            onClick={logout}
            className="text-white bg-teal-400 rounded-md py-2 px-4 hover:bg-teal-500 focus:outline-none focus:bg-teal-500"
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
