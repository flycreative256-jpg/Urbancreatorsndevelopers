import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import CtaBanner from '../components/sections/CtaBanner';
import { usePageTitle } from '../hooks/usePageTitle';

// Custom SVG Brand Icons
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const FounderCard = ({ founder, index }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={window.innerWidth < 768 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={window.innerWidth < 768 ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => setIsActive(!isActive)}
      style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
      className="relative group h-[500px] sm:h-[580px] w-full rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)] border border-white/10 cursor-pointer will-change-transform"
    >
      {/* Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src={founder.image}
          alt={founder.name}
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-90 transition-opacity duration-700"></div>
      </div>

      {/* Content Overlay */}
      <div className={`absolute inset-x-5 bottom-5 z-10 transition-all duration-700 ${isActive ? '-translate-y-4' : 'group-hover:-translate-y-2'}`}>
        <div className="glass-dark-liquid p-8 rounded-[2.5rem] border border-white/20 backdrop-blur-3xl shadow-2xl min-h-[180px] flex flex-col items-center justify-center text-center">
          <div className="w-full">
            <span className="text-secondary font-black text-[10px] tracking-[0.3em] uppercase mb-2 block drop-shadow-sm">
              {founder.role}
            </span>
            <h3 className="text-3xl font-extrabold text-white leading-tight mb-3">
              {founder.name}
            </h3>
            {founder.degree && (
              <div className="flex justify-center mb-1">
                <span className="text-[10px] font-bold bg-white/10 text-white/70 border border-white/10 px-4 py-1 rounded-full uppercase tracking-widest backdrop-blur-md">
                  {founder.degree}
                </span>
              </div>
            )}
          </div>

          {/* Socials Section - Click to Reveal on Mobile, Hover on Desktop */}
          <motion.div 
            initial={false}
            animate={{ 
              height: isActive ? 'auto' : 0,
              opacity: isActive ? 1 : 0,
              marginTop: isActive ? 24 : 0
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden w-full lg:hidden"
          >
            <div className="pt-6 border-t border-white/10 flex justify-center gap-4">
              {[
                { icon: <LinkedinIcon size={18} />, link: founder.socials.linkedin, color: 'hover:bg-[#0A66C2]' },
                { icon: <InstagramIcon size={18} />, link: founder.socials.instagram, color: 'hover:bg-[#E4405F]' },
                { icon: <FacebookIcon size={18} />, link: founder.socials.facebook, color: 'hover:bg-[#1877F2]' },
                { icon: <MessageCircle size={18} />, link: founder.socials.whatsapp, color: 'hover:bg-[#25D366]' }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`w-10 h-10 rounded-full bg-white/5 ${social.color} flex items-center justify-center text-white/60 hover:text-white transition-all hover:scale-110 border border-white/10 shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Desktop Reveal (Hover) */}
          <div className="hidden lg:block w-full">
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
              <div className="overflow-hidden">
                <div className="pt-6 mt-6 border-t border-white/10 flex justify-center gap-4">
                  {[
                    { icon: <LinkedinIcon size={18} />, link: founder.socials.linkedin, color: 'hover:bg-[#0A66C2]' },
                    { icon: <InstagramIcon size={18} />, link: founder.socials.instagram, color: 'hover:bg-[#E4405F]' },
                    { icon: <FacebookIcon size={18} />, link: founder.socials.facebook, color: 'hover:bg-[#1877F2]' },
                    { icon: <MessageCircle size={18} />, link: founder.socials.whatsapp, color: 'hover:bg-[#25D366]' }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-white/5 ${social.color} flex items-center justify-center text-white/60 hover:text-white transition-all hover:scale-110 border border-white/10 shadow-lg`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Indicator */}
      <div className={`absolute top-8 right-8 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-2xl transition-all duration-500 ${isActive ? 'rotate-45 scale-110' : 'opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100'}`}>
        <ArrowRight size={22} />
      </div>
    </motion.div>
  );
};

export default function About() {
  usePageTitle('Our Legacy & Leadership');
  const founders = [
    {
      name: 'Er. Aaftab Shah',
      degree: 'B.Tech Civil',
      role: 'Visionary Founder & Chief Engineer',
      image: '/Aaftab Shah.png',
      socials: {
        linkedin: 'https://www.linkedin.com/in/aaftab-shah-b72272194',
        instagram: 'https://www.instagram.com/the_aaftab_313/',
        facebook: 'https://www.facebook.com/profile.php?viewas=100000686899395&id=61581047333312',
        whatsapp: 'https://wa.me/917218177879'
      }
    },
    {
      name: 'Er. Mubashshir Shaikh',
      degree: 'B.Tech Civil',
      role: 'Co-Founder & Director of Operations',
      image: '/Mubashshir.png',
      socials: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
        whatsapp: 'https://wa.me/917218177879'
      }
    },
    {
      name: 'Mr. Ab. Khalique Khatik',
      degree: '',
      role: 'Principal Mentor & Strategic Advisor',
      image: '/Ab.khalique khatik.png',
      socials: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
        whatsapp: 'https://wa.me/917218177879'
      }
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="relative pt-32 sm:pt-48 pb-20 sm:pb-32 bg-primary text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2075&q=80" 
            alt="Construction Background" 
            className="w-full h-full object-cover opacity-30 object-[center_top] sm:object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/60 to-primary"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-secondary text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-6 backdrop-blur-md shadow-xl">
              Building Legacies Since Inception
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1] drop-shadow-2xl">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">Us</span>
            </h1>
            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-md">
              We don't just construct buildings; we craft landmarks. Discover the passion, expertise, and leadership that drive Urban Creators & Developers.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="bg-background">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-16">
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4 sm:mb-6">Our Mission & Vision</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
            At Urban Creators & Developers, our mission is to deliver unparalleled quality in construction and infrastructure development. We believe in building not just structures, but long-lasting relationships with our clients based on trust, transparency, and engineering excellence.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our vision is to be the most trusted and premium luxury construction brand, known for integrating modern technology, sustainable practices, and aesthetic brilliance into every project we undertake.
          </p>
        </div>
      </SectionWrapper>

      {/* Founders Section */}
      <SectionWrapper bg="bg-primary">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-xs sm:text-sm">Leadership</span>
          <h2 className="text-3xl sm:text-4xl text-white mt-2 mb-4 sm:mb-6">Meet Our Founders</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 py-6 sm:py-10">
          {founders.map((founder, index) => (
            <FounderCard key={index} founder={founder} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <CtaBanner />
    </div>
  );
}
