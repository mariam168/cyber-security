import React from 'react'; // Import React (good practice)

const InfoSection = ({
    title,
    description,
    images = [], // Default to empty array if not provided
    mainImage,
    reverse = false
}) => {
    return (
        // Add responsive padding (more padding on larger screens)
        <div className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
            {/*
                Container:
                - Max width for content.
                - Default: flex-col (stacks text and image vertically).
                - md+: flex-row (side-by-side layout).
                - Apply flex-row-reverse conditionally for md+ screens if 'reverse' is true.
                - Add gap for spacing between stacked or side-by-side items.
                - Center items vertically when in row mode (md+).
            */}
            <div className={`
                max-w-6xl mx-auto flex flex-col items-center
                ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}
                gap-8 md:gap-12 lg:gap-16
            `}>

                {/* Text Content Block */}
                {/*
                    Default: Full width, centered text.
                    md+: Half width, left-aligned text.
                    Add margin-bottom for spacing when stacked, remove for row layout.
                */}
                <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    {/* Responsive text size for title */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-black">{title}</h2>
                    {/* Responsive text size for description */}
                    <p className="text-gray-600 mt-4 md:mt-6 text-base md:text-lg">{description}</p>

                    {/* Small Images (e.g., Logos) */}
                    {/*
                        Ensure images is an array before mapping.
                        Default: Center align the images container.
                        md+: Align container to the start (left).
                        Responsive height for images.
                    */}
                    {Array.isArray(images) && images.length > 0 && (
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 mt-6 md:mt-8">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.src}
                                    // Provide a default alt text if none is given
                                    alt={img.alt || `Feature image ${index + 1}`}
                                    // Slightly smaller height on mobile
                                    className="h-10 sm:h-12"
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Main Image Block */}
                {/*
                    Default: Full width.
                    md+: Half width.
                    Use flex to help center the image within its container if needed.
                */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    {/*
                        Image Styling:
                        - Default: Limit max width, center horizontally, set a height or aspect ratio.
                        - md+: Allow filling the container width, potentially adjust aspect ratio or height.
                        - Use object-cover to prevent distortion.
                        - Add better default alt text.
                    */}
                    <img
                        src={mainImage}
                        alt={title || 'Main section visual'} // Use title for better alt text
                        className="w-full max-w-sm sm:max-w-md mx-auto md:mx-0 md:max-w-none rounded-lg shadow-lg object-cover h-64 sm:h-80 md:h-auto md:aspect-[4/3]" // Example: fixed height on mobile, auto/aspect on desktop
                    />
                </div>

            </div>
        </div>
    );
};

export default InfoSection;