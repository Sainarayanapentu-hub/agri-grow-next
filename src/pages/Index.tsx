import { Hero } from "@/components/Hero";
import { InnovationsSection } from "@/components/InnovationsSection";
import { StatsSection } from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <InnovationsSection />
      <StatsSection />
    </div>
  );
};

export default Index;
