import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import Header from "../components/Header";
import Team from "../components/Team";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import mark1 from "../assets/mark1.jfif";
import mark2 from "../assets/mark4.jfif";
import mark3 from "../assets/mark3.jfif";
import mark4_new from "../assets/mark4.jfif"; 
import mark5 from "../assets/mark5.jfif";
import person1 from "../assets/person1.jfif"; 
import person2 from "../assets/person2.jpg"; 
import person3 from "../assets/person3.jfif"; 
import person4 from "../assets/person4.jfif"; 
import person5 from "../assets/person5.jfif"; 
import person6 from "../assets/person6.jfif"; 
import person7 from "../assets/person7.jfif"; 
import person8 from "../assets/person8.jfif"; 

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#00aaff]">
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.927 0l-7.5 4.5A.75.75 0 0 0 3 7.5v6.19l-1.72 1.032a.75.75 0 0 0-.38.656v3.578a.75.75 0 0 0 .99.728l1.748-.874a11.91 11.91 0 0 0 7.86 3.09c2.93 0 5.66-.885 7.86-2.407l1.748.874a.75.75 0 0 0 .99-.728v-3.578a.75.75 0 0 0-.38-.656l-1.72-1.032V7.5a.75.75 0 0 0-.536-.714l-7.5-4.5Zm-.217 1.04a.375.375 0 0 1 .427 0l7.126 4.276A.375.375 0 0 1 20 8.042v5.529a12.535 12.535 0 0 1-7.07 9.184.375.375 0 0 1-.36 0 12.535 12.535 0 0 1-7.07-9.184V8.042a.375.375 0 0 1 .214-.34l7.126-4.276Zm-5.08 6.775a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 1 0-1.06-1.06l-4 4-2-2Z" clipRule="evenodd" />
  </svg>
);

