import Image from 'next/image'
import 'swiper/swiper-bundle.css'
import { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const products = [
  {
    original: '/images/product-img-1.png',
    thumbnail: '/images/product-img-1.png',
    original: '/images/product-img-1.png',
  },
  {
    original: '/images/product-img-2.png',
    thumbnail: '/images/product-img-2.png',
    original: '/images/product-img-2.png',
  },
  {
    original: '/images/product-img-3.png',
    thumbnail: '/images/product-img-3.png',
    original: '/images/product-img-3.png',
  },
  {
    original: '/images/product-img-1.png',
    thumbnail: '/images/product-img-1.png',
    original: '/images/product-img-1.png',
  },
  {
    original: '/images/product-img-2.png',
    thumbnail: '/images/product-img-2.png',
    original: '/images/product-img-2.png',
  },
  {
    original: '/images/product-img-3.png',
    thumbnail: '/images/product-img-3.png',
    original: '/images/product-img-3.png',
  },
]

const ProductSlider = () => {
  const [transformOrigin, setTransformOrigin] = useState('37.663% 9.07859%')

  const handleMouseMove = (e) => {
    const boundingBox = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - boundingBox.left) / boundingBox.width) * 100
    const y = ((e.clientY - boundingBox.top) / boundingBox.height) * 100
    setTransformOrigin(`${x}% ${y}%`)
  }

  return (
    <>
      <div className="w-full h-auto mb-10">
        <ImageGallery
          thumbnailPosition="bottom"
          items={products}
          showFullscreenButton={false}
          showPlayButton={false}
          renderItem={(item) => (
            <div
              style={{
                position: 'relative',
                transition: 'transform 0.5s ease-out 0s',
                transformOrigin: transformOrigin,
              }}
              className="hoverImage h-[30rem] sm:h-[60rem] lg:h-[45rem] xl:h-[55rem] 2xl:h-[60rem] hover:scale-[2]"
              onMouseMove={handleMouseMove}
            >
              <Image
                alt="iphone image"
                src={item.original}
                layout="fill"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, (max-width: 1536px) 100vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          )}
        />
      </div>
    </>
  )
}

export default ProductSlider
