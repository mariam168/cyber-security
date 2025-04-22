import { useState } from "react";

import { FaVideo } from "react-icons/fa";

const VideoHeroSection = ({ 
  title, subtitle, description, videoUrl, bgGradient

}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
   
    <div className="relative overflow-hidden" style={{ backgroundColor: bgGradient }}>
  <div className="absolute inset-0">
    <iframe 
      className={`w-full h-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`} 
      src={`${videoUrl}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&playsinline=1`} 
      title="YouTube video player" 
      frameBorder="0" 
      allow="autoplay; encrypted-media; picture-in-picture" 
      allowFullScreen
      loading="lazy"
      onLoad={() => setIsLoaded(true)} 
    />
  </div>

  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-500 to-black/10 opacity-70"></div>

  <svg className="absolute top-0 w-full" viewBox="0 0 1440 320">
    <path fill="url(#topGradient)" fillOpacity="0.4" d="M0,64L48,80C96,96,192,128,288,138.7C384,149,480,139,576,138.7C672,139,768,149,864,149.3C960,149,1056,139,1152,117.3C1248,96,1344,64,1392,48L1440,32L1440,0L0,0Z"/>
    <defs>
      <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0F318E" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </svg>

  <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320">
    <path fill="url(#bottomGradient)" fillOpacity="0.5" d="M0,224L48,208C96,192,192,160,288,133.3C384,107,480,85,576,106.7C672,128,768,192,864,202.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L0,320Z"/>
    <defs>
      <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#0F318E" />
      </linearGradient>
    </defs>
  </svg>


  <div className="relative z-10 max-w-6xl mx-auto py-16 px-8 flex flex-col md:flex-row items-center">
    <div className="md:w-1/2 text-white">
      <h2 className="text-4xl font-bold">
        {title} <span className="text-blue-300">{subtitle}</span>
      </h2>
      <p className="mt-4">{description}</p>
    </div>
    <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
      <FaVideo className="text-white w-20 h-20" />
    </div>
  </div>
</div>

   
  );
};

export default VideoHeroSection;
