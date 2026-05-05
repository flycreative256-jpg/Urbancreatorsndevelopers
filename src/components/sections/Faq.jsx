import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const faqs = [
  {
    question: "What types of construction projects do you handle?",
    answer: "We specialize in luxury residential villas, premium commercial complexes, and large-scale infrastructure projects. Our team is equipped to handle everything from individual luxury homes to monumental commercial hubs."
  },
  {
    question: "How do you ensure the quality of materials?",
    answer: "We source materials from globally recognized brands and perform multi-level quality checks. Every batch of concrete, steel, and finish is inspected by our senior civil engineers before use."
  },
  {
    question: "Do you provide turnkey construction services?",
    answer: "Yes, we offer complete turnkey solutions. This includes everything from architectural planning and structural engineering to interior design and final handover."
  },
  {
    question: "What is the typical timeline for a luxury villa project?",
    answer: "While timelines vary based on design complexity, a standard luxury villa typically takes 12 to 18 months. We prioritize engineering precision while strictly adhering to committed delivery dates."
  },
  {
    question: "Is Urban Creators & Developers a licensed firm?",
    answer: "Absolutely. We are a team of certified B.Tech Civil Engineers and experienced developers, fully licensed to operate in the infrastructure and construction industry."
  }
];

const FaqItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <motion.div
      initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ 
        delay: isMobile ? 0 : index * 0.05, 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
      className="group mb-4 sm:mb-8 will-change-[opacity,transform]"
    >
      <div
        className={`relative overflow-hidden transition-all duration-700 rounded-[1.5rem] sm:rounded-[2.5rem] border backdrop-blur-2xl ${isOpen
          ? 'bg-white/15 border-secondary/40 shadow-[0_40px_100px_rgba(0,0,0,0.4)]'
          : 'bg-white/5 border-white/10 hover:border-white/30 shadow-xl'
          }`}
      >
        {/* Animated Background Index */}
        <div className={`absolute -right-4 -top-8 text-[8rem] sm:text-[12rem] font-black pointer-events-none transition-all duration-1000 select-none ${isOpen ? 'text-secondary opacity-[0.1] translate-y-4' : 'text-white opacity-[0.05]'
          }`}>
          0{index + 1}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 w-full p-6 sm:p-10 flex items-center justify-between text-left group/btn"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-secondary text-primary rotate-[360deg]' : 'bg-white/10 text-secondary'
              }`}>
              <HelpCircle size={isMobile ? 20 : 28} />
            </div>
            <span className={`text-lg sm:text-2xl font-bold transition-colors duration-500 ${isOpen ? 'text-secondary' : 'text-white'
              }`}>
              {faq.question}
            </span>
          </div>

          <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'border-secondary bg-secondary text-primary' : 'border-white/20 text-white hover:border-secondary hover:text-secondary'
            }`}>
            {isOpen ? <Minus size={isMobile ? 18 : 24} /> : <Plus size={isMobile ? 18 : 24} />}
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-6 sm:px-10 pb-8 sm:pb-12 pt-0">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8 sm:mb-10"></div>
                <p className="text-gray-300 text-base sm:text-xl leading-relaxed max-w-4xl">
                  {faq.answer}
                </p>
                <div className="mt-8 sm:mt-10 flex items-center gap-3 text-secondary font-bold text-xs sm:text-sm uppercase tracking-widest cursor-pointer hover:translate-x-2 transition-transform">
                  Learn more about this <Plus size={14} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Faq() {
  return (
    <SectionWrapper id="faq" bg="bg-primary relative overflow-hidden">
      {/* Background construction image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1541881454522-8d76d4941913?auto=format&fit=crop&w=2000&q=80" 
          alt="Construction Background" 
          className="w-full h-full object-cover opacity-[0.45] grayscale scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <span className="text-secondary font-semibold tracking-wider uppercase text-xs sm:text-sm">Common Questions</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-6 font-bold leading-tight">Frequently Asked</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
