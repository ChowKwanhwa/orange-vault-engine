import { Building2, Gamepad2, Landmark, BrainCircuit, Landmark as RwaIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SolutionSection = () => {
  const { t } = useLanguage();
  return (
    <section className="section-card noise-overlay relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 md:py-16">
        {/* Header content section */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-primary uppercase tracking-widest text-sm font-bold mb-4 animate-fade-up">
            {t('solution.title')}
          </p>
          <h2 className="headline-large mb-4 animate-fade-up">
            {t('solution.subtitle')}
          </h2>
        </div>

        {/* Animation Container */}
        <div className="relative h-[400px] md:h-[500px] w-full mb-12 overflow-visible px-4 md:px-0">
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
                <span className="text-xl md:text-2xl font-bold font-display uppercase tracking-wider">{t('solution.banking')}</span>
                <span className="text-sm md:text-base text-muted-foreground">{t('solution.core')}</span>
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

          {/* Protocol Nodes - Adjusted positions for mobile */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 group cursor-pointer animate-fade-up">
            <div className="glass-card p-4 md:p-6 rounded-2xl border border-primary/30 flex items-center gap-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,109,1,0.2)]">
              <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              <div>
                <p className="font-bold text-lg md:text-xl">{t('solution.gamefi')}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">{t('solution.node_gamefi')}</p>
              </div>
            </div>
          </div>

          <div className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-20 group cursor-pointer animate-fade-up delay-100">
            <div className="glass-card p-4 md:p-6 rounded-2xl border border-primary/30 flex items-center gap-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,109,1,0.2)]">
              <Landmark className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              <div>
                <p className="font-bold text-lg md:text-xl">{t('solution.defi')}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">{t('solution.node_defi')}</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 group cursor-pointer animate-fade-up delay-200">
            <div className="glass-card p-4 md:p-6 rounded-2xl border border-primary/30 flex items-center gap-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,109,1,0.2)]">
              <BrainCircuit className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              <div>
                <p className="font-bold text-lg md:text-xl">{t('solution.ai')}</p>
              </div>
            </div>
          </div>

          <div className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-20 group cursor-pointer animate-fade-up delay-300">
            <div className="glass-card p-4 md:p-6 rounded-2xl border border-primary/30 flex items-center gap-4 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,109,1,0.2)]">
              <RwaIcon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              <div>
                <p className="font-bold text-lg md:text-xl">{t('solution.rwa')}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest">{t('solution.node_rwa')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
