import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
          ? 'top-0 left-0 right-0 rounded-b-2xl border-b py-5 md:py-6' 
          : 'top-4 md:top-6 left-4 right-4 md:left-[max(1.5rem,calc(50%-45rem))] md:right-[max(1.5rem,calc(50%-45rem))] rounded-3xl border py-4 md:py-5'
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/Header Urban logo.png" 
              alt="Urban Creators & Developers" 
              className={cn(
                "w-auto object-contain transition-all duration-500 drop-shadow-lg",
                isScrolled ? "h-12 md:h-16" : "h-10 md:h-14"
              )} 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((navItem) => (
              <Link
                key={navItem.name}
                to={navItem.path}
                className={cn(
                  'text-[10px] lg:text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 relative group active:scale-95',
                  location.pathname === navItem.path 
                    ? 'text-secondary drop-shadow-[0_0_8px_rgba(194,149,69,0.5)]' 
                    : 'text-gray-200 hover:text-white'
                )}
              >
                {navItem.name}
                <span className={cn(
                  "absolute -bottom-1.5 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full rounded-full",
                  location.pathname === navItem.path && "w-full shadow-[0_0_10px_rgba(194,149,69,0.8)]"
                )}></span>
              </Link>
            ))}
            <Link
              to="/estimate"
              className="px-6 py-2.5 btn-liquid-gold text-primary font-bold rounded-xl uppercase text-[10px] tracking-widest shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap active:scale-95"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-secondary transition-colors p-2 active:scale-90"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[-1] md:hidden"
            />
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden z-[60]"
            >
              <div className="px-6 py-6 flex flex-col gap-2">
                {navLinks.map((navItem) => (
                  <Link
                    key={navItem.name}
                    to={navItem.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block text-base font-bold uppercase tracking-[0.2em] transition-all duration-300 py-3.5 border-b border-white/5 active:bg-white/5 px-2 rounded-lg',
                      location.pathname === navItem.path ? 'text-secondary' : 'text-gray-300 hover:text-white'
                    )}
                  >
                    {navItem.name}
                  </Link>
                ))}
                <Link
                  to="/estimate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-4 btn-liquid-gold text-primary font-bold rounded-2xl mt-4 tracking-[0.2em] uppercase text-xs shadow-2xl active:scale-95 transition-transform"
                >
                  Free Estimate
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
