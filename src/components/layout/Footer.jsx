import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WhatsappIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

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
              <a href="https://www.instagram.com/urbancreatorsndevelopers/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors">
                <InstagramIcon size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589318635002" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors">
                <FacebookIcon size={18} />
              </a>
              <a href="https://wa.me/917218177879" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                <WhatsappIcon size={18} />
              </a>
              <a href="mailto:info@urbancreators.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Mail size={18} />
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
