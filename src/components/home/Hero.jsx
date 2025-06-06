
const Hero = () => {
 
  return (
    <section id="hero" className="pt-28 pb-20 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
           <div className="w-full lg:w-1/2 text-center lg:text-left pt-1">
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
         <div className="relative bg-white p-3 rounded-lg shadow-sm overflow-hidden h-[400px] md:h-[600px] lg:h-[800px]">

              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTJCd2ViJTJCZGVzaWduJTJCdGVhbSUyQndvcmtpbmd8ZW58MHx8fHwxNzQ1OTIzMzI4fDA&ixlib=rb-4.0.3&q=80&w=400" 
                alt="Group of business workers standing with hands together doing symbol at the office" 
                className="w-full h-full rounded-md object-cover" 
              />
              
              {/* Floating elements */}
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-sm border border-neutral-100 w-40 hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Project Success</p>
                    <p className="text-[10px] text-neutral-500">98% satisfaction rate</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-sm border border-neutral-100 w-40 hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Expert Team</p>
                    <p className="text-[10px] text-neutral-500">10+ years experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative element */}
            <div className="absolute -z-10 w-full h-full top-4 left-4 bg-blue-100 rounded-lg hidden md:block"></div>
          </div>
        </div>
        
       <div className="mt-20 border-t border-neutral-200 pt-10">
  <p className="text-center text-neutral-500 text-sm mb-8">
    TRUSTED BY INNOVATIVE COMPANIES
  </p>
  <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
    <div className="flex items-center gap-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
        alt="Microsoft"
        className="h-6 filter grayscale hover:grayscale-0 transition duration-300"
      />
      <span className="text-neutral-600 text-sm font-medium hidden sm:inline">Microsoft</span>
    </div>
    <div className="flex items-center gap-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
        alt="Google"
        className="h-6 filter grayscale hover:grayscale-0 transition duration-300"
      />
      <span className="text-neutral-600 text-sm font-medium hidden sm:inline"></span>
    </div>
    <div className="flex items-center gap-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon"
        className="h-6 filter grayscale hover:grayscale-0 transition duration-300"
      />
      <span className="text-neutral-600 text-sm font-medium hidden sm:inline"></span>
    </div>
    <div className="flex items-center gap-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
        className="h-6 filter grayscale hover:grayscale-0 transition duration-300"
      />
      <span className="text-neutral-600 text-sm font-medium hidden sm:inline"></span>
    </div>
    <div className="flex items-center gap-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
        alt="Slack"
        className="h-6 filter grayscale hover:grayscale-0 transition duration-300"
      />
      <span className="text-neutral-600 text-sm font-medium hidden sm:inline">Slack</span>
    </div>
    <div className="flex items-center gap-2">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg"
        alt="Shopify"
        className="h-6 filter grayscale hover:grayscale-0 transition duration-300"
      />
      <span className="text-neutral-600 text-sm font-medium hidden sm:inline"></span>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Hero;