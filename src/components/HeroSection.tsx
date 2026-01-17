import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroEngine from "@/assets/hero-engine.jpg";

const HeroSection = () => {
  return (
    <section className="section-card noise-overlay relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroEngine}
          alt="MM Bank Engine"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/60" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40 z-[2]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Badge */}
        <div className="glass-card px-4 py-2 rounded-full mb-8 animate-fade-up">
          <span className="text-sm text-muted-foreground tracking-wider uppercase">
            On-Chain Banking Protocol
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="headline-massive text-foreground mb-6 animate-fade-up delay-100">
          <span className="block">MM</span>
          <span className="text-primary">BANK</span>
        </h1>

        {/* Subheadline */}
        <p className="subheadline max-w-2xl mb-12 animate-fade-up delay-200">
          The First On-Chain Bank for Sustainable Yield
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up delay-300">
          <Button variant="hero" size="xl" className="group">
            Enter App
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-12 mt-20 animate-fade-up delay-400">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-foreground font-display">$847M+</p>
            <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">Total Value Locked</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-primary font-display">24.7%</p>
            <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">Avg. APY</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-foreground font-display">156K+</p>
            <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">Active Users</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
