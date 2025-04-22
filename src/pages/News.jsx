import React from "react";
import Header from "../components/Header"
import { FaCalendarAlt, FaChalkboardTeacher, FaCar, FaHeartbeat, FaHome, FaLaptop } from "react-icons/fa";
import read1 from "../assets/read1.jfif";
import newsCompany from "../assets/newsCompany.webp"
import newsCompanyTeam from "../assets/newsCompanyTeam.jpg"
import read2 from "../assets/read2.jfif";
import newsBg from "../assets/newsBg.JPG"
import { Swiper, SwiperSlide } from "swiper/react";
import sectionBg from "../assets/sectionBg.avif"
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "../components/Footer"
import { Pagination, Autoplay } from "swiper/modules";
const benefits = [
    { icon: <FaCalendarAlt />, text: "Quarterly Funded Social Events" },
    { icon: <FaChalkboardTeacher />, text: "Free Training" },
    { icon: <FaCar />, text: "Electric Vehicle Salary Sacrifice" },
    { icon: <FaHeartbeat />, text: "Outstanding Health Insurance Cover" },
    { icon: <FaHome />, text: "Hybrid Working" },
    { icon: <FaLaptop />, text: "Assist To Buy Technology" },
  ];
  const jobs = [
    {
      title: "Procurement Assistant",
      description:
        "The Procurement Assistant is responsible for supporting procurement operations. This role ensures the efficient and cost-effective acquisition of goods and services...",
    },
    {
      title: "Partner Care Advisor",
      description:
        "The Partner Care Advisor is responsible for monitoring the delivery of high-quality customer service to our clients, ensuring customer satisfaction...",
    },
    {
      title: "Marketing Assistant/ Executive At ITC Service",
      description:
        "We are seeking a motivated and dynamic Marketing Executive/ Assistant to join our small but growing team...",
    },
  ];
  
