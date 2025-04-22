import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      name: "Services",
      subMenu: [
        {
          title: "IT Support",
          desc: "Supported by an industry leading service desk with 98%+ CSAT Score",
          link: "/it",
          items: ["VoIP Services", "PBX Systems", "Call Center Solutions"],
        },
        {
          title: "Cyber Security",
          desc: "Protect your boundaries with advanced security solutions",
          link: "/cyber-security",
          items: ["VoIP Services", "PBX Systems", "Call Center Solutions"],
        },
        {
          title: "Cloud Services",
          desc: "Migrate to the cloud and make the most of modern technology",
          link: "/cloud",
          items: ["VoIP Services", "PBX Systems", "Call Center Solutions"],
        },
        {
          title: "Data Analytics",
          desc: "Unlock the power of data-driven decision making",
          link: "/data-analysis",
          items: ["VoIP Services", "PBX Systems", "Call Center Solutions"],
        },
      ],
    },
    {
      name: "Technologies",
      subMenu: [
        {
          title: "Telephony",
          desc: "Robust, reliable, high quality communications solutions",
          link: "#",
          items: ["VoIP Services", "PBX Systems", "Call Center Solutions"],
        },
        {
          title: "Connectivity",
          desc: "Leased Lines & robust network connectivity",
          link: "#",
          items: ["VoIP Services", "PBX Systems", "Call Center Solutions"],
        },
        {
          title: "Hardware",
          desc: "Dedicated workshop for hardware supply, setup, and repair",
          link: "#",
          items: ["VoIP Services", "PBX Systems", "Call Center Solutions"],
        },
        {
          title: "Software Solutions",
          desc: "Custom software development tailored to your needs",
          link: "#",
          items: ["VoIP Services", "PBX Systems", "Call Center Solutions"],
        },
      ],
    },
    {
      name: "Company",
      subMenu: [
        {
          title: "About Us",
          desc: "Learn more about our mission and values",
          link: "/about-us",
          items: ["VoIP Services", "PBX Systems", "Call Center Solutions"],
        },
        {
          title: "Careers",
          desc: "Join our team and grow with us",
          link: "meet-our-team",
          items: ["VoIP Services", "PBX Systems", "Call Center Solutions"],
        },
        {
          title: "News & Updates",
          desc: "Stay up-to-date with our latest news",
          link: "/news",
          items: ["VoIP Services", "PBX Systems", "Call Center Solutions"],
        },
        {
          title: "Contact Us",
          desc: "Get in touch with our support team",
          link: "contact-us",
          items: ["VoIP Services", "PBX Systems", "Call Center Solutions"],
        },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // إغلاق القائمة عند النقر خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-menu")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="bg-black text-white px-6 py-3 flex items-center justify-between relative">
     <Link to="/"> <div className="text-2xl font-bold">MARIOMA</div></Link>

      <nav className="hidden md:flex space-x-6 text-sm">
        {menuItems.map((item, index) => (
          <div key={index} className="relative dropdown-menu">
            <button
              onClick={() => toggleDropdown(index)}
              className="hover:text-blue-400 focus:outline-none"
            >
              {item.name} <span className="text-[#0F318E]">▼</span>
            </button>
          </div>
        ))}
      </nav>

      <div className="hidden md:flex items-center space-x-4">
        <FaSearch className="cursor-pointer" />
        <button className="bg-gradient-to-r from-[#0F318E] to-[#22D030] text-white px-4 py-2 rounded-md">
          Report An Incident
        </button>
      </div>

    
      {openDropdown !== null && (
  <div className="absolute left-0 top-full w-full bg-black text-white p-6 shadow-lg z-50 dropdown-menu">
    
    <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
      {menuItems[openDropdown].subMenu.map((sub, i) => (
        <Link to={sub.link} key={i}>
        <div key={i} className="p-4 border-l border-gray-700 hover:bg-gray-800 transition duration-300 rounded-md">
          <h3 className="text-lg font-bold text-white">{sub.title}</h3>
          <p className="text-sm text-gray-300">{sub.desc}</p>
          <ul className="mt-2">
  {sub.items.map((item, idx) => (
    <li key={idx} className="text-sm text-gray-400 p-2 hover:text-white flex items-center gap-2">
      <AiOutlineRight className="text-[#0F318E]" />
      {item}
    </li>
  ))}
</ul>
        </div>
        </Link>
      ))}
    </div>
  </div>
)}

    </header>
  );
};

export default Header;
