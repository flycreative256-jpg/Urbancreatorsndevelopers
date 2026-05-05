import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Ruler, Sparkles, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const projectTypes = [
  { id: 'residential', label: 'Luxury Residential', icon: Building2, multiplier: 1 },
  { id: 'commercial', label: 'Commercial Hub', icon: Building2, multiplier: 1.2 },
  { id: 'renovation', label: 'Premium Renovation', icon: Building2, multiplier: 0.8 }
];

const qualityPackages = [
  { id: 'premium', label: 'Premium', desc: 'High-quality materials & finishes', pricePerSqft: 1800 },
  { id: 'elite', label: 'Elite', desc: 'Superior engineering & luxury fixtures', pricePerSqft: 2500 },
  { id: 'ultra', label: 'Ultra-Luxury', desc: 'Imported materials & smart integration', pricePerSqft: 4000 }
];

export default function EstimateCalculator() {
  const [area, setArea] = useState(1500);
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [quality, setQuality] = useState(qualityPackages[0]);
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    const total = area * quality.pricePerSqft * projectType.multiplier;
    setEstimate(total);
  }, [area, projectType, quality]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <SectionWrapper id="calculator" bg="bg-primary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <img src="/logo-part2-white.png" alt="" className="w-full h-full object-contain rotate-12 scale-150" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <span className="inline-block text-secondary font-black tracking-[0.4em] uppercase text-[10px] mb-4 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20">
            Transparency Tool
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            Project <br />
            <span className="text-secondary">Estimator.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-medium">
            Get an instant preliminary quote for your dream project. Select your parameters and see the engineering magic happen.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/70">
              <CheckCircle2 className="text-secondary" size={20} />
              <span>Includes basic civil engineering</span>
            </div>
            <div className="flex items-center gap-4 text-white/70">
              <CheckCircle2 className="text-secondary" size={20} />
              <span>Architectural planning included</span>
            </div>
            <div className="flex items-center gap-4 text-white/70">
              <CheckCircle2 className="text-secondary" size={20} />
              <span>Real-time market rate adjustments</span>
            </div>
          </div>
        </div>

        <div className="glass-liquid p-8 md:p-12 rounded-[3rem] border-white/20 relative">
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-primary shadow-2xl rotate-12">
            <Calculator size={32} />
          </div>

          <div className="space-y-10">
            {/* Project Area Slider */}
            <div>
              <div className="flex justify-between items-end mb-6">
                <label className="text-white/60 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                  <Ruler size={14} /> Total Area (Sq. Ft.)
                </label>
                <span className="text-2xl font-black text-white">{area} <span className="text-secondary text-sm">SQFT</span></span>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="50"
                value={area}
                onChange={(e) => setArea(parseInt(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-secondary transition-all hover:accent-secondary/80"
              />
              <div className="flex justify-between mt-2 text-[10px] text-white/30 font-bold tracking-tighter">
                <span>500 SQFT</span>
                <span>10,000 SQFT</span>
              </div>
            </div>

            {/* Project Type Grid */}
            <div>
              <label className="text-white/60 font-bold uppercase tracking-widest text-xs block mb-6">
                Project Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type)}
                    className={`p-4 rounded-2xl border transition-all duration-500 text-center flex flex-col items-center gap-3 ${projectType.id === type.id
                      ? 'bg-secondary border-secondary text-primary shadow-lg scale-105'
                      : 'bg-white/5 border-white/10 text-white hover:border-white/30'
                      }`}
                  >
                    <type.icon size={20} />
                    <span className="text-xs font-black uppercase tracking-tight">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quality Selection */}
            <div>
              <label className="text-white/60 font-bold uppercase tracking-widest text-xs block mb-6">
                Quality Level
              </label>
              <div className="space-y-4">
                {qualityPackages.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setQuality(pkg)}
                    className={`w-full p-6 rounded-3xl border transition-all duration-500 text-left flex justify-between items-center ${quality.id === pkg.id
                      ? 'bg-white/10 border-secondary text-white shadow-xl translate-x-2'
                      : 'bg-white/2 border-white/5 text-white/60 hover:bg-white/5'
                      }`}
                  >
                    <div>
                      <h4 className={`font-black text-lg ${quality.id === pkg.id ? 'text-secondary' : ''}`}>{pkg.label}</h4>
                      <p className="text-xs opacity-60 font-medium">{pkg.desc}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${quality.id === pkg.id ? 'border-secondary bg-secondary' : 'border-white/20'
                      }`}>
                      {quality.id === pkg.id && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Result Display */}
            <div className="pt-10 mt-10 border-t border-white/10">
              <div className="bg-primary/40 p-8 rounded-[2rem] border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10">
                  <p className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-4">Estimated Investment</p>
                  <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                    {formatCurrency(estimate)}
                    <span className="text-white/20 text-xl ml-2">+/-</span>
                  </h3>
                  <p className="text-white/40 text-xs font-medium leading-relaxed italic">
                    *This is a preliminary estimate based on current market rates. Final pricing may vary based on specific architectural requirements and site conditions.
                  </p>
                </div>
              </div>

              <button className="w-full mt-8 btn-liquid-gold py-6 rounded-3xl font-black uppercase tracking-widest flex items-center justify-center gap-3 text-sm">
                Get Detailed Quote <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
