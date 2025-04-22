const TeamSection = ({ title, teamMembers }) => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64  rounded-lg"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/80 
                              flex flex-col justify-end items-center text-white 
                              translate-y-full group-hover:translate-y-0 
                              transition-transform duration-500 ease-in-out p-4 rounded-b-lg w-full">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
