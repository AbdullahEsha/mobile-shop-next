import { useEffect, useState } from 'react'
import { Pagination, Autoplay, A11y } from 'swiper/modules'
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'
import { GiCheckMark } from 'react-icons/gi'
import ReactImageGallery from 'react-image-gallery'
import ReactImageMagnify from 'react-image-magnify'
import ReactSlick from 'react-slick'

// import stylesheet if you're not already using CSS @import
import 'react-image-gallery/styles/css/image-gallery.css'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600.jpg',
    thumbnail: 'https://picsum.photos/id/1018/250/150.jpg',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600.jpg',
    thumbnail: 'https://picsum.photos/id/1015/250/150.jpg',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600.jpg',
    thumbnail: 'https://picsum.photos/id/1019/250/150.jpg',
  },
]

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

  const [selectedImage, setSelectedImage] = useState(images[0])

  const handleImageClick = (event, { index }) => {
    // Update the selected image when a thumbnail is clicked
    setSelectedImage(images[index])
  }

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
      <div className="flex ">
        <div className="flex-1">
          {/* Carousel Example Basic integration with react-slick. In-place enlargement for mouse and touch input.
              Side-by-side enlargement supported, please see External Enlarged Image Demo. Responsive and fluid between breakpoints.
              Initial file size optimized via srcset and sizes attributes. */}
          {/* also use react-image-gallery for slider option to show multipul image */}
          <div className="max-w-full">
            <ReactImageGallery thumbnailPosition={'bottom'} items={images} />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 mt-10">
          <h4 className="font-semibold text-teal-800 mb-0">Apple iPhones</h4>
          <hr />
          <h3 className="text-[#333] mb-0">iPhone 14 Pro Max</h3>
          <hr />
          <div className="flex items-center gap-2">
            <p className="w-20">Model:</p>
            <button className="px-5 py-2 border-[1px] font-[400] border-gray-400 hover:border-teal-800 hover:text-teal-800 ease-linear delay-200 transition">
              iPhone 14
            </button>
            <button className="px-5 py-2 border-[1px] font-[400] border-gray-400 hover:border-teal-800 hover:text-teal-800 ease-linear delay-200 transition">
              iPhone 14 Pro Max
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <p className="w-20">Color: </p>
            <button className="h-12 w-12 rounded-full bg-[#301934] flex justify-center items-center">
              <GiCheckMark size={20} color="#fff" />
            </button>
            <button className="h-12 w-12 rounded-full bg-[#215E7C] flex justify-center items-center">
              <GiCheckMark size={20} color="#fff" />
            </button>
            <button className="h-12 w-12 rounded-full bg-[#A50011] flex justify-center items-center">
              <GiCheckMark size={20} color="#fff" />
            </button>
            <button className="h-12 w-12 rounded-full bg-[#F9E5C9] flex justify-center items-center">
              <GiCheckMark size={20} color="#fff" />
            </button>
            <button className="h-12 w-12 rounded-full bg-[#5C5B57] flex justify-center items-center">
              <GiCheckMark size={20} color="#fff" />
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <p className="w-20">Storage: </p>
            <button className="px-5 py-2 border-[1px] font-[400] border-gray-400 hover:border-teal-800 hover:text-teal-800 ease-linear delay-200 transition">
              128GB
            </button>
            <button className="px-5 py-2 border-[1px] font-[400] border-gray-400 hover:border-teal-800 hover:text-teal-800 ease-linear delay-200 transition">
              256GB
            </button>
            <button className="px-5 py-2 border-[1px] font-[400] border-gray-400 hover:border-teal-800 hover:text-teal-800 ease-linear delay-200 transition">
              512GB
            </button>
          </div>
          <hr />
          <div className="flex gap-2 items-center">
            <p className="w-20">Nationality:</p>
            <select className="px-5 py-3 border-[1px] font-[400] border-gray-400 hover:border-teal-800 hover:text-teal-800 ease-linear delay-200 transition">
              {countries
                .sort((a, b) => a.name.common.localeCompare(b.name.common))
                .map((country) => (
                  <option key={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
            </select>
          </div>
          <hr />
          <button className="py-3 bg-teal-600 hover:bg-teal-500 font-bold text-sm text-white flex items-center gap-2 justify-center w-3/4 rounded-sm">
            NEXT <FaArrowRightLong size={16} />
          </button>
        </div>
      </div>
      <div className="h-20 bg-teal-400 mt-5"></div>
    </main>
  )
}

export default Home
