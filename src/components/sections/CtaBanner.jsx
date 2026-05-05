import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Architecture"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-3xl text-center lg:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl text-white font-bold mb-6 leading-tight">
            Ready to Build Your <br className="hidden sm:block" />
            <span className="text-secondary italic">Dream Space?</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Partner with Urban Creators & Developers to bring your vision to life. From conceptual blueprints to structural completion, we deliver excellence.
          </p>
        </div>
        
        <motion.div whileTap={{ scale: 0.95 }} className="shrink-0 w-full lg:w-auto">
          <Link
            to="/contact"
            className="w-full lg:w-auto px-10 py-5 btn-liquid-gold text-primary font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-3 transition-all shadow-2xl"
          >
            Get Free Quote
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
