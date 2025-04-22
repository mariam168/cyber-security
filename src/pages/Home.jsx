import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import SolutionSlider from "../components/SolutionSlider";

import solution1 from "../assets/solution1.jfif";
import solution2 from "../assets/solution2.jfif";
import solution3 from "../assets/solution3.jfif";
import solution4 from "../assets/solution4.jpg";
import circle from "../assets/circle.png";
import vector from "../assets/vector.png";
import icon from "../assets/icon.png";
import vector2 from "../assets/Vector (1).png";
import background from "../assets/background.png";
import image1 from "../assets/image1.jfif";
import image2 from "../assets/image2.jfif";
import image3 from "../assets/image3.jfif";
import image4 from "../assets/image4 (1).jpg";
import image5 from "../assets/image5.jpg";
import { motion } from "framer-motion";
import {  useState } from "react";
import read1 from "../assets/read1.jfif";
import read2 from "../assets/read2.jfif";
import read3 from "../assets/read3.jfif";
import Carousel from "../components/Carousel";
import mark1 from "../assets/mark1.jfif";
import mark2 from "../assets/mark3.jfif";
import mark3 from "../assets/mark4.jfif";
import mark4 from "../assets/mark5.jfif";
import mark5 from "../assets/mark1.jfif";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Marquee from "../components/Marquee";
import { i } from "framer-motion/client";
const cards = [
  {
    title: "Fortifying the Digital World",
    description:
      "Cybersecurity is the backbone of modern technology businesses and individuals from evolving online risks.",
    image: image1,
  },
  { title: "Protecting Your Data",
    description:
      "We help organizations safeguard their data by implementing strong encryption and access controls.",
    image: image4,
  },
  {
    title: "Protecting Your Data",
    description:
      "We help organizations safeguard their data by implementing strong encryption and access controls.",
    image: image2,
  },
  {
    title: "Advanced Threat Detection",
    description:
      "Our cybersecurity framework includes AI-powered threat detection, real-time monitoring.",
  
     image: image3,
  },
 
  {
    title: "Advanced Threat Detection",
    description:
      "Our cybersecurity framework includes AI-powered threat detection, real-time monitoring.",
    image: image5,
  },
];
const cardData = [
  {
   
    icon: "⚡️", 
    title: "Rapid Attack Vectors Emerge",
    description:
      "Cyber threats evolve at breakneck speed, exploiting new vulnerabilities constantly. Attackers can infiltrate systems within hours, making immediate detection and response critical to mitigate damage.",
  },
  {

     icon: "💸",
    title: "Significant Financial Consequences",
    description:
      "Beyond direct recovery costs, breaches incur substantial expenses including legal fees, regulatory fines, reputational damage, and loss of customer trust, severely impacting long-term profitability.",
  },
  {
  
     icon: "🔒💔", 
    title: "Loss of Data and Customer Trust",
    description:
      "A security incident can result in the irreversible loss of sensitive data and intellectual property. Rebuilding diminished customer and partner trust after a breach is a complex and lengthy process.",
  },
];
const faqsData = [
  {
    question: "Why is cybersecurity important for my business?",
    answer:
      "Cybersecurity protects your business from digital threats that can lead to data breaches, financial loss, reputational damage, and operational disruption. It's essential for maintaining trust and continuity in today's digital landscape.",
  },
  {
    question: "How often should we update our security software?",
    answer:
      "Security software, including antivirus, firewalls, and operating systems, should be updated as soon as new patches or versions are released. Regular updates are crucial to protect against the latest known vulnerabilities.",
  },
  {
    question: "What is ransomware and how can I protect against it?",
    answer:
      "Ransomware is malicious software that encrypts your files, demanding payment to restore access. Protection involves regular data backups, employee training on phishing, and robust endpoint security solutions.",
  },
  {
    question: "Are cloud services secure?",
    answer:
      "Cloud providers invest heavily in security, often more than individual businesses can. However, security is a shared responsibility. Your protection depends on both the provider's infrastructure security and your configuration and access management.",
  },
];
const solutions = [
  { title: "Managed IT Services", image: solution1, icon: "📊" },
  { title: "Data Backup & Recovery", image: solution2, icon: "💾" }, 
  { title: "Network Solutions", image: solution3, icon: "🌐" }, 
  { title: "VoIP & Communication", image: solution4, icon: "📞" }, 
];

const articles = [
  { title: "The Importance of Cloud Security", image: read1, link: "#" },
  { title: "5 Tips for Effective Remote Work", image: read2, link: "#" }, 
  { title: "Understanding Ransomware Threats", image: read3, link: "#" },
];

