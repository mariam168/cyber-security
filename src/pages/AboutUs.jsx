import Header from "../components/Header";
import Map from "../components/Map";
import Marquee from "../components/Marquee";
import '../styles/about.css'; 
import React, { useRef, useEffect } from "react";
import {FaQuoteLeft , FaShieldAlt, FaNetworkWired, FaCube, FaCodeBranch, FaStar } from "react-icons/fa"; 
import about1 from '../assets/cyber.jfif';
import mark1 from "../assets/mark1.jfif";
import mark2 from "../assets/mark4.jfif";
import mark3 from "../assets/mark3.jfif";
import mark4 from "../assets/mark4.jfif";
import mark5 from "../assets/mark5.jfif";
import Footer from "../components/Footer";
import Team from "../components/Team";
import person from "../assets/person.webp";
import history1 from "../assets/history1 (1).jpg";
import history2 from "../assets/history1 (2).jpg";
import history3 from "../assets/history1 (3).jpg";
import person1 from "../assets/person1.jfif"; 
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jfif";
import person4 from "../assets/person4.jfif";
import * as THREE from 'three'; 
import { motion } from 'framer-motion';
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            duration: 0.8,
        },
    },
};
const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};
export default function About() {
    const logos = [mark1, mark2, mark3, mark4, mark5, mark1, mark2, mark3, mark4, mark5, mark1, mark2, mark3, mark4, mark5];
    const timelineData = [
        {
            year: "2010 - 2015",
            image: history1,
            title: "Founding and Expansion",
            description:
                "In 2010, the company expanded its services to include managed IT support, catering to a growing demand for proactive IT solutions. This marked a significant shift from traditional reactive IT services to strategic IT management.",
        },
        {
            year: "2015 - 2020",
            image: history2,
            title: "Digital Transformation",
            description:
                "Between 2015 and 2020, we embraced the digital transformation wave, integrating cloud services, cybersecurity, and modern IT solutions. This period saw ITC Service solidify its position as a trusted partner for SMEs across the region.",
        },
        {
            year: "2020 - Present",
            image: history3,
            title: "A Future-Proof Approach",
            description:
                "Since 2020, ITC Service has focused on future-proofing businesses with cutting-edge technology, including AI and advanced cybersecurity solutions. Our commitment to innovation continues to drive our mission of empowering businesses through technology.",
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
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect(); 
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, rect.width / rect.height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(rect.width, rect.height);
        renderer.setPixelRatio(window.devicePixelRatio);
        const geometry = new THREE.IcosahedronGeometry(10, 1); 
        const material = new THREE.MeshBasicMaterial({
             color: 0x1E90FF, 
             wireframe: true,
             transparent: true,
             opacity: 0.7,
             side: THREE.DoubleSide
        });
        const techObject = new THREE.Mesh(geometry, material);
        scene.add(techObject);
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 800; 
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount * 3; i++) {
          positions[i] = (Math.random() - 0.5) * 50; 
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            color: 0x00FFFF, 
            size: 0.1,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending 
        });
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        camera.position.z = 25; 
        techObject.position.set(0, 0, 0); 

        const animate = () => {
            requestAnimationFrame(animate);
            techObject.rotation.x += 0.002;
            techObject.rotation.y += 0.003;
            particles.rotation.y += 0.0005;
            renderer.render(scene, camera);
        };

        animate();
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
        });
        resizeObserver.observe(canvas.parentElement);
        return () => {
            resizeObserver.disconnect();
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            scene.traverse((object) => {
                if (object.geometry) object.geometry.dispose();
                if (object.material) object.material.dispose();
            });
        };
    }, []); 
    return (
        <div className="bg-gray-950 text-gray-300 overflow-hidden font-sans relative"> 
          
            <section className="relative w-full h-[90vh] flex flex-col justify-center items-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <canvas ref={canvasRef} className="w-full h-full block"></canvas>
                </div>
                <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
                <div
                    className="relative z-20 text-center max-w-4xl mx-auto px-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={containerVariants}
                >
                     <div variants={itemVariants} className="flex justify-center mb-6 text-4xl space-x-4">
                        <FaShieldAlt className="text-blue-500 drop-shadow-lg" />
                        <FaNetworkWired className="text-purple-500 drop-shadow-lg" />
                        <FaCube className="text-cyan-500 drop-shadow-lg" />
                    </div>

                    <h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
                        Unlocking Secure Digital Futures
                    </h1>
                    <p variants={itemVariants} className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Leading the North East in Award-Winning Cybersecurity Solutions.
                    </p>
                </div>
            </section>
            <section className="py-24 px-6 relative bg-black text-gray-300 overflow-hidden ">
                 <div className="absolute inset-0 z-0 opacity-5"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A5568' fill-opacity='0.2'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath d='M0 10h20M10 0v20' stroke='%234A5568' stroke-width='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
                </div>

                <div
                    className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                   
                    <div variants={itemVariants}>
                        <p className="text-[#0F318E] font-semibold uppercase mb-2">Our Journey</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            From Humble Beginnings to Cybersecurity Leaders
                        </h2>
                        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                            Starting in IT support, we rapidly evolved, driven by a passion for technology and a deep understanding of the digital threats businesses face. Our journey is one of continuous learning, adaptation, and a relentless commitment to security.
                        </p>

                     
                        <div className="mt-10 relative">
                             <p className="text-blue-300 italic text-xl relative z-10 pl-10">
                                "Our mission is clear: Empower businesses with impenetrable digital defenses, allowing innovation to thrive without fear."
                            </p>
                            <div className="mt-4 flex items-center relative z-10 pl-10">
                                <img
                                    src={person}
                                    alt="Jane Doe"
                                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-gray-700"
                                />
                                <div className="text-left">
                                    <p className="text-white font-bold text-lg">Jane Doe</p>
                                    <p className="text-blue-300 text-sm">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div variants={itemVariants} className="relative bg-gray-800 p-4 rounded-lg shadow-xl overflow-hidden"> 
                         <div className="absolute inset-0 z-0 opacity-5"
                             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234A5568' fill-opacity='0.3'%3E%3Crect width='20' height='20'/%3E%3Cpath d='M0 0h10v10H0zM10 10h10v10H10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }}></div> {/* Example pattern */}
                         <div className="absolute inset-0 z-0 opacity-5 animate-pulse-slow" style={{ 
                             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath stroke='%238B5CF6' stroke-width='1.5' d='M20 10v20M10 20h20'/%3E%3Ccircle cx='20' cy='20' r='3' fill='%238B5CF6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                             backgroundSize: '80px 80px',
                             backgroundPosition: 'top right'
                         }}></div>

                         <div className="relative w-full h-80 md:h-96 rounded-lg shadow-xl overflow-hidden border border-gray-700 group-hover:shadow-2xl transition duration-300 relative z-10"> {/* Subtle border */}
                             <img
                                 src={about1}
                                 alt="Cybersecurity Concept"
                                 className="w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 transition duration-300"
                             />
                             <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent p-6 w-full text-left">
                                 <p className="text-white text-xl font-bold">Securing Digital Frontiers</p>
                                 <p className="text-blue-300 text-sm">Advanced Protection</p>
                             </div>
                         </div>
                    </div>
                </div>
            </section>
        
