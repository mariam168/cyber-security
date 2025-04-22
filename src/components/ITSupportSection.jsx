import { useState } from "react";
import React from 'react'; // Import React if icons are JSX elements

const ITSupportSection = ({ title, subtitle, description, tabs = [] }) => { // Default tabs to []
  // Initialize with the first tab's name, or empty string if tabs is empty/undefined
  const [activeTab, setActiveTab] = useState(tabs[0]?.name || "");

  // Find the currently active tab object once for efficiency
  const currentActiveTab = tabs.find(tab => tab.name === activeTab);

  return (
    // Add responsive padding to the section
    <div className="bg-gray-100 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      {/*
          Container:
          - max-w-6xl centers content with a max width.
          - flex-col stacks items vertically by default (mobile).
          - md:flex-row places items side-by-side on medium screens and up.
          - gap provides spacing between items (vertical on mobile, horizontal on desktop).
          - items-start aligns items to the top when in row mode.
      */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">

        {/* Left/Top Section: Text Description */}
        {/*
            Default: Full width, centered text.
            md+: Half width, left-aligned text.
        */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
          {/* Responsive title size */}
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            {title} <span className="text-[#0F318E]">{subtitle}</span>
          </h2>
          {/* Responsive description text size */}
          <p className="text-gray-600 text-base md:text-lg">{description}</p>
        </div>

        {/* Right/Bottom Section: Tabs */}
        {/*
            Default: Full width, standard padding.
            md+: Half width, add left border and specific left padding for visual separation.
        */}
        <div className={`
            w-full md:w-1/2 bg-white shadow-lg p-6 rounded-lg
            md:border-l-4 border-[#0F318E] md:pl-8
          `}>

          {/* Check if a valid tab is active before rendering its details */}
          {currentActiveTab ? (
            <>
              {/* Tab Header (Icon + Name) */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 md:mb-6">
                {/* Render icon if provided, add some basic styling */}
                {currentActiveTab.icon && React.isValidElement(currentActiveTab.icon) && (
                    React.cloneElement(currentActiveTab.icon, { className: 'w-6 h-6 sm:w-7 sm:h-7 text-[#0F318E] flex-shrink-0' })
                )}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{currentActiveTab.name}</h3>
              </div>
              {/* Tab Content - Added min-height to prevent layout jumps */}
              <p className="text-gray-600 text-sm sm:text-base min-h-[5rem] sm:min-h-[6rem]">{currentActiveTab.content}</p>
            </>
          ) : (
            // Fallback message if no tab is selected or tabs array is empty
            <p className="text-gray-500 min-h-[5rem] sm:min-h-[6rem]">Select a service to see the details.</p>
          )}

          {/* Tab Buttons */}
          {/* flex-wrap ensures buttons wrap onto the next line on smaller screens */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                // Responsive padding and text size for buttons
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md transition-all duration-300 border ${
                  activeTab === tab.name
                    ? "bg-[#0F318E] text-white border-[#0F318E] shadow-sm" // Slightly reduced shadow
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 hover:border-gray-400" // Adjusted inactive/hover style
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ITSupportSection;