const logos = [mark1, mark2, mark3, mark4, mark5 , mark1, mark2, mark3, mark4, mark5 , mark1, mark2, mark3, mark4, mark5];
export default function Home() {
  const text = "TRUSTED Cybersecurity Expertise";
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div>
      <Header />
      <div>
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="absolute top-[20%] left-[5%] w-32 h-32 bg-blue-500 rounded-full opacity-30 blur-[120px]"></div>
            <div className="absolute top-[50%] left-[10%] w-32 h-32 bg-blue-500 rounded-full opacity-30 blur-[120px]"></div>
            <div className="absolute bottom-[90%] right-[15%] w-32 h-32 bg-[#22D030] rounded-full opacity-30 blur-[120px]"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold relative z-10 text-center">
            <motion.span
              className="bg-gradient-to-r from-[#0F318E] to-[#22D030] bg-clip-text text-transparent"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </h1>
          <p className="text-center text-gray-300 max-w-2xl mt-4 relative z-10">
            We provide organizations with proven expertise, tailored solutions
            and services to help make better cybersecurity decisions that
            minimize risk.
          </p>
<Link to="/talk-to-expert">
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-gray via-[#0F318E] to-gray hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 relative z-10">
            Talk to an Expert
          </button>
</Link>

          <div
            className="absolute bottom-25 left-16 w-16 h-16 flex items-center justify-center bg-no-repeat bg-center bg-cover rounded-full "
            style={{ backgroundImage: `url(${circle})` }}
          >
            <img src={vector} alt="lock" className="w-5 h-5" />
          </div>
          <div
            className="absolute bottom-1/5 right-1/9 w-16 h-16 flex items-center justify-center bg-no-repeat bg-center bg-cover rounded-full "
            style={{ backgroundImage: `url(${circle})` }}
          >
            <img src={icon} alt="shield" className="w-5 h-5" />
          </div>
          <div
            className="absolute top-1/5 left-1/4 w-16 h-16 flex items-center justify-center bg-no-repeat bg-center bg-cover rounded-full "
            style={{ backgroundImage: `url(${circle})` }}
          >
            <img src={vector2} alt="shield" className="w-7 h-7" />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center min-h-[70vh] bg-black text-white px-4">
        <div
          className="absolute w-[88%] h-[70%] bg-cover bg-center rounded-lg"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div className="absolute w-[88%] h-[80%] bg-black opacity-70 rounded-lg"></div>
        <div className="relative z-10 flex space-x-6 overflow-hidden w-[80%] h-[60%]">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${(activeIndex / 2) * 30}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-black/50 rounded-lg shadow-lg flex w-[500px] h-[250px] overflow-hidden flex-shrink-0 mx-2"
              >
                <div className="flex-1 p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="mt-4 text-[15px] text-gray-300">
                    {card.description}
                  </p>
                  <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
                    Download
                  </button>
                </div>
                <div className="flex-1">
                  <img
                    src={card.image}
                    alt="card"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-[5%] flex space-x-3">
          {Array.from({ length: Math.ceil(cards.length / 2) }).map(
            (_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index * 2)}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all ${
                  activeIndex === index * 2
                    ? "bg-[#0F318E] scale-110"
                    : "border-2 border-[#0F318E]"
                }`}
              ></div>
            )
          )}
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 py-[100px]">
        <div className="text-center px-4 md:px-8 lg:px-16">
          <h2 className="text-md md:text-lg text-gray-300 text-center mb-4 md:mb-6">
            Trusted by Government Organizations and Global Brands
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8 md:mb-12 lg:mb-[100px]">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">4,200+</p>
              <p className="text-gray-400 text-sm md:text base">Customers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">50%</p>
              <p className="text-gray-400 text-sm md:text-base">
                of the Fortune 100
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">40%</p>
              <p className="text-gray-400 text-sm md:text-base">
                of the Fortune 500
              </p>
            </div>
          </div>

          <div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`relative bg-white text-black p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 cursor-pointer overflow-hidden
            ${selected === index ? "border-animation" : ""} // Ensure 'border-animation' CSS class is defined elsewhere
            `}
          >
           
            <div className="text-3xl mb-4">{item.icon}</div>
            <h3 className="text-md md:text-lg font-bold">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>

        </div>
     
        <div className="relative bg-black text-white text-center py-16 overflow-hidden mb-6">
          <div className="flex justify-center items-center mb-8 relative">
            <svg
              className="w-64 h-64"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#0F318E"
                strokeWidth="1.5"
                d="M100,10 C130,50 70,90 100,130 S130,210 100,250"
              />
              <path
                fill="none"
                stroke="#0F318E"
                strokeWidth="1.5"
                d="M80,20 C110,60 50,100 80,140 S110,220 80,260"
              />
              <path
                fill="none"
                stroke="#0F318E"
                strokeWidth="1.5"
                d="M120,30 C150,70 90,110 120,150 S150,230 120,270"
              />
              <circle cx="100" cy="50" r="8" fill="#3B82F6" />
              <circle cx="130" cy="90" r="4" fill="#22C55E" />
              <circle cx="70" cy="130" r="3" fill="#22C55E" />
            </svg>
          </div>

          <div className="relative z-10">
  <p className="text-md py-1 text-gray-400">
    Partnering for a Secure Future
  </p>
  <h2 className="text-xl font-semibold py-2">
    Your Dedicated
    <span className="bg-gray-200 text-black px-2 py-1 rounded ml-1"> 
      Security Partner
    </span>
  </h2>
  <p className="text-gray-400 mt-2">
    We collaborate closely with your team, providing expert guidance and support to navigate the complexities of cybersecurity.
  </p>

  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-gray via-[#0F318E] to-gray hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 relative z-10"> {/* Combined redundant classes */ }
    Discover Our Approach
  </button>
</div>
</div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            className="w-full h-20"
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon fill="white" points="0,100 250,40 500,100" />
          </svg>
        </div>
      </div>

    
      <FAQSection
     title="Stay Ahead of Threats. Build a Resilient Defense."
subtitle="Frequently Asked Questions"
      faqs={faqsData}
    />
    
      <SolutionSlider solutions={solutions} />

     

      <Carousel
  items={articles}
  slidesPerView={3}
  renderItem={(article) => (
    <div className="shadow-lg rounded-xl p-4 sm:p-5 my-4 bg-white flex flex-col h-full">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg"
      />
      <h3 className="mt-3 text-base sm:text-lg font-semibold text-gray-800">
        {article.title}
      </h3>
      <a
        href={article.link}
        className="mt-auto text-sm sm:text-base text-red-600 hover:underline"
      >
        Read More »
      </a>
    </div>
  )}
/>


     
  
    <div>
      <Marquee images={logos} speed={12} />
    </div>
      <Footer />
    </div>
  );
}
