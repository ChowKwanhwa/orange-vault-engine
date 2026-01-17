import { Leaf, Droplets, TrendingUp } from "lucide-react";

const problems = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Traditional DeFi yields are unsustainable, driven by token inflation rather than real value creation.",
  },
  {
    icon: Droplets,
    title: "Liquidity",
    description: "Fragmented liquidity across chains creates inefficient capital allocation and reduced returns.",
  },
  {
    icon: TrendingUp,
    title: "Volatility",
    description: "Extreme market volatility erodes principal, making yield farming a high-risk endeavor.",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-card noise-overlay relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24">
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
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="glass-card p-8 rounded-3xl group hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <problem.icon className="w-8 h-8 icon-orange-stroke" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-4 font-display uppercase tracking-wide">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
