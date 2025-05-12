import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Service";
import Portfolio from "../components/home/Portfolio";
import Testimonials from "../components/home/Testimonials";
import Process from "../components/home/Process";
import Contact from "../components/home/Contact";

const Home = () => {
  return (
    <div>
      <Hero/>
      <About />
      <Services />
      <Portfolio />
       <Testimonials />
       <Process />
      <Contact />
    </div>
  );
};

export default Home;
