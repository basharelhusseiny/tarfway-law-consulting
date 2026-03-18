import {
  AboutFirmSection,
  AboutVisionSection,
  AboutFounderSection,
  AboutExperienceSection,
  AboutKeyCasesSection,
  AboutPublicationsSection,
  AboutClientsSection,
} from "@/components/pages/about";

const AboutPage = () => {
  return (
    <div className="overflow-hidden">
      <AboutFirmSection />
      <AboutVisionSection />
      <AboutFounderSection />
      <AboutExperienceSection />
      <AboutKeyCasesSection />
      <AboutPublicationsSection />
      <AboutClientsSection />
    </div>
  );
};

export default AboutPage;
