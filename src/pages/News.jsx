import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaCar,
  FaHeartbeat,
  FaHome,
  FaLaptop,
  FaRocket, 
  FaUsers, 
  FaSeedling,
  FaBriefcase,
  FaTrophy,
  FaGlobe, 
  FaShieldAlt, 
  FaNetworkWired, 
  FaCube, 
  FaCodeBranch
} from "react-icons/fa";
import newsCompanyTeam from "../assets/image2.jfif";
import newsBg from "../assets/newsBg.JPG"; 
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const benefits = [
  { icon: <FaCalendarAlt />, text: "Quarterly Funded Social Events" },
  { icon: <FaChalkboardTeacher />, text: "Free Training" },
  { icon: <FaCar />, text: "Electric Vehicle Salary Sacrifice" },
  { icon: <FaHeartbeat />, text: "Outstanding Health Insurance Cover" },
  { icon: <FaHome />, text: "Hybrid Working" },
  { icon: <FaLaptop />, text: "Assist To Buy Technology" },
];

const valuesData = [
  { icon: <FaRocket />, text: "Innovative Solutions" },
  { icon: <FaUsers />, text: "Collaborative Teamwork" },
  { icon: <FaSeedling />, text: "Continuous Growth" },
  { icon: <FaBriefcase />, text: "Professional Development" },
  { icon: <FaTrophy />, text: "Commitment to Excellence" },
  { icon: <FaGlobe />, text: "Global Impact" },
];

const jobs = [
  {
    title: "Software Engineer",
    description: "Join our development team and work on innovative projects that drive our technology forward.",
  },
  {
    title: "UX/UI Designer",
    description: "Design user-friendly interfaces and create seamless user experiences.",
  },
  {
    title: "Marketing Manager",
    description: "Help shape our brand's voice and build strategic marketing campaigns.",
  },
 
];

