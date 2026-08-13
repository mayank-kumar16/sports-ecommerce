import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';
import { getAllProducts } from '../services/productService';
import LoaderProductList from './LoaderProductList';
import ErrorProducts from './ErrorProducts';

const TrendingProducts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAllproducts = async () => {
      setLoading(true);
      try {
        const allproducts = await getAllProducts();
        setProducts(allproducts);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadAllproducts();
  }, []);

  const trendingProducts = [...products].sort((a, b) => {
    return b.rating - a.rating;
  });

  if (loading) {
    return <LoaderProductList />;
  }

  if (error) {
    return <ErrorProducts />;
  }

  if (products.length === 0) {
    return <p>no product found</p>;
  }

  return (
    <section className="py-12 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-1 bg-[#c6f432] rounded-full"></span>
              <span className="text-xs font-black tracking-widest text-zinc-500 uppercase">
                POPULAR SELECTION
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase">
              TRENDING NOW
            </h2>
            <p className="text-sm text-zinc-600 mt-1 font-medium">
              The gear everyone is talking about.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              ref={prevRef}
              type="button"
              className="custom-arrow border border-zinc-200 shadow-sm hover:border-zinc-400"
              aria-label="Previous Slide"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              ref={nextRef}
              type="button"
              className="custom-arrow border border-zinc-200 shadow-sm hover:border-zinc-400"
              aria-label="Next Slide"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="-mx-2">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={4}
            spaceBetween={20}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              320: {
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
            {trendingProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
