import { useState, useEffect } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuItems = [
    {
      name: "Services",
      subMenu: [
        { title: "IT Support", desc: "Supported by an industry leading service desk with 98%+ CSAT Score", link: "/it", items: [] },
        { title: "Cyber Security", desc: "Protect your boundaries with advanced security solutions", link: "/cyber-security", items: [] },
        { title: "Cloud Services", desc: "Migrate to the cloud and make the most of modern technology", link: "/cloud", items: [] },
        { title: "Data Analytics", desc: "Unlock the power of data-driven decision making", link: "/data-analysis", items: [] },
      ],
    },
    {
      name: "Technologies",
      subMenu: [
        { title: "Telephony", desc: "Robust, reliable, high quality communications solutions", link: "#", items: [ 


        ] },
        { title: "Connectivity", desc: "Leased Lines & robust network connectivity", link: "#", items: [] },
        { title: "Hardware", desc: "Dedicated workshop for hardware supply, setup, and repair", link: "#", items: [] },
        { title: "Software Solutions", desc: "Custom software development tailored to your needs", link: "#", items: [] },
      ],
    },
    {
      name: "Company",
      subMenu: [
        { title: "About Us", desc: "Learn more about our mission and values", link: "/about-us", items: [] },
        { title: "Careers", desc: "Join our team and grow with us", link: "/meet-our-team", items: [] },
        { title: "News & Updates", desc: "Stay up-to-date with our latest news", link: "/news", items: [] },
        { title: "Contact Us", desc: "Get in touch with our support team", link: "/contact-us", items: [] },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeAllMenus = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-menu") && !event.target.closest("button[aria-haspopup='true']")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen && openDropdown !== null) {
      setOpenDropdown(null);
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (openDropdown !== null && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [openDropdown]);

  return (
    <header className="bg-black sticky top-0 py-6  text-white px-6 py-3 flex items-center justify-between relative z-50">
      <Link to="/" className="text-2xl font-bold" onClick={closeAllMenus}>
        MARIOMA
      </Link>

      <nav className="hidden md:flex space-x-6 text-sm">
        {menuItems.map((item, index) => (
          <div key={index} className="relative dropdown-menu">
            <button
              onClick={() => toggleDropdown(index)}
              className={`focus:outline-none flex items-center py-2 px-3 rounded-md transition-colors duration-200 ${
                openDropdown === index
                  ? "text-blue-400 bg-gray-800"
                  : "text-white hover:text-blue-400 hover:bg-gray-700"
              }`}
              aria-haspopup="true"
              aria-expanded={openDropdown === index}
            >
              {item.name}
              <IoIosArrowDown
                className={`inline ml-1 transition-transform duration-200 ${
                  openDropdown === index ? "rotate-180 text-blue-400" : "text-gray-400 group-hover:text-blue-400"
                }`}
              />
            </button>
          </div>
        ))}
      </nav>

      <div className="md:hidden flex items-center space-x-4">
        <FaSearch className="cursor-pointer" size={20} />
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <FaSearch className="cursor-pointer hover:text-blue-400 transition-colors duration-200" size={20} />
        <Link to = "./autho">
         <button className="bg-gradient-to-r from-[#0F318E] to-[#22D030] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity duration-200">
          Get Started
        </button>
        </Link>
      </div>

  
      {openDropdown !== null && (
        <div
          className="absolute left-0 top-full w-full bg-black bg-opacity-50 shadow text-white p-6 shadow-lg z-50 dropdown-menu animate-fadeIn border-b border-gray-700"
          style={{ animationDuration: '300ms' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {menuItems[openDropdown].subMenu.map((sub, i) => (
              <Link to={sub.link} key={i} onClick={closeAllMenus} className="block group">
                <div className="p-4 border-l border-[#0F318E] hover:border-blue-500 group-hover:bg-gray-800 transition duration-300  space-y-2">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors duration-200">{sub.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{sub.desc}</p>
                  {sub.items && sub.items.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {sub.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-400 p-1 hover:text-blue-300 flex items-center gap-2 transition-colors duration-200">
                          <AiOutlineRight className="text-[#0F318E] group-hover:text-blue-300" size={12} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}


      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 text-white text-md p-6 flex flex-col space-y-4 z-40 md:hidden overflow-y-auto animate-slideInRight"
          style={{ animationDuration: '300ms' }}
        >
          <button onClick={() => setMobileMenuOpen(false)} className="self-end mb-4 text-gray-400 hover:text-white" aria-label="Close menu">
            <FaTimes size={28} />
          </button>

          {menuItems.map((item, index) => (
            <div key={index} className="dropdown-menu border-b border-gray-700 last:border-b-0">
              <button
                onClick={() => toggleDropdown(index)}
                className={`text-xl w-full flex justify-between items-center py-3 font-semibold transition-colors duration-200 ${
                  openDropdown === index ? "text-blue-400" : "text-white hover:text-blue-300"
                }`}
                aria-haspopup="true"
                aria-expanded={openDropdown === index}
              >
                {item.name}
                <IoIosArrowDown
                  className={`transition-transform duration-200 ${
                    openDropdown === index ? "rotate-180 text-blue-400" : "text-gray-400"
                  }`}
                />
              </button>
              {openDropdown === index && (
                <div className="mt-2 mb-4 space-y-3 pl-4 animate-fadeIn" style={{ animationDuration: '400ms' }}>
                  {item.subMenu.map((sub, i) => (
                    <div key={i} className="bg-gray-800 rounded-lg p-4 space-y-1 border border-gray-700 hover:border-blue-500 transition duration-300">
                      <Link
                        to={sub.link}
                        onClick={closeAllMenus}
                        className="block text-lg font-semibold text-white hover:text-blue-300 transition-colors duration-200"
                      >
                        {sub.title}
                      </Link>
                      <p className="text-sm text-gray-400">{sub.desc}</p>
                      {sub.items && sub.items.length > 0 && (
                        <ul className="pt-2 space-y-1">
                          {sub.items.map((subItem, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-2 text-sm text-gray-300 hover:text-blue-300 cursor-pointer transition-colors duration-200"
                            >
                              <AiOutlineRight className="text-[#0F318E]" size={12} />
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="mt-6 pt-6 border-t border-gray-700">
            <Link to = "./autho">
            <button className="w-full bg-gradient-to-r from-[#0F318E] to-[#22D030] text-white px-4 py-3 rounded-md text-base font-medium hover:opacity-90 transition-opacity duration-200">
              Get Started
            </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;