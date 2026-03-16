import {
  HeroSection,
  ServicesSection,
  VisionSection,
  WhyChooseUsSection,
} from "@/components/pages/home";
import { TestimonialsSection } from "@/components/ui";

const HomePage = async () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUsSection />
      <VisionSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
