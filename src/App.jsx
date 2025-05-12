import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/home/Navbar';
import Home from './Pages/Home';
import Footer from './components/home/Footer';

function App() {
  return (
    <Router>
      <div className="antialiased text-gray-800 min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1 relative h-full">
          <Home />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;