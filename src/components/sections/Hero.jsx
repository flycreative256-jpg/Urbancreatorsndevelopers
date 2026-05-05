import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Star, Shield } from 'lucide-react';
import { cn } from '../../utils/cn';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
    title: "Building Luxury That Lasts Generations",
    subtitle: "Premium construction with modern smart living solutions designed for those who demand excellence and uncompromising quality."
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2075&q=80",
    title: "Engineering Excellence & Architectural Brilliance",
    subtitle: "Transforming cityscapes with monumental commercial spaces built on the foundation of trust and transparency."
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2075&q=80",
    title: "Crafting Premium Smart Living Spaces",
    subtitle: "Your vision turned into reality. We blend aesthetic design with sustainable technology to create your perfect haven."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden bg-primary pt-32 pb-24">
      {/* Dynamic Backgrounds */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[currentSlide].image}
            alt="Luxury Construction"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradients */}
      <div className="absolute inset-0 z-0 bg-primary/70 mix-blend-multiply transition-colors duration-1000"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/95 via-primary/50 to-transparent"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 mt-4 sm:mt-8 lg:mt-20">
        
        {/* Left Side: Dynamic Text */}
        <div className="w-full lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-dark-liquid border border-white/20 mb-8 shadow-xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_#C29545]"></span>
            <span className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm">Urban Creators & Developers</span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] text-white leading-[1.1] font-heading font-bold mb-6 sm:mb-8 drop-shadow-2xl">
                {slides[currentSlide].title.split(' ').map((word, i) => {
                  const isGold = ['luxury', 'excellence', 'premium'].includes(word.toLowerCase());
                  return (
                    <span key={i} className={isGold ? "text-transparent bg-clip-text bg-gradient-gold" : ""}>
                      {word}{" "}
                    </span>
                  );
                })}
              </h1>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-8 sm:mb-12 border-l-4 border-secondary pl-5 sm:pl-6 bg-gradient-to-r from-primary/40 to-transparent py-2">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 btn-liquid-gold text-primary font-bold uppercase tracking-wider rounded-xl text-center shadow-[0_0_40px_rgba(194,149,69,0.4)] hover:shadow-[0_0_60px_rgba(194,149,69,0.6)] transition-all duration-300 flex items-center justify-center gap-3 group active:scale-95"
            >
              Get Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-4 btn-liquid text-white font-bold uppercase tracking-wider rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              Our Portfolio
            </Link>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-3 mt-16">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`transition-all duration-500 rounded-full h-1.5 ${currentSlide === i ? 'w-12 bg-secondary shadow-[0_0_10px_#C29545]' : 'w-4 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Floating Feature Cards */}
        <div className="hidden lg:flex w-2/5 relative h-[500px] items-center justify-center">
           {/* Center Glowing Orb */}
           <div className="absolute w-72 h-72 bg-secondary/20 rounded-full blur-[100px] animate-[pulse_4s_ease-in-out_infinite] mix-blend-screen"></div>
           
           <motion.div 
             animate={{ y: [0, -20, 0] }} 
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="absolute top-10 right-0 glass-liquid p-8 rounded-[2rem] border border-white/30 shadow-2xl backdrop-blur-2xl w-72"
           >
             <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-secondary mb-6 border border-white/20 shadow-inner">
               <Star size={28} />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Premium Quality</h3>
             <p className="text-gray-300 text-sm leading-relaxed">Finest materials sourced globally for unmatched luxury and durability.</p>
           </motion.div>

           <motion.div 
             animate={{ y: [0, 25, 0] }} 
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-10 left-0 glass-dark-liquid p-8 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-2xl w-72"
           >
             <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 border border-white/5 shadow-inner">
               <Shield size={28} />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">100% Reliability</h3>
             <p className="text-gray-400 text-sm leading-relaxed">Timely project delivery with absolutely zero compromises on standards.</p>
           </motion.div>
        </div>
      </div>

      {/* Fixed Arrow Scroll Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 w-14 h-14 rounded-full glass-liquid flex items-center justify-center text-secondary hover:text-primary hover:bg-secondary border border-white/30 transition-all shadow-[0_0_30px_rgba(194,149,69,0.4)] group cursor-pointer active:scale-90"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={28} className="group-hover:translate-y-1 transition-transform" />
      </motion.button>
    </section>
  );
}
