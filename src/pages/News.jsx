import React from "react";
import Header from "../components/Header"
import { FaCalendarAlt, FaChalkboardTeacher, FaCar, FaHeartbeat, FaHome, FaLaptop } from "react-icons/fa";
import read1 from "../assets/read1.jfif";
import newsCompany from "../assets/history1.jfif"
import newsCompanyTeam from "../assets/image2.jfif"
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
          <motion.img
            src={newsBg}
            alt="Team"
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
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
            <motion.h1
              className="text-white text-4xl md:text-5xl font-bold text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Work With our creative team
            </motion.h1>

          </motion.div>
        </div>

        <section className="py-16 px-6">
  <div className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20">
    <div>
      <p className="text-[#0F318E] font-bold">Join Our Dynamic Team!</p>
      <h2 className="text-3xl font-bold text-gray-900 leading-tight">
        A Work Environment That Fosters Growth
      </h2>
      <p className="mt-4 text-gray-600">
        We pride ourselves on having a collaborative and innovative team culture. Our office at The Hub in Newcastle is not just a place to work — it's where great ideas happen. With a creative atmosphere, open spaces, and convenient access across the region, it's the perfect place for professionals to thrive.
      </p>
     
      <button className="mt-6 bg-gray-700 hover:bg-[#0F318E]  text-white px-6 py-3 rounded-md font-semibold">
        Explore Our Career Opportunities
      </button>
    </div>
    <div>
      <img
        src={newsCompany}
        alt="Office"
        className="rounded-lg shadow-lg w-[500px] md:ml-auto h-[400px] object-cover"
      />
    </div>
  </div>

  <div className="container max-w-7xl mx-auto py-16 grid md:grid-cols-2 gap-10 items-center">
    <div className="order-2 md:order-1">
      <img
        src={newsCompanyTeam}
        alt="Team"
        className="rounded-lg shadow-lg w-[500px] md:mr-auto h-[400px] object-cover"
      />
    </div>
    <div className="order-1 md:order-2">
      <p className="text-[#0F318E] font-bold">Join Us Now!</p>
      <h2 className="text-3xl font-bold text-gray-900 leading-tight">
        A culture that helps you succeed
      </h2>
      <p className="mt-4 text-gray-600">
        We are a fantastic team! OK, we are biased, but really – there’s a
        fantastic vibe at ITC Service. Our main HQ at Monkton is a great
        place to work; with funky artwork and a supportive atmosphere.
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

      </section>
      <section className="relative w-full py-16 bg-gray-900 bg-opacity-50">
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
              Perks of Joining the Future of Tech Solutions
            </h2>
            <p className="text-gray-300">
              At FutureTech Solutions, we believe that our growth comes from the talent and dedication of our people.
              We strive to create an environment where innovation thrives, and every individual’s contributions are valued.
            </p>
            <p className="text-gray-300">
              Our focus is on your personal and professional development, offering a workplace that champions a healthy work-life balance.
              Here, you will find the tools, mentorship, and opportunities to accelerate your career while maintaining a balanced lifestyle.
            </p>
            <button className="bg-gray-600 hover:bg-[#0F318E] text-white px-6 py-3 rounded-md font-semibold">
              Explore Our Career Opportunities
            </button>
          </div>
          <div className="md:w-1/2 mx-8 mt-8 md:mt-0">
            <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg text-white space-y-3">
              {[
                "Competitive salary packages",
                "Supportive, inclusive company culture",
                "Comprehensive health benefits",
                "Flexible working hours and remote work options",
                "Employee wellness programs",
                "Retirement savings plans",
                "Ongoing training and skill development",
                "Relaxed dress code",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center border-l-4 border-[#0F318E] p-2"
                >
                  <span className="text-[#0F318E] text-lg mr-2">✔</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-[#0F318E] font-semibold uppercase">Our Values</h3>
          <h2 className="text-xl md:text-2xl font-bold text-black mt-2">
            Cultivating a dynamic culture to drive <br />
            innovation and client satisfaction, powered by cutting-edge <br />
            technology solutions.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: "🚀", text: "Innovative Solutions for Every Challenge" },
              { icon: "🤝", text: "Collaboration and Teamwork" },
              { icon: "🌱", text: "Continuous Growth and Learning" },
              { icon: "💼", text: "Professional Development Opportunities" },
              { icon: "🏆", text: "Commitment to Excellence" },
              { icon: "🌍", text: "Global Impact through Local Solutions" },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-black text-white p-6 rounded-lg flex flex-col items-center"
              >
                <div className="text-[#0F318E] text-4xl mb-4">{benefit.icon}</div>
                <p className="text-lg font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-gray-700 hover:bg-[#0F318E] text-white px-6 py-3 rounded-md font-semibold">
            Join Us Today
          </button>
        </div>
      </section>

    
      <section className="bg-white max-w-6xl mx-auto py-16 px-6 text-center">
        <h3 className="text-[#0F318E] font-semibold uppercase">Why Join Us?</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
          CURRENT OPPORTUNITIES
        </h2>
        <p className="text-gray-600 mt-4">
          Can't find the perfect role? Send your CV to{" "}
          <a href="mailto:careers@ourcompany.com" className="text-[#0F318E] font-semibold">
            careers@ourcompany.com
          </a>
        </p>

        <div className="container mx-auto mt-8 space-y-6">
          {[
            {
              title: "Software Engineer",
              description: "Join our development team and work on innovative projects that drive our technology forward. Experience with JavaScript and Python is preferred.",
            },
            {
              title: "UX/UI Designer",
              description: "Design user-friendly interfaces and work closely with our development team to create seamless user experiences across web and mobile platforms.",
            },
            {
              title: "Marketing Manager",
              description: "Help shape our brand's voice and build strategic marketing campaigns. A passion for digital marketing and analytics is essential.",
            },
            {
              title: "Customer Support Specialist",
              description: "Provide exceptional support to our clients, troubleshoot issues, and help improve our products through user feedback.",
            },
          ].map((job, index) => (
            <div key={index} className="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{job.title}</h3>
              <p className="mt-2 text-gray-500">{job.description}</p>
              <button className="mt-4 bg-gray-800 hover:bg-red-700 text-white py-2 px-4 rounded-lg">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>

  );
};

export default WorkWithUs;
