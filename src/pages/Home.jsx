import Hero from '../components/sections/Hero';
import TrustIndicators from '../components/sections/TrustIndicators';
import ServicesPreview from '../components/sections/ServicesPreview';
import ServicePackages from '../components/sections/ServicePackages';
import AboutPreview from '../components/sections/AboutPreview';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import Faq from '../components/sections/Faq';
import CtaBanner from '../components/sections/CtaBanner';
import ContactPreview from '../components/sections/ContactPreview';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle('Luxury Construction & Infrastructure');
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <TrustIndicators />
      <ServicesPreview />
      <ServicePackages />
      <AboutPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Faq />
      <CtaBanner />
      <ContactPreview />
    </div>
  );
}
