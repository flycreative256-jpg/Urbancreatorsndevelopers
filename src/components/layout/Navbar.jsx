import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Estimate', path: '/estimate' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] glass-dark-liquid border-white/10 shadow-2xl',
        isScrolled 
          ? 'top-0 left-0 right-0 rounded-b-[2rem] border-b py-2 md:py-3' 
          : 'top-4 md:top-6 left-[max(1rem,calc(50%-40rem))] right-[max(1rem,calc(50%-40rem))] rounded-[2rem] border py-4 md:py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/Header Urban logo.png" 
              alt="Urban Creators & Developers" 
              className={cn(
                "w-auto object-contain transition-all duration-500 drop-shadow-lg",
                isScrolled ? "h-10 md:h-12" : "h-14 md:h-16"
              )} 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-[10px] lg:text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 relative group',
                  location.pathname === link.path 
                    ? 'text-secondary drop-shadow-[0_0_8px_rgba(194,149,69,0.5)]' 
                    : 'text-gray-200 hover:text-white'
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1.5 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full rounded-full",
                  location.pathname === link.path && "w-full shadow-[0_0_10px_rgba(194,149,69,0.8)]"
                )}></span>
              </Link>
            ))}
            <Link
              to="/estimate"
              className="px-6 py-2.5 btn-liquid-gold text-primary font-bold rounded-xl uppercase text-[10px] tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-secondary transition-colors p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[110%] left-4 right-4 glass-dark-liquid rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block text-lg font-bold uppercase tracking-wider transition-colors',
                  location.pathname === link.path ? 'text-secondary' : 'text-gray-200 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-4 btn-liquid-gold text-primary font-bold rounded-xl mt-4 tracking-widest uppercase shadow-lg"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