const primaryColor = '#0F318E';
const accentColorPurple = 'black';
const accentColorCyan = '#0F318E';
const primaryButtonClasses = `mt-8 bg-[${primaryColor}] hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300 shadow-lg hover:shadow-xl tracking-wide transform hover:-translate-y-1`;
const secondaryButtonClasses = "mt-6 bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 shadow transform hover:-translate-y-1";
const borderPrimaryColor = 'border-blue-300';
const borderAccentPurple = 'border-purple-300'; 
const borderAccentCyan = 'border-cyan-300'; 
const WorkWithUs = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden"> 

      <section className="w-full relative">
        <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden"> 
          <motion.img
            src={newsBg}
            alt="Team working together in a bright office"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 md:from-black/90 md:to-black/40 z-0"></div>
          <div className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E2E8F0' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }}>
          </div>
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <motion.div
              className="flex flex-row gap-4 md:gap-6 mb-8"
              initial={{ y: -50, opacity: 0, scale: 0.7 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              <motion.div className={`h-12 w-12 md:h-16 md:w-16 bg-[${primaryColor}] rounded-full flex items-center justify-center text-white text-3xl md:text-4xl shadow-md`} whileHover={{ scale: 1.2, rotate: 15 }} transition={{ duration: 0.3 }}><FaShieldAlt /></motion.div>
              <motion.div className={`h-12 w-12 md:h-16 md:w-16 bg-purple-700 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl shadow-md`} whileHover={{ scale: 1.2, rotate: -15 }} transition={{ duration: 0.3 }}><FaNetworkWired /></motion.div>
              <motion.div className={`h-12 w-12 md:h-16 md:w-16 bg-cyan-700 rounded-full flex items-center justify-center text-white text-3xl md:text-4xl shadow-md`} whileHover={{ scale: 1.2, rotate: 15 }} transition={{ duration: 0.3 }}><FaCube /></motion.div>
            </motion.div>

            <motion.h1
              className="text-white text-4xl md:text-7xl font-extrabold relative z-10 drop-shadow-lg leading-tight" 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1.2 }}
            >
              Innovate Securely,<br />Grow Exceptionally
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg md:text-2xl mt-6 max-w-4xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1.2 }}
            >
              Join a team shaping the future of cybersecurity with passion, collaboration, and cutting-edge technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

     

    
      <section className="py-24 px-6 bg-white relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-10"
          style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E9D5FF' fill-opacity='0.4'%3E%3Cpath d='M40 20L20 0l20 20zm0 0L20 40l20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '40px 40px'
          }}>
        </div>
        <div
          className="container max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="order-2 md:order-1" variants={itemVariants}>
            <div className={`relative rounded-lg shadow-2xl overflow-hidden border-2 ${borderAccentPurple} transform hover:scale-105 transition duration-300`}> 
              <img
                src={newsCompanyTeam}
                alt="Team members collaborating"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2" variants={itemVariants}>
            <p className={`text-${accentColorPurple} font-bold text-lg uppercase`}>Our People</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-3">
              A Culture that Empowers Success
            </h2>
            <p className="mt-8 text-gray-700 text-xl leading-relaxed">
              We are a fantastic team! OK, we are biased, but really – there’s a fantastic vibe at our company. Our main HQ at Monkton is a great place to work; with funky artwork and a supportive atmosphere.
            </p>
            <p className="mt-4 text-gray-700 text-xl leading-relaxed">
              The company began with two founding directors and now is 45 staff strong. We have an exceptionally high staff retention rate and are very selective in our recruitment process.
            </p>
            <button className={primaryButtonClasses}>
              View Current Vacancies
            </button>
          </div>
        </div>
      </section>
      <section className="relative w-full py-24 bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10"
            style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E2E8F0' fill-opacity='0.3' fill-rule='evenodd'%3E%3Ccircle cx='5' cy='5' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '20px 20px'
            }}>
        </div>

        <div className="relative container mx-auto px-6 text-center z-10"> 
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 drop-shadow-sm">
            Benefits & Perks
          </h2>
          <p className="text-gray-700 text-xl mb-16 max-w-4xl mx-auto">
            We care about our team members and offer competitive benefits to support your well-being and career growth.
          </p>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white text-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4 border ${borderPrimaryColor} relative overflow-hidden group transform hover:-translate-y-2 transition duration-300`} 
                variants={itemVariants}
              >
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition duration-300"
                    style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23DBEAFE' fill-opacity='0.7' fill-rule='evenodd'%3E%3Cpath d='M0 0h15v15H0z'/%3E%3Cpath d='M0 7h15v1H0zM7 0v15H8V0z' opacity='.5'/%3E%3Cpath d='M0 3h15v1H0zM0 11h15v1H0zM3 0v15H4V0zM11 0v15H12V0z' opacity='.25'/%3E%3C/g%3E%3C/svg%3E")`,
                       backgroundSize: '30px 30px'
                    }}>
                </div>

                <div className={`text-[${primaryColor}] text-5xl mb-4 relative z-10`}>{benefit.icon}</div> 
                                <p className="text-xl font-semibold relative z-10">{benefit.text}</p>
              </div>
            ))}
          </div>
          <button className={primaryButtonClasses}>
            See All Benefits
          </button>
        </div>
      </section>
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10"
            style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E9D5FF' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M10 0l10 20H0L10 0z'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '30px 30px'
            }}>
        </div>

        <div className="container mx-auto text-center z-10">
          <h3 className={`text-${accentColorPurple} font-semibold uppercase text-lg`}>Our Core Principles</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight drop-shadow-sm">
            Cultivating a Dynamic Culture
          </h2>
          <p className="text-gray-700 text-xl mt-4 max-w-4xl mx-auto">
            Driving innovation and client satisfaction, powered by cutting-edge technology solutions.
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
          >
            {valuesData.map((value, index) => (
              <div
                key={index}
                className={`bg-gray-100 text-gray-800 p-8 rounded-lg flex flex-col items-center text-center space-y-4 shadow-lg border ${borderAccentPurple} relative overflow-hidden group transform hover:-translate-y-2 transition duration-300`} 
                variants={itemVariants}
              >
                 <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition duration-300"
                    style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23DDD6FE' fill-opacity='0.7' fill-rule='evenodd'%3E%3Cpath d='M0 0h15v15H0z'/%3E%3Ccircle cx='7.5' cy='7.5' r='2' opacity='.5'/%3E%3C/g%3E%3C/svg%3E")`,
                       backgroundSize: '30px 30px'
                    }}>
                </div>
                <div className={`text-${accentColorPurple} text-5xl mb-4 relative z-10`}>{value.icon}</div> 
                <p className="text-xl font-medium relative z-10">{value.text}</p>
              </div>
            ))}
          </div>
          <button className={secondaryButtonClasses}>
            Learn About Our Culture
          </button>
        </div>
      </section>
      <section className="bg-gray-100 py-24 px-6 relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-10"
            style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A5F3FC' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 0h10v10H0z'/%3E%3Cpath d='M0 5h10v1H0zM5 0v10H6V0z' opacity='.5'/%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '20px 20px'
            }}>
        </div>
        <div className="container mx-auto text-center relative z-10"> 
          <h3 className={`text-${accentColorCyan} font-semibold uppercase text-lg`}>Career Paths</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 drop-shadow-sm">
            Explore Current Opportunities
          </h2>
          <p className="text-gray-700 text-xl mt-4 max-w-4xl mx-auto">
            Find your next challenge and grow with us. Can't find the perfect role? Send your CV directly.
          </p>
          <p className="text-gray-600 mt-4 text-lg">
            Send your CV to{" "}
            <a href="mailto:careers@yourcompany.com" className={`text-${accentColorCyan} font-semibold hover:underline transition duration-300`}>
              careers@yourcompany.com
            </a>
          </p>

          <div
            className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
          >
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`bg-white text-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center space-y-4 border ${borderAccentCyan} relative overflow-hidden group transform hover:-translate-y-2 transition duration-300`} 
                variants={itemVariants}
              >
         
                 <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition duration-300"
                    style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A5F3FC' fill-opacity='0.7' fill-rule='evenodd'%3E%3Crect width='15' height='15'/%3E%3Cpath d='M0 0h15v1H0zM0 5h15v1H0zM0 10h15v1H0zM0 14h15v1H0zM0 0v15H1V0zM5 0v15H6V0zM10 0v15H11V0zM14 0v15H15V0z' opacity='.5'/%3E%3C/g%3E%3C/svg%3E")`,
                       backgroundSize: '30px 30px'
                    }}>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 relative z-10">{job.title}</h3>
                <p className="mt-2 text-gray-700 text-lg leading-relaxed relative z-10">{job.description}</p>
                <button className={secondaryButtonClasses}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;