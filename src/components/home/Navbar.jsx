import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
  if (isMenuOpen) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }

  // Clean up when component unmounts (just in case)
  return () => document.body.classList.remove('overflow-hidden');
}, [isMenuOpen]);


  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 0) {
        header.classList.add('shadow-sm', 'bg-white/95', 'backdrop-blur-sm');
      } else {
        header.classList.remove('shadow-sm', 'bg-white/95', 'backdrop-blur-sm');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<header id="header" className="fixed w-full top-0 z-50 bg-white border-b border-neutral-200">
     <div className="container mx-auto px-4 h-20">
  <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <div className="text-3xl font-bold">Webuster</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li><a href="#hero" className="text-neutral-700 hover:text-neutral-900 transition-all duration-300">Home</a></li>
              <li><a href="#about" className="text-neutral-700 hover:text-neutral-900 transition-all duration-300">About</a></li>
              <li><a href="#services" className="text-neutral-700 hover:text-neutral-900 transition-all duration-300">Services</a></li>
              <li><a href="#portfolio" className="text-neutral-700 hover:text-neutral-900 transition-all duration-300">Portfolio</a></li>
              <li><a href="#testimonials" className="text-neutral-700 hover:text-neutral-900 transition-all duration-300">Testimonials</a></li>
              <li><a href="#process" className="text-neutral-700 hover:text-neutral-900 transition-all duration-300">Process</a></li>
              <li><a href="#contact" className="text-neutral-700 hover:text-neutral-900 transition-all duration-300">Contact</a></li>
              <li><a href="#contact" className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300">Get Started</a></li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-button" 
            className="md:hidden text-neutral-700 hover:text-neutral-900 focus:outline-none" 
            aria-label="Toggle mobile menu" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
 <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden fixed top-[80px] left-0 w-full bg-white pt-2 pb-4 border-t border-neutral-200 z-40`}>
  <ul className="flex flex-col space-y-4 px-4">
    <li><a href="#hero" className="block px-2 py-1 text-neutral-700 hover:text-neutral-900 transition-all duration-300" onClick={toggleMenu}>Home</a></li>
    <li><a href="#about" className="block px-2 py-1 text-neutral-700 hover:text-neutral-900 transition-all duration-300" onClick={toggleMenu}>About</a></li>
    <li><a href="#services" className="block px-2 py-1 text-neutral-700 hover:text-neutral-900 transition-all duration-300" onClick={toggleMenu}>Services</a></li>
    <li><a href="#portfolio" className="block px-2 py-1 text-neutral-700 hover:text-neutral-900 transition-all duration-300" onClick={toggleMenu}>Portfolio</a></li>
    <li><a href="#testimonials" className="block px-2 py-1 text-neutral-700 hover:text-neutral-900 transition-all duration-300" onClick={toggleMenu}>Testimonials</a></li>
    <li><a href="#process" className="block px-2 py-1 text-neutral-700 hover:text-neutral-900 transition-all duration-300" onClick={toggleMenu}>Process</a></li>
    <li><a href="#contact" className="block px-2 py-1 text-neutral-700 hover:text-neutral-900 transition-all duration-300" onClick={toggleMenu}>Contact</a></li>
    <li><a href="#contact" className="block mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 text-center" onClick={toggleMenu}>Get Started</a></li>
  </ul>
</div>

      </div>
    </header>
  );
};

export default Navbar;