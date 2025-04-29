import React from 'react';
const Button = ({ text, onClick, className = "" }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold text-white transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:brightness-110 ${className}`}
  >
    {text}
  </button>
);

export default Button;