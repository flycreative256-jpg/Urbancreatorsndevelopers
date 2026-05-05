import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

export default function ContactPreview() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you for reaching out! We will contact you soon.');
  };

  return (
    <SectionWrapper id="contact-preview" bg="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
        
        {/* Contact Info */}
        <div className="text-center lg:text-left">
          <span className="text-secondary font-semibold tracking-wider uppercase text-xs sm:text-sm">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mt-2 mb-4 sm:mb-6 font-bold leading-tight">Let's Discuss Your Next Project</h2>
          <div className="w-20 h-1 bg-secondary mb-8 sm:mb-10 mx-auto lg:mx-0"></div>
          
          <p className="text-gray-600 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
            Whether you're looking to build a luxury home or a commercial complex, our team of expert civil engineers is ready to help you every step of the way.
          </p>
 
          <div className="space-y-6 sm:space-y-8 text-left">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/5 rounded-full flex items-center justify-center text-secondary shrink-0 border border-primary/10 shadow-md">
                <Phone size={18} className="sm:size-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-primary mb-1">Call Us</h4>
                <p className="text-gray-600 text-sm sm:text-base">+91 72181 77879</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/5 rounded-full flex items-center justify-center text-secondary shrink-0 border border-primary/10 shadow-md">
                <Mail size={18} className="sm:size-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-primary mb-1">Email Us</h4>
                <p className="text-gray-600 text-sm sm:text-base">info@urbancreators.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/5 rounded-full flex items-center justify-center text-secondary shrink-0 border border-primary/10 shadow-md">
                <MapPin size={18} className="sm:size-5" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-primary mb-1">Visit Office</h4>
                <p className="text-gray-600 text-sm sm:text-base">Near Ajanta Chaufully, Jalgaon – 425001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Form */}
        <div className="glass-liquid p-8 md:p-12 rounded-3xl shadow-2xl border border-white/30">
          <h3 className="text-2xl font-bold text-primary mb-6">Request a Callback</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                placeholder="John Doe"
              />
              {errors.name && <span className="text-red-500 text-xs mt-1">This field is required</span>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                {...register("phone", { required: true })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                placeholder="+91 90000 00000"
              />
              {errors.phone && <span className="text-red-500 text-xs mt-1">This field is required</span>}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
              <select
                {...register("service")}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              >
                <option value="residential">Residential Construction</option>
                <option value="villa">Luxury Villa</option>
                <option value="commercial">Commercial Space</option>
                <option value="interior">Interior Design</option>
              </select>
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-primary text-white font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 hover:bg-secondary transition-colors"
            >
              Submit Request
              <Send size={18} />
            </motion.button>
          </form>
        </div>
        
      </div>
    </SectionWrapper>
  );
}
