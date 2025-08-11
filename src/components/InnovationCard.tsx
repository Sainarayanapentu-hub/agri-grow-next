import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InnovationCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  delay?: number;
}

export const InnovationCard = ({ 
  title, 
  description, 
  image, 
  icon: Icon,
  delay = 0 
}: InnovationCardProps) => {
  return (
    <Card 
      className="group cursor-pointer hover:shadow-card transition-all duration-500 bg-gradient-card border-border/50 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="mt-4 flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
          Learn More
          <Icon className="ml-2 w-4 h-4" />
        </div>
      </CardContent>
    </Card>
  );
};