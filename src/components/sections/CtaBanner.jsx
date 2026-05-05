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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Ready to Build Your <span className="text-secondary">Dream Home?</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Partner with Urban Creators & Developers to bring your vision to life. From concept to completion, we deliver excellence at every step.
          </p>
        </div>
        
        <div className="shrink-0">
          <Link
            to="/contact"
            className="px-10 py-5 btn-liquid-gold text-primary font-bold uppercase tracking-wider rounded-xl flex items-center gap-2"
          >
            Get A Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
