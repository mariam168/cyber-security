import Header from "../components/Header";
import Marquee from "../components/Marquee";
import it from "../assets/it.jfif";
import google from "../assets/google.jfif";
import cyber from "../assets/cyber.jfif";
import Northern from "../assets/Nourthern.jfif";
import Elevator from "../assets/Elevator.jfif";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import mark1 from "../assets/mark1.jfif";
import mark2 from "../assets/mark2.jfif";
import mark3 from "../assets/mark3.jfif";
import mark4 from "../assets/mark4.jfif";
import mark5 from "../assets/mark5.jfif";
import ITSupportSection from "../components/ITSupportSection";
import TestimonialsSection from "../components/TestimonialsSection";
import VideoHeroSection from "../components/VideoHeroSection";
import { FaExternalLinkAlt, FaShieldAlt, FaCloud, FaLaptop } from "react-icons/fa";
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
    question: "What Is Security Scoring?",
    answer:
      "Microsoft security scoring is a carefully designed system that dives into your tenancy, devices, information governance and application control. Based on your tenancy setup and security settings we can give you a score. We aim to improve your score every month.",
  },
  {
    question: "I use Multi-Factor Authentication, is that enough?",
    answer:
      "While Multi-Factor Authentication (MFA) significantly improves security, it should be combined with other best practices such as endpoint protection, regular security audits, and user training.",
  },
  {
    question: "What are the biggest Cyber Security threats for SMBs right now?",
    answer:
      "Some of the biggest cybersecurity threats for SMBs include phishing attacks, ransomware, insider threats, and weak password policies.",
  },
  {
    question: "Do you offer Cyber Security training?",
    answer:
      "Yes, we offer comprehensive cybersecurity training programs for businesses to help employees recognize and mitigate potential threats.",
  },
];

const solutions = [
  { title: "Cyber Security", image: solution1, icon: "🛡️" },
  { title: "IT Support", image: solution2, icon: "👨‍💻" },
  { title: "Hardware", image: solution3, icon: "🖥️" },
  { title: "Cloud Services", image: solution2, icon: "☁️" },
];
const articles = [
  { title: "Windows 10 End Of Support", image: read1, link: "#" },
  { title: "Windows 11: The Future Of Business ", image: read2, link: "#" },
  { title: "Merry Christmas Everyone", image: read3, link: "#" },
];
export default function IT() {
  const logos = [mark1, mark2, mark3, mark4, mark5];

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
      <Marquee images={logos} speed={12} />
      <InfoSection
        title="Tailored IT Support for SMEs"
        description="Whether you need comprehensive IT management or help with a specific technical issue, we’re here to support you. 
        Our expert team delivers customised solutions, ensuring your business has the right technology to succeed. 
        From resolving everyday challenges to driving long-term strategies, we provide flexible, scalable support tailored to your unique needs."
        images={[
          { src: cyber, alt: "Cyber Essentials Plus" },
          {
            src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            alt: "Microsoft Partner",
          },
          { src: google, alt: "Google Reviews" },
        ]}
        mainImage={it}
        reverse={false}
      />
      <ITSupportSection
        title="Flexible"
        subtitle="IT Support"
        description="Whether you require ongoing IT management or assistance with a specific technical challenge, we’re here to help. Our expert team provides tailored services and solutions, ensuring your business has the right technology in place to thrive."
       
        tabs={[
          { name: "Managed IT", icon: <FaLaptop size={20} />, content: "Comprehensive IT solutions for growing businesses." },
          { name: "Cybersecurity", icon: <FaShieldAlt size={20} />, content: "Protect your data and business from threats." },
          { name: "Cloud Solutions", icon: <FaCloud size={20} />, content: "Leverage the power of cloud computing." },
        ]}
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
      <VideoHeroSection
        title="IT doesn't have to"
        subtitle="cost the earth"
        description="ITC Service was founded with sustainability in mind. Driven by our Technical Directors vision to hit carbon neutrality by 2025."
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

          <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-center text-2xl font-bold mb-6">Take a read!</h2>

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
    </div>
    <Footer />
    </div>
  );
}
