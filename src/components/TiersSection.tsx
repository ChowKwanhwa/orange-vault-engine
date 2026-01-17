import { Crown, Star, Zap, Trophy, Gem, Shield, Award, Target, Flame } from "lucide-react";

const tiers = [
  { rank: "S9+", label: "Legendary", icon: Crown, progress: 100, rewards: "50% Fee Share", members: "12" },
  { rank: "S8", label: "Mythic", icon: Trophy, progress: 92, rewards: "40% Fee Share", members: "47" },
  { rank: "S7", label: "Epic", icon: Gem, progress: 84, rewards: "32% Fee Share", members: "156" },
  { rank: "S6", label: "Diamond", icon: Star, progress: 76, rewards: "25% Fee Share", members: "423" },
  { rank: "S5", label: "Platinum", icon: Shield, progress: 68, rewards: "20% Fee Share", members: "1.2K" },
  { rank: "S4", label: "Gold", icon: Award, progress: 60, rewards: "15% Fee Share", members: "3.4K" },
  { rank: "S3", label: "Silver", icon: Target, progress: 45, rewards: "10% Fee Share", members: "8.7K" },
  { rank: "S2", label: "Bronze", icon: Flame, progress: 30, rewards: "5% Fee Share", members: "24K" },
  { rank: "S1", label: "Starter", icon: Zap, progress: 15, rewards: "2% Fee Share", members: "118K" },
];

const TiersSection = () => {
  return (
    <section className="section-card noise-overlay relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 md:py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-4">
            Membership Ranks
          </p>
          <h2 className="headline-large text-foreground">
            Dynamic Tiers
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
                  <p className="text-sm text-muted-foreground">{tier.members} members</p>
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
          Your tier is determined by your staked FBT amount and platform activity.
          Higher tiers unlock exclusive yields and governance rights.
        </p>
      </div>
    </section>
  );
};

export default TiersSection;
