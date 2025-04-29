import React from 'react';
const FeatureBox = ({ text, bgColor = "bg-opacity-10 bg-blue-500", icon }) => (
  <div className={`flex items-center gap-2 p-2 px-3 rounded-md text-xs sm:text-sm shadow-md border border-cyan-700/50 hover:border-cyan-400 hover:bg-opacity-20 transition-all duration-300 ${bgColor}`}>
    {icon && React.cloneElement(icon, { className: "w-4 h-4 text-cyan-400 flex-shrink-0" })}
    <span className="text-gray-200">{text}</span>
  </div>
);

export default FeatureBox;