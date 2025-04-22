import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel({ items, slidesPerView = 3, renderItem }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       <div className="mb-8 flex flex-col items-center lg:items-start">
        <div className="flex gap-2 mb-2">
          <div className="w-4 h-4 bg-[#0F318E] rounded"></div>
          <div className="w-4 h-4 bg-[#0F318E] rounded"></div>
          <div className="w-4 h-4 bg-[#0F318E] rounded"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">latest news</h2>
      </div>
      <Swiper
       
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} 
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
