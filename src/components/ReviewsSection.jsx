import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReviewCard from './ReviewCard';
import { reviews } from '../utils/reviews';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const ReviewsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="py-16 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-1 bg-[#c6f432] rounded-full"></span>
              <span className="text-xs font-black tracking-widest text-zinc-500 uppercase">
                COMMUNITY FEEDBACK
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight uppercase">
              WHAT ATHLETES SAY
            </h2>
            <p className="text-sm text-zinc-600 mt-1 font-medium">
              Real reviews from professional players and sports enthusiasts.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              ref={prevRef}
              type="button"
              className="custom-arrow border border-zinc-200 shadow-sm"
              aria-label="Previous Review"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              ref={nextRef}
              type="button"
              className="custom-arrow border border-zinc-200 shadow-sm"
              aria-label="Next Review"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="-mx-2">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={3}
            spaceBetween={20}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            touchRatio={1}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review) => {
              return (
                <SwiperSlide key={review.id}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
