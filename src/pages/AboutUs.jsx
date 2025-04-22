import Header from "../components/Header";
import Map from "../components/Map";
import Marquee from "../components/Marquee";
import '../styles/about.css';
import React, { useRef, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import about1 from '../assets/cyber.jfif';
import about2 from '../assets/read1.jfif';
import about3 from '../assets/read2.jfif';
import about4 from '../assets/read3.jfif';
import mark1 from "../assets/mark1.jfif";
import mark2 from "../assets/mark2.jfif";
import mark3 from "../assets/mark3.jfif";
import mark4 from "../assets/mark4.jfif";
import mark5 from "../assets/mark5.jfif";
import Footer from "../components/Footer";
import Team from "../components/Team";
import person from "../assets/person.webp";
import history1 from "../assets/history1.jfif";
import history2 from "../assets/history2.jfif";
import person1 from "../assets/person1.jfif";
import person2 from "../assets/person2.jfif";
import person3 from "../assets/person3.jfif";
import person4 from "../assets/person4.jfif";
import * as THREE from 'three';

export default function About() {
  const logos = [mark1, mark2, mark3, mark4, mark5];
  const teamMembersData = [
    { name: "John Doe", position: "CEO", image: about1 },
    { name: "Jane Smith", position: "CTO", image: about2 },
    { name: "Alice Brown", position: "Marketing Head", image: about3 },
    { name: "Robert White", position: "Lead Developer", image: about4 }
  ];
  const timelineData = [
    {
      year: "2006 - 2010",
      image: history1,
      title: "The Early Years",
      description:
        "Established in Feb 2006, ITC Service was formed by Christopher Potts and Peter Anderson. Both with a background in IT, they decided to form a company to assist other SMEs with their IT requirements...",
    },
    {
      year: "2006 - 2010",
      image: history1,
      title: "The Early Years",
      description:
        "Established in Feb 2006, ITC Service was formed by Christopher Potts and Peter Anderson. Both with a background in IT, they decided to form a company to assist other SMEs with their IT requirements...",
    },
    {
      year: "2006 - 2010",
      image: history1,
      title: "The Early Years",
      description:
        "Established in Feb 2006, ITC Service was formed by Christopher Potts and Peter Anderson. Both with a background in IT, they decided to form a company to assist other SMEs with their IT requirements...",
    },
    
  ];
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO",
      image: person1,
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: person2,
    },
    {
      name: "Michael Brown",
      position: "Head of Design",
      image: person3,
    },
    {
      name: "Emily Johnson",
      position: "Marketing Manager",
      image: person4,
    },
  ];
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0F318E, wireframe: true,transparent: true ,opacity: 0.3}); // Use the specified blue color
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 30;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({ color: 0x1E90FF, size: 0.1 }); 
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="relative w-full py-16 h-[50vh] flex flex-col justify-center items-center section-header">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gray-900 opacity-50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white">
          <div className="flex justify-center mb-4">
            <div className="w-7 h-7 mx-1 bg-[#0F318E] rounded shadow-md"></div>
            <div className="w-7 h-7 mx-1 bg-[#0F318E]  rounded shadow-md"></div>
            <div className="w-7 h-7 mx-1 bg-[#0F318E]  rounded shadow-md"></div>
          </div>
          <h2 className="text-2xl max-w-3xl sm:text-3xl md:text-4xl font-bold tracking-wide drop-shadow-md">
            About ITC Service – <span className="text-blue-200">North East’s Award-Winning</span> Cybersecurity Solutions
          </h2>
        </div>
      </div>

      <section className="py-16 px-6 md:px-20 text-center bg-white">
        <p className="text-blue-500 font-semibold uppercase">Who We Are</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Our Cybersecurity Journey
        </h2>
        <p className="mt-6 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          From the early days of IT support, we've evolved to become a leader in cybersecurity.
          We understand the growing threats and are dedicated to providing robust, reliable protection.
          Our client-centered approach ensures your security needs are met with expertise and care.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Our ethos is built on transparency and reliability. We deliver powerful cybersecurity solutions
          without overwhelming you with technical jargon. We treat every client's business uniquely,
          providing tailored security strategies.
        </p>
        <div className="mt-10 bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <p className="text-gray-800 italic text-lg">
            "Our mission is to safeguard your digital assets with cutting-edge cybersecurity solutions.
            We strive to provide the best security services, ensuring your peace of mind."
          </p>
          <div className="mt-6 flex items-center justify-center">
            <img
              src={person}
              alt="Christopher Potts"
              className="w-10 h-12 rounded-full mr-4"
            />
            <div className="text-left">
              <p className="text-black font-bold">Christopher Potts</p>
              <p className="text-gray-500 text-sm">Technical Director</p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-20 px-5 bg-white relative">
  <div className="max-w-5xl mx-auto relative">

    {/* Vertical Line (Only visible on md and up) */}
    <div className="hidden md:block absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-[#0F318E] to-[#1E90FF] transform -translate-x-1/2"></div>

    {timelineData.map((item, index) => (
      <div key={index} className="flex flex-col md:flex-row items-center mb-12 relative">
        
        {/* Timeline Marker + Icon (Only on md and up) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex-col items-center">
          <div className="w-8 h-8 bg-[#0F318E] border-4 border-white rounded-full relative z-10 shadow-lg"></div>
          <div className="bg-[#0F318E] text-white p-4 rounded-full shadow-xl mt-2 m-4">
            <FaCalendarAlt className="text-2xl" />
          </div>
        </div>

        {/* Content */}
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-10" : "md:pl-10"} mt-6 md:mt-0`}>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#0F318E] text-center">{item.title}</h3>
            <p className="text-gray-700 mt-4 text-center">{item.description}</p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    ))}
  </div>
</section>


      <Team title="Our Cybersecurity Team" teamMembers={teamMembers} />
      <Map />

      <Marquee images={logos} speed={50} />
      <Footer />
    </div>
  );
}