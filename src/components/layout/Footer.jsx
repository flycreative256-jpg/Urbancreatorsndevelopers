import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Share2, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6 text-center lg:text-left">
            <Link to="/" className="relative inline-block group p-4 mx-auto lg:mx-0">
              {/* Stronger Glow effect behind dark logo */}
              <div className="absolute inset-0 bg-white/20 rounded-full blur-[40px] group-hover:bg-white/40 transition-all duration-700 scale-110"></div>
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-[60px] animate-pulse"></div>
              <img 
                src="/footer-logo.png" 
                alt="Urban Creators & Developers" 
                className="relative z-10 h-24 sm:h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              Design. Build. Elevate. We are a premium luxury construction company specializing in high-end homes, villas, and commercial spaces.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary"></span>
            </h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-secondary transition-colors">Featured Projects</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary"></span>
            </h4>
            <ul className="space-y-4">
              <li className="hover:text-secondary transition-colors cursor-pointer text-sm">Residential Construction</li>
              <li className="hover:text-secondary transition-colors cursor-pointer text-sm">Luxury Villas</li>
              <li className="hover:text-secondary transition-colors cursor-pointer text-sm">Commercial Spaces</li>
              <li className="hover:text-secondary transition-colors cursor-pointer text-sm">Turnkey Projects</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-secondary"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                <span className="text-sm">Near Ajanta Chaufully, Jalgaon – 425001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <span className="text-sm">+91 72181 77879</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <span className="text-sm">info@urbancreators.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Urban Creators & Developers. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
