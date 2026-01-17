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
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
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
          <div className="glass-card p-8 rounded-3xl border border-primary/20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold font-display text-primary">FBT</h3>
                <p className="text-muted-foreground text-sm">Foundation Token</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
            </div>

            {/* Price Chart */}
            <div className="bg-secondary/50 rounded-2xl p-4 mb-6">
              <div className="flex justify-between text-sm mb-4">
                <span className="text-muted-foreground">FBT/USDT</span>
                <span className="text-primary font-semibold">$2.847</span>
              </div>
              <svg viewBox="0 0 300 100" className="w-full h-24">
                {/* Gradient fill */}
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(25 100% 50%)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(25 100% 50%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area fill */}
                <path
                  d={`${pathData} L 300 100 L 0 100 Z`}
                  fill="url(#chartGradient)"
                />
                {/* Line */}
                <path
                  d={pathData}
                  fill="none"
                  className="neon-chart-line"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>24h</span>
                <span className="text-green-500">+12.4%</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/30 rounded-xl p-4">
                <p className="text-muted-foreground text-xs uppercase mb-1">Market Cap</p>
                <p className="text-lg font-bold">$284.7M</p>
              </div>
              <div className="bg-secondary/30 rounded-xl p-4">
                <p className="text-muted-foreground text-xs uppercase mb-1">24h Volume</p>
                <p className="text-lg font-bold">$18.2M</p>
              </div>
            </div>
          </div>

          {/* USDT Vault Card */}
          <div className="glass-card p-8 rounded-3xl border border-border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold font-display text-foreground">USDT</h3>
                <p className="text-muted-foreground text-sm">Stable Vault</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center">
                <DollarSign className="w-7 h-7 text-green-500" />
              </div>
            </div>

            {/* TVL Display */}
            <div className="bg-secondary/50 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">Total Value Locked</span>
              </div>
              <p className="text-4xl font-bold font-display text-foreground">$562.3M</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-green-500 text-sm font-semibold">+$12.4M</span>
                <span className="text-muted-foreground text-sm">past 24h</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/30 rounded-xl p-4">
                <p className="text-muted-foreground text-xs uppercase mb-1">Stable APY</p>
                <p className="text-lg font-bold text-primary">8.4%</p>
              </div>
              <div className="bg-secondary/30 rounded-xl p-4">
                <p className="text-muted-foreground text-xs uppercase mb-1">Depositors</p>
                <p className="text-lg font-bold">48.2K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
