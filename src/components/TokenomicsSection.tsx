import { TrendingUp, Lock, DollarSign } from "lucide-react";

// Simulated price data for chart
const priceData = [
  { x: 0, y: 45 }, { x: 10, y: 52 }, { x: 20, y: 48 }, { x: 30, y: 61 },
  { x: 40, y: 55 }, { x: 50, y: 72 }, { x: 60, y: 68 }, { x: 70, y: 78 },
  { x: 80, y: 74 }, { x: 90, y: 85 }, { x: 100, y: 82 }
];

const TokenomicsSection = () => {
  // Create SVG path from data
  const pathData = priceData.map((point, i) =>
    `${i === 0 ? 'M' : 'L'} ${point.x * 3} ${100 - point.y}`
  ).join(' ');

  return (
    <section className="section-card noise-overlay relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            Dual Asset Model
          </p>
          <h2 className="headline-large text-foreground">
            Tokenomics
          </h2>
        </div>

        {/* Token Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* FBT Token Card */}
          <div className="glass-card p-8 rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div>
                <h3 className="text-3xl font-bold font-display text-primary group-hover:scale-105 transition-transform origin-left">FBT</h3>
                <p className="text-muted-foreground text-sm">Foundation Token</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
            </div>

            {/* Price Chart */}
            <div className="bg-secondary/50 rounded-2xl p-4 mb-6 relative z-10 border border-white/5 group-hover:border-primary/20 transition-colors">
              <div className="flex justify-between text-sm mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">FBT/USDT</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                </div>
                <span className="text-primary font-semibold">$2.847</span>
              </div>
              <div className="relative">
                <svg viewBox="0 0 300 100" className="w-full h-24 overflow-visible">
                  {/* Gradient fill */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(25 100% 50%)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="hsl(25 100% 50%)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Area fill */}
                  <path
                    d={`${pathData} L 300 100 L 0 100 Z`}
                    fill="url(#chartGradient)"
                    className="animate-pulse-slow"
                  />
                  {/* Line with scanning animation */}
                  <path
                    d={pathData}
                    fill="none"
                    stroke="hsl(25 100% 50%)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    className="animate-draw-line shadow-lg"
                  />
                </svg>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>24h Performance</span>
                <span className="text-green-500 font-bold group-hover:scale-110 transition-transform">+12.4%</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-secondary/30 rounded-xl p-4 hover:bg-secondary/50 transition-colors">
                <p className="text-muted-foreground text-xs uppercase mb-1">Market Cap</p>
                <p className="text-lg font-bold group-hover:text-primary transition-colors">$284.7M</p>
              </div>
              <div className="bg-secondary/30 rounded-xl p-4 hover:bg-secondary/50 transition-colors">
                <p className="text-muted-foreground text-xs uppercase mb-1">24h Volume</p>
                <p className="text-lg font-bold group-hover:text-primary transition-colors">$18.2M</p>
              </div>
            </div>
          </div>

          {/* USDT Vault Card */}
          <div className="glass-card p-8 rounded-3xl border border-border hover:border-green-500/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div>
                <h3 className="text-3xl font-bold font-display text-foreground group-hover:scale-105 transition-transform origin-left">USDT</h3>
                <p className="text-muted-foreground text-sm">Stable Vault</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center animate-bounce-slow">
                <DollarSign className="w-7 h-7 text-green-500" />
              </div>
            </div>

            {/* TVL Display */}
            <div className="bg-secondary/50 rounded-2xl p-6 mb-6 relative z-10 border border-white/5 group-hover:border-green-500/20 transition-colors shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-muted-foreground animate-pulse" />
                <span className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">Total Value Locked</span>
              </div>
              <p className="text-4xl md:text-5xl font-bold font-display text-foreground animate-pulse-slow">$562.3M</p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
                <span className="text-green-500 text-sm font-bold">+$12.4M</span>
                <span className="text-muted-foreground text-xs">last 24h inflow</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-secondary/30 rounded-xl p-4 hover:bg-secondary/50 transition-colors">
                <p className="text-muted-foreground text-xs uppercase mb-1">Stable APY</p>
                <p className="text-lg font-bold text-primary group-hover:scale-110 transition-transform origin-left">8.4%</p>
              </div>
              <div className="bg-secondary/30 rounded-xl p-4 hover:bg-secondary/50 transition-colors">
                <p className="text-muted-foreground text-xs uppercase mb-1">Depositors</p>
                <p className="text-lg font-bold group-hover:text-green-500 transition-colors">48.2K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
