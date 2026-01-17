import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowRight, Shield, Clock } from "lucide-react";

const stakingPeriods = [
  { days: 1, apy: 12.4, label: "1 Day" },
  { days: 15, apy: 18.7, label: "15 Days" },
  { days: 30, apy: 24.2, label: "30 Days" },
  { days: 60, apy: 32.8, label: "60 Days" },
];

const StakingSection = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(30);
  const [amount, setAmount] = useState("1000");

  const currentApy = stakingPeriods.find(p => p.days === selectedPeriod)?.apy || 24.2;
  const estimatedReward = (parseFloat(amount || "0") * currentApy / 100 * selectedPeriod / 365).toFixed(2);

  return (
    <section className="section-card noise-overlay relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            Yield Engine
          </p>
          <h2 className="headline-large text-foreground">
            Stake & Earn
          </h2>
        </div>

        {/* Staking Dashboard */}
        <div className="glass-card p-8 md:p-12 rounded-3xl max-w-2xl w-full border border-primary/20">
          {/* Period Selection */}
          <div className="mb-8">
            <label className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block">
              Lock Period
            </label>
            <div className="grid grid-cols-4 gap-3">
              {stakingPeriods.map((period) => (
                <button
                  key={period.days}
                  onClick={() => setSelectedPeriod(period.days)}
                  className={`py-4 px-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedPeriod === period.days
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <span className="block text-lg">{period.label}</span>
                  <span className={`text-xs ${selectedPeriod === period.days ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {period.apy}% APY
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Amount Input */}
          <div className="mb-8">
            <label className="text-sm text-muted-foreground uppercase tracking-wider mb-4 block">
              Stake Amount
            </label>
            <div className="relative">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
                className="w-full bg-secondary/50 border border-border rounded-xl px-6 py-5 text-2xl font-bold focus:outline-none focus:border-primary transition-colors"
                placeholder="0.00"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-muted-foreground font-semibold">USDT</span>
                <button className="text-primary text-sm font-semibold hover:underline">MAX</button>
              </div>
            </div>
          </div>

          {/* Reward Preview */}
          <div className="bg-secondary/30 rounded-2xl p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted-foreground">Estimated Reward</span>
              <span className="text-2xl font-bold text-primary">${estimatedReward}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Current APY</span>
              <span className="text-foreground font-semibold">{currentApy}%</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Audited Smart Contracts</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>Instant Unstake Available</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="xl" className="w-full group">
            <Wallet className="w-5 h-5" />
            Connect Wallet to Stake
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StakingSection;
