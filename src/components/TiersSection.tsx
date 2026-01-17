import { Crown, Star, Zap, Trophy, Gem, Shield, Award, Target, Flame } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TiersSection = () => {
  const { t } = useLanguage();

  const tiers = [
    { rank: "S9+", label: t('tiers.legendary'), icon: Crown, progress: 100, rewards: `50% ${t('tiers.fee_share')}`, members: "12" },
    { rank: "S8", label: t('tiers.mythic'), icon: Trophy, progress: 92, rewards: `40% ${t('tiers.fee_share')}`, members: "47" },
    { rank: "S7", label: t('tiers.epic'), icon: Gem, progress: 84, rewards: `32% ${t('tiers.fee_share')}`, members: "156" },
    { rank: "S6", label: t('tiers.diamond'), icon: Star, progress: 76, rewards: `25% ${t('tiers.fee_share')}`, members: "423" },
    { rank: "S5", label: t('tiers.platinum'), icon: Shield, progress: 68, rewards: `20% ${t('tiers.fee_share')}`, members: "1.2K" },
    { rank: "S4", label: t('tiers.gold'), icon: Award, progress: 60, rewards: `15% ${t('tiers.fee_share')}`, members: "3.4K" },
    { rank: "S3", label: t('tiers.silver'), icon: Target, progress: 45, rewards: `10% ${t('tiers.fee_share')}`, members: "8.7K" },
    { rank: "S2", label: t('tiers.bronze'), icon: Flame, progress: 30, rewards: `5% ${t('tiers.fee_share')}`, members: "24K" },
    { rank: "S1", label: t('tiers.starter'), icon: Zap, progress: 15, rewards: `2% ${t('tiers.fee_share')}`, members: "118K" },
  ];

  return (
    <section className="section-card noise-overlay relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            {t('tiers.subtitle')}
          </p>
          <h2 className="headline-large text-foreground">
            {t('tiers.title')}
          </h2>
        </div>

        {/* Tiers List */}
        <div className="w-full max-w-3xl space-y-4">
          {tiers.map((tier, index) => (
            <div
              key={tier.rank}
              className="glass-card p-5 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-5">
                {/* Rank Badge */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${index === 0
                  ? "bg-gradient-to-br from-primary to-amber-500 shadow-glow"
                  : index < 3
                    ? "bg-primary/20 border border-primary/30"
                    : "bg-secondary"
                  }`}>
                  <tier.icon className={`w-7 h-7 ${index === 0 ? "text-white" : "text-primary"}`} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl font-bold font-display">{tier.rank}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{tier.label}</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 progress-orange rounded-full transition-all duration-500"
                      style={{ width: `${tier.progress}%` }}
                    />
                  </div>
                </div>

                {/* Rewards */}
                <div className="text-right flex-shrink-0 hidden sm:block">
                  <p className="text-primary font-semibold">{tier.rewards}</p>
                  <p className="text-sm text-muted-foreground">{tier.members} {t('tiers.members')}</p>
                </div>

                {/* Mobile Rewards */}
                <div className="text-right flex-shrink-0 sm:hidden">
                  <p className="text-primary font-semibold text-sm">{tier.rewards}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <p className="text-center text-muted-foreground mt-12 max-w-lg">
          {t('tiers.disclaimer')}
        </p>
      </div>
    </section>
  );
};

export default TiersSection;
