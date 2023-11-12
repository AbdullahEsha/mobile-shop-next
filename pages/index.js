import { useEffect, useState } from 'react'
import { Pagination, Autoplay, A11y } from 'swiper/modules'
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Home = () => {
  SwiperCore.use([Autoplay])

  // use api to get all cuntries and map them to select options, from https://restcountries.com/v3.1/all api
  const [countries, setCountries] = useState([])
  useEffect(() => {
    const fetchCountries = async () => {
      // use fetch api to get all countries only
      const res = await fetch('https://restcountries.com/v3.1/all')
      const data = await res.json()
      // console.log(data)
      // set countries to data
      setCountries(data)
    }
    fetchCountries()
  }, [])

  return (
    <main>
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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Image
            src="/images/slider-background-girl.jpg"
            alt="slider-image"
            height={300}
            width={700}
            className="h-[300px] w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/slider-background-human.jpg"
            alt="slider-image"
            height={300}
            width={700}
            className="h-[300px] w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/slider-background.jpg"
            alt="slider-image"
            height={300}
            width={700}
            className="h-[300px] w-full"
          />
        </SwiperSlide>
      </Swiper>
      <div className="flex">
        <div className="flex-1"></div>
        <div className="flex-1">
          <h3>Apple iPhones</h3>
          <hr />
          <h2>iPhone 14 Pro Max</h2>
          <hr />
          <div className="flex">
            <p>Model: </p>
            <button>iPhone 14</button>
            <button>iPhone 14 Pro Max</button>
          </div>
          <div className="flex">
            <p>Color: </p>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <div className="flex">
            <p>Storage: </p>
            <button>128GB</button>
            <button>256GB</button>
            <button>512GB</button>
          </div>
          <hr />
          <div className="flex">
            <p>Nationality: </p>
            {/* also show flag with country name*/}
            <select>
              {countries.map((country) => (
                <option key={country.name.common} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
