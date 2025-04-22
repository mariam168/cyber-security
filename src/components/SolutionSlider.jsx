import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import SolutionCard from "./SolutionCard";
import "swiper/css";
import "swiper/css/navigation";

export default function SolutionSlider({ solutions }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
      
      <div className="mb-10 text-center lg:text-left">
        <div className="flex justify-center lg:justify-start gap-2 mb-3">
          <div className="w-4 h-4 bg-[#0F318E]  animate-pulse"></div>
          <div className="w-4 h-4 bg-[#0F318E]  animate-pulse delay-100"></div>
          <div className="w-4 h-4 bg-[#0F318E]  animate-pulse delay-200"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Our <span className="text-[#0F318E]">Solutions</span>
        </h2>
        <p className="mt-2 text-gray-600 text-lg max-w-2xl mx-auto lg:mx-0">
          Discover how our innovative solutions can help your business thrive.
        </p>
      </div>

 
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {solutions.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <SolutionCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-5 mt-6">
        <button className="prev-btn p-3 bg-white text-black border border-gray-300 hover:bg-gray-100 shadow-md rounded-full transition duration-200">
          <AiOutlineLeft size={22} />
        </button>
        <button className="next-btn p-3 bg-white text-black border border-gray-300 hover:bg-gray-100 shadow-md rounded-full transition duration-200">
          <AiOutlineRight size={22} />
        </button>
      </div>
    </div>
  );
}
