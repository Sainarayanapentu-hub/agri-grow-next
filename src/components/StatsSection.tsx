import { TrendingUp, Users, Globe, Award } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "40%",
      label: "Increase in Crop Yields",
      description: "Through precision farming techniques"
    },
    {
      icon: Users,
      value: "10M+",
      label: "Farmers Supported",
      description: "Worldwide technology adoption"
    },
    {
      icon: Globe,
      value: "50+",
      label: "Countries Reached",
      description: "Global agricultural transformation"
    },
    {
      icon: Award,
      value: "95%",
      label: "Sustainability Goals",
      description: "Environmental impact reduction"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Transforming Agriculture Globally
          </h2>
          <p className="text-xl text-muted-foreground">
            Real impact through innovative agricultural technology
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};