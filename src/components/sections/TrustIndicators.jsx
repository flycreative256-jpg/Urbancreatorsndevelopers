import { motion } from 'framer-motion';
import { Building2, Users, CheckCircle, Clock } from 'lucide-react';

const stats = [
  { id: 1, title: 'Years Experience', value: '15+', icon: Clock },
  { id: 2, title: 'Projects Completed', value: '120+', icon: CheckCircle },
  { id: 3, title: 'Happy Clients', value: '100%', icon: Users },
  { id: 4, title: 'Ongoing Sites', value: '12', icon: Building2 },
];

export default function TrustIndicators() {
  return (
    <section className="bg-primary border-y border-white/10 py-16 relative z-20 -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full glass-liquid border border-white/40 shadow-lg flex items-center justify-center text-secondary hover:scale-110 transition-transform duration-500">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-4xl font-heading font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
