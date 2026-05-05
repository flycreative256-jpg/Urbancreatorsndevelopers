import React from 'react';
import EstimateCalculator from '../components/sections/EstimateCalculator';
import Faq from '../components/sections/Faq';
import CtaBanner from '../components/sections/CtaBanner';

import { usePageTitle } from '../hooks/usePageTitle';

export default function Estimate() {
  usePageTitle('Instant Project Valuation');
  return (
    <div className="w-full pt-20">
      <section className="relative py-24 bg-primary text-center overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-block text-secondary font-black tracking-[0.4em] uppercase text-xs mb-6 px-4 py-2 bg-secondary/5 rounded-full border border-secondary/20">
            Digital Pricing Tool
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
            Free Project <br />
            <span className="text-secondary italic">Estimate.</span>
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
            Plan your investment with precision. Use our advanced calculator to understand the cost dynamics of your premium project.
          </p>
        </div>
      </section>

      <EstimateCalculator />
      
      <div className="bg-primary py-24 border-t border-white/5">
        <Faq />
      </div>

      <CtaBanner />
    </div>
  );
}
