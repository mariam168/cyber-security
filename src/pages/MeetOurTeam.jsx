import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import Header from "../components/Header";
import Team from "../components/Team";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";

import mark1 from "../assets/mark1.jfif";
import mark2 from "../assets/mark4.jfif";
import mark3 from "../assets/mark3.jfif";
import mark4 from "../assets/mark4.jfif";
import mark5 from "../assets/mark5.jfif";
import person1 from "../assets/person1.jfif";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jfif";
import person4 from "../assets/person4.jfif";
import person5 from "../assets/person5.jfif";
import person6 from "../assets/person6.jfif";
import person7 from "../assets/person7.jfif";
import person8 from "../assets/person8.jfif";

export default function TeamPage() {
    const canvasRef = useRef(null);
    
    
    const logos = [mark1, mark2, mark3, mark4, mark5 , mark1, mark2, mark3, mark4, mark5 , mark1, mark2, mark3, mark4, mark5];
    
    const teamMember = [
      { name: "John Doe", position: "CEO",  image: person1 },
      { name: "Jane Smith", position: "CTO", image: person2 },
      { name: "Alice Brown", position: "Marketing Head", image: person3 },
      { name: "Robert White", position: "Lead Developer", image: person4 },
      
  ];
  const teamMembersData = [
    { 
      name: "Sarah Martinez", 
      position: "Engineer", 
      image: person8, 
      description: "Sarah is a passionate engineer with a knack for problem-solving. She plays a vital role in the development of our cutting-edge solutions, ensuring everything runs smoothly from a technical perspective."
    },
    { 
      name: "Michael Johnson", 
      position: "Designer", 
      image: person5, 
      description: "Michael is our creative genius, responsible for shaping the visual experience of our products. His design philosophy centers around user experience and creating aesthetically pleasing interfaces."
    },
    { 
      name: "Emily Davis", 
      position: "Analyst", 
      image: person6, 
      description: "Emily specializes in data analysis and turning raw data into actionable insights. She ensures that every decision is backed by solid research and helps guide the direction of our projects."
    },
    { 
      name: "David Wilson", 
      position: "Manager", 
      image: person7, 
      description: "David is the backbone of our operations, managing projects and ensuring that deadlines are met. With his organizational skills, he keeps the team focused and motivated."
    },
    { 
      name: "Robert White", 
      position: "Lead Developer", 
      image: person4, 
      description: "Robert leads the development team, overseeing the architecture of our products. His expertise in coding and problem-solving is a key driver of our success in delivering high-quality solutions."
    },
    { 
      name: "John Doe", 
      position: "CEO", 
      image: person1, 
      description: "John is the visionary leader of the company. He has a strong focus on growth and innovation, always looking for new ways to improve our offerings and deliver value to clients."
    },
    { 
      name: "Jane Smith", 
      position: "CTO", 
      image: person2, 
      description: "Jane is the tech wizard behind our products. With a deep understanding of technology and trends, she ensures that the company stays ahead of the curve in implementing new innovations."
    },
    { 
      name: "Alice Brown", 
      position: "Marketing Head", 
      image: person3, 
      description: "Alice is responsible for shaping the marketing strategy. She has a keen sense of market trends and works hard to ensure that our products and services reach the right audience with the right message."
    },
  ];
  
    const [displayedImages, setDisplayedImages] = useState(teamMembersData.slice(0, 2));
    const [imageIndex, setImageIndex] = useState(2);
    const [selectedMember, setSelectedMember] = useState(teamMembersData[0]);
    const scrollRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);

        const geometry = new THREE.IcosahedronGeometry(canvas.clientWidth / 8, 1);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                color: { value: new THREE.Color(0x00aaff) },
                time: { value: 0 }
            },
            vertexShader: `
                varying vec3 vUv;
                void main() {
                    vUv = position;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform vec3 color;
                uniform float time;
                varying vec3 vUv;
                void main() {
                    vec3 gradientColor = mix(vec3(0.1, 0.1, 0.1), vec3(0.3, 0.3, 0.3), vUv.y * 0.5 + 0.5);
                    gl_FragColor = vec4(mix(color, gradientColor, 0.5), 0.7);
                }
            `,
            wireframe: true,
            transparent: true,
            opacity: 0.8
        });

        const line = new THREE.Mesh(geometry, material);
        scene.add(line);

        const ambientLight = new THREE.AmbientLight(0x606060);
        scene.add(ambientLight);

        camera.position.z = canvas.clientWidth / 2.5;
        line.position.x = canvas.clientWidth / 2.2;
        line.position.y = -canvas.clientHeight / 3;

        const animate = () => {
            requestAnimationFrame(animate);
            line.rotation.x += 0.0007;
            line.rotation.y += 0.0012;
            material.uniforms.time.value += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            ambientLight.dispose();
        };
    }, []);

    const handleImageClick = (member) => {
        setSelectedMember(member);
    };

    const handleScroll = (event) => {
        const scrollLeft = event.target.scrollLeft;
        const imageWidth = 192; // 48 * 4
        const newIndex = Math.round(scrollLeft / imageWidth) * 2;
        setImageIndex(newIndex % teamMembersData.length);
        setDisplayedImages([teamMembersData[newIndex % teamMembersData.length], teamMembersData[(newIndex + 1) % teamMembersData.length]]);
    };

    return (
        <>
            <Header />

            <section className="relative bg-gradient-to-b from-black via-black to-gray-800 text-white py-20 px-6 text-center overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between">
        
        {/* Left side */}
        <div className="text-center md:text-left flex-grow max-w-md">
          <div className="flex justify-center md:justify-start space-x-2 mb-4">
            <div className="w-4 h-4 bg-[#0F318E]"></div>
            <div className="w-4 h-4 bg-[#0F318E]"></div>
            <div className="w-4 h-4 bg-[#0F318E]"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet the Team</h2>

          <p className="text-base md:text-lg text-gray-300 mb-6">
            We pride ourselves on the family we’ve built at ITC Service. Our team of 50 staff with diverse skills comes together to form a robust IT Provider where every problem can be solved!
          </p>

          <div className="mt-8 overflow-hidden rounded-lg shadow-lg relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50 group-hover:opacity-70 transition-all duration-700"></div>
          </div>
        </div>

      </div>

      {/* Canvas Background */}
      <div className="absolute inset-0 z-0">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

    </section>

            <Team title="Our Management Team" teamMembers={teamMember} />

            <section className="relative bg-gray-100 text-white py-20 px-6 text-center overflow-hidden">
      
      <div className="relative   text-gray-900 z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-10 md:space-y-0">
        
        <div className="w-full md:w-1/2 text-center md:text-left flex-grow max-w-md order-1 md:order-none">
          <div className="flex justify-center md:justify-start space-x-2 mb-4">
            <div className="w-4 h-4 bg-[#0F318E]"></div>
            <div className="w-4 h-4 bg-[#0F318E]"></div>
            <div className="w-4 h-4 bg-[#0F318E]"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Meet the Team</h2>

          <p className="text-base md:text-lg text-gray-400 mb-6">
            {selectedMember.name} - {selectedMember.position}
            <br />
            <br />
            <span className="font-bold">
            {selectedMember.description}</span>
          </p>

        
        </div>

        {/* Image Slider */}
        <div className="w-full md:w-1/2 overflow-x-auto whitespace-nowrap pb-2 order-2 md:order-none" ref={scrollRef} onScroll={handleScroll}>
          <div className="flex mb-4 space-x-2" style={{ width: `${teamMembersData.length * 192}px` }}>
            {teamMembersData.map((member, index) => (
              <div
                key={index}
                className="relative w-48 h-60 overflow-hidden rounded-lg shadow-lg cursor-pointer inline-block"
                onClick={() => handleImageClick(member)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>

            <Marquee images={logos} speed={50} />
            <Footer />
        </>
    );
}