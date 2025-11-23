import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from "recharts";
import { Loader2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

const volatilityData = [
  { date: "Oct 1", demand: 120, volatility: 5 },
  { date: "Oct 15", demand: 125, volatility: 8 },
  { date: "Oct 30", demand: 130, volatility: 12 },
  { date: "Nov 15", demand: 145, volatility: 18 },
  { date: "Nov 24", demand: 280, volatility: 85, event: "Black Friday" },
  { date: "Nov 30", demand: 135, volatility: 15 },
  { date: "Dec 10", demand: 140, volatility: 10 },
  { date: "Dec 20", demand: 195, volatility: 45, event: "Holiday Rush" },
  { date: "Dec 31", demand: 160, volatility: 25 },
];

export const VolatilityModel = () => {
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [timeRange, setTimeRange] = useState("90");

  const runVolatilityAnalysis = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <Card className="bg-card border-border p-6">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Volatility & Demand Spikes</h3>
        <p className="text-muted-foreground">See when demand becomes unusually unstable</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Time Range</label>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="bg-background border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="180">Last 180 days</SelectItem>
              <SelectItem value="365">Last 365 days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button 
            onClick={runVolatilityAnalysis} 
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing Volatility...
              </>
            ) : (
              "Analyze Volatility"
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
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-foreground">Volatility Timeline</h4>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                  Promotion
                </Badge>
                <Badge variant="outline" className="bg-destructive/20 text-destructive border-destructive/30">
                  Holiday
                </Badge>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={volatilityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--popover))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-popover border border-border rounded-lg p-3">
                          <p className="text-foreground font-semibold">{data.date}</p>
                          <p className="text-muted-foreground">Demand: {data.demand} units</p>
                          <p className="text-primary">Volatility: {data.volatility}%</p>
                          {data.event && (
                            <Badge className="mt-2 bg-destructive/20 text-destructive border-destructive/30">
                              {data.event}
                            </Badge>
                          )}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="demand" 
                  stroke="hsl(var(--foreground))" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="volatility" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={(props) => {
                    const data = volatilityData[props.index];
                    if (data.event) {
                      return (
                        <circle
                          cx={props.cx}
                          cy={props.cy}
                          r={6}
                          fill="hsl(var(--destructive))"
                          stroke="hsl(var(--background))"
                          strokeWidth={2}
                        />
                      );
                    }
                    return null;
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-muted border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Peak Volatility</p>
              <p className="text-2xl font-bold text-destructive">85%</p>
              <p className="text-xs text-muted-foreground mt-1">Black Friday</p>
            </Card>
            <Card className="bg-muted border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Avg Volatility</p>
              <p className="text-2xl font-bold text-primary">22%</p>
              <p className="text-xs text-muted-foreground mt-1">Last 90 days</p>
            </Card>
            <Card className="bg-muted border-border p-4">
              <p className="text-sm text-muted-foreground mb-1">Spike Events</p>
              <p className="text-2xl font-bold text-primary">2</p>
              <p className="text-xs text-muted-foreground mt-1">Detected</p>
            </Card>
          </div>

          <Card className="bg-primary/10 border-primary/30 p-4">
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Key Insights
            </h4>
            <p className="text-foreground mb-3">
              This product shows <span className="font-semibold text-primary">strong volatility</span> around 
              major holidays and promotional events. Peak spikes occurred during{" "}
              <span className="font-semibold text-destructive">Black Friday</span> (+133% vs baseline) and 
              the <span className="font-semibold text-destructive">Holiday Rush</span> (+45% vs baseline).
            </p>
            <p className="text-foreground">
              <span className="font-semibold text-primary">Risk is elevated</span> when promotions coincide 
              with seasonal events. We recommend increasing safety stock by 50% during these periods.
            </p>
          </Card>
        </motion.div>
      )}
    </Card>
  );
};
