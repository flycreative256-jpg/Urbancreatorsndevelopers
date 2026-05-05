import { motion } from 'framer-motion';
import { Building2, Shield, Zap, Compass, Users, Clock } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const services = [
  {
    id: 1,
    icon: Building2,
    title: 'Civil Construction',
    description: 'Expert structural engineering and construction for residential and commercial landmarks.'
  },
  {
    id: 2,
    icon: Shield,
    title: 'Premium Quality',
    description: 'Use of high-grade materials and industry-best practices for maximum durability.'
  },
  {
    id: 3,
    icon: Zap,
    title: 'Smart Solutions',
    description: 'Integrating modern technology and smart automation into your living and work spaces.'
  },
  {
    id: 4,
    icon: Compass,
    title: 'Architectural Design',
    description: 'Aesthetic and functional designs crafted by award-winning architects.'
  },
  {
    id: 5,
    icon: Users,
    title: 'Turnkey Projects',
    description: 'End-to-end management from conceptualization to final handover.'
  },
  {
    id: 6,
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Strict adherence to project timelines without compromising on quality.'
  }
];

export default function ServicesPreview() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <SectionWrapper id="services" bg="bg-background">
      <div className="text-center mb-16 sm:mb-24">
        <span className="text-secondary font-semibold tracking-wider uppercase text-xs sm:text-sm">What We Offer</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mt-2 mb-6 font-bold leading-tight">Elite Engineering Services</h2>
        <div className="w-20 h-1 bg-secondary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
              duration: 0.8, 
              delay: isMobile ? 0 : index * 0.1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
            className="glass-liquid p-8 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden will-change-[opacity,transform]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-150"></div>
            
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-secondary mb-6 border border-primary/10 shadow-inner group-hover:bg-secondary group-hover:text-white transition-colors duration-500">
              <service.icon size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
