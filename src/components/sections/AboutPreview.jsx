import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

export default function AboutPreview() {
  return (
    <SectionWrapper id="about" bg="bg-primary text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <div className="relative">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/luxury_construction_site.png" 
                alt="Construction Site" 
                className="rounded-2xl shadow-xl w-full h-[220px] sm:h-[300px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 sm:mt-12"
            >
              <img 
                src="/luxury_home_exterior.png" 
                alt="Luxury Home Exterior" 
                className="rounded-2xl shadow-xl w-full h-[220px] sm:h-[300px] object-cover"
              />
            </motion.div>
          </div>
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-dark-liquid p-4 sm:p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 text-center min-w-[150px] sm:min-w-[200px]"
          >
            <span className="block text-3xl sm:text-4xl font-heading font-bold text-white mb-1">15+</span>
            <span className="text-[10px] sm:text-sm font-semibold text-secondary uppercase tracking-wider">Years of Trust</span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <span className="text-secondary font-semibold tracking-wider uppercase text-xs sm:text-sm">About Our Company</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-6 font-bold leading-tight">Built by Engineers. <br className="hidden sm:block" /> Driven by Excellence.</h2>
          <div className="w-20 h-1 bg-secondary mb-8 mx-auto lg:mx-0"></div>
          
          <div className="space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg mb-10">
            <p>
              Founded by visionary civil engineers, Urban Creators & Developers is a premier construction firm dedicated to transforming blueprints into magnificent realities. 
            </p>
            <p className="hidden sm:block">
              Our deep engineering expertise ensures structural integrity, while our passion for design creates spaces that are as beautiful as they are functional. From high-end luxury villas to state-of-the-art commercial complexes, we don't just build structures; we craft legacies.
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 btn-liquid-gold text-primary font-bold uppercase tracking-wider rounded-xl transition-all duration-300"
          >
            Discover Our Story
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
