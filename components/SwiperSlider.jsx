import { Pagination, Autoplay, A11y, EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const SwiperSlider = () => {
  SwiperCore.use([Autoplay])

  return (
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
          <h1 className="text-4xl font-bold text-gray-600">Buy Your Dreams</h1>
          <button className="py-3 px-5 w-fit text-gray-600 hover:text-white hover:bg-teal-500 font-bold border-gray-500 hover:border-teal-500 border text-sm flex items-center gap-2 justify-center rounded-sm transition-all delay-150 ease-in-out">
            Order Now <FaArrowRightLong size={16} />
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperSlider
