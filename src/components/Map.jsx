import React from "react";

const OfficeLocations = () => {
  return (
    <section className="flex  flex-col md:flex-row items-stretch max-w-6xl mx-auto my-12 bg-white shadow-lg rounded-lg overflow-hidden">
      

      <div className="w-full md:w-1/2">
        <iframe
          title="Jarrow Hall Location"
          className="w-full h-80 md:h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.492282863625!2d-1.4802296846182996!3d54.98027198035602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e72c0db46b3a1%3A0x48b599e5cfd31620!2sJarrow%20Hall!5e0!3m2!1sen!2suk!4v1649404382881!5m2!1sen!2suk"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

    
      <div className="w-full p-10 md:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581090700227-1e37b7c13d6a?auto=format&fit=crop&w=800&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gray-800  "></div>

        <div className="relative text-white p-8 flex flex-col justify-center h-full">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Main North East Office:</h2>
          <p className="flex items-center gap-2 text-sm md:text-base">
           9 Merchant Court, Monkton Business Park South, Hebburn, NE31 2EX
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-6 mb-4">Satellite Office:</h2>
          <p className="flex items-center gap-2 text-sm md:text-base">
             Unit 6 Business Village, Cramlington, NE23 1W
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default OfficeLocations;
