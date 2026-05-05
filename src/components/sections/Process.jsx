import { motion } from 'framer-motion';
import { MessageSquare, PenTool, HardHat, Key } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const steps = [
  {
    id: 1,
    title: 'Consultation',
    desc: 'We start with a detailed meeting to understand your vision, requirements, and budget.',
    icon: MessageSquare
  },
  {
    id: 2,
    title: 'Planning & Design',
    desc: 'Our architects create 3D models, floor plans, and secure necessary approvals.',
    icon: PenTool
  },
  {
    id: 3,
    title: 'Construction',
    desc: 'Execution phase with strict quality control, premium materials, and regular updates.',
    icon: HardHat
  },
  {
    id: 4,
    title: 'Handover',
    desc: 'Final inspection, deep cleaning, and the key handover to your new dream space.',
    icon: Key
  }
];

export default function Process() {
  return (
    <SectionWrapper id="process" bg="bg-gray-50">
      <div className="text-center mb-20">
        <span className="text-secondary font-semibold tracking-wider uppercase text-sm">How We Work</span>
        <h2 className="text-4xl md:text-5xl text-primary mt-2 mb-6">Our Streamlined Process</h2>
        <div className="w-24 h-1 bg-secondary mx-auto"></div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 glass-liquid rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-all duration-300 group-hover:scale-110 mb-6 relative border-2 border-white/40">
                  <Icon size={32} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
