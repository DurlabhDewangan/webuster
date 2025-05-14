import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/home/Navbar';
import Home from './Pages/Home';
import Footer from './components/home/Footer';
import Categories from './Pages/Categories.jsx';

function App() {
  return (
    <Router>
      <div className="antialiased text-gray-800 min-h-screen flex flex-col">
        <Navbar />

        {/* Main dynamic content based on route */}
        <main id="main-content" className="flex-1 relative h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
