import HeroSection from "@/components/smartstore/HeroSection";
import AuthoritySection from "@/components/smartstore/AuthoritySection";
import PainPointSection from "@/components/smartstore/PainPointSection";
import ComparisonSection from "@/components/smartstore/ComparisonSection";
import USPSection from "@/components/smartstore/USPSection";
import CurriculumSection from "@/components/smartstore/CurriculumSection";
import ReviewSection from "@/components/smartstore/ReviewSection";
import ProcessSection from "@/components/smartstore/ProcessSection";
import PricingSection from "@/components/smartstore/PricingSection";
import FAQSection from "@/components/smartstore/FAQSection";
import EventSection from "@/components/smartstore/EventSection";

const Index = () => {
  return (
    <div className="max-w-[480px] mx-auto bg-card shadow-dark overflow-hidden">
      <HeroSection />
      <AuthoritySection />
      <PainPointSection />
      <ComparisonSection />
      <USPSection />
      <CurriculumSection />
      <ReviewSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <EventSection />
    </div>
  );
};

export default Index;
