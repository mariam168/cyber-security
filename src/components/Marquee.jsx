import PropTypes from "prop-types";

export default function Marquee({ images, speed = 0.1 }) {
  return (
    <div className="overflow-hidden py-6 mt-4   mx-auto ">
      <div className="relative flex items-center whitespace-nowrap">
        <div className="flex gap-12 " style={{ animation: `marquee ${speed}s linear infinite` }}>
          {[...images, ...images].map((image, index) => (
            <img key={index} src={image} alt="Marquee logo" className="h-12 md:h-20" />
          ))}
        </div>
      </div>
    </div>
  );
}
Marquee.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
};
