import React, { useRef, useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQItem = ({ faq, isOpen, toggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={toggle}
        className="flex justify-between  items-center w-full text-left py-4 px-5 bg-black text-white font-medium cursor-pointer sm:text-sm md:text-lg"
      >
        {faq.question}
        {isOpen ? <FaMinus /> : <FaPlus />}
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: `${height}px`,
          transition: "max-height 0.3s ease",
          overflow: "hidden",
        }}
        className="px-5 bg-gray-100 text-gray-800"
      >
        <div className="py-4">{faq.answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;
