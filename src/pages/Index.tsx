import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ModelPlayground } from "@/components/ModelPlayground";
import { HowItWorks } from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ModelPlayground />
      <HowItWorks />
      
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Smart-Stock Model Lab · Demo Interface for Time-Series Forecasting Models
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
