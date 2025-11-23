import { Zap } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">Smart-Stock</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("overview")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Overview
          </button>
          <button
            onClick={() => scrollToSection("models")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Try the Models
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-xs text-muted-foreground">
            Models: <span className="text-primary">Online</span>
          </span>
        </div>
      </div>
    </nav>
  );
};
