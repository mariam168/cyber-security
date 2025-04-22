import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SolutionCard from "./SolutionCard";
import "swiper/css";
import "swiper/css/navigation";

export default function SolutionSlider({ solutions }) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <div className="mb-8 flex flex-col items-center lg:items-start">
        <div className="flex gap-2 mb-2">
          <div className="w-4 h-4 bg-[#0F318E] rounded"></div>
          <div className="w-4 h-4 bg-[#0F318E] rounded"></div>
          <div className="w-4 h-4 bg-[#0F318E] rounded"></div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold">Our Solutions</h2>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {solutions.map((item, index) => (
          <SwiperSlide key={index}>
            <SolutionCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 mt-6">
        <button className="prev-btn p-2 sm:p-3 bg-black text-white rounded-full text-lg sm:text-xl">
          <AiOutlineLeft />
        </button>
        <button className="next-btn p-2 sm:p-3 bg-black text-white rounded-full text-lg sm:text-xl">
          <AiOutlineRight />
        </button>
      </div>
      
    </div>
  );
}
