import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ITSupportSection = ({ title, subtitle, description, tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name || "");
  const currentActiveTab = tabs.find((tab) => tab.name === activeTab);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row  gap-10 items-start">
        
     
        <motion.div
          className="w-full md:w-1/2 bg-white shadow p-8 rounded-2xl border-t-4 border-[#0F318E]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {currentActiveTab ? (
              <motion.div
                key={currentActiveTab.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  {currentActiveTab.icon &&
                    React.isValidElement(currentActiveTab.icon) &&
                    React.cloneElement(currentActiveTab.icon, {
                      className:
                        "w-7 h-7 sm:w-8 sm:h-8 text-[#0F318E] bg-gray-100 p-1.5 rounded-full",
                    })}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {currentActiveTab.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-base sm:text-lg min-h-[5rem] sm:min-h-[6rem] leading-relaxed">
                  {currentActiveTab.content}
                </p>
              </motion.div>
            ) : (
              <p className="text-gray-500 min-h-[5rem] sm:min-h-[6rem]">
                Select a service to see the details.
              </p>
            )}
          </AnimatePresence>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-4 py-2 text-sm sm:text-base rounded-lg font-medium transition-all duration-300 border ${
                  activeTab === tab.name
                    ? "bg-[#0F318E] text-white border-[#0F318E] shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="w-full md:w-1/2 md:ml-10 md:mt-10 space-y-6 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-black leading-tight">
            {title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F318E] to-blue-500">
              {subtitle}
            </span>
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl max-w-prose mx-auto md:mx-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ITSupportSection;
