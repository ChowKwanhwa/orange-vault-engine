import { LineChart, PieChart, TrendingUp, DollarSign, Activity, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TokenomicsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-card noise-overlay relative overflow-hidden bg-background">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            {t('tokenomics.subtitle')}
          </p>
          <h2 className="headline-large text-foreground">
            {t('tokenomics.title')}
          </h2>
        </div>

        {/* Token Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* FBT Token Card */}
          <div className="glass-card p-6 md:p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden">
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div>
                <h3 className="text-3xl font-bold font-display text-primary group-hover:scale-105 transition-transform origin-left">FBT</h3>
                <p className="text-muted-foreground text-sm">{t('tokenomics.foundation_token')}</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-widest">{t('tokenomics.24h_perf')}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-primary font-display animate-shimmer">+$12.4M</span>
                    <span className="text-emerald-400 text-sm font-bold flex items-center bg-emerald-400/10 px-2 py-0.5 rounded-full">+12.4%</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-widest">{t('tokenomics.market_cap')}</p>
                  <p className="font-bold text-lg">$1.24B</p>
                </div>
              </div>

              {/* Chart Animation */}
              <div className="h-32 w-full relative group/chart overflow-hidden rounded-2xl bg-primary/5 border border-primary/10">
                <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 100 40">
                  <path
                    d="M0 35 Q 20 30, 40 15 T 80 10 T 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-primary animate-draw-line"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                  />
                  <path
                    d="M0 35 Q 20 30, 40 15 T 80 10 T 100 5 V 40 H 0 Z"
                    className="text-primary/10 animate-pulse-slow"
                    fill="currentColor"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-chart-scan" />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Live Data</span>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{t('hero.24h_volume')}</p>
                  <p className="font-bold text-primary">$42.8M</p>
                </div>
              </div>
            </div>
          </div>

          {/* USDT Vault Card */}
          <div className="glass-card p-6 md:p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <DollarSign className="w-32 h-32 text-primary animate-bounce-slow" />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display">USDT Vault</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{t('tokenomics.stable_vault')}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-widest">{t('tokenomics.total_value')}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-foreground font-display animate-shimmer scale-100 group-hover:scale-105 transition-transform origin-left">
                      $847.2M
                    </span>
                    <div className="flex flex-col">
                      <span className="text-primary text-[10px] font-bold uppercase tracking-tighter animate-pulse-slow">
                        {t('tokenomics.24h_inflow')}
                      </span>
                      <span className="text-emerald-400 text-xs font-bold font-mono">+$8.4M</span>
                    </div>
                  </div>
                </div>
                <div className="text-right bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-widest font-bold">{t('tokenomics.stable_apy')}</p>
                  <p className="font-black text-2xl text-primary drop-shadow-[0_0_10px_rgba(255,109,1,0.2)]">12.4%</p>
                </div>
              </div>

              {/* Progress visual */}
              <div className="relative h-4 bg-secondary/50 rounded-full overflow-hidden border border-primary/5">
                <div className="absolute inset-y-0 left-0 progress-orange w-[75%] animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{t('tokenomics.depositors')}</p>
                    <p className="font-bold text-sm">24,842</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Insurance</p>
                    <p className="font-bold text-sm text-emerald-400">$20M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
