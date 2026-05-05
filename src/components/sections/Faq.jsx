import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const faqs = [
  {
    question: "What makes Urban Creators & Developers different?",
    answer: "We blend high-end architectural aesthetics with rigorous B.Tech-certified civil engineering. Every project is treated as a legacy, combining premium materials with transparent, tech-driven execution."
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer: "Yes, our expertise spans from ultra-luxury villas and smart residential complexes to monumental commercial hubs and corporate infrastructure."
  },
  {
    question: "How do you ensure project quality and timelines?",
    answer: "We use advanced project management systems and maintain strict on-site engineering supervision. Our B.Tech founders personally oversee structural integrity and finishing standards to ensure zero compromises."
  },
  {
    question: "Can I get a customized construction estimate?",
    answer: "Absolutely. Use our 'Estimate' tool for a quick quote, or contact our team for a detailed, itemized technical proposal tailored to your specific architectural requirements."
  },
  {
    question: "Are you a licensed engineering firm?",
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
      className="group mb-4 sm:mb-6 will-change-transform"
    >
      <div
        className={`relative overflow-hidden transition-all duration-700 rounded-[1.5rem] sm:rounded-[2rem] border backdrop-blur-3xl ${isOpen
          ? 'bg-white/10 border-secondary/40 shadow-[0_40px_100px_rgba(0,0,0,0.5)]'
          : 'bg-white/5 border-white/10 hover:border-white/20 shadow-xl'
          }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 sm:px-10 py-6 sm:py-8 flex items-center justify-between text-left gap-4"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <span className={`text-xs sm:text-sm font-black transition-colors duration-500 ${isOpen ? 'text-secondary' : 'text-white/40'}`}>
              0{index + 1}
            </span>
            <h3 className={`text-base sm:text-xl font-bold transition-all duration-500 ${isOpen ? 'text-white scale-105' : 'text-white/80'}`}>
              {faq.question}
            </h3>
          </div>
          <div className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-secondary border-secondary text-primary rotate-180' : 'border-white/20 text-white'}`}>
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
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
              <div className="px-6 sm:px-10 pb-8 sm:pb-10 pt-2 ml-8 sm:ml-12 border-l border-white/10">
                <p className="text-gray-300 text-sm sm:text-lg leading-relaxed max-w-3xl">
                  {faq.answer}
                </p>
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
    <div className="relative overflow-hidden bg-primary py-20 sm:py-32">
      {/* Reworked Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/faq-bg.png"
          alt="Luxury Construction Background"
          className="w-full h-full object-cover opacity-30 brightness-[0.3] scale-105 blur-[2px]"
        />
        {/* Complex Gradient Overlays for Subtlety */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-primary/60 to-primary"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-transparent to-primary/90"></div>
      </div>

      <SectionWrapper id="faq" bg="bg-transparent" className="relative z-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-24 gap-12">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-secondary font-black tracking-[0.5em] uppercase text-[10px] mb-6 bg-secondary/10 px-6 py-2 rounded-full border border-secondary/20 backdrop-blur-md"
              >
                Inquiry Center
              </motion.span>
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] sm:leading-[0.95]">
                Expertly <br />
                <span className="text-secondary italic drop-shadow-[0_0_15px_rgba(194,149,69,0.3)]">Answered.</span>
              </h2>
            </div>
            <p className="text-gray-400 font-medium lg:max-w-xs text-base sm:text-lg leading-relaxed border-l-2 border-secondary/30 pl-6">
              Your vision, clarified. Explore our technical standards and premium process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Contact Support Trigger */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-24 text-center"
          >
            <p className="text-gray-500 text-sm mb-6 font-medium">Have a more specific question?</p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-[0.2em] text-xs hover:text-secondary transition-colors group"
            >
              Consult Our Engineers
              <div className="w-8 h-px bg-secondary group-hover:w-16 transition-all duration-500"></div>
            </a>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
