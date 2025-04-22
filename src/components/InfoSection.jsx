import React from 'react';

const InfoSection = ({
    title,
    description,
    images = [],
    mainImage,
    reverse = false
}) => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className={`
                max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center
                ${reverse ? 'md:flex-row-reverse' : ''}
            `}>
              
                <div className="flex flex-col justify-center text-center md:text-left h-full">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {description}
                    </p>

                    {Array.isArray(images) && images.length > 0 && (
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 mt-8">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.src}
                                    alt={img.alt || `Feature image ${index + 1}`}
                                    className="h-10 sm:h-12 hover:scale-105 transition-transform duration-300"
                                />
                            ))}
                        </div>
                    )}
                </div>

                
                <div className="flex justify-center items-center md:justify-end h-full">
                    <div className="w-full max-w-md rounded-xl shadow-md overflow-hidden">
                        <img
                            src={mainImage}
                            alt={title || 'Main section visual'}
                            className="w-full h-64 sm:h-80 object-cover md:aspect-[4/3]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
