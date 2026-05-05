import React from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, Layout, Hammer, Ruler, Paintbrush, 
  Lightbulb, ShieldCheck, Zap, ArrowRight,
  Target, Activity, Layers, Sparkles
} from 'lucide-react';
import SectionWrapper from '../components/ui/SectionWrapper';
import CtaBanner from '../components/sections/CtaBanner';
import ServicePackages from '../components/sections/ServicePackages';
import ServicesDetailed from '../components/sections/ServicesDetailed';

import { usePageTitle } from '../hooks/usePageTitle';

export default function Services() {
  usePageTitle('Engineering & Architectural Services');
  return (
    <div className="w-full bg-[#05070a]">
      {/* ── Dynamic Hero Section ──────────────────────────── */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        {/* Background Engineering Grid */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{ 
              backgroundImage: 'radial-gradient(circle, #C29545 1px, transparent 1px)',
              backgroundSize: '40px 40px' 
            }}
          />
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[180px] -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] translate-y-1/2 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl px-5 sm:px-6 py-2 rounded-full border border-white/10 mb-8 sm:mb-10 shadow-2xl"
          >
            <Activity className="text-secondary animate-pulse" size={14} />
            <span className="text-white/40 font-black tracking-[0.4em] sm:tracking-[0.5em] uppercase text-[8px] sm:text-[9px]">Full-Stream Solutions v3.0</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-white tracking-tighter leading-[0.9] sm:leading-[0.8] mb-8 sm:mb-12 uppercase"
          >
            Our <br /><span className="text-secondary italic font-serif lowercase tracking-normal bg-gradient-to-r from-secondary to-secondary/30 bg-clip-text text-transparent">capabilities.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed"
          >
            From conceptual blueprints to the final structural polish, we engineer luxury with mathematical precision and artistic soul.
          </motion.p>
        </div>
      </section>

      {/* ── Philosophy Section ────────────────────────────── */}
      <SectionWrapper bg="bg-transparent relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">The Urban Standard</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
              Engineering <br />Without <span className="text-secondary italic">Compromise.</span>
            </h2>
            <div className="space-y-8">
              {[
                { icon: ShieldCheck, title: 'Uncompromising Integrity', desc: 'Every beam and bolt meets global safety specifications and structural longevity standards.' },
                { icon: Target, title: 'Precision Execution', desc: 'Our zero-error policy ensures that reality matches the blueprint down to the last millimeter.' },
                { icon: Sparkles, title: 'Artistic Finish', desc: 'Construction is raw, but architecture is art. We bridge the gap with couture-grade finishes.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-500 shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80" 
                alt="Architecture" 
                className="w-full aspect-[4/5] object-cover grayscale brightness-75 hover:grayscale-0 hover:scale-105 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10">
                <div className="glass-liquid p-8 rounded-[2.5rem] border-white/20 backdrop-blur-2xl">
                  <p className="text-secondary font-black uppercase tracking-widest text-[10px] mb-2">Current Benchmark</p>
                  <p className="text-white text-xl font-bold leading-tight italic">"Where physics meets aesthetics."</p>
                </div>
              </div>
            </div>
            {/* Decorative Blueprint Line */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-secondary/30 rounded-br-[4rem] pointer-events-none" />
          </motion.div>
        </div>

        {/* ── Main Services Detailed ──────────────────────── */}
        <div className="relative z-10 pt-20">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">Comprehensive <br /><span className="text-secondary italic">Core services.</span></h2>
          </div>
          <ServicesDetailed />
        </div>

        {/* ── Service Packages ────────────────────────────── */}
        <div className="mt-24 sm:mt-32 md:mt-48 mb-20">
          <div className="text-center mb-12 sm:mb-20">
            <span className="text-secondary font-black tracking-[0.4em] uppercase text-[9px] sm:text-[10px] mb-4 block">Structured Investment</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">Service <span className="text-secondary italic">Tiers.</span></h2>
          </div>
          <div className="-mx-4 sm:mx-0">
            <ServicePackages />
          </div>
        </div>
      </SectionWrapper>

      {/* ── Custom CTA Section ────────────────────────────── */}
      <CtaBanner />
    </div>
  );
}