const WorkWithUs = () => {
  return (
    <div>
      <Header />
    <section className="w-full">
    <div className="relative w-full h-[300px] overflow-hidden">
      {/* الخلفية */}
      <motion.img
        src={newsBg}
        alt="Team"
        className="w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* مربعات متحركة */}
        <motion.div
          className="flex flex-row gap-4 mb-4"
          initial={{ y: -50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="h-8 w-8 bg-[#0F318E] rounded"
              whileHover={{ rotate: 360, scale: 1.3 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </motion.div>

        {/* نص متحرك مع تأثير الكتابة */}
        <motion.h1
  className="text-white text-4xl md:text-5xl font-bold text-center"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 1 }}
>
  Work With ITC Service
</motion.h1>

      </motion.div>
    </div>

      <div className="container max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gray-700 font-bold">Join Us Now!</p>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            A culture that helps you succeed
          </h2>
          <p className="mt-4 text-gray-600">
            We are a fantastic team! OK, we are biased, but really – there’s a
            fantastic vibe at ITC Service. Our main HQ at Monkton is a great
            place to work; with funky artwork, lots of space, and easily
            accessible from around the North East.
          </p>
          <p className="mt-4 text-gray-600">
            The company began with two founding directors and now is 45 staff
            strong. We have an exceptionally high staff retention rate and are
            very selective in our recruitment process. Long-term relationships
            and partnership is key to how we operate.
          </p>
          <button className="mt-6 bg-gray-700 hover:bg-[#0F318E] text-white px-6 py-3 rounded-md font-semibold">
            View Our Vacancies
          </button>
        </div>

    
        <div>
          <img
            src={newsCompany}
            alt="Office"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>


      <div className="container max-w-5xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
      <div>
          <img
            src={newsCompanyTeam}
            alt="Office"
            className="rounded-lg shadow-lg"
          />
        </div>
        {/* Text Content */}
        <div>
        <p className="text-gray-700 font-bold">Join Us Now!</p>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            A culture that helps you succeed
          </h2>
          <p className="mt-4 text-gray-600">
            We are a fantastic team! OK, we are biased, but really – there’s a
            fantastic vibe at ITC Service. Our main HQ at Monkton is a great
            place to work; with funky artwork, .
          </p>
          <p className="mt-4 text-gray-600">
            The company began with two founding directors and now is 45 staff
            strong. We have an exceptionally high staff retention rate and are
            very selective in our recruitment process. 
          </p>
          <button className="mt-6 bg-gray-700 hover:bg-[#0F318E] text-white px-6 py-3 rounded-md font-semibold">
            View Our Vacancies
          </button>
        </div>

    
       
      </div>
    </section>
    <section className="relative w-full py-16 bg-gray-900 bg-opacity-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={sectionBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-white space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Perks of being a part of the ITC Service family
          </h2>
          <p className="text-gray-300">
            At ITC Service, we believe that our strength lies in our people.
            We’re committed to fostering a workplace that values collaboration
            and innovative thinking.
          </p>
          <p className="text-gray-300">
            We’re dedicated to nurturing your professional path while
            respecting the importance of work-life harmony. At ITC Service,
            you'll find the resources and support to thrive personally and
            professionally.
          </p>
          <button className="bg-gray-600 hover:bg-[#0F318E] text-white px-6 py-3 rounded-md font-semibold">
            View Our Vacancies
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg text-white space-y-3">
            {[
              "Excellent salaries",
              "Welcoming company culture",
              "Dental and optical cover",
              "Hybrid and remote working opportunities",
              "Employee assistance Programme",
              "Tax efficient pension scheme",
              "Excellent training and development opportunities",
              "Casual dress code",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center border-l-4 border-[#0F318E] p-2"
              >
                <span className="text-red-500 text-lg mr-2">✔</span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-6">
        <h3 className="text-[#0F318E] font-semibold uppercase">Our Benefits</h3>
        <h2 className="text-2xl md:text-3xl font-bold text-black mt-2">
          Empowering an awesome company culture to <br />
          consistently deliver client success, through the power <br />
          of technology.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-black text-white p-6 rounded-lg flex flex-col items-center">
              <div className="text-[#0F318E] text-4xl mb-4">{benefit.icon}</div>
              <p className="text-lg font-medium">{benefit.text}</p>
            </div>
          ))}
        </div>
        <button className="mt-8 bg-gray-700 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold">
          Get Started now
        </button>
      </div>
    </section>
    <section className=" max-w-6xl mx-auto py-16 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-[#0F318E] font-semibold uppercase">
            Training & Apprenticeships
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-black mt-2">
            Looking to start a career in IT?
          </h2>
          <p className="text-gray-700 mt-4">
            Through a long-standing relationship with our apprenticeship
            providers, we have quite a few apprenticeship success stories. We
            pride ourselves in developing young aspiring IT Support Engineers
            and giving them a kick-start in our industry.
          </p>
          <p className="mt-4 text-gray-700">
            The{" "}
            <span className="text-[#0F318E] font-semibold">
              Level 3 IT Support Technician Apprenticeship
            </span>{" "}
            is a great way to launch a rewarding career in IT.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-black font-semibold mb-4">Partnered With</h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            <SwiperSlide>
              <img
                src={read1}
                alt="Baltic Apprenticeships"
                className="mx-auto w-52"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={read2}
                alt="Partner Logo"
                className="mx-auto w-52"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
    <section className="bg-white max-w-6xl mx-auto py-16 px-6 text-center">
      <h3 className="text-[#0F318E] font-semibold uppercase">Why Us?</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
        CURRENT VACANCIES
      </h2>
      <p className="text-gray-600 mt-4">
        Not seeing a role below that interests you? Send an email with your CV to{" "}
        <a href="mailto:recruitment@itcservice.co.uk" className="text-[#0F318E] font-semibold">
          recruitment@itcservice.co.uk
        </a>
      </p>

      <div className="container mx-auto mt-8 space-y-6">
        {jobs.map((job, index) => (
          <div key={index} className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p className="mt-2 text-gray-300">{job.description}</p>
            <button className="mt-4 bg-[#0F318E] hover:bg-red-700 text-white py-2 px-4 rounded-lg">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </div>

  );
};

export default WorkWithUs;
