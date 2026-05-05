import { motion } from 'framer-motion';
import { Home, Building2, Paintbrush, Ruler, Cpu, ShieldCheck } from 'lucide-react';

const detailedServices = [
  {
    id: 1,
    title: 'Architectural Design',
    icon: Ruler,
    description: 'Transforming visions into blueprints. Our expert architects design modern, sustainable, and aesthetically brilliant structures that maximize space and light.',
    features: ['3D Modeling & Rendering', 'Structural Engineering', 'Vastu Consultation', 'Permit Assistance']
  },
  {
    id: 2,
    title: 'Premium Civil Construction',
    icon: Building2,
    description: 'The core of what we do. Uncompromising quality in building luxury villas, commercial complexes, and high-end residential estates.',
    features: ['Turnkey Construction', 'Quality Material Sourcing', 'On-time Delivery', 'Site Supervision']
  },
  {
    id: 3,
    title: 'Luxury Interior Design',
    icon: Paintbrush,
    description: 'Curating spaces that reflect your lifestyle. From bespoke furniture to premium material selection, we design interiors that feel exclusively yours.',
    features: ['Custom Furniture Design', 'Lighting Architecture', 'Material Selection', 'Space Planning']
  },
  {
    id: 4,
    title: 'Smart Home Integration',
    icon: Cpu,
    description: 'Future-proofing your luxury home. We seamlessly integrate cutting-edge home automation for lighting, security, and climate control.',
    features: ['Automated Lighting', 'Advanced Security', 'Climate Control Systems', 'Home Theater Setup']
  },
  {
    id: 5,
    title: 'Project Management',
    icon: ShieldCheck,
    description: 'A hassle-free experience from start to finish. We oversee every aspect of the build, ensuring strict adherence to timelines and budget.',
    features: ['Budget Tracking', 'Contractor Management', 'Progress Reporting', 'Quality Assurance']
  },
  {
    id: 6,
    title: 'Renovation & Remodeling',
    icon: Home,
    description: 'Breathe new life into existing spaces. We specialize in high-end renovations that completely transform the look and feel of your property.',
    features: ['Structural Upgrades', 'Facade Remodeling', 'Kitchen & Bath Makeovers', 'Value Engineering']
  }
];

export default function ServicesDetailed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {detailedServices.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-6 sm:p-8 rounded-2xl transition-all duration-500 flex flex-col group hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl glass-dark-liquid border border-white/10 hover:border-white/20"
          >
            {/* Hover Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/10 rounded-full blur-[40px] -z-10 group-hover:bg-secondary/30 transition-colors duration-500"></div>
            
            <div className="w-14 h-14 sm:w-16 sm:h-16 glass-liquid rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-md border border-white/10 group-hover:bg-secondary group-hover:text-primary transition-colors duration-500">
              <Icon size={32} />
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 font-medium">
              {service.description}
            </p>
            
            <ul className="space-y-3 mt-auto">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center text-xs sm:text-sm font-medium text-gray-300">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
