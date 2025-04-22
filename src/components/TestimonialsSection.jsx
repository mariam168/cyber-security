const TestimonialsSection = ({ title, subtitle, description, testimonials, stats }) => {
  return (
    <div className=" py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">

  
        <p className="text-[#0F318E] font-semibold uppercase">{subtitle}</p>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white text-start p-6 rounded-lg shadow-lg flex flex-col transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-start">
                <span className="text-yellow-400 text-xl">★★★★★</span>
              </div>
              <p className="text-gray-700 mt-4">{testimonial.feedback}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="font-semibold">{testimonial.author}</p>
                <img src={testimonial.logo} alt={testimonial.author} className="h-10 " />
              </div>
            </div>
          ))}

        
          <div className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col border border-gray-700">
            <h3 className="text-xl font-bold">{stats.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{stats.description}</p>
            <hr className="my-4 border-gray-600"/>
            {stats.metrics.map((metric, index) => (
              <p key={index} className="flex justify-between mt-2 text-lg">
                <span className="text-gray-400">{metric.label}</span>
                <span className={`font-bold ${metric.highlight ? "text-green-400" : "text-white"}`}>
                  {metric.value}
                </span>
              </p>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialsSection;
