import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Phone, Mail, MapPin, Send, 
  CheckCircle2, ArrowRight, Building2,
  Clock, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageTitle } from '../hooks/usePageTitle';

// Custom Stable Brand Icons
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const BentoCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden relative group backdrop-blur-sm ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    {children}
  </motion.div>
);

const FormInput = ({ label, register, name, required, type = 'text', placeholder, errors, isTextArea = false }) => (
  <div className="w-full relative group">
    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block group-focus-within:text-secondary transition-colors">
      {label} {required && <span className="text-secondary">*</span>}
    </label>
    {isTextArea ? (
      <textarea 
        {...register(name, { required })}
        placeholder={placeholder}
        rows={4}
        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white font-medium placeholder:text-white/20 focus:outline-none focus:border-secondary focus:bg-black/40 transition-all resize-none"
      />
    ) : (
      <input 
        type={type}
        {...register(name, { required })}
        placeholder={placeholder}
        className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white font-medium placeholder:text-white/20 focus:outline-none focus:border-secondary focus:bg-black/40 transition-all"
      />
    )}
    {errors?.[name] && <span className="absolute -bottom-5 left-0 text-[9px] font-bold text-red-500 uppercase tracking-widest">Required</span>}
  </div>
);

export default function Contact() {
  usePageTitle('Contact | Urban Creators');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 2000));
    console.log('Bento Form Submitted:', data);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#070707] text-white pt-48 md:pt-56 pb-24 selection:bg-secondary/30 relative">
      
      {/* Subtle Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ── Page Header ────────────────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">Start Your Project</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            Let's build <span className="text-secondary italic font-serif lowercase">together.</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto font-medium">
            Connect with our engineering and design team. We're ready to bring your architectural vision to reality.
          </p>
        </motion.div>

        {/* ── Bento Grid Layout ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* 1. Large Form Card (Spans 2 columns on desktop) */}
          <BentoCard className="md:col-span-2 md:row-span-2 p-8 md:p-12" delay={0.1}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h2 className="text-3xl font-black tracking-tight mb-8">Send a Message</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormInput label="Full Name" name="name" register={register} required placeholder="John Doe" errors={errors} />
                      <FormInput label="Email Address" name="email" type="email" register={register} required placeholder="john@example.com" errors={errors} />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormInput label="Phone Number" name="phone" register={register} required placeholder="+91 00000 00000" errors={errors} />
                      <div className="w-full relative group">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2 block group-focus-within:text-secondary transition-colors">
                          Inquiry Type <span className="text-secondary">*</span>
                        </label>
                        <select 
                          {...register('type', { required: true })}
                          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:border-secondary focus:bg-black/40 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#0f0f0f]">Select an option</option>
                          <option value="residential" className="bg-[#0f0f0f]">Residential Construction</option>
                          <option value="commercial" className="bg-[#0f0f0f]">Commercial Project</option>
                          <option value="other" className="bg-[#0f0f0f]">General Inquiry</option>
                        </select>
                        {errors.type && <span className="absolute -bottom-5 left-0 text-[9px] font-bold text-red-500 uppercase tracking-widest">Required</span>}
                      </div>
                    </div>

                    <FormInput label="Project Details" name="message" isTextArea register={register} required placeholder="Describe your requirements..." errors={errors} />

                    <div className="pt-2">
                      <button 
                        type="submit" disabled={isSubmitting}
                        className="w-full py-4 bg-secondary hover:bg-white text-primary hover:text-black font-black uppercase tracking-[0.2em] text-[11px] rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {isSubmitting ? 'Sending...' : <>Submit Request <ArrowRight size={16} /></>}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-20 text-center">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-secondary" />
                  </div>
                  <h3 className="text-3xl font-black mb-3">Message Received</h3>
                  <p className="text-white/50 mb-8 max-w-sm mx-auto">Thank you for reaching out. Our team will review your project details and contact you shortly.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-[10px] font-bold uppercase tracking-widest text-secondary border-b border-secondary/30 pb-1">Send Another</button>
                </motion.div>
              )}
            </AnimatePresence>
          </BentoCard>

          {/* 2. Quick Contact Card */}
          <BentoCard className="md:col-span-1 p-8 flex flex-col justify-center" delay={0.2}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Phone className="text-secondary" size={20} /> Direct Contact
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Call Us</p>
                <p className="text-lg font-medium">+91 72181 77879</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Email Us</p>
                <p className="text-lg font-medium">info@urbancreators.com</p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"><InstagramIcon size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"><LinkedinIcon size={18} /></a>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* 3. Status/Trust Card */}
          <BentoCard className="md:col-span-1 p-8 bg-gradient-to-br from-secondary/10 to-transparent flex flex-col justify-center border-secondary/20" delay={0.3}>
            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-5">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Trusted Quality</h3>
            <p className="text-white/50 text-sm font-medium leading-relaxed">
              ISO Certified processes ensuring the highest standards of safety, material quality, and architectural finishing.
            </p>
          </BentoCard>

          {/* 4. Panoramic Map Card (Spans all 3 columns) */}
          <BentoCard className="md:col-span-3 h-[400px] p-0" delay={0.4}>
            <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]" />
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=75.52%2C20.98%2C75.58%2C21.03&layer=mapnik&marker=21.0022%2C75.5502"
              width="100%" height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(1.2) brightness(0.7)' }}
              allowFullScreen loading="lazy"
              className="z-0 relative"
            />
            {/* Floating Location Tag inside Map */}
            <div className="absolute bottom-6 left-6 z-20">
              <div className="bg-black/60 backdrop-blur-md border border-white/10 px-5 py-4 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Headquarters</p>
                  <p className="text-white/50 text-xs">Jalgaon, MH – 425001</p>
                </div>
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </div>
  );
}
