import dynamic from 'next/dynamic'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-cube'
import 'swiper/css/effect-flip'
import 'swiper/css/effect-coverflow'

import Image from 'next/image'

const Home = () => {
  SwiperCore.use([Autoplay])
  return (
    <main className="">
      <Swiper
        modules={[Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <div className="">
          <div className="relative">
            <SwiperSlide>
              <Image
                src="/images/demos/demo1/sliders/slide-3.jpg"
                alt="My Image"
                width={1000}
                height={600}
              />

              <div className="absolute bottom-10 sm:bottom-16 left-10 sm:left-16 text-white">
                <p className="text-xl font-normal">test</p>
                <h2 className="my-4 font-bold text-4xl lg:text-6xl">test</h2>
                <p className="mb-4 text-xl font-thin">test</p>
                <button>tets</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/demos/demo1/sliders/slide-3.jpg"
                alt="My Image"
                width={1000}
                height={600}
              />

              <div className="absolute bottom-10 sm:bottom-16 left-10 sm:left-16 text-white">
                <p className="text-xl font-normal">test</p>
                <h2 className="my-4 font-bold text-4xl lg:text-6xl">test</h2>
                <p className="mb-4 text-xl font-thin">test</p>
                <button>tets</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/images/demos/demo1/sliders/slide-3.jpg"
                alt="My Image"
                width={1000}
                height={600}
              />

              <div className="absolute bottom-10 sm:bottom-16 left-10 sm:left-16 text-white">
                <p className="text-xl font-normal">test</p>
                <h2 className="my-4 font-bold text-4xl lg:text-6xl">test</h2>
                <p className="mb-4 text-xl font-thin">test</p>
                <button>tets</button>
              </div>
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </main>
  )
}

export default Home

// style="background-image: url(&quot;/static/images/demos/demo1/sliders/slide-3.jpg&quot;); background-color: rgb(240, 241, 242); width: 1349px;"
