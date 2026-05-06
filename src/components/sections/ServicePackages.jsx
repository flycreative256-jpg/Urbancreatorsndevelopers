import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const packages = [
  {
    id: 'basic',
    name: 'Basic Construction',
    target: 'Ideal for 1-2 BHK Homes',
    price: '₹1,500/sq.ft',
    features: [
      'Standard quality materials (ISI mark)',
      'Basic Vastu compliant planning',
      'Standard electrical & plumbing',
      'Vitrified tile flooring',
      '6 months maintenance support'
    ],
    popular: false,
  },
  {
    id: 'premium',
    name: 'Premium Package',
    target: 'Modern 3-4 BHK Villas',
    price: '₹2,200/sq.ft',
    features: [
      'High-quality branded materials',
      'Modern architectural & Vastu design',
      'Premium electrical fixtures',
      'Modular kitchen setup',
      'False ceiling in living areas',
      '1 year maintenance support'
    ],
    popular: true,
  },
  {
    id: 'luxury',
    name: 'Luxury Package',
    target: 'Ultra-Luxury Bungalows',
    price: '₹3,500+/sq.ft',
    features: [
      'Ultra-premium imported materials',
      'Custom 3D planning & complete Vastu',
      'Smart home integration (Alexa/Google)',
      'Complete interior & exterior design',
      'Italian marble / premium flooring',
      'Centralized AC planning',
      '3 years extended support'
    ],
    popular: false,
  }
];

export default function ServicePackages() {
  return (
    <SectionWrapper id="packages" bg="bg-primary text-white">
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-secondary font-semibold tracking-wider uppercase text-xs sm:text-sm">Transparent Pricing</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mt-2 mb-4 sm:mb-6 text-white font-bold leading-tight">Service Packages</h2>
        <div className="w-20 h-1 bg-secondary mx-auto"></div>
        <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">Choose the perfect tier that matches your vision. We deliver excellence across all levels.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative p-6 sm:p-8 rounded-2xl transition-all duration-500 flex flex-col group hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl ${
              pkg.popular 
                ? 'glass-dark-liquid border-2 border-secondary md:scale-105 shadow-[0_0_40px_-10px_rgba(194,149,69,0.3)] z-10' 
                : 'glass-liquid border border-white/10 hover:border-white/30'
            }`}
          >
            {pkg.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
                Most Popular
              </div>
            )}
            
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">{pkg.name}</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">{pkg.target}</p>
              <div className="text-secondary font-heading font-bold text-2xl sm:text-3xl">
                {pkg.price}
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-secondary shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 ${
                pkg.popular
                  ? 'btn-liquid-gold text-primary'
                  : 'btn-liquid text-white'
              }`}>
                Get Detailed Quote
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
