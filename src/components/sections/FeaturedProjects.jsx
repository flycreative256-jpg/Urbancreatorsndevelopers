import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const projects = [
  {
    id: 1,
    title: 'The Royal Estate',
    category: 'Luxury Villa',
    image: '/projects/1.png',
    colSpan: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 2,
    title: 'Skyline Heights',
    category: 'Commercial',
    image: '/projects/2.png',
    colSpan: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    title: 'Modern Haven',
    category: 'Residential',
    image: '/projects/3.png',
    colSpan: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    title: 'Oasis Smart Home',
    category: 'Turnkey Project',
    image: '/projects/4.png',
    colSpan: 'col-span-1 md:col-span-2 row-span-1'
  }
];

export default function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" bg="bg-primary border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
          <h2 className="text-4xl md:text-5xl text-white mt-2 mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-secondary"></div>
        </div>
        <Link to="/projects" className="inline-flex items-center gap-2 font-bold text-secondary hover:text-white transition-colors group">
          View All Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 md:h-[600px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-xl overflow-hidden group cursor-pointer ${project.colSpan} h-[300px] md:h-auto`}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-secondary text-sm font-semibold tracking-wider uppercase mb-2 block">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <div className="w-0 h-0.5 bg-secondary group-hover:w-12 transition-all duration-300"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
