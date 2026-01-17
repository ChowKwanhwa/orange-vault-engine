import { ShieldAlert, Droplets, LineChart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ProblemSection = () => {
  const { t } = useLanguage();
  const problems = [
    {
      icon: ShieldAlert,
      title: t('problem.sustainability'),
      description: t('problem.sustainability_desc'),
      color: "text-red-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(248,113,113,0.3)]"
    },
    {
      icon: Droplets,
      title: t('problem.liquidity'),
      description: t('problem.liquidity_desc'),
      color: "text-blue-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
    },
    {
      icon: LineChart,
      title: t('problem.volatility'),
      description: t('problem.volatility_desc'),
      color: "text-amber-400",
      glow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
    }
  ];

  return (
    <section className="section-card noise-overlay relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            {t('problem.challenge')}
          </p>
          <h2 className="headline-large text-foreground">
            {t('problem.title')}
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
