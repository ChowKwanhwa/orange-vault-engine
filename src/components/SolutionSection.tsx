import { Gamepad2, Coins, Brain, Building2 } from "lucide-react";

const protocols = [
  { id: "gamefi", icon: Gamepad2, label: "GameFi", position: "top-0 left-1/2 -translate-x-1/2" },
  { id: "defi", icon: Coins, label: "DeFi", position: "top-1/2 right-0 -translate-y-1/2" },
  { id: "ai", icon: Brain, label: "AI Protocols", position: "bottom-0 left-1/2 -translate-x-1/2" },
];

const SolutionSection = () => {
  return (
    <section className="section-card noise-overlay relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <p className="text-primary uppercase tracking-widest text-xs md:text-sm font-semibold mb-2 md:mb-4">
            The Architecture
          </p>
          <h2 className="headline-large text-foreground">
            Our Solution
          </h2>
        </div>

        {/* Architecture Diagram */}
        <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[16/10] max-h-[50vh] md:max-h-[60vh]">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              {/* Multi-layered pulse effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-150 animate-pulse" />
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-125 animate-ping opacity-20" />
              <div className="absolute inset-0 rounded-full border border-primary/50 scale-150 animate-pulse opacity-10" />

              {/* Main hub */}
              <div className="glass-card w-48 h-48 md:w-64 md:h-64 rounded-full flex flex-col items-center justify-center border-2 border-primary/40 animate-pulse-glow relative z-10 shadow-[0_0_50px_rgba(255,109,1,0.2)]">
                <Building2 className="w-12 h-12 md:w-16 md:h-16 text-primary mb-3 animate-bounce-slow" />
                <span className="text-xl md:text-2xl font-bold font-display uppercase tracking-wider">Banking</span>
                <span className="text-sm md:text-base text-muted-foreground">Core</span>
              </div>
            </div>
          </div>

          {/* Connection Lines with Data Flow Animation */}
          <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 400 300">
            <defs>
              <animate id="line-flow" attributeName="stroke-dashoffset" from="24" to="0" dur="1.5s" repeatCount="indefinite" />
            </defs>
            {/* GameFi Line */}
            <line x1="200" y1="150" x2="200" y2="40" className="stroke-primary/40" strokeWidth="2" strokeDasharray="8,4">
              <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
            </line>
            {/* DeFi Line */}
            <line x1="200" y1="150" x2="360" y2="150" className="stroke-primary/40" strokeWidth="2" strokeDasharray="8,4">
              <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
            </line>
            {/* AI Line */}
            <line x1="200" y1="150" x2="200" y2="260" className="stroke-primary/40" strokeWidth="2" strokeDasharray="8,4">
              <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
            </line>
            {/* RWA Line */}
            <line x1="200" y1="150" x2="40" y2="150" className="stroke-primary/40" strokeWidth="2" strokeDasharray="8,4">
              <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
            </line>
          </svg>

          {/* Protocol Nodes with Hover scaling */}
          {/* GameFi - Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <div className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all group animate-fade-up">
              <Gamepad2 className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-125 transition-transform duration-500" />
              <span className="text-sm font-semibold uppercase tracking-wider">GameFi</span>
            </div>
          </div>

          {/* DeFi - Right */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-20">
            <div className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all group animate-fade-up">
              <Coins className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-125 transition-transform duration-500" />
              <span className="text-sm font-semibold uppercase tracking-wider">DeFi</span>
            </div>
          </div>

          {/* AI - Bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
            <div className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all group animate-fade-up">
              <Brain className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-125 transition-transform duration-500" />
              <span className="text-sm font-semibold uppercase tracking-wider">AI Protocols</span>
            </div>
          </div>

          {/* RWA - Left */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20">
            <div className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all group animate-fade-up">
              <Building2 className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-125 transition-transform duration-500" />
              <span className="text-sm font-semibold uppercase tracking-wider">RWA</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-muted-foreground max-w-2xl mt-12 text-lg">
          Our Banking Core aggregates yield from multiple protocol verticals,
          optimizing allocation in real-time through AI-driven strategies.
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;
