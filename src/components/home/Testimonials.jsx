import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'WebSolutions Pro transformed our online presence completely. Their team delivered a website that not only looks stunning but has significantly increased our conversion rates. Their attention to detail and commitment to quality is unmatched.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTJCd29tYW58ZW58MHx8fHwxNzQ1OTI4ODQ3fDA&ixlib=rb-4.0.3&q=80&w=400'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director, Global Retail',
      content: 'The mobile app developed by WebSolutions Pro has been a game-changer for our business. User engagement has skyrocketed, and the intuitive design has received overwhelming positive feedback from our customers.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTJCbWFufGVufDB8fHx8MTc0NTkyODg4MHww&ixlib=rb-4.0.3&q=80&w=400'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, Creative Minds Agency',
      content: 'Working with WebSolutions Pro was a fantastic experience. They took the time to understand our unique needs and delivered a custom solution that perfectly aligns with our brand identity and business goals.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTJCd29tYW4lMkJwb3J0cmFpdHxlbnwwfHx8fDE3NDU5Mjg5MTl8MA&ixlib=rb-4.0.3&q=80&w=400'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm border border-neutral-200 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-neutral-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-neutral-300'}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm text-neutral-600">Join our growing list of satisfied clients</p>
              <a 
                href="#contact" 
                className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Get in touch today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;