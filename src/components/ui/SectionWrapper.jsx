import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, className = '', bg = 'bg-background' }) {
  const isDark = bg.includes('bg-primary');
  
  return (
    <section id={id} className={`${bg} py-20 lg:py-32 relative overflow-hidden ${className}`}>
      {/* Liquid Blobs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob ${isDark ? 'bg-secondary' : 'bg-primary'}`}></div>
        <div className={`absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000 ${isDark ? 'bg-blue-900' : 'bg-secondary'}`}></div>
        <div className={`absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000 ${isDark ? 'bg-purple-900' : 'bg-gray-400'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
