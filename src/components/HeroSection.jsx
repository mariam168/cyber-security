import { useRef } from "react"; // Removed useState, useEffect as 'animate' wasn't used
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import FeatureBox from "./FeatureBox";
import Button from "./Button";
import * as THREE from "three";

const CyberGrid = () => {
  const gridRef = useRef(null);

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.5;
      gridRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.2) * 0.5;
    }
  });

  return (
    <mesh ref={gridRef}>
      <planeGeometry args={[20, 20, 64, 64]} />
      <meshStandardMaterial
        wireframe
        color="darkgray"
        emissive="gray"
        transparent
        opacity={0.1}
        emissiveIntensity={0.6}
      />
    </mesh>
  );
};

const HeroSection = ({ title, subtitle, features, buttonText, onButtonClick }) => {
  
  return (
 
    <div className="relative h-[100vh] sm:h-[75vh] md:h-[80vh] lg:h-[70vh] flex flex-col justify-center text-white overflow-hidden bg-black">
  
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={2} color="cyan" />
        <CyberGrid />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

    
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center sm:items-start sm:text-left px-4 sm:px-8 md:px-16 lg:px-[10%] max-w-screen-xl mx-auto">

        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          {title}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 max-w-2xl">
          {subtitle}
        </p>

       
        <div className="flex flex-wrap gap-4 mb-6 justify-center sm:justify-start">
          {features.map((feature, index) => (
            <FeatureBox key={index} text={feature.text} bgColor={feature.bgColor} />
          ))}
        </div>

       
        <div>
          <Button text={buttonText} onClick={onButtonClick} className="bg-[#0F318E]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;