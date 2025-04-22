const TestimonialsSection = ({ title, subtitle, description, testimonials, stats }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <p className="text-[#0F318E] font-semibold uppercase tracking-wide text-sm">
          {subtitle}
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          {title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-start p-6 rounded-2xl shadow hover:shadow-2xl hover:scale-[1.03] transform transition duration-300 ease-in-out"
            >
              <div className="flex items-center text-yellow-400 text-xl mb-4">★★★★★</div>
              <p className="text-gray-700 text-base">{testimonial.feedback}</p>
              <div className="mt-6 flex items-center justify-between">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <img
                  src={testimonial.logo}
                  alt={testimonial.author}
                  className="h-10 w-10 object-contain"
                />
              </div>
            </div>
          ))}

          
          <div className="bg-gray-800 text-white p-6 rounded-2xl  border border-blue-900 backdrop-blur-sm bg-opacity-90">
            <h3 className="text-2xl font-bold">{stats.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{stats.description}</p>
            <hr className="my-4 border-gray-600" />
            {stats.metrics.map((metric, index) => (
              <div
                key={index}
                className="flex justify-between items-center mt-2 text-lg"
              >
                <span className="text-gray-300">{metric.label}</span>
                <span
                  className={`font-semibold ${
                    metric.highlight ? "text-green-400" : "text-white"
                  }`}
                >
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
