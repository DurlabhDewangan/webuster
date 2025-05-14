const IndustrySolutions = () => {
  const industries = [
    {
      name: "Hospitality",
      description: "Complete property management systems for hotels and resorts",
      icon: "🏨"
    },
    {
      name: "Healthcare",
      description: "HIPAA-compliant practice management solutions",
      icon: "🏥"
    },
    {
      name: "Professional Services",
      description: "Client management and billing systems",
      icon: "💼"
    },
    {
      name: "Education",
      description: "Learning management and administration platforms",
      icon: "🎓"
    }
  ];

  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry-Specific Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
            <div className="text-3xl mb-4">{industry.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
            <p className="text-gray-600">{industry.description}</p>
            <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
              Explore solutions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustrySolutions;