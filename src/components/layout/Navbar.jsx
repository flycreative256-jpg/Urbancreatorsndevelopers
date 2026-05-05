import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Estimate', path: '/estimate' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolled 
            ? 'bg-primary/95 backdrop-blur-xl border-b border-white/5 py-3 md:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-gradient-to-b from-black/60 to-transparent py-6 md:py-10'
        )}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center relative z-50">
              <img 
                src="/Header Urban logo.png" 
                alt="Urban Creators & Developers" 
                className={cn(
                  "w-auto object-contain transition-all duration-500 ease-out drop-shadow-2xl",
                  isScrolled ? "h-10 md:h-12" : "h-14 md:h-20"
                )} 
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-10 xl:space-x-14">
              {navLinks.map((navItem) => {
                const isActive = location.pathname === navItem.path;
                return (
                  <Link
                    key={navItem.name}
                    to={navItem.path}
                    className={cn(
                      'text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 relative group overflow-hidden',
                      isActive ? 'text-secondary' : 'text-white/80 hover:text-white'
                    )}
                  >
                    <span className="relative z-10">{navItem.name}</span>
                    <span 
                      className={cn(
                        "absolute bottom-0 left-0 w-full h-[1px] bg-secondary transform origin-left transition-transform duration-300 ease-out",
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                );
              })}
              
              <Link
                to="/estimate"
                className="group relative px-8 py-3.5 overflow-hidden rounded-sm bg-white/5 border border-white/10 hover:border-secondary/50 transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-secondary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-primary transition-colors duration-500 flex items-center gap-2">
                  Free Estimate
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden relative z-50">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-secondary transition-colors p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-primary flex flex-col justify-center px-8 sm:px-12"
          >
            {/* Ambient Background Glow for Mobile Menu */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10 w-full max-w-md mx-auto">
              {navLinks.map((navItem, index) => {
                const isActive = location.pathname === navItem.path;
                return (
                  <motion.div
                    key={navItem.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      to={navItem.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'group flex items-center justify-between text-2xl sm:text-3xl font-heading font-bold uppercase tracking-widest pb-4 border-b border-white/10 transition-colors',
                        isActive ? 'text-secondary' : 'text-white hover:text-secondary'
                      )}
                    >
                      {navItem.name}
                      <ChevronRight 
                        className={cn(
                          "transition-transform duration-300", 
                          isActive ? "text-secondary translate-x-0 opacity-100" : "text-white/20 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-secondary"
                        )} 
                        size={28} 
                      />
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-8"
              >
                <Link
                  to="/estimate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-5 bg-secondary text-primary font-bold uppercase tracking-[0.2em] text-sm text-center flex items-center justify-center rounded-sm hover:bg-white transition-colors duration-300"
                >
                  Get Free Estimate
                </Link>
              </motion.div>
            </div>
            
            {/* Mobile Menu Footer Details */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-8 left-0 right-0 text-center flex flex-col items-center gap-2"
            >
              <p className="text-white/40 text-[10px] uppercase tracking-[0.3em]">Urban Creators & Developers</p>
              <div className="w-10 h-[1px] bg-secondary/30"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
