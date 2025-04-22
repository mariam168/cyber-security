import React, { useState } from "react";
import FAQItem from "./FAQItem";

const FAQSection = ({ title, subtitle, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8">
      
      <div className="md:w-1/2 self-start text-center lg:text-left sticky mt-10 ">
        <h4 className="text-[#0F318E] font-semibold text-md sm:text-sm md:text-base tracking-wide">
          {subtitle}
        </h4>
        <h2 className="font-bold mt-2 text-xl sm:text-2xl md:text-3xl leading-snug md:leading-tight">
          {title}
        </h2>
      </div>

      <div className="md:w-1/2">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
