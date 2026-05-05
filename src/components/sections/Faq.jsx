import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import constructionBg from '../../assets/construction-faq-bg.png';

const faqs = [
  {
    question: "What services does Urban Creators & Developers provide?",
    answer: "We offer a comprehensive range of construction and development services, including luxury residential construction, commercial infrastructure, architectural design, interior planning, and project management from concept to completion."
  },
  {
    question: "How do I get a quote for my project?",
    answer: "You can request a quote by clicking the 'Connect' button on our Contact page or via WhatsApp. Our team will schedule an initial consultation to understand your requirements and provide a detailed estimate."
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer: "Yes, we specialize in both premium residential villas and high-end commercial spaces, ensuring the same level of engineering excellence and aesthetic brilliance across all sectors."
  },
  {
    question: "What is your project timeline management like?",
    answer: "We follow a strict, phase-based project management approach (Survey, Design, Execution, Finishing). Each phase has dedicated milestones to ensure we deliver your project on time without compromising on quality."
  },
  {
    question: "Is Urban Creators & Developers a licensed firm?",
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
          {index + 1}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 w-full text-left p-6 sm:p-10 flex justify-between items-center gap-6"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <span className={`hidden sm:flex w-12 h-12 rounded-2xl items-center justify-center font-black text-sm border transition-all duration-500 ${isOpen ? 'bg-secondary border-secondary text-white scale-110' : 'bg-white/5 border-white/10 text-white/60'
              }`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className={`text-lg sm:text-2xl font-bold tracking-tight transition-colors duration-500 max-w-2xl ${isOpen ? 'text-white' : 'text-white/90'
              }`}>
              {faq.question}
            </h3>
          </div>

          <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-700 ${isOpen ? 'bg-secondary text-white rotate-[135deg]' : 'bg-white/10 text-white'
            }`}>
            <Plus size={20} className="sm:size-6" strokeWidth={2.5} />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative z-10 px-6 sm:px-28 pb-10 sm:pb-12">
                <div className="w-12 h-1 bg-secondary/40 mb-6 sm:mb-8 rounded-full"></div>
                <p className="text-white/80 text-base sm:text-xl leading-relaxed font-medium">
                  {faq.answer}
                </p>

                {/* Decoration */}
                <div className="mt-6 sm:mt-8 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <div className="w-2 h-2 rounded-full bg-secondary/60"></div>
                  <div className="w-2 h-2 rounded-full bg-secondary/30"></div>
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
      {/* Cinematic Background Layer - Dark Mode Integration */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
          alt="Construction Background"
          className="w-full h-full object-cover opacity-40 brightness-50 grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/80"></div>
      </div>

      <SectionWrapper id="faq" bg="bg-transparent" className="relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="inline-block text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-4 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20">
                Information Hub
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] sm:leading-[1.1]">
                Expertly <br />
                <span className="text-secondary italic">Answered.</span>
              </h2>
            </div>
            <p className="text-gray-400 font-medium md:max-w-xs text-sm leading-relaxed mb-2">
              Everything you need to know about our premium construction process and engineering standards.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
