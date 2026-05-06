import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import FluidBackground from './components/ui/FluidBackground';
import CustomCursor from './components/ui/CustomCursor';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Estimate from './pages/Estimate';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <ScrollToTop />
      <FluidBackground />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/estimate" element={<Estimate />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
