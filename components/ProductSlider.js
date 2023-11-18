import Image from 'next/image'
import { A11y, EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import 'swiper/swiper-bundle.css'
import { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'

import ReactZoom from 'react-image-zoom'

const ProductSlider = ({ products }) => {
  SwiperCore.use([A11y])
  const [selectedProduct, setSelectedProduct] = useState({
    image: products[0].image,
    name: products[0].name,
  })

  return (
    <>
      <div className="w-full h-auto mb-10 ">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: selectedProduct.name,
              isFluidWidth: true,
              src: selectedProduct.image,
              width: 300,
              height: 300,
            },
            centered: true,
            largeImage: {
              src: selectedProduct.image,
              width: 1000,
              height: 650,
            },
            enlargedImageContainerDimensions: {
              width: '200%',
              height: '200%',
            },
            enlargedImageContainerStyle: {
              zIndex: 9,
            },
            enlargedImageStyle: {
              width: '100%',
              height: '100%',
            },
            enlargedImageContainerClassName:
              'absolute top-0 left-0 r-10 z-50 bg-white',
            enlargedImagePosition: 'over',
          }}
        />
      </div>
      <Swiper
        modules={[A11y, EffectCards]}
        spaceBetween={5}
        slidesPerView={4}
        loop={true}
        // onSwiper={(swiper) => console.log('swiper test 1')}
        // onClick={}
        onSlideChange={() => console.log('slide change')}
      >
        {products.map((product, index) => {
          return (
            <div key={index}>
              <SwiperSlide>
                <Image
                  src={product.image}
                  alt={product.name}
                  height={100}
                  width={200}
                  className="border border-teal-700"
                  onClick={() => setSelectedProduct(product)}
                />
              </SwiperSlide>
            </div>
          )
        })}
      </Swiper>
    </>
  )
}

export default ProductSlider