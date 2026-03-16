import {
  HeroSection,
  ServicesSection,
  VisionSection,
  WhyChooseUsSection,
} from "@/components/pages/home";

const HomePage = async () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUsSection />
      <VisionSection />
      <ServicesSection />
    </div>
  );
};

export default HomePage;
