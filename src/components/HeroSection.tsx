import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Diamond, Hexagon } from "lucide-react";
import heroEngine from "@/assets/hero-engine.jpg";
import logoHorizontal from "/mmbank_logo_horizontal.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="section-card noise-overlay relative overflow-hidden bg-background">
      {/* Top Header/Nav Bar */}
      <div className="absolute top-0 left-0 right-0 z-[50] px-6 pt-0 pb-4 flex justify-between items-center pointer-events-none mt-[-1rem] md:mt-[-2rem]">
        <div className="flex items-center pointer-events-auto">
          <img src={logoHorizontal} alt="MM Bank" className="h-32 md:h-48 w-auto filter drop-shadow-[0_0_20px_rgba(255,109,1,0.3)]" />
        </div>

        {/* Badge - Now aligned in header */}
        <div className="hidden lg:flex pointer-events-auto">
          <div className="glass-card px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
            <span className="text-xs md:text-sm text-primary font-bold tracking-[0.3em] uppercase">
              Protocol V1.0 - Active
            </span>
          </div>
        </div>

        <div className="glass-card rounded-xl overflow-hidden border border-primary/20 pointer-events-auto">
          <ConnectButton />
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] animate-float opacity-20">
          <Box className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute top-[60%] left-[5%] animate-float delay-300 opacity-10">
          <Diamond className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-[15%] right-[15%] animate-float delay-700 opacity-15">
          <Hexagon className="w-16 h-16 text-primary" />
        </div>
      </div>

      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px) scale(1.05)` }}
      >
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
        {/* Main Center Design with Interaction */}
        <div
          className="mb-12 animate-fade-up delay-100 flex flex-col items-center relative transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse-slow" />
          <h1 className="text-6xl md:text-9xl font-black font-display tracking-tighter leading-[0.85] uppercase italic">
            <span className="block text-foreground opacity-90 drop-shadow-lg">On-Chain</span>
            <span className="text-primary drop-shadow-[0_0_50px_rgba(255,109,1,0.6)]">
              Cashflow
            </span>
          </h1>
          <div className="h-px w-24 bg-primary/30 mt-6 hidden md:block" />
        </div>

        {/* Subheadline */}
        <p className="subheadline max-w-2xl mb-12 animate-fade-up delay-200 text-muted-foreground/80 font-medium leading-relaxed">
          The First Decentralized Bank Engine Built for <br className="hidden md:block" />
          <span className="text-foreground">Sustainable Yield</span> and Liquid Gold Markets.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up delay-300">
          <Button variant="hero" size="xl" className="group relative overflow-hidden px-8 py-6 rounded-xl border border-primary/30 shadow-[0_0_20px_rgba(255,109,1,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-500/10 group-hover:from-primary group-hover:to-orange-500 transition-all duration-300" />
            <span className="relative z-10 flex items-center gap-3 font-bold text-lg group-hover:text-white transition-colors">
              COMING SOON
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20 animate-fade-up delay-400">
          <div className="text-center group">
            <p className="text-3xl md:text-4xl font-bold text-foreground font-display transition-colors group-hover:text-primary">$847M+</p>
            <p className="text-[10px] md:text-xs text-muted-foreground mt-1 uppercase tracking-widest font-bold">Total Value Locked</p>
          </div>
          <div className="text-center group">
            <p className="text-3xl md:text-4xl font-bold text-primary font-display drop-shadow-[0_0_10px_rgba(255,109,1,0.3)]">24.7%</p>
            <p className="text-[10px] md:text-xs text-muted-foreground mt-1 uppercase tracking-widest font-bold">Avg. APY</p>
          </div>
          <div className="text-center group">
            <p className="text-3xl md:text-4xl font-bold text-foreground font-display transition-colors group-hover:text-primary">156K+</p>
            <p className="text-[10px] md:text-xs text-muted-foreground mt-1 uppercase tracking-widest font-bold">Active Users</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-50">
        <div className="w-6 h-10 rounded-full border border-muted-foreground/30 flex justify-center">
          <div className="w-1 h-2 bg-primary/60 rounded-full mt-2 animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
