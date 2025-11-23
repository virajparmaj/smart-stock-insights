import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { DemandForecastModel } from "./models/DemandForecastModel";
import { InventoryRiskModel } from "./models/InventoryRiskModel";
import { VolatilityModel } from "./models/VolatilityModel";
import { motion } from "framer-motion";

export const ModelPlayground = () => {
  const [dataset, setDataset] = useState("all-stores");

  return (
    <section id="models" className="container mx-auto px-4 py-20 bg-gradient-to-b from-background to-muted/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Interactive Model Playground
          </h2>
          <p className="text-lg text-muted-foreground">
            Select sample data and run models to see Smart-Stock in action
          </p>
        </div>

        <Card className="bg-card border-border mb-8 p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <label className="text-sm text-muted-foreground whitespace-nowrap">
                Sample Dataset:
              </label>
              <Select value={dataset} onValueChange={setDataset}>
                <SelectTrigger className="w-full sm:w-[200px] bg-background border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="all-stores">All Stores</SelectItem>
                  <SelectItem value="single-store">Single Store</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-xs text-muted-foreground">
              Choose a sample and run the models below
            </p>
          </div>
        </Card>

        <Tabs defaultValue="forecast" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-muted h-auto p-1">
            <TabsTrigger 
              value="forecast"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Demand Forecast
            </TabsTrigger>
            <TabsTrigger 
              value="risk"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Inventory Risk
            </TabsTrigger>
            <TabsTrigger 
              value="volatility"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Volatility & Spikes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="forecast" className="mt-6">
            <DemandForecastModel />
          </TabsContent>

          <TabsContent value="risk" className="mt-6">
            <InventoryRiskModel />
          </TabsContent>

          <TabsContent value="volatility" className="mt-6">
            <VolatilityModel />
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
};
