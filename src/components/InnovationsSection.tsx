import { InnovationCard } from "./InnovationCard";
import { Cpu, Recycle, Building2, TrendingUp, Wind, Droplets } from "lucide-react";
import precisionImage from "@/assets/precision-farming.jpg";
import sustainableImage from "@/assets/sustainable-farming.jpg";
import greenhouseImage from "@/assets/smart-greenhouse.jpg";

export const InnovationsSection = () => {
  const innovations = [
    {
      title: "Climate-Adaptive Farming",
      description: "AI-powered climate modeling and drought-resistant crops designed to thrive in changing environmental conditions while maintaining biodiversity.",
      image: precisionImage,
      icon: Cpu,
      delay: 0
    },
    {
      title: "Carbon Sequestration Agriculture",
      description: "Revolutionary soil management and cover cropping techniques that capture atmospheric carbon, reversing climate change through regenerative farming.",
      image: sustainableImage,
      icon: Recycle,
      delay: 200
    },
    {
      title: "Renewable Energy Farms",
      description: "Solar-powered vertical farms and wind-integrated agriculture systems producing food with zero carbon footprint and maximum resource efficiency.",
      image: greenhouseImage,
      icon: Wind,
      delay: 400
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium">Environmental Innovation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Climate Solutions for Tomorrow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover transformative agricultural technologies that heal our planet while feeding the world,
            creating a regenerative future where farming reverses climate change.
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