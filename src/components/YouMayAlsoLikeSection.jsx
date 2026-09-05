import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from './ProductCard';
import { getAllProducts } from '../services/productService';

import 'swiper/css';
import 'swiper/css/navigation';

const YouMayAlsoLikeSection = ({ currentProductId }) => {
  const [products, setProducts] = useState([]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await getAllProducts();

      const otherProducts = allProducts.filter((product) => {
        return product.id !== currentProductId;
      });

      setProducts(otherProducts);
    };

    loadProducts();
  }, [currentProductId]);

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="w-full my-12">
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="h-px bg-zinc-200 flex-1"></div>

          <h2 className="text-center font-mono text-[15px] sm:text-lg font-black tracking-widest text-zinc-900 uppercase border border-zinc-300 bg-white px-3 px-m-6 py-2 rounded-lg shadow-sm">
            YOU MAY ALSO LIKE
          </h2>

          <div className="h-px bg-zinc-200 flex-1"></div>
        </div>

        <div className="flex items-center gap-2">
          <button
            ref={prevRef}
            type="button"
            className="w-9 h-9 rounded-full bg-white hover:bg-zinc-900 text-zinc-800 hover:text-[#c6f432] border border-zinc-300 flex items-center justify-center transition-all shadow-sm"
          >
            <FaChevronLeft className="w-3.5 h-3.5" />
          </button>

          <button
            ref={nextRef}
            type="button"
            className="w-9 h-9 rounded-full bg-white hover:bg-zinc-900 text-zinc-800 hover:text-[#c6f432] border border-zinc-300 flex items-center justify-center transition-all shadow-sm"
          >
            <FaChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          340: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default YouMayAlsoLikeSection;