export default function TeamPage() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const logos = [mark1, mark2, mark3, mark4_new, mark5, mark1, mark2, mark3, mark4_new, mark5, mark1, mark2, mark3, mark4_new, mark5];
  const managementTeam = [
    { name: "Dr. Evelyn Reed", position: "Chief Information Security Officer (CISO)", image: person1 },
    { name: "Kenji Tanaka", position: "Lead Security Architect", image: person2 },
    { name: "Aisha Khan", position: "Threat Intelligence Lead", image: person3 },
    { name: "Marcus Jones", position: "Senior Penetration Tester", image: person4 },
  ];
  const teamMembersData = [
    {
      name: "Sarah Martinez",
      position: "Security Engineer",
      image: person8,
      description: "Sarah architects and implements robust security measures across our infrastructure. She specializes in cloud security and automation, ensuring our defenses are both strong and efficient."
    },
    {
      name: "Michael Johnson",
      position: "SOC Analyst Lead",
      image: person5,
      description: "Michael leads the Security Operations Center team, overseeing threat detection, analysis, and response. His vigilance and analytical skills are crucial in identifying and mitigating threats in real-time."
    },
    {
      name: "Emily Davis",
      position: "Compliance & Risk Specialist",
      image: person6,
      description: "Emily ensures our operations adhere to industry regulations and best practices. She conducts risk assessments and develops strategies to manage vulnerabilities and maintain compliance."
    },
    {
      name: "David Wilson",
      position: "Incident Response Manager",
      image: person7,
      description: "David coordinates our rapid response efforts during security incidents. His decisive leadership and expertise minimize impact and ensure swift recovery from breaches or attacks."
    },
    {
      name: "Marcus Jones",
      position: "Senior Penetration Tester",
      image: person4,
      description: "Marcus simulates cyberattacks to identify exploitable vulnerabilities before adversaries do. His ethical hacking skills help fortify our clients' systems against real-world threats."
    },
    {
      name: "Dr. Evelyn Reed", 
      position: "Chief Information Security Officer (CISO)",
      image: person1,
      description: "Dr. Reed provides strategic leadership for our cybersecurity initiatives. She aligns security posture with business objectives, driving innovation in defense strategies and risk management."
    },
    {
      name: "Kenji Tanaka",
      position: "Lead Security Architect",
      image: person2,
      description: "Kenji designs and oversees the implementation of secure network and system architectures. His deep technical knowledge ensures our solutions are built on a foundation of security."
    },
    {
      name: "Aisha Khan", 
      position: "Threat Intelligence Lead",
      image: person3,
      description: "Aisha leads the gathering and analysis of threat intelligence. She tracks adversary tactics and global cyber trends to proactively inform our defensive strategies and protect clients."
    },
  ];

  const [displayedImages, setDisplayedImages] = useState(teamMembersData.slice(0, 2)); 
  const [imageIndex, setImageIndex] = useState(0); 
  const [selectedMember, setSelectedMember] = useState(teamMembersData[0]);
  const scrollRef = useRef(null);
  const [descriptionKey, setDescriptionKey] = useState(0); 

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio); 
    const geometry = new THREE.IcosahedronGeometry(canvas.clientWidth / 9, 3); 
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(0x050515) }, 
        color2: { value: new THREE.Color(0x00aaff) }, 
        mousePos: { value: new THREE.Vector2(0.5, 0.5) } 
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normal;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec2 mousePos; // Receive mouse position
        varying vec3 vNormal;
        varying vec3 vPosition;

        // Simple noise function (pseudo-random)
        float noise(vec3 p) {
          return fract(sin(dot(p ,vec3(12.9898, 78.233, 151.7182))) * 43758.5453);
        }

        // Function to create flowing lines/patterns
        float flowPattern(vec3 pos, float t) {
            float pattern = 0.0;
            pattern += sin(pos.x * 5.0 + t * 2.0) * 0.3;
            pattern += cos(pos.y * 6.0 - t * 1.5) * 0.3;
            pattern += sin(pos.z * 7.0 + t * 1.0) * 0.3;
            return smoothstep(0.4, 0.6, abs(pattern)); // Sharpen the lines
        }

        void main() {
          float timeScaled = time * 0.1;
          vec3 norm = normalize(vNormal);
          vec3 pos = normalize(vPosition); // Use normalized position for consistency

          // Base gradient based on normal
          float gradient = pow(abs(dot(norm, vec3(0.0, 0.0, 1.0))), 1.5); // Rim light effect
          vec3 baseColor = mix(color1, color2, gradient);

          // Add noise pattern influenced by time and position
          float noiseFactor = noise(pos * 5.0 + timeScaled * 0.5); // Slower moving noise
          vec3 noisyColor = mix(baseColor, color2 * 1.2, noiseFactor * 0.3); // Subtle noise color variation

          // Add flow pattern
          float flow = flowPattern(pos, timeScaled * 3.0);
          vec3 finalColor = mix(noisyColor, color2, flow * 0.6); // Mix flow pattern strongly

          // Make fragments near mouse brighter (optional subtle effect)
          // float mouseDist = distance(gl_FragCoord.xy / vec2(${canvas.clientWidth}, ${canvas.clientHeight}), mousePos);
          // finalColor *= (1.0 - smoothstep(0.0, 0.1, mouseDist) * 0.5);

          // Fresnel effect for edges
          float fresnel = pow(1.0 - abs(dot(norm, vec3(0.0, 0.0, -1.0))), 3.0);
          finalColor = mix(finalColor, color2, fresnel * 0.7);

          gl_FragColor = vec4(finalColor, 0.6); // Semi-transparent
        }
      `,
      wireframe: true,
      transparent: true,
      opacity: 0.7, 
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = Math.max(400, canvas.clientWidth / 3);
    mesh.position.x = canvas.clientWidth / 4;
    mesh.position.y = -canvas.clientHeight / 10;
    const handleMouseMove = (event) => {
        const rect = canvas.getBoundingClientRect();
        mousePos.current.x = (event.clientX - rect.left) / rect.width;
        mousePos.current.y = 1.0 - (event.clientY - rect.top) / rect.height;
        material.uniforms.mousePos.value.set(
            THREE.MathUtils.clamp(mousePos.current.x, 0.0, 1.0),
            THREE.MathUtils.clamp(mousePos.current.y, 0.0, 1.0)
        );
    };
    window.addEventListener('mousemove', handleMouseMove);


    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);


      mesh.rotation.x += 0.0005 + (mousePos.current.y - 0.5) * 0.0005;

      mesh.rotation.y += 0.0008 + (mousePos.current.x - 0.5) * 0.0005;

      material.uniforms.time.value += 0.02;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
        if (!canvas) return;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();

    
        camera.position.z = Math.max(400, width / 3);
        mesh.position.x = width / 4;
        mesh.position.y = -height / 10;
        mesh.scale.set(width / 1200, width / 1200, width / 1200); 

    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      scene.remove(mesh); 
    };
  }, []);
  const handleImageClick = (member) => {
    setSelectedMember(member);
    setDescriptionKey(prevKey => prevKey + 1); 
  };
  const handleScroll = (event) => {
  
      const target = event.target;
      const scrollLeft = target.scrollLeft;
      const imageWidth = 192 + 8;
      const totalScrollableWidth = target.scrollWidth - target.clientWidth;
      const centerScroll = scrollLeft + target.clientWidth / 2;
      let newCenterIndex = Math.floor(centerScroll / imageWidth);
      newCenterIndex = Math.max(0, Math.min(newCenterIndex, teamMembersData.length - 1));
      setImageIndex(newCenterIndex); 

  };

  return (
    <>

      
      <section className="relative bg-black h-[89vh] min-h-[600px] from-black via-[#0a192f] to-[#051120] text-white py-20 px-6 flex items-center justify-center text-center overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-20"> 
           <canvas ref={canvasRef} className="w-full h-full" />
         </div>

         <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
           <div className="flex justify-center space-x-3 mb-5">
            <ShieldIcon />
            <ShieldIcon />
            <ShieldIcon />
           </div>

           <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight shadow-text">Guardians of Your Digital Realm</h1>
           <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
             Meet the dedicated cybersecurity experts at ITC Service. Our diverse team unites cutting-edge skills and unwavering vigilance to protect your assets and neutralize threats.
           </p>
          
         </div>

      </section>

      <Team title="Our Leadership Team" teamMembers={managementTeam} />
      <section className="relative bg-gray-100 text-gray-900 py-20 px-6 overflow-hidden">
         <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-12 lg:space-y-0 lg:space-x-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left flex-grow max-w-md order-2 lg:order-1 mt-8 lg:mt-0">
                <div className="flex justify-center lg:justify-start space-x-2 mb-4">
                    <div className="w-3 h-3 bg-[#0F318E] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#0F318E] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#0F318E] rounded-full"></div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
                <div key={descriptionKey} className="animate-fadeIn">
                    <p className="text-lg text-gray-600 mb-2">
                        <span className="font-semibold">{selectedMember.name}</span> - {selectedMember.position}
                    </p>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        {selectedMember.description}
                    </p>
                </div>
             </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div
                    className="overflow-x-auto whitespace-nowrap pb-4 scrollbar-thin scrollbar-thumb-[#0F318E] scrollbar-track-gray-300"
                    ref={scrollRef}
                    onScroll={handleScroll}
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    <div className="flex space-x-4 px-2">
                        {teamMembersData.map((member, index) => (
                            <div
                                key={index}
                                className={`relative w-48 h-64 flex-shrink-0 overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${selectedMember.name === member.name ? 'ring-4 ring-[#00aaff] ring-offset-2' : 'opacity-80 hover:opacity-100'}`}
                                onClick={() => handleImageClick(member)}
                                style={{ scrollSnapAlign: 'center' }} 
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                                <div className="absolute bottom-0 left-0 p-3 text-white w-full">
                                    <p className="font-semibold text-sm truncate">{member.name}</p>
                                    <p className="text-xs text-gray-300">{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

         </div>
      </section>

      <Marquee images={logos} speed={60} />
   
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .shadow-text {
           text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        }
        /* Simple scrollbar styling */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 #e5e7eb; /* thumb track */
        }
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background-color: #e5e7eb;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #3b82f6; /* blue-500 */
          border-radius: 10px;
          border: 2px solid #e5e7eb; /* track color */
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: #2563eb; /* darker blue */
        }

      `}</style>
    </>
  );
}