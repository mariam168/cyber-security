import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaShieldAlt, FaNetworkWired, FaCodeBranch, FaFingerprint } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual form submission logic (e.g., API call)
    console.log("Form Submitted", formData);
    alert("Message sent!"); // Simple confirmation
    setFormData({ name: "", email: "", message: "" }); // Clear form
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-200 p-6 relative overflow-hidden">
      {/* Background representing Cyber Security (Darker, more abstract) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {/* Dark overlay with subtle texture */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Glowing nodes and lines - using blues and purples */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-600 opacity-20 rounded-full mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-600 opacity-20 rounded-full mix-blend-screen animate-pulse delay-200"></div>
        {/* Changed green node to cyan */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-cyan-500 opacity-20 rounded-full mix-blend-screen animate-pulse delay-400"></div>

        {/* Connecting Lines (simulated) - using blues and purples */}
        <div className="absolute top-[28%] left-[35%] w-40 h-0.5 bg-blue-500 opacity-30 rotate-45"></div>
        <div className="absolute bottom-[28%] right-[35%] w-40 h-0.5 bg-purple-500 opacity-30 -rotate-45"></div>
         {/* Changed green line to cyan */}
        <div className="absolute top-[8%] right-[12%] w-32 h-0.5 bg-cyan-500 opacity-30 rotate-90"></div>

        {/* Abstract grid/pattern overlay (more subtle) */}
         {/* Keeping the subtle blue grid */}
         <div className="absolute inset-0 grid grid-cols-10 gap-1 opacity-5 pointer-events-none">
             {[...Array(100)].map((_, i) => (
                 <div key={i} className="w-px h-full bg-blue-300 mx-auto"></div>
             ))}
         </div>
         <div className="absolute inset-0 grid grid-rows-10 gap-1 opacity-5 pointer-events-none">
             {[...Array(100)].map((_, i) => (
                 <div key={i} className="w-full h-px bg-blue-300 my-auto"></div>
             ))}
         </div>
      </div>

      <motion.h2
        className="text-4xl font-bold text-white mb-4 z-10 flex items-center gap-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaShieldAlt className="text-[#0F318E]" size={40} /> Get in Touch Securely
      </motion.h2>
       <motion.p
         className="text-gray-400 mb-12 text-lg text-center max-w-2xl z-10"
         initial={{ opacity: 0, y: -30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.2 }}
       >
         Connect with our cyber defense experts. Your inquiries are protected.
       </motion.p>


      <motion.div
        className="bg-gray-900 p-8 shadow-xl rounded-lg flex flex-col md:flex-row gap-12 w-full max-w-6xl z-10 relative border border-[#0F318E]/50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >

        <div className="w-full md:w-1/2 flex flex-col gap-8 relative bg-gray-700 p-6 rounded-lg border border-[#0F318E]/50 overflow-hidden"> 
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'1\' fill=\'%233B82F6\'/%3E%3C/svg%3E")', backgroundSize: '12px 12px' }}></div> 
                 <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500 to-transparent opacity-5 rotate-45 scale-150"></div>
                 <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-500 to-transparent opacity-5 rotate-45 scale-150"></div>
            </div>


            {/* Content needs z-index above the internal background elements */}
            <h3 className="text-2xl font-semibold text-white border-b border-[#0F318E]/50 pb-4 relative z-10">Contact Nodes</h3> {/* Renamed title */}

            <div className="flex items-start gap-4 text-gray-300 relative z-10">
                <FaMapMarkerAlt className="text-blue-400 text-2xl mt-1" />
                <div>
                    <p className="font-semibold">Operational Base</p> {/* Renamed */}
                    <p>Sector 123, Node 456</p> {/* Renamed */}
                    <p>Digital Grid, Region Alpha</p> {/* Renamed */}
                    <p>Cyberspace</p> {/* Renamed */}
                </div>
            </div>

             <div className="flex items-center gap-4 text-gray-300 relative z-10">
                {/* Changed icon color from green to cyan */}
                <FaPhoneAlt className="text-cyan-400 text-2xl" />
                <div>
                    <p className="font-semibold">Encrypted Channel</p> {/* Renamed */}
                    <p>+1 (555) [SEC] [URE]</p> {/* Changed number for theme */}
                </div>
            </div>

             <div className="flex items-center gap-4 text-gray-300 relative z-10">
                <FaEnvelope className="text-purple-400 text-2xl" />
                <div>
                     <p className="font-semibold">Secure Uplink</p> {/* Renamed */}
                    <p>secure.contact[@]yourcybercompany.com</p> {/* Renamed */}
                </div>
            </div>

            {/* Added a security icon element - changed red to orange for contrast if desired, or cyan */}
             <div className="flex items-center gap-4 text-gray-300 relative z-10">
                {/* Changed icon color from red to orange for contrast */}
                <FaFingerprint className="text-orange-400 text-2xl" />
                <div>
                     <p className="font-semibold">Verification Required</p> {/* Renamed */}
                    <p>Your identity is protected.</p> {/* Changed text */}
                </div>
            </div>

        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <motion.form
            className="bg-gray-900 p-8 shadow-inner rounded-lg flex flex-col gap-6 border border-[#0F318E]/50" 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onSubmit={handleSubmit}
          >
             <h3 className="text-2xl font-semibold text-white border-b border-[#0F318E]/50 pb-4">Initiate Secure Communication</h3> 
            <input
              type="text"
              name="name"
              placeholder="Your Code Name"
              className="p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Secure Email"
              className="p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-400" 
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Encrypted Message"
              rows="6"
              className="p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#0F318E] text-white p-4 rounded-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold tracking-wide flex items-center justify-center gap-2"
            >
              Send Secure Message <FaEnvelope />
            </button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}