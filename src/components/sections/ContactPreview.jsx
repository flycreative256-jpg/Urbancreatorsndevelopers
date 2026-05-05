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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl text-primary mt-2 mb-6">Let's Discuss Your Next Project</h2>
          <div className="w-24 h-1 bg-secondary mb-10"></div>
          
          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            Whether you're looking to build a luxury home or a commercial complex, our team of expert civil engineers is ready to help you every step of the way.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 glass-liquid rounded-full flex items-center justify-center text-secondary shrink-0 border border-white/40 shadow-lg">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-1">Call Us</h4>
                <p className="text-gray-600">+91 72181 77879</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 glass-liquid rounded-full flex items-center justify-center text-secondary shrink-0 border border-white/40 shadow-lg">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-1">Email Us</h4>
                <p className="text-gray-600">info@urbancreators.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 glass-liquid rounded-full flex items-center justify-center text-secondary shrink-0 border border-white/40 shadow-lg">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary mb-1">Visit Office</h4>
                <p className="text-gray-600">Near Ajanta Chaufully, Jalgaon – 425001</p>
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

            <button
              type="submit"
              className="w-full py-4 bg-primary text-white font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 hover:bg-secondary transition-colors"
            >
              Submit Request
              <Send size={18} />
            </button>
          </form>
        </div>
        
      </div>
    </SectionWrapper>
  );
}
