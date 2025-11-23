import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Loader2, AlertTriangle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "../ui/progress";

const riskData = [
  { date: "Jan 7", stockoutRisk: 15, overstockRisk: 5 },
  { date: "Jan 8", stockoutRisk: 25, overstockRisk: 10 },
  { date: "Jan 9", stockoutRisk: 45, overstockRisk: 8 },
  { date: "Jan 10", stockoutRisk: 60, overstockRisk: 5 },
  { date: "Jan 11", stockoutRisk: 75, overstockRisk: 3 },
  { date: "Jan 12", stockoutRisk: 55, overstockRisk: 15 },
  { date: "Jan 13", stockoutRisk: 30, overstockRisk: 25 },
];

export const InventoryRiskModel = () => {
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [product, setProduct] = useState("milk");
  const [store, setStore] = useState("store-12");

  const runRiskAnalysis = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <Card className="bg-card border-border p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Inventory Risk</h3>
        <p className="text-muted-foreground">Identify stockout and overstock risk for the coming week</p>
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
            onClick={runRiskAnalysis} 
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing Risk...
              </>
            ) : (
              "Evaluate Risk"
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
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-muted border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-foreground">Stockout Risk</h4>
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-destructive">High</span>
                  <span className="text-sm text-muted-foreground">75%</span>
                </div>
                <Progress value={75} className="h-3 bg-background [&>div]:bg-destructive" />
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Elevated risk on Jan 11 due to increased demand
              </p>
            </Card>

            <Card className="bg-muted border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-semibold text-foreground">Overstock Risk</h4>
                <CheckCircle className="h-5 w-5 text-chart-5" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-chart-5">Low</span>
                  <span className="text-sm text-muted-foreground">25%</span>
                </div>
                <Progress value={25} className="h-3 bg-background [&>div]:bg-chart-5" />
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Current inventory levels are well-balanced
              </p>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-4">
            <h4 className="text-sm font-semibold text-foreground mb-4">7-Day Risk Timeline</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={riskData}>
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
                <Bar dataKey="stockoutRisk" fill="hsl(var(--destructive))" name="Stockout Risk %" />
                <Bar dataKey="overstockRisk" fill="hsl(var(--chart-5))" name="Overstock Risk %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <Card className="bg-primary/10 border-primary/30 p-4">
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-primary" />
              Recommended Action
            </h4>
            <p className="text-foreground">
              We recommend ordering <span className="font-semibold text-primary">120 additional units</span> of 
              Milk 1L for Store 12 to maintain a <span className="font-semibold text-primary">95% service level</span> next week. 
              Place the order by Jan 8 to ensure stock arrives before peak demand on Jan 11.
            </p>
          </Card>
        </motion.div>
      )}
    </Card>
  );
};
