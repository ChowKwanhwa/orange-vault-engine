import { Infinity, Waves, Zap } from "lucide-react";

const problems = [
  {
    icon: Infinity,
    title: "Sustainability",
    description: "Traditional DeFi yields are unsustainable, driven by token inflation rather than real value creation.",
  },
  {
    icon: Waves,
    title: "Liquidity",
    description: "Fragmented liquidity across chains creates inefficient capital allocation and reduced returns.",
  },
  {
    icon: Zap,
    title: "Volatility",
    description: "Extreme market volatility erodes principal, making yield farming a high-risk endeavor.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-card noise-overlay relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            The Challenge
          </p>
          <h2 className="headline-large text-foreground">
            The Problem
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="glass-card p-8 rounded-3xl group border border-white/5 hover:border-primary/40 transition-all duration-700 animate-fade-up relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Icon Container with Heartbeat Pulse */}
              <div className="relative w-24 h-24 mb-10 items-center justify-center flex">
                {/* Background Glows */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-125 animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full animate-ping opacity-0 group-hover:opacity-20 transition-opacity duration-700" />

                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-background border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-primary/50 transition-all duration-500 overflow-hidden group-hover:scale-105">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <problem.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_0_12px_rgba(255,109,1,0.6)] animate-pulse-slow" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title with Scanning Shimmer */}
              <h3 className="text-2xl font-bold text-foreground mb-4 font-display uppercase tracking-widest relative group-hover:text-primary transition-colors duration-500">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base group-hover:text-foreground/90 transition-colors duration-500">
                {problem.description}
              </p>

              {/* Decorative Line with Draw Animation */}
              <div className="mt-8 relative h-[2px] w-full overflow-hidden bg-white/5 rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/50 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
