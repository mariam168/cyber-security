import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Contact Info */}
        <motion.div 
          className="bg-white p-6 shadow-lg rounded-lg flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-red-500 text-xl" />
            <p>25 Silicon Avenue, Tech City, UK</p>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaPhoneAlt className="text-green-500 text-xl" />
            <p>+44 20 7946 0958</p>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-blue-500 text-xl" />
            <p>support@techflow.co.uk</p>
          </div>
          <iframe
            className="w-full h-64 rounded-lg mt-4"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19800.308002902936!2d-0.12775859999999998!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333e0673f%3A0xf9359ab0a875886b!2sLondon!5e0!3m2!1sen!2suk!4v1713772593993!5m2!1sen!2suk"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white p-6 shadow-lg rounded-lg flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#0F318E] text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
