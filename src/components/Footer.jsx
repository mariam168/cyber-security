import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
     
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        
        <div>
          <h2 className="text-2xl font-bold">Marioma</h2>
          <p className="text-gray-400 mt-2">
            Building the future of tech solutions.
          </p>
        </div>


        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-4 flex flex-col   gap-2">
            <a
              href="#"
              aria-label="Facebook"
              className="flex items-center gap-1 text-gray-400 hover:text-white text-lg transition-transform duration-300 "
            >
              <FaFacebookF className="text-md" />
              <span >Facebook</span>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex items-center gap-1 text-gray-400 hover:text-white text-lg transition-transform duration-300 "
            >
              <FaTwitter className="text-md" />
              <span >Twitter</span>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex items-center gap-1 text-gray-400 hover:text-white text-lg transition-transform duration-300 "
            >
              <FaInstagram className="text-md" />
              <span >Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-700 px-4">
        © {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  );
}