<section className="py-24 px-6 relative bg-black text-gray-300 overflow-hidden">

     <div className="absolute inset-0 z-0 opacity-10"
         style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='50' x2='100' y2='50' stroke='%234A5568' stroke-width='1'/%3E%3Cline x1='50' y1='0' x2='50' y2='100' stroke='%234A5568' stroke-width='1'/%3E%3Ccircle cx='50' cy='50' r='5' fill='%238A2BE2' opacity='0.5'/%3E%3C/svg%3E")`, backgroundSize: '50px 50px' }}> {/* Gray lines, Purple dots */}
     </div>

     <motion.div
         className="container mx-auto max-w-6xl relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
     >
         <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Our History: A Path of Innovation</motion.h2>
         <div className="relative">
             <div className="hidden md:block absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-gray-700 to-gray-900 transform -translate-x-1/2 shadow-glow"> {/* Dark Gray Gradient */}</div>

             {timelineData.map((item, index) => (
                 <div key={index} className="flex flex-col md:flex-row items-center mb-20 relative last:mb-0">
                     <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col items-center mb-6 md:mb-0">
                         <motion.div variants={itemVariants} className="w-10 h-10 bg-gray-800 border-4 border-gray-700 rounded-full relative z-10 shadow-xl flex items-center justify-center">
                              <div className="absolute inset-0 rounded-full bg-blue-800 opacity-30 animate-ping"></div>
                              <FaStar className="text-white text-xl relative z-10" />
                         </motion.div>
                         <motion.div variants={itemVariants} className="bg-[#0F318E]  text-white px-6 py-2 rounded-full shadow-xl mt-4 font-bold text-lg relative z-10">
                             {item.year}
                         </motion.div>
                     </div>
                     <motion.div
                         variants={itemVariants}
                         className={`w-full md:w-1/2 mt-10 md:mt-0 relative ${index % 2 === 0 ? 'md:pr-16 text-right order-1 md:order-1' : 'md:pl-16 text-left order-2 md:order-2'}`}
                     >
                          <div className={`hidden md:block absolute top-1/2 w-16 h-1 bg-gray-700 transform -translate-y-1/2 z-0 ${index % 2 === 0 ? 'right-0' : 'left-0'}`}></div>
                           <div className={`hidden md:block absolute top-1/2 w-4 h-4 rounded-full bg-gray-700 transform -translate-y-1/2 z-10 ${index % 2 === 0 ? 'right-14' : 'left-14'}`}></div>


                         <div className={`bg-gray-800 mx-8 p-8 rounded-lg shadow-xl border border-[#0F318E] relative z-10 overflow-hidden transform hover:-translate-y-2 transition duration-300`}>
                             <div className="absolute inset-0 opacity-5"
                                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234A5568' fill-opacity='0.2'%3E%3Crect width='10' height='1' y='5'/%3E%3Crect width='1' height='10' x='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '20px 20px' }}>
                             </div>
                             <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                             <p className="text-gray-400 leading-relaxed">{item.description}</p>
                         </div>
                     </motion.div>
                      <motion.div
                         variants={itemVariants}
                         className={`w-full md:w-1/2 mt-6 md:mt-0 relative ${index % 2 === 0 ? 'md:pl-16 order-2 md:order-2' : 'md:pr-16 order-1 md:order-1'}`}
                     >
                          <div className={`hidden md:block absolute top-1/2 w-16 h-1 bg-gray-700 transform -translate-y-1/2 z-0 ${index % 2 === 0 ? 'left-0' : 'right-0'}`}></div> 
                           <div className={`hidden md:block absolute top-1/2 w-4 h-4 rounded-full bg-gray-700 transform -translate-y-1/2 z-10 ${index % 2 === 0 ? 'left-14' : 'right-14'}`}></div>
                          <div className="relative  w-full px-8 h-60 md:h-48 rounded-lg shadow-xl overflow-hidden   transform hover:scale-105 transition duration-300"> 
                              <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full  h-full object-cover rounded-lg border border-gray-700"
                              />

                              
                          </div>
                      </motion.div>


                 </div>
             ))}
         </div>
     </motion.div>
