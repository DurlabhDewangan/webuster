import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Animation for hero elements
    const heroTitle = document.querySelector('#hero h1');
    const heroDesc = document.querySelector('#hero p');
    const heroCta = document.querySelector('#hero .flex.flex-col.sm\\:flex-row');
    const heroImg = document.querySelector('#hero .relative.bg-white');
    
    setTimeout(() => {
      heroTitle.style.opacity = '0';
      heroDesc.style.opacity = '0';
      heroCta.style.opacity = '0';
      heroImg.style.opacity = '0';
      heroImg.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        heroTitle.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        heroDesc.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        heroCta.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        heroImg.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
        
        setTimeout(() => {
          heroDesc.style.opacity = '1';
          heroDesc.style.transform = 'translateY(0)';
          
          setTimeout(() => {
            heroCta.style.opacity = '1';
            heroCta.style.transform = 'translateY(0)';
            
            setTimeout(() => {
              heroImg.style.opacity = '1';
              heroImg.style.transform = 'translateY(0)';
            }, 200);
          }, 200);
        }, 200);
      }, 100);
    }, 300);
  }, []);

  return (
    <section id="hero" className="pt-28 pb-20 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your <span className="text-blue-600">Digital Presence</span> With Purpose
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              We design and develop cutting-edge websites and applications that elevate brands and drive meaningful user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-md text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-sm">
                Get Started
              </a>
              <a href="#portfolio" className="px-8 py-4 border border-neutral-300 rounded-md text-lg font-semibold hover:bg-neutral-100 transition-all duration-300">
                View Our Work
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold border border-white">JD</div>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold border border-white">AM</div>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold border border-white">KT</div>
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-semibold border border-white">RB</div>
              </div>
              <div className="ml-4 text-sm text-neutral-600">
                Trusted by <span className="font-medium">500+</span> satisfied clients
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative bg-white p-3 rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTJCd2ViJTJCZGVzaWduJTJCdGVhbSUyQndvcmtpbmd8ZW58MHx8fHwxNzQ1OTIzMzI4fDA&ixlib=rb-4.0.3&q=80&w=400" 
                alt="Group of business workers standing with hands together doing symbol at the office" 
                className="w-full h-auto rounded-md object-cover" 
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-sm border border-neutral-100 w-48 hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Project Success</p>
                    <p className="text-xs text-neutral-500">98% satisfaction rate</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-sm border border-neutral-100 w-48 hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Expert Team</p>
                    <p className="text-xs text-neutral-500">10+ years experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute -z-10 w-full h-full top-8 left-8 bg-blue-100 rounded-lg hidden md:block"></div>
          </div>
        </div>
        
        {/* Brands logos */}
        <div className="mt-20 border-t border-neutral-200 pt-10">
          <p className="text-center text-neutral-500 text-sm mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            <div className="text-neutral-400 font-semibold">MICROSOFT</div>
            <div className="text-neutral-400 font-semibold">GOOGLE</div>
            <div className="text-neutral-400 font-semibold">AMAZON</div>
            <div className="text-neutral-400 font-semibold">NETFLIX</div>
            <div className="text-neutral-400 font-semibold">SLACK</div>
            <div className="text-neutral-400 font-semibold">SHOPIFY</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;