import { useState, useEffect } from 'react';
import ServiceModal from './ServiceModal';

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const services = {
    website: {
      title: 'Website Design & Development',
      content: `
        <div class="space-y-6">
          <p class="text-neutral-600">Our website design and development services focus on creating responsive, user-friendly, and conversion-optimized websites tailored to your business needs.</p>
          
          <div class="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9kZXJuJTJCd2Vic2l0ZSUyQmRlc2lnbiUyQnNob3djYXNlfGVufDB8fHx8MTc0NTkyODI3NXww&ixlib=rb-4.0.3&q=80&w=400" alt="white and black laptop" class="w-full h-auto">
          </div>
          
          <h4 class="text-xl font-semibold">Our Approach</h4>
          <p class="text-neutral-600">We follow a collaborative design process that begins with understanding your goals and audience, followed by wireframing, design, development, and thorough testing.</p>
          
          <h4 class="text-xl font-semibold">Technologies We Use</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React, Vue.js, Angular</li>
            <li>WordPress, Shopify, Custom CMS</li>
            <li>Node.js, PHP, Python, Ruby</li>
            <li>AWS, Google Cloud, Azure</li>
          </ul>
          
          <h4 class="text-xl font-semibold">Key Benefits</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>Mobile-first responsive design</li>
            <li>SEO-optimized structure and code</li>
            <li>Fast loading speeds with optimized assets</li>
            <li>Accessible websites (WCAG compliant)</li>
            <li>Secure development practices</li>
            <li>Integrated analytics and performance tracking</li>
          </ul>
        </div>
      `
    },
    app: {
      title: 'Mobile App Development',
      content: `
        <div class="space-y-6">
          <p class="text-neutral-600">We develop intuitive and feature-rich mobile applications for iOS and Android platforms that help businesses engage users and drive growth.</p>
          
          <div class="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bW9iaWxlJTJCYXBwJTJCZGV2ZWxvcG1lbnQlMkJwcm9jZXNzfGVufDB8fHx8MTc0NTkyNTc3N3ww&ixlib=rb-4.0.3&q=80&w=400" alt="iPhone X beside MacBook" class="w-full h-auto">
          </div>
          
          <h4 class="text-xl font-semibold">Development Options</h4>
          <p class="text-neutral-600">We offer both native app development for optimal performance and cross-platform solutions for cost-efficiency and faster deployment.</p>
          
          <h4 class="text-xl font-semibold">Technologies We Use</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>Native: Swift (iOS), Kotlin/Java (Android)</li>
            <li>Cross-platform: React Native, Flutter, Xamarin</li>
            <li>Backend: Firebase, AWS, Node.js</li>
            <li>APIs: REST, GraphQL</li>
            <li>Authentication: OAuth, JWT, Biometrics</li>
          </ul>
          
          <h4 class="text-xl font-semibold">App Features We Implement</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>User authentication and profiles</li>
            <li>Push notifications</li>
            <li>In-app purchases</li>
            <li>Offline functionality</li>
            <li>Location-based services</li>
            <li>Social media integration</li>
            <li>Analytics and crash reporting</li>
          </ul>
        </div>
      `
    },
    uiux: {
      title: 'UI/UX Design',
      content: `
        <div class="space-y-6">
          <p class="text-neutral-600">Our UI/UX design services focus on creating intuitive, engaging, and accessible user experiences that delight your customers and achieve your business objectives.</p>
          
          <div class="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bW9kZXJuJTJCd2Vic2l0ZSUyQmRlc2lnbiUyQnNob3djYXNlfGVufDB8fHx8MTc0NTkyODI3NXww&ixlib=rb-4.0.3&q=80&w=400" alt="Brainstorming over paper" class="w-full h-auto">
          </div>
          
          <h4 class="text-xl font-semibold">Our Design Process</h4>
          <ol class="list-decimal pl-5 text-neutral-600 space-y-1">
            <li>Research and discovery</li>
            <li>User persona development</li>
            <li>Information architecture</li>
            <li>Wireframing and prototyping</li>
            <li>Visual design and branding</li>
            <li>Usability testing</li>
            <li>Implementation and developer handoff</li>
          </ol>
          
          <h4 class="text-xl font-semibold">Design Tools We Use</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>Figma, Adobe XD, Sketch</li>
            <li>InVision, Marvel, Principle</li>
            <li>UserTesting, Hotjar, Crazy Egg</li>
            <li>Adobe Creative Suite</li>
          </ul>
          
          <h4 class="text-xl font-semibold">Key Benefits</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>Data-driven design decisions</li>
            <li>Improved user satisfaction and engagement</li>
            <li>Reduced development costs through early prototyping</li>
            <li>Consistent brand experience</li>
            <li>Accessible design for all users</li>
            <li>Increased conversion rates</li>
          </ul>
        </div>
      `
    },
    cloud: {
      title: 'Cloud Solutions',
      content: `
        <div class="space-y-6">
          <p class="text-neutral-600">Our cloud solutions help businesses leverage the power of modern cloud infrastructure for improved scalability, performance, and cost-efficiency.</p>
          
          <div class="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8ZGlnaXRhbCUyQnNvbHV0aW9ucyUyQmNvbXBhbnklMkJ3b3Jrc3BhY2V8ZW58MHx8fHwxNzQ2MTk4NTc5fDA&ixlib=rb-4.0.3&q=80&w=400" alt="Hacker binary attack code" class="w-full h-auto">
          </div>
          
          <h4 class="text-xl font-semibold">Our Cloud Services</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>Cloud migration and adoption strategy</li>
            <li>Infrastructure as Code (IaC) implementation</li>
            <li>Serverless architecture design</li>
            <li>DevOps pipeline setup and optimization</li>
            <li>Containerization and orchestration</li>
            <li>Cloud cost optimization</li>
            <li>Managed cloud services</li>
          </ul>
          
          <h4 class="text-xl font-semibold">Cloud Platforms</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>Amazon Web Services (AWS)</li>
            <li>Microsoft Azure</li>
            <li>Google Cloud Platform (GCP)</li>
            <li>Digital Ocean</li>
            <li>Heroku</li>
          </ul>
          
          <h4 class="text-xl font-semibold">Key Benefits</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>Improved scalability and reliability</li>
            <li>Reduced operational costs</li>
            <li>Enhanced security and compliance</li>
            <li>Faster time to market</li>
            <li>Improved disaster recovery</li>
            <li>Streamlined development workflows</li>
          </ul>
        </div>
      `
    },
    marketing: {
      title: 'Digital Marketing',
      content: `
        <div class="space-y-6">
          <p class="text-neutral-600">Our digital marketing services help businesses attract, engage, and convert their target audience through strategic online marketing campaigns.</p>
          
          <div class="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1607703703520-bb638e84caf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8ZGlnaXRhbCUyQm1hcmtldGluZyUyQnN0cmF0ZWd5JTJCbWVldGluZ3xlbnwwfHx8fDE3NDU4NDA2MTV8MA&ixlib=rb-4.0.3&q=80&w=400" alt="Woman's hand writing the word audience on a whiteboard" class="w-full h-auto">
          </div>
          
          <h4 class="text-xl font-semibold">Marketing Services</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>Search Engine Optimization (SEO)</li>
            <li>Content Marketing</li>
            <li>Pay-Per-Click (PPC) Advertising</li>
            <li>Social Media Marketing</li>
            <li>Email Marketing</li>
            <li>Conversion Rate Optimization (CRO)</li>
            <li>Analytics and Reporting</li>
          </ul>
          
          <h4 class="text-xl font-semibold">Our Approach</h4>
          <ol class="list-decimal pl-5 text-neutral-600 space-y-1">
            <li>Audience and competitor analysis</li>
            <li>Marketing strategy development</li>
            <li>Campaign planning and execution</li>
            <li>Continuous testing and optimization</li>
            <li>Performance tracking and reporting</li>
          </ol>
          
          <h4 class="text-xl font-semibold">Key Benefits</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>Increased brand awareness and visibility</li>
            <li>Higher quality traffic and leads</li>
            <li>Improved conversion rates</li>
            <li>Better ROI on marketing spend</li>
            <li>Data-driven marketing decisions</li>
            <li>Sustainable organic growth</li>
          </ul>
        </div>
      `
    },
    security: {
      title: 'Cybersecurity',
      content: `
        <div class="space-y-6">
          <p class="text-neutral-600">Our cybersecurity services help businesses protect their digital assets, sensitive information, and customer data from evolving cyber threats.</p>
          
          <div class="rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8ZGlnaXRhbCUyQnNvbHV0aW9ucyUyQmNvbXBhbnklMkJ0ZWFtJTJCY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3NDYxOTg3MDR8MA&ixlib=rb-4.0.3&q=80&w=400" alt="Hacker binary attack code" class="w-full h-auto">
          </div>
          
          <h4 class="text-xl font-semibold">Security Services</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>Security Assessments and Audits</li>
            <li>Penetration Testing</li>
            <li>Vulnerability Management</li>
            <li>Security Awareness Training</li>
            <li>Secure Development Practices</li>
            <li>Incident Response Planning</li>
            <li>Compliance Management</li>
          </ul>
          
          <h4 class="text-xl font-semibold">Security Solutions</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>Web Application Firewalls (WAF)</li>
            <li>API Security</li>
            <li>Data Encryption</li>
            <li>Identity and Access Management (IAM)</li>
            <li>Security Information and Event Management (SIEM)</li>
            <li>Cloud Security</li>
          </ul>
          
          <h4 class="text-xl font-semibold">Key Benefits</h4>
          <ul class="list-disc pl-5 text-neutral-600 space-y-1">
            <li>Reduced risk of data breaches</li>
            <li>Improved regulatory compliance</li>
            <li>Enhanced customer trust</li>
            <li>Protection of brand reputation</li>
            <li>Lower incident response costs</li>
            <li>Secure business growth</li>
          </ul>
        </div>
      `
    }
  };

  const openModal = (serviceKey) => {
    setCurrentService(services[serviceKey]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentService(null);
  };

  useEffect(() => {
    // Animate service cards on scroll
    const animateOnScroll = () => {
      const serviceCards = document.querySelectorAll('#services .grid > div');
      
      serviceCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
          setTimeout(() => {
            card.classList.add('opacity-100', 'translate-y-0');
            card.classList.remove('opacity-0', 'translate-y-8');
          }, index * 100);
        }
      });
    };

    // Add initial classes for animation
    const serviceCards = document.querySelectorAll('#services .grid > div');
    serviceCards.forEach(card => {
      card.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-500');
    });

    // Run on page load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    return () => {
      window.removeEventListener('load', animateOnScroll);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the online world.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg border border-neutral-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Website Design & Development</h3>
            <p className="text-neutral-600 mb-4">
              Custom-designed websites that are responsive, user-friendly, and optimized for conversion.
            </p>
            <ul className="space-y-2 mb-6 text-neutral-600">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Responsive Design
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Performance Optimization
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SEO-Friendly Structure
              </li>
            </ul>
            <button 
              onClick={() => openModal('website')}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg border border-neutral-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Mobile App Development</h3>
            <p className="text-neutral-600 mb-4">
              Native and cross-platform apps designed for optimal performance and exceptional user experience.
            </p>
            <ul className="space-y-2 mb-6 text-neutral-600">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                iOS & Android Development
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cross-Platform Solutions
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                App Store Optimization
              </li>
            </ul>
            <button 
              onClick={() => openModal('app')}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg border border-neutral-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-neutral-600 mb-4">
              User-centered design that creates intuitive, engaging, and accessible digital experiences.
            </p>
            <ul className="space-y-2 mb-6 text-neutral-600">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                User Research & Testing
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Wireframing & Prototyping
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Accessibility Compliance
              </li>
            </ul>
            <button 
              onClick={() => openModal('uiux')}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-lg border border-neutral-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
            <p className="text-neutral-600 mb-4">
              Secure, scalable cloud infrastructure that enhances performance and reduces operational costs.
            </p>
            <ul className="space-y-2 mb-6 text-neutral-600">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cloud Migration
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Serverless Architecture
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                DevOps Implementation
              </li>
            </ul>
            <button 
              onClick={() => openModal('cloud')}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-8 rounded-lg border border-neutral-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
            <p className="text-neutral-600 mb-4">
              Strategic marketing solutions that increase visibility, drive traffic, and boost conversions.
            </p>
            <ul className="space-y-2 mb-6 text-neutral-600">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SEO & Content Marketing
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                PPC & Social Media Campaigns
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Analytics & Reporting
              </li>
            </ul>
            <button 
              onClick={() => openModal('marketing')}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-lg border border-neutral-200 hover:shadow-md transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
            <p className="text-neutral-600 mb-4">
              Comprehensive security solutions protecting your digital assets from evolving threats.
            </p>
            <ul className="space-y-2 mb-6 text-neutral-600">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Security Assessments
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Data Protection
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Compliance Management
              </li>
            </ul>
            <button 
              onClick={() => openModal('security')}
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Featured Service */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <span className="text-blue-600 font-medium mb-2">Featured Service</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Custom Web Application Development</h3>
              <p className="text-neutral-600 mb-6">
                We build tailored web applications that address your unique business challenges. Our solutions are scalable, secure, and designed for optimal performance.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Scalable Solutions</h4>
                    <p className="text-neutral-600 text-sm">Applications that grow with your business</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Optimized Performance</h4>
                    <p className="text-neutral-600 text-sm">Fast loading and responsive apps</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Secure Development</h4>
                    <p className="text-neutral-600 text-sm">Protection against common vulnerabilities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold mb-1">Detailed Documentation</h4>
                    <p className="text-neutral-600 text-sm">Comprehensive guides for easy maintenance</p>
                  </div>
                </div>
              </div>
              
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto text-center">
                Request a Consultation
              </a>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8d2ViJTJCc29sdXRpb25zJTJCY29tcGFueSUyQm9mZmljZXxlbnwwfHx8fDE3NDYxOTg2NDZ8MA&ixlib=rb-4.0.3&q=80&w=400" 
                alt="Developers working hard" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-900/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        service={currentService}
      />
    </section>
  );
};

export default Services;