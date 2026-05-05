import { motion } from 'framer-motion';
import { Home, Building, Layout, Settings, Hammer, Wrench } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import { Link } from 'react-router-dom';

const services = [
  { id: 1, title: 'Residential Construction', desc: 'Custom homes built with precision and premium materials.', icon: Home },
  { id: 2, title: 'Luxury Villas', desc: 'High-end estates designed for ultimate comfort and elegance.', icon: Building },
  { id: 3, title: 'Commercial Construction', desc: 'State-of-the-art office spaces and retail environments.', icon: Layout },
  { id: 4, title: 'Smart Homes', desc: 'Alexa/Google integrated living for modern convenience.', icon: Settings },
  { id: 5, title: 'Interior Design', desc: 'Bespoke interiors that match your unique style and needs.', icon: Hammer },
  { id: 6, title: 'Turnkey Projects', desc: 'End-to-end solutions from conceptualization to handover.', icon: Wrench },
];

export default function ServicesPreview() {
  return (
    <SectionWrapper id="services" bg="bg-primary text-white">
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-secondary font-semibold tracking-wider uppercase text-xs sm:text-sm">What We Do</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-4 sm:mb-6 font-bold leading-tight">Our Premium Services</h2>
        <div className="w-20 h-1 bg-secondary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
              className="glass-liquid p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden will-change-transform"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
              
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-primary transition-colors">
                <Icon size={28} />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                {service.desc}
              </p>
              
              <Link to="/services" className="inline-flex items-center text-[10px] sm:text-xs font-black tracking-widest text-white group-hover:text-secondary transition-colors uppercase">
                LEARN MORE <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
