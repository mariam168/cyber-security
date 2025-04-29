import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShieldAlt, FaBug, FaServer, FaUserSecret, FaNetworkWired, FaLaptopCode, FaDatabase } from 'react-icons/fa';
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
const CyberServicesSection = ({
  title = "Our Comprehensive",
  subtitle = "Security Services",
  description = "Tailored solutions to address your unique security challenges, from prevention to incident response.",
  tabs = [
    { name: "Penetration Testing", icon: <FaUserSecret />, content: "Simulate real-world attacks to identify vulnerabilities in your systems, applications, and networks before attackers do." },
    { name: "Managed Detection & Response (MDR)", icon: <FaShieldAlt />, content: "24/7 threat monitoring, detection, and response powered by advanced security analytics and expert teams." },
    { name: "Vulnerability Management", icon: <FaBug />, content: "Continuously scan, identify, prioritize, and remediate vulnerabilities across your digital infrastructure." },
    { name: "Cloud Security", icon: <FaServer />, content: "Secure your cloud environments (AWS, Azure, GCP) with tailored configurations, monitoring, and compliance." },
    { name: "Incident Response", icon: <FaNetworkWired />, content: "Rapid response and recovery services to contain threats, minimize damage, and restore operations after a security incident." },
    { name: "Security Audits", icon: <FaLaptopCode />, content: "Comprehensive audits against industry standards (ISO 27001, NIST, etc.) to ensure compliance and best practices." },
  ]
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name || "");
  const currentActiveTab = tabs.find((tab) => tab.name === activeTab);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black text-gray-300 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='52' viewBox='0 0 52 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300e0e0' fill-opacity='0.4'%3E%3Cpath d='M10 10h32v32H10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '65px 65px' }}>
      </div>

      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 lg:gap-16 items-stretch relative z-10" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div
          className="w-full md:w-1/2 bg-gray-900/20 backdrop-blur-md shadow-xl p-6 sm:p-8 rounded-xl border border-blue-800/50 relative overflow-hidden transition-all duration-300 hover:border-blue-600 flex flex-col" 
          variants={itemVariants}
        >
          <div className="absolute inset-0 z-0 opacity-[0.02]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.2'%3E%3Crect width='10' height='1' y='5'/%3E%3Crect width='1' height='10' x='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '18px 18px' }}>
          </div>
          <div className="flex-grow min-h-[180px] sm:min-h-[200px mb-6 relative z-10"> 
            <AnimatePresence mode="wait">
              {currentActiveTab ? (
                <div
                  key={currentActiveTab.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {currentActiveTab.icon && React.isValidElement(currentActiveTab.icon) &&
                      React.cloneElement(currentActiveTab.icon, {
                        className: "w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 bg-black/30 p-2 rounded-lg border border-cyan-700/50 flex-shrink-0", 
                      })}
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {currentActiveTab.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {currentActiveTab.content}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500">
                  Select a service category to see the details.
                </p>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto relative z-10">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-3 py-2 sm:px-4 text-xs sm:text-sm rounded-lg font-medium transition-all duration-300 border ${activeTab === tab.name
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#0F318E] text-white border-cyan-400 shadow-lg shadow-cyan-500/40"
                    : "bg-gray-800/70 text-gray-400 border-gray-700 hover:bg-gray-700/80 hover:border-gray-600 hover:text-white"
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        <div
          className="w-full md:w-1/2 md:mt-0 space-y-6 text-center md:text-left flex flex-col justify-center" 
          variants={itemVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
            {title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#0F318E]">
              {subtitle}
            </span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-prose mx-auto md:mx-0 backdrop-blur-sm bg-black/10 p-2 rounded">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CyberServicesSection;