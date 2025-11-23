import { Button } from "./ui/button";
import { TrendingUp, Shield, Activity } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToModels = () => {
    document.getElementById("models")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="overview" className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Smart-Stock
            <span className="block text-primary mt-2">Model Lab</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            See how our time-series models forecast demand and detect inventory risk.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground">Run demand forecasts on real retail data</p>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground">Visualize risk of stockouts and overstock</p>
            </div>
            <div className="flex items-start gap-3">
              <Activity className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-foreground">Explore volatility during holidays, promotions, and weather events</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={scrollToModels}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
            >
              Try the Models
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToHowItWorks}
              className="border-primary/50 text-foreground hover:bg-primary/10"
            >
              Learn How It Works
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-card border border-border rounded-2xl p-8 shadow-[0_4px_20px_hsl(0_0%_0%/0.5)]">
            <div className="space-y-4">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <Activity className="h-24 w-24 text-primary opacity-50" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">7</p>
                  <p className="text-xs text-muted-foreground mt-1">Days Forecast</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">95%</p>
                  <p className="text-xs text-muted-foreground mt-1">Accuracy</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">3</p>
                  <p className="text-xs text-muted-foreground mt-1">Models</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-3 gap-6 mt-16"
      >
        <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
          <p className="text-3xl font-bold text-primary mb-2">7 Days</p>
          <p className="text-muted-foreground">Forecast Horizon</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
          <p className="text-3xl font-bold text-primary mb-2">Per Store</p>
          <p className="text-muted-foreground">& Product Granularity</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
          <p className="text-3xl font-bold text-primary mb-2">Plain Text</p>
          <p className="text-muted-foreground">Recommendations</p>
        </div>
      </motion.div>
    </section>
  );
};
