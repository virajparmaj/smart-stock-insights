import { Card } from "./ui/card";
import { TrendingUp, Shield, Activity } from "lucide-react";
import { motion } from "framer-motion";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="container mx-auto px-4 py-20 bg-gradient-to-b from-muted/20 to-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our models use advanced time-series analysis to help you make smarter inventory decisions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border p-6 h-full hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Forecasting Engine
              </h3>
              <p className="text-muted-foreground mb-4">
                Predicts future demand with high accuracy
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Analyzes past sales, prices, promotions, and seasonal patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Generates 7-day forecasts for each product and store</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Helps you plan optimal stock levels and prevent stockouts</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border p-6 h-full hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Risk Engine
              </h3>
              <p className="text-muted-foreground mb-4">
                Identifies potential inventory problems before they happen
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Calculates stockout and overstock probabilities daily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Compares forecasted demand against current inventory levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Provides actionable recommendations to maintain service levels</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border p-6 h-full hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Volatility Engine
              </h3>
              <p className="text-muted-foreground mb-4">
                Detects demand instability and unusual patterns
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tracks demand variability over time to spot spikes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Correlates spikes with holidays, promotions, and weather events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Helps you prepare for high-risk periods with increased safety stock</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-muted border-border p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Built for Non-Technical Users
            </h3>
            <p className="text-muted-foreground">
              Every prediction comes with plain-language explanations, visual charts, and 
              actionable recommendations. No statistical jargon—just clear insights that 
              help you make better inventory decisions.
            </p>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};
