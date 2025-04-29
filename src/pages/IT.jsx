import Header from "../components/Header";
import Northern from "../assets/Nourthern.jfif";
import Elevator from "../assets/Elevator.jfif";
import HeroSection from "../components/ServicePages/HeroSection";
import mark1 from "../assets/mark1.jfif";
import mark2 from "../assets/mark4.jfif";
import mark3 from "../assets/mark3.jfif";
import mark4 from "../assets/mark4.jfif";
import mark5 from "../assets/mark5.jfif";
import ITSupportSection from "../components/ServicePages/ITSupportSection";
import TestimonialsSection from "../components/ServicePages/TestimonialsSection";
import VideoHeroSection from "../components/ServicePages/VideoHeroSection";
import { FaRegLightbulb, FaNetworkWired, FaDatabase } from "react-icons/fa";
import read1 from "../assets/read1.jfif";
import read2 from "../assets/read2.jfif";
import read3 from "../assets/read3.jfif";
import Carousel from "../components/Carousel";
import FAQSection from "../components/FAQSection";
import SolutionSlider from "../components/SolutionSlider";
import solution1 from "../assets/solution1.jfif";
import solution2 from "../assets/solution2.jfif";
import solution3 from "../assets/solution3.jfif";
import Footer from "../components/Footer";
const faqsData = [
  {
    question: "How does Security Scoring benefit my business?",
    answer:
      "Security Scoring helps identify gaps in your IT infrastructure by evaluating policies, device compliance, and access control. It provides a measurable benchmark and helps track security improvements month-over-month.",
  },
  {
    question: "Is Multi-Factor Authentication still effective in 2025?",
    answer:
      "Absolutely. MFA remains a critical layer of defense, but it's most effective when combined with Zero Trust policies, identity protection, and real-time threat monitoring.",
  },
  {
    question: "What are common cybersecurity risks for SMEs in 2025?",
    answer:
      "Phishing remains the top threat, followed by AI-driven social engineering, unsecured APIs, and supply chain vulnerabilities.",
  },
  {
    question: "Do you provide on-site and remote cyber training?",
    answer:
      "Yes, we offer both virtual and in-person training sessions tailored to your industry. Our courses cover threat awareness, compliance, and secure remote working practices.",
  },
];
const solutions = [
  { title: "Cybersecurity & Compliance", image: solution1, icon: "🛡️" },
  { title: "Managed IT Services", image: solution2, icon: "💼" },
  { title: "Business Continuity", image: solution3, icon: "🔄" },
  { title: "Cloud & Remote Work", image: solution2, icon: "🌐" },
];

const articles = [
  { title: "Preparing for Windows 10 End of Life: What You Need to Know", image: read1, link: "#" },
  { title: "Migrating to Windows 11: A Guide for Modern Businesses", image: read2, link: "#" },
  { title: "How to Build a Cyber-Resilient Workplace in 2025", image: read3, link: "#" },
];

export default function IT() {

  const logos = [mark1, mark2, mark3, mark4, mark5, mark1, mark2, mark3, mark4, mark5, mark1, mark2, mark3, mark4, mark5];


  return (
    <div>
      <Header />
      <HeroSection
        title="IT Support That Empowers Growth"
        subtitle="IT downtime costs UK businesses an average of £3.7 million a year. "
        features={[
          { text: " ✅100% CSAT Scores", bgColor: "bg-green-600/1" },
          { text: " ✅90+ Net Promoter Score", bgColor: "bg-green-600/1" },
          { text: "Powered by Simplesat®", bgColor: "bg-green-500 " },
        ]}
        buttonText="Start Today"
        onButtonClick={() => console.log("Start Today button clicked!")}
      />

      <TestimonialsSection
        title="Don't just take our word for it:"
        subtitle="Providing A Class Leading Service Desk Since 2006"
        description="ITC Service was founded in 2006 with one goal in mind, to provide Outstanding IT Support for businesses in the North East and beyond."
        testimonials={[
          {
            feedback:
              "A very approachable and welcoming team from logging a ticket to resolving any issues reported. Couldn’t be happier with their support.",
            author: "Northern Elevator Limited",
            logo: Northern,
          },
          {
            feedback:
              "Everyone at ITC is amazing, so helpful, friendly and nothing is too much trouble. Highly recommended them to any business.",
            author: "Northern Rights",
            logo: Elevator,
          },
        ]}
        stats={{
          title: "March Statistics",
          description:
            "For transparency, each month we share our statistics for the world to see.",
          metrics: [
            { label: "Net Promoter Score", value: "91.5" },
            { label: "Customer Satisfaction", value: "99.8%" },
            {
              label: "Average Call Wait Time",
              value: "8.8 secs",
              highlight: true,
            },
          ],
        }}
      />
      <ITSupportSection
        title="Reliable"
        subtitle="Tech Services"
        description="From one-time consultations to long-term partnerships, our team delivers innovative, scalable tech solutions tailored to your unique business needs."
        tabs={[
          {
            name: "IT Consulting",
            icon: <FaRegLightbulb size={20} />,
            content: "Strategic guidance to help align your technology with business goals.",
          },
          {
            name: "Network Solutions",
            icon: <FaNetworkWired size={20} />,
            content: "Robust networking services to keep your systems connected and efficient.",
          },
          {
            name: "Data Backup",
            icon: <FaDatabase size={20} />,
            content: "Reliable data protection and recovery plans to secure your information.",
          },
        ]}
      />
      <VideoHeroSection
        title="IT That’s Powerful—Not Wasteful"
        subtitle="Sustainable by Design"
        description=" Service, we’re committed to building a greener future. Inspired by our Technical Director’s vision, we’re on a mission to achieve full carbon neutrality by 2025—delivering cutting-edge IT solutions with minimal environmental impact."
        videoUrl="https://www.youtube.com/embed/TCjaZXRa2No"
        imageUrl="https://cdn-icons-png.flaticon.com/512/3063/3063456.png"
        bgGradient="black"
        btnText="Read More"
        btnLink="#"
      />
      <FAQSection
        title="You are only as strong as your weakest link, so make every link count."
        subtitle="Your Questions, Answered."
        faqs={faqsData}
      />

      <SolutionSlider solutions={solutions} />


      <Carousel
        items={articles}
        slidesPerView={3}
        renderItem={(article) => (
          <div className="shadow-lg rounded-lg p-4">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="mt-2 text-lg font-bold">{article.title}</h3>
            <a href={article.link} className="text-red-500 text-sm">
              Read More »
            </a>
          </div>
        )}
      />

      <Footer />
    </div>
  );
}
