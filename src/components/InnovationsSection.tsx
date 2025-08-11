import { InnovationCard } from "./InnovationCard";
import { Cpu, Recycle, Building2, TrendingUp } from "lucide-react";
import precisionImage from "@/assets/precision-farming.jpg";
import sustainableImage from "@/assets/sustainable-farming.jpg";
import greenhouseImage from "@/assets/smart-greenhouse.jpg";

export const InnovationsSection = () => {
  const innovations = [
    {
      title: "Precision Farming",
      description: "Advanced sensors, GPS technology, and data analytics optimize crop yields while reducing resource waste through smart farming techniques.",
      image: precisionImage,
      icon: Cpu,
      delay: 0
    },
    {
      title: "Sustainable Agriculture",
      description: "Renewable energy integration, organic practices, and eco-friendly solutions creating a sustainable future for farming.",
      image: sustainableImage,
      icon: Recycle,
      delay: 200
    },
    {
      title: "Smart Greenhouses",
      description: "Automated climate control, vertical farming systems, and AI-driven monitoring for maximum efficiency and year-round production.",
      image: greenhouseImage,
      icon: Building2,
      delay: 400
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium">Innovation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Revolutionary Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the cutting-edge innovations that are reshaping agriculture 
            and creating sustainable solutions for our planet's future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <div key={innovation.title} className="animate-fade-in">
              <InnovationCard {...innovation} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};