</section>
            <section className="py-24 px-6 bg-gray-100 text-gray-300 overflow-hidden ">
                 <div className="absolute inset-0 z-0 opacity-5"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F2937' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm10 28c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-12 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-10 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm0-28c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm20 16c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-12 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-10 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm0-8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-12 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-10 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm0-8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-12 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-10 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm0-8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-12 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-10 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm30 24c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-2 16c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-2 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm30-40c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-2 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm30 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-2 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm30 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-2 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm30 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
                 </div>
                 <div
                     className="container mx-auto max-w-7xl text-center relative z-10"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={containerVariants}
                 >
                      <h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-black mb-4">Meet Our Cybersecurity Vanguard</h2>
                      <p variants={itemVariants} className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                         Behind every successful defense is a formidable team. Meet the experts dedicated to safeguarding your digital world.
                      </p>
                       <Team title="" teamMembers={teamMembers} />
                 </div>
            </section>
             <section className="py-24 px-6 bg-gray-100 text-gray-300 overflow-hidden ">
                  <div className="absolute inset-0 z-0 opacity-5"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F2937' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zm10 28c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-12 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-10 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm0-28c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm20 16c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-12 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-10 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm0-8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-12 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-10 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm0-8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-12 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-10 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm30 24c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-2 16c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-2 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm30-40c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-2 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm30 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-2 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm30 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-2 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm30 8c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-20 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-8 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
                  </div>
                 <div
                     className="container mx-auto max-w-6xl text-center relative z-10"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={containerVariants}
                 >
                     <h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Global Reach, Local Expertise</h2>
                     <p variants={itemVariants} className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto">
                        Our services span the globe, but our commitment is rooted in empowering businesses right here in the North East and beyond.
                     </p>
                     <div className="relative bg-white px-8 shadow-xl rounded-lg overflow-hidden">
                          <div className="absolute inset-0 z-10 opacity-10 pointer-events-none"
                              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath d='M0 10h20M10 0v20' stroke='%234A5568' stroke-width='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }}>
                          </div>
                          <Map />
                     </div>
                 </div>
             </section>
             <section className="py-6 bg-white text-gray-300 overflow-hidden border-b border-gray-800">
                  <div className="absolute inset-0 z-0 opacity-5"
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Ccircle cx='10' cy='10' r='1' fill='%234A5568' opacity='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '40px 40px' }}>
                  </div>
                 <div
                     className="container mx-auto max-w-7xl relative z-10"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={containerVariants}
                 >

                      <Marquee images={logos} speed={50} />
                 </div>
             </section>


      
        </div>
    );
}