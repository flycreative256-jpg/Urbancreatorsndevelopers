import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Rajeev Sharma',
    role: 'Villa Owner',
    text: 'Urban Creators delivered beyond our expectations. The attention to detail in our new villa is simply outstanding. Highly recommended for luxury construction.',
  },
  {
    id: 2,
    name: 'Priya Desai',
    role: 'Commercial Client',
    text: 'They transformed our office space completely. The turnkey solution saved us so much time and the quality of work is premium. A truly professional team.',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Homeowner',
    text: 'What impressed me most was their transparency. No hidden costs, on-time delivery, and the smart home features they integrated are phenomenal.',
  }
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" bg="bg-background">
      <div className="text-center mb-16">
        <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Testimonials</span>
        <h2 className="text-4xl md:text-5xl text-primary mt-2 mb-6">Client Success Stories</h2>
        <div className="w-24 h-1 bg-secondary mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 cursor-grab active:cursor-grabbing">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="glass-liquid p-10 md:p-14 rounded-3xl shadow-2xl text-center relative border border-white/30">
                <Quote size={60} className="text-secondary/20 absolute top-8 left-8" />
                <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
                <h4 className="text-xl font-bold text-primary">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">{testimonial.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
}
