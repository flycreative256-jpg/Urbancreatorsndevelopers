import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Gem, Cpu } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const features = [
  {
    id: 1,
    title: 'On-Time Delivery',
    desc: 'We respect your time. Our streamlined processes ensure project completion strictly as per the agreed schedule.',
    icon: Clock
  },
  {
    id: 2,
    title: 'Transparent Pricing',
    desc: 'No hidden costs. We provide detailed estimates and maintain financial transparency throughout the project.',
    icon: ShieldCheck
  },
  {
    id: 3,
    title: 'Premium Quality',
    desc: 'We never compromise on materials. Every brick laid and every finish applied meets the highest luxury standards.',
    icon: Gem
  },
  {
    id: 4,
    title: 'Smart Integration',
    desc: 'Pioneers in integrating IoT and smart home features (Alexa/Google) right from the architectural phase.',
    icon: Cpu
  }
];

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-choose-us" bg="bg-primary text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">The Urban Advantage</span>
          <h2 className="text-4xl md:text-5xl mt-2 mb-6">Why Choose Urban Creators?</h2>
          <div className="w-24 h-1 bg-secondary mb-8"></div>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            We understand that building a luxury home or commercial space is a significant investment. Our approach is designed to give you complete peace of mind, combining civil engineering precision with architectural elegance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 glass-liquid rounded flex items-center justify-center text-secondary mb-4 border border-white/40 shadow-lg">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative h-[600px] rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40"></div>
          
          <div className="absolute bottom-8 left-8 right-8 glass-dark-liquid p-6 rounded-xl">
            <p className="text-xl font-medium italic text-white mb-4">
              "They don't just build houses; they craft lifestyles. The attention to detail and transparency was unmatched."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary text-primary font-bold flex items-center justify-center">
                AK
              </div>
              <div>
                <h4 className="font-bold text-white">Mr. Ab. Khalique Khatik</h4>
                <p className="text-secondary text-sm">Owner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
