import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZS1jb21tZXJjZSUyQndlYnNpdGV8ZW58MHx8fHwxNzQ1OTI4NDQ3fDA&ixlib=rb-4.0.3&q=80&w=400',
      description: 'A fully responsive e-commerce platform with custom CMS and payment integration.'
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Zml0bmVzcyUyQmFwcHxlbnwwfHx8fDE3NDU5Mjg0ODB8MA&ixlib=rb-4.0.3&q=80&w=400',
      description: 'A cross-platform fitness app with workout tracking and nutrition planning.'
    },
    {
      id: 3,
      title: 'Corporate Website Redesign',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTJCd2Vic2l0ZSUyQmRlc2lnbnxlbnwwfHx8fDE3NDU5Mjg1MTZ8MA&ixlib=rb-4.0.3&q=80&w=400',
      description: 'Complete redesign of a corporate website with improved UX and performance.'
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZGFzaGJvYXJkJTJCdWklMkJkZXNpZ258ZW58MHx8fHwxNzQ1OTI4NTY1fDA&ixlib=rb-4.0.3&q=80&w=400',
      description: 'Custom SaaS dashboard with data visualization and reporting tools.'
    },
    {
      id: 5,
      title: 'Restaurant Booking System',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cmVzdGF1cmFudCUyQndlYnNpdGV8ZW58MHx8fHwxNzQ1OTI4NjA1fDA&ixlib=rb-4.0.3&q=80&w=400',
      description: 'Online reservation system with table management for restaurants.'
    },
    {
      id: 6,
      title: 'Educational Platform',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8ZWR1Y2F0aW9uJTJCd2Vic2l0ZXxlbnwwfHx8fDE3NDU5Mjg2NDR8MA&ixlib=rb-4.0.3&q=80&w=400',
      description: 'Interactive learning platform with course management and progress tracking.'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                >
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;