import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const faqs = [
  {
    question: "What types of construction projects do you handle?",
    answer: "We specialize in a broad spectrum of projects, including luxury residential villas, high-rise commercial complexes, industrial warehouses, and premium interior fit-outs. Our team is equipped to handle everything from initial architectural design to final structural completion."
  },
  {
    question: "How do you ensure the quality of materials used?",
    answer: "Quality is our signature. We have a stringent multi-level procurement process where every material—from cement to specialized finishing fixtures—is sourced from certified premium vendors and undergoes rigorous site testing before being used in construction."
  },
  {
    question: "Do you provide project management and consultation?",
    answer: "Yes, we offer end-to-end project management. This includes site feasibility studies, structural consultation, budget optimization, timeline management, and regular site progress reporting to keep our clients fully informed."
  },
  {
    question: "How long does a typical residential project take?",
    answer: "Timelines vary depending on the complexity and scale of the project. However, a premium luxury villa typically takes between 12 to 18 months. We pride ourselves on our punctuality and use advanced scheduling tools to ensure on-time delivery."
  },
  {
    question: "Are you a licensed and certified firm?",
    answer: "Absolutely. We are a team of certified B.Tech Civil Engineers and experienced developers, fully licensed to operate in the infrastructure and construction industry."
  }
];

const FaqItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={window.innerWidth < 768 ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
      whileInView={window.innerWidth < 768 ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
      className="group mb-4 sm:mb-8 will-change-transform"
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
          className="relative w-full px-6 sm:px-10 py-6 sm:py-10 text-left flex items-center justify-between gap-6 z-10"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-secondary text-primary rotate-90 shadow-lg' : 'bg-white/5 text-secondary border border-white/10 group-hover:bg-secondary/20 group-hover:scale-110'}`}>
              <HelpCircle size={isOpen ? 18 : 22} className="sm:size-auto" />
            </div>
            <span className={`text-lg sm:text-xl md:text-2xl font-bold transition-all duration-500 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
              {faq.question}
            </span>
          </div>
          <div className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${isOpen ? 'bg-secondary border-secondary text-primary' : 'border-white/20 text-white/40'}`}>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-6 sm:px-10 pb-6 sm:pb-10 pt-2 relative z-10">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6 sm:mb-8"></div>
                <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl border-l-2 border-secondary/30 pl-6 sm:pl-8 italic font-light">
                  {faq.answer}
                </p>
                <div className="mt-8 flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/50"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/20"></div>
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
    <div className="relative overflow-hidden bg-primary py-12 sm:py-24">
      {/* Reworked Background: New Premium Subtle Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/faq-bg.png"
          alt="Construction Background"
          className="w-full h-full object-cover opacity-10 brightness-50"
        />
        {/* Deeper, more sophisticated gradients to minimize visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary/40"></div>
      </div>

      <SectionWrapper id="faq" bg="bg-transparent" className="relative z-10">
        <div className="max-w-5xl mx-auto px-4 text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-4 bg-secondary/10 px-6 py-2 rounded-full border border-secondary/20">
              Technical Wisdom
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
              Expertly <br />
              <span className="text-secondary italic">Answered.</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-8"></div>
            <p className="text-gray-400 font-medium max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              Everything you need to know about our premium construction process, architectural standards, and engineering excellence.
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
