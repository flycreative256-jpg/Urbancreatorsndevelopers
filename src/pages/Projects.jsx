import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, MapPin } from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import CtaBanner from '../components/sections/CtaBanner';

const allProjects = [
  { id: 1, title: 'The Royal Estate', category: 'Villas', image: '/projects/1.png', client: 'Luxury Estates Ltd', year: '2025', location: 'South Mumbai, India' },
  { id: 2, title: 'Skyline Heights', category: 'Commercial', image: '/projects/2.png', client: 'Global Tech Corp', year: '2024', location: 'Pune IT Park' },
  { id: 3, title: 'Modern Haven', category: 'Residential', image: '/projects/3.png', client: 'Private Owner', year: '2023', location: 'Navi Mumbai' },
  { id: 4, title: 'Oasis Smart Home', category: 'Interiors', image: '/projects/4.png', client: 'HNI Client', year: '2024', location: 'Jalgaon, Maharashtra' },
  { id: 5, title: 'Corporate Hub', category: 'Commercial', image: '/projects/5.png', client: 'Financial District', year: '2026', location: 'Bandra Kurla Complex' },
  { id: 6, title: 'Zenith Villa', category: 'Villas', image: '/projects/6.png', client: 'Private Investor', year: '2025', location: 'Lonavala Hills' },
];

const categories = ['All', 'Residential', 'Villas', 'Commercial', 'Interiors'];

import { usePageTitle } from '../hooks/usePageTitle';

export default function Projects() {
  usePageTitle('Our Portfolio of Excellence');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full">
      <section className="relative pt-40 pb-24 bg-primary text-center">
        <div className="absolute inset-0 z-0">
          <img src="/projects/2.png" alt="Projects" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Our Portfolio</h1>
          <p className="text-secondary tracking-wider uppercase">Showcasing Our Finest Work</p>
        </div>
      </section>

      <SectionWrapper bg="bg-primary text-white">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat 
                  ? 'btn-liquid-gold shadow-[0_0_20px_rgba(194,149,69,0.3)]' 
                  : 'btn-liquid text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="glass-liquid p-2 rounded-3xl shadow-xl h-80 group cursor-pointer relative overflow-hidden transition-all duration-500 hover:shadow-[0_10px_40px_rgba(194,149,69,0.3)] hover:-translate-y-2">
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-2 block drop-shadow-md">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{project.title}</h3>
                      <div className="w-0 h-0.5 bg-secondary group-hover:w-16 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </SectionWrapper>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-primary/90 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl glass-dark-liquid rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] border border-white/20"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full bg-primary/80 backdrop-blur-md text-secondary text-xs font-bold uppercase tracking-wider border border-white/10">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.title}</h2>
                <div className="w-16 h-1 bg-secondary mb-8"></div>
                
                <p className="text-gray-300 leading-relaxed mb-8">
                  A masterclass in modern architecture and luxury design. {selectedProject.title} represents the pinnacle of our engineering excellence, featuring sustainable materials, smart home integration, and unparalleled aesthetic brilliance. Designed to exceed all expectations.
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-10">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="flex items-center gap-2 text-secondary mb-1 text-xs md:text-sm uppercase tracking-wider font-bold"><User size={16} /> Client</span>
                    <span className="text-white font-medium text-sm md:text-base">{selectedProject.client}</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="flex items-center gap-2 text-secondary mb-1 text-xs md:text-sm uppercase tracking-wider font-bold"><Calendar size={16} /> Completed</span>
                    <span className="text-white font-medium text-sm md:text-base">{selectedProject.year}</span>
                  </div>
                  <div className="col-span-2 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <span className="flex items-center gap-2 text-secondary mb-1 text-xs md:text-sm uppercase tracking-wider font-bold"><MapPin size={16} /> Location</span>
                    <span className="text-white font-medium text-sm md:text-base">{selectedProject.location}</span>
                  </div>
                </div>

                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="w-full py-4 btn-liquid-gold text-primary font-bold uppercase tracking-wider rounded-xl hover:scale-[1.02] transition-transform"
                >
                  Inquire Similar Project
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CtaBanner />
    </div>
  );
}
