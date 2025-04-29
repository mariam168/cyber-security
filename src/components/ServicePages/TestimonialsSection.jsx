import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
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
const TestimonialsSection = ({
  title = "Trusted by Leading Organizations",
  subtitle = "Client Success Stories",
  description = "Hear how our security solutions have made a tangible impact for businesses like yours.",
  testimonials = [
    { feedback: "Their proactive monitoring saved us from a major breach. Highly recommended!", author: "TechCorp CEO", logo: "/placeholder-logo1.png", rating: 5 },
    { feedback: "The penetration testing report was thorough and actionable. We feel much more secure.", author: "Finance Inc. CTO", logo: "/placeholder-logo2.png", rating: 5 },

  ],
  stats = {
    title: "Our Impact in Numbers",
    description: "Quantifiable results demonstrating our effectiveness.",
    metrics: [
      { label: "Threats Neutralized", value: "10,000+", highlight: true },
      { label: "Compliance Rate", value: "99.8%", highlight: true },
      { label: "Avg. Response Time", value: "< 15 mins", highlight: false },
      { label: "Client Retention", value: "95%", highlight: false },
    ],
  },
}) => {
  const renderStars = (count) => {
    const stars = [];
    const totalStars = 5;
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <FaStar key={i} className={i < count ? "text-yellow-400" : "text-gray-600"} />
      );
    }
    return <div className="flex items-center space-x-1 mb-4">{stars}</div>;
  };

  return (
    <section className="py-24 px-6 bg-black text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }}>
      </div>

      <div
        className="max-w-7xl mx-auto text-center space-y-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <p variants={itemVariants} className="text-[#0F318E] font-semibold uppercase tracking-wider text-sm">
          {subtitle}
        </p>
        <h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
          {title}
        </h2>
        <p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {description}
        </p>
        {(testimonials.length > 0 || stats) && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm text-gray-300 text-start p-6 rounded-lg shadow-lg border border-[#0F318E]/50 relative overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-500/20"
                variants={itemVariants}
              >
                <div className="absolute inset-0 opacity-[0.02]"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.2'%3E%3Cpath d='M0 0h5v5H0zM5 5h5v5H5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '15px 15px' }}>
                </div>
                {renderStars(testimonial.rating || 0)}
                <p className="text-gray-300 text-base italic relative z-10 mb-4">"{testimonial.feedback}"</p>
                <div className="mt-6 flex items-center justify-between relative z-10 border-t border-gray-700 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  {testimonial.logo && (
                    <img
                      src={testimonial.logo}
                      alt={`${testimonial.author} Logo`}
                      className="h-10 w-10 object-contain rounded-full border border-gray-600 bg-gray-700 p-0.5"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  )}
                </div>
              </div>
            ))}

            {stats && testimonials.length < 3 && (
              <div
                className="bg-gradient-to-br from-black to-blue-600/30 text-white p-6 rounded-lg shadow-xl border-2 border-blue-500 relative overflow-hidden md:col-span-1" // Adjust span if needed
                variants={itemVariants}
              >
                <div className="absolute inset-0 z-0 opacity-[0.05]"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h15v15H0z'/%3E%3Cpath d='M0 15L15 0M0 0l15 15' stroke='%233B82F6' stroke-width='0.5' opacity='0.8'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: '25px 25px' }}>
                </div>

                <h3 className="text-xl md:text-2xl font-bold relative z-10 text-white">{stats.title}</h3>
                <p className="text-gray-400 text-sm mt-2 relative z-10">{stats.description}</p>
                <hr className="my-4 border-blue-800/50 relative z-10" />
                <div className="space-y-3 relative z-10">
                  {stats.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center text-base"
                    >
                      <span className="text-gray-400">{metric.label}</span>
                      <span
                        className={`font-semibold ${metric.highlight ? "text-green-400" : "text-white"
                          }`}
                      >
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default TestimonialsSection;