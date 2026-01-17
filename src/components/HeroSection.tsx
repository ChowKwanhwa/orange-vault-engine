import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Box, Diamond, Hexagon, Languages } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logoHorizontal from "/mmbank_logo_horizontal.png";
import heroEngine from "@/assets/hero-engine.jpg";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Top Header/Nav Bar */}
      <div className="absolute top-0 left-0 right-0 z-[50] px-6 pt-0 pb-4 flex justify-between items-center pointer-events-none mt-[-1rem] md:mt-[-2rem]">
        {/* Left: Logo */}
        <div className="flex items-center pointer-events-auto">
          <img src={logoHorizontal} alt="MM Bank" className="h-32 md:h-48 w-auto filter drop-shadow-[0_0_20px_rgba(255,109,1,0.3)]" />
        </div>

        {/* Center: Language Switcher & Badge */}
        <div className="hidden lg:flex items-center gap-4 pointer-events-auto">
          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
            className="glass-card px-4 py-2 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/20 transition-all flex items-center gap-2 group"
          >
            <Languages className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-bold text-foreground">
              {language === 'en' ? 'EN' : '中文'}
            </span>
          </button>

          <div className="glass-card px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
            <span className="text-xs md:text-sm text-primary font-bold tracking-[0.3em] uppercase">
              {t('hero.protocol_active')}
            </span>
          </div>
        </div>

        {/* Right: Connect Button */}
        <div className="glass-card rounded-xl overflow-hidden border border-primary/20 pointer-events-auto scale-90 md:scale-100">
          <ConnectButton />
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] animate-float opacity-20">
          <Box className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute top-[60%] left-[5%] animate-float delay-300 opacity-10">
          <Diamond className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-[15%] right-[15%] animate-float delay-700 opacity-15">
          <Hexagon className="w-16 h-16 text-primary" />
        </div>
      </div>

      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px) scale(1.05)` }}
      >
        <img
          src={heroEngine}
          alt="MM Bank Engine"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/60" />
      </div>

      {/* Main Content with Parallax */}
      <div
        className="relative z-10 text-center max-w-5xl px-6 transition-transform duration-500 ease-out mt-12 md:mt-0"
        style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}
      >
        <div className="inline-block mb-6 animate-fade-up">
          <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs md:text-sm bg-primary/10 px-6 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
            {t('hero.decentralized_banking')}
          </span>
        </div>

        <h1 className="headline-massive mb-8 text-foreground mix-blend-difference drop-shadow-2xl">
          <span className="block text-primary animate-pulse-slow">{t('hero.onchain_cashflow')}</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16 animate-fade-up delay-200">
          <Button variant="hero" size="xl" className="group relative overflow-hidden px-8 py-6 rounded-xl border border-primary/30 shadow-[0_0_20px_rgba(255,109,1,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-500/10 group-hover:from-primary group-hover:to-orange-500 transition-all duration-300" />
            <span className="relative z-10 flex items-center gap-3 font-bold text-lg group-hover:text-white transition-colors">
              {t('hero.coming_soon')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto pt-12 border-t border-white/5 animate-fade-up delay-300 backdrop-blur-sm bg-black/5 rounded-3xl p-8">
          <div className="group transition-transform hover:scale-105">
            <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-widest mb-2">{t('hero.total_liquidity')}</p>
            <p className="text-2xl md:text-4xl font-bold font-display text-primary">$1.4B+</p>
          </div>
          <div className="group transition-transform hover:scale-105">
            <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-widest mb-2">{t('hero.active_users')}</p>
            <p className="text-2xl md:text-4xl font-bold font-display text-foreground">84.2K</p>
          </div>
          <div className="hidden md:block group transition-transform hover:scale-105">
            <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-widest mb-2">{t('hero.24h_volume')}</p>
            <p className="text-2xl md:text-4xl font-bold font-display text-foreground">$12.5M</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-50">
        <div className="w-6 h-10 rounded-full border border-muted-foreground/30 flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
