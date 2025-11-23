import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, ComposedChart } from "recharts";
import { Loader2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const mockData = [
  { date: "Jan 1", historical: 120, forecast: null, upper: null, lower: null },
  { date: "Jan 2", historical: 135, forecast: null, upper: null, lower: null },
  { date: "Jan 3", historical: 128, forecast: null, upper: null, lower: null },
  { date: "Jan 4", historical: 142, forecast: null, upper: null, lower: null },
  { date: "Jan 5", historical: 138, forecast: null, upper: null, lower: null },
  { date: "Jan 6", historical: 145, forecast: null, upper: null, lower: null },
  { date: "Jan 7", historical: 155, forecast: 158, upper: 170, lower: 146 },
  { date: "Jan 8", historical: null, forecast: 162, upper: 175, lower: 149 },
  { date: "Jan 9", historical: null, forecast: 168, upper: 182, lower: 154 },
  { date: "Jan 10", historical: null, forecast: 172, upper: 188, lower: 156 },
  { date: "Jan 11", historical: null, forecast: 178, upper: 195, lower: 161 },
  { date: "Jan 12", historical: null, forecast: 185, upper: 202, lower: 168 },
  { date: "Jan 13", historical: null, forecast: 190, upper: 208, lower: 172 },
];

export const DemandForecastModel = () => {
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [product, setProduct] = useState("milk");
  const [store, setStore] = useState("store-12");

  const runForecast = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <Card className="bg-card border-border p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Demand Forecast</h3>
        <p className="text-muted-foreground">Predict units sold over the next 7 days</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Product</label>
          <Select value={product} onValueChange={setProduct}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="milk">Milk 1L</SelectItem>
              <SelectItem value="bread">Bread</SelectItem>
              <SelectItem value="eggs">Eggs (Dozen)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Store</label>
          <Select value={store} onValueChange={setStore}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="store-12">Store 12</SelectItem>
              <SelectItem value="store-5">Store 5</SelectItem>
              <SelectItem value="store-23">Store 23</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button 
            onClick={runForecast} 
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Running Model...
              </>
            ) : (
              "Run Forecast"
            )}
          </Button>
        </div>
      </div>

      {showResults && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-muted rounded-lg p-4">
            <h4 className="text-sm font-semibold text-foreground mb-4">7-Day Forecast</h4>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--popover))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="upper"
                  stroke="none"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.1}
                />
                <Area
                  type="monotone"
                  dataKey="lower"
                  stroke="none"
                  fill="hsl(var(--background))"
                  fillOpacity={1}
                />
                <Line 
                  type="monotone" 
                  dataKey="historical" 
                  stroke="hsl(var(--foreground))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--foreground))" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-muted border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Expected Demand (7 days)</p>
              <p className="text-2xl font-bold text-primary">1,213 units</p>
            </Card>
            <Card className="bg-muted border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Change vs Last Week</p>
              <p className="text-2xl font-bold text-primary flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                +15%
              </p>
            </Card>
            <Card className="bg-muted border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Model Confidence</p>
              <p className="text-2xl font-bold text-primary">High</p>
            </Card>
          </div>

          <Card className="bg-primary/10 border-primary/30 p-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Plain-Language Summary</h4>
            <p className="text-foreground">
              Demand for <span className="font-semibold text-primary">Milk 1L</span> at{" "}
              <span className="font-semibold text-primary">Store 12</span> is expected to{" "}
              <span className="font-semibold text-primary">increase by 15%</span> next week, 
              mainly due to weekend shopping patterns and recent promotional activity. 
              We recommend maintaining higher stock levels to meet anticipated demand.
            </p>
          </Card>
        </motion.div>
      )}
    </Card>
  );
};
