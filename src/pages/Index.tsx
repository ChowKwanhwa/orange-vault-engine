import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import StakingSection from "@/components/StakingSection";
import TiersSection from "@/components/TiersSection";

const Index = () => {
  return (
    <main className="relative bg-background">
      {/* Sticky Stacking Sections */}
      <div className="relative">
        {/* Each section stacks on scroll */}
        <div className="sticky top-0 z-[1]">
          <HeroSection />
        </div>
        
        <div className="sticky top-0 z-[2]">
          <ProblemSection />
        </div>
        
        <div className="sticky top-0 z-[3]">
          <SolutionSection />
        </div>
        
        <div className="sticky top-0 z-[4]">
          <TokenomicsSection />
        </div>
        
        <div className="sticky top-0 z-[5]">
          <StakingSection />
        </div>
        
        <div className="sticky top-0 z-[6]">
          <TiersSection />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-[7] bg-background border-t border-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold font-display text-primary">MM</span>
            <span className="text-2xl font-bold font-display text-foreground">BANK</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Docs</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Governance</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Audit</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Discord</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Twitter</a>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2025 MM Bank. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
