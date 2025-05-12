const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We're a team of passionate designers and developers creating exceptional digital experiences.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-neutral-600 mb-6">
                Founded in 2015, WebStudio has grown from a small team of passionate designers into a full-service digital agency with a global client base. We believe in creating digital experiences that not only look beautiful but deliver measurable results.
              </p>
              <p className="text-neutral-600">
                Our collaborative approach ensures that we understand your business goals and deliver solutions that exceed expectations. We're not just service providers – we're your digital partners.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
              <div className="p-6 border border-neutral-200 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">8+</p>
                <p className="text-sm text-neutral-600">Years Experience</p>
              </div>
              <div className="p-6 border border-neutral-200 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">500+</p>
                <p className="text-sm text-neutral-600">Projects Completed</p>
              </div>
              <div className="p-6 border border-neutral-200 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-600 mb-2">50+</p>
                <p className="text-sm text-neutral-600">Team Members</p>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8d2ViJTJCZGV2ZWxvcG1lbnQlMkJ0ZWFtJTJCd2l0aCUyQm1vZGVybiUyQnRlY2hub2xvZ3l8ZW58MHx8fHwxNzQ2MTk4NjA3fDA&ixlib=rb-4.0.3&q=80&w=400" 
                alt="Four people watching on white MacBook on top of glass-top table" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-8 -left-8 w-full h-full bg-blue-100 rounded-lg -z-10"></div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg border border-neutral-100 max-w-xs">
              <p className="text-lg font-semibold mb-2">Our Mission</p>
              <p className="text-neutral-600 text-sm">To transform businesses through innovative digital solutions that drive growth and enhance user experience.</p>
            </div>
          </div>
        </div>
        
        {/* Our values section */}
        <div className="mt-20 pt-12 border-t border-neutral-100">
          <h3 className="text-2xl font-bold mb-10 text-center">Our Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-neutral-200 rounded-lg hover:border-blue-200 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Innovation</h4>
              <p className="text-neutral-600">We embrace new technologies and creative approaches to solve complex problems.</p>
            </div>
            
            <div className="p-6 border border-neutral-200 rounded-lg hover:border-blue-200 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
              <p className="text-neutral-600">We work closely with our clients, fostering transparent communication and partnership.</p>
            </div>
            
            <div className="p-6 border border-neutral-200 rounded-lg hover:border-blue-200 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality</h4>
              <p className="text-neutral-600">We deliver exceptional work through meticulous attention to detail and commitment to excellence.</p>
            </div>
            
            <div className="p-6 border border-neutral-200 rounded-lg hover:border-blue-200 transition-colors duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Results-Driven</h4>
              <p className="text-neutral-600">We focus on creating solutions that deliver measurable business outcomes for our clients.</p>
            </div>
          </div>
        </div>
        
        {/* Team section */}
        <div className="mt-20 pt-12">
          <h3 className="text-2xl font-bold mb-4 text-center">Meet Our Leadership</h3>
          <p className="text-neutral-600 text-center max-w-3xl mx-auto mb-12">
            Our diverse team of experts brings together the perfect blend of creativity, technical expertise, and business acumen.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member 1 */}
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-white shadow">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTJCd2ViJTJCZGVzaWduJTJCdGVhbSUyQndvcmtpbmd8ZW58MHx8fHwxNzQ1OTIzMzI4fDA&ixlib=rb-4.0.3&q=80&w=400" 
                  alt="Trent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold">Alex Morgan</h4>
              <p className="text-blue-600 mb-3">CEO & Founder</p>
              <p className="text-neutral-600 px-4">With over 15 years in the industry, Alex leads our vision for digital innovation.</p>
            </div>
            
            {/* Team member 2 */}
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-white shadow">
                <img 
                  src="https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTJCd2ViJTJCZGVzaWduJTJCdGVhbSUyQndvcmtpbmd8ZW58MHx8fHwxNzQ1OTIzMzI4fDA&ixlib=rb-4.0.3&q=80&w=400" 
                  alt="Designer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold">Sarah Chen</h4>
              <p className="text-blue-600 mb-3">Creative Director</p>
              <p className="text-neutral-600 px-4">Sarah brings her award-winning design expertise to create stunning user experiences.</p>
            </div>
            
            {/* Team member 3 */}
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-white shadow">
                <img 
                  src="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTJCd2ViJTJCZGVzaWduJTJCdGVhbSUyQndvcmtpbmd8ZW58MHx8fHwxNzQ1OTIzMzI4fDA&ixlib=rb-4.0.3&q=80&w=400" 
                  alt="Elegant man loosening tie" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold">David Reynolds</h4>
              <p className="text-blue-600 mb-3">Technical Director</p>
              <p className="text-neutral-600 px-4">David oversees our development team, ensuring seamless technical implementation.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
              Join Our Team
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;