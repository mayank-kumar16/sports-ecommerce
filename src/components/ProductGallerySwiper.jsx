import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';

const ProductGallerySwiper = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="w-full space-y-4">
      <div className="relative border border-zinc-200 shadow-sm rounded-2xl bg-zinc-50 overflow-hidden">
        <Swiper
          modules={[Thumbs, Navigation]}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            prevEl: '.product-prev',
            nextEl: '.product-next',
          }}
          className="aspect-square"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="p-4">
              <img
                src={image}
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </SwiperSlide>
          ))}

          <button
            type="button"
            className="product-prev absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            className="product-next absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
        </Swiper>
      </div>

      {images.length > 1 && (
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          slidesPerView={4}
          spaceBetween={12}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square rounded-xl overflow-hidden border-2 border-zinc-200">
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default ProductGallerySwiper;
