import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel({ items, slidesPerView = 3, renderItem }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-10 text-center lg:text-left">
        <div className="flex justify-center lg:justify-start gap-2 mb-4">
          <div className="w-4 h-4 bg-[#0F318E] rounded-full animate-pulse"></div>
          <div className="w-4 h-4 bg-[#0F318E] rounded-full animate-pulse delay-150"></div>
          <div className="w-4 h-4 bg-[#0F318E] rounded-full animate-pulse delay-300"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 capitalize">
          Latest <span className="text-[#0F318E]">News</span>
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
          Stay updated with our latest insights, updates, and stories.
        </p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView },
        }}
        className="pb-6"
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="transition-transform duration-300 hover:scale-[1.02] ease-in-out"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
              {renderItem(item)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
