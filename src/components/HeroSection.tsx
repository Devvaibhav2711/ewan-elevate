import { useEffect, useState } from "react";
import { ArrowRight, Globe, Languages, Mic } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const typingTexts = ["Translation", "Interpretation", "Voiceovers", "Localization"];

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[textIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === current) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(
        isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
      );
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, textIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-2 h-2 rounded-full bg-gold/40 animate-float" />
        <div className="absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-gold/30 animate-float-delayed" />
        <div className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-gold/50 animate-float" />
        <div className="absolute top-2/3 right-[25%] w-2 h-2 rounded-full bg-gold-light/30 animate-float-delayed" />
        <div className="absolute top-[15%] right-[40%] w-1 h-1 rounded-full bg-gold/60 animate-float" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-scroll-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            <Globe className="w-4 h-4 text-gold" />
            <span className="text-sm text-primary-foreground/70">Bridging Languages Since 2020</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 animate-scroll-up" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
            <span className="text-primary-foreground">Empowering Global</span>
            <br />
            <span className="text-primary-foreground">Communication with</span>
            <br />
            <span className="gradient-text min-h-[1.2em] inline-block">
              {displayed}
              <span className="inline-block w-[3px] h-[0.8em] bg-gold ml-1 animate-pulse" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/60 max-w-2xl mb-10 animate-scroll-up" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
            Expert language solutions connecting businesses across cultures. 
            From precise translations to real-time interpretation — we are your bridge to the world.
          </p>

          <div className="flex flex-wrap gap-4 animate-scroll-up" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full gold-gradient text-navy font-semibold text-base hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:scale-105"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass-card text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Floating service icons */}
          <div className="hidden lg:flex gap-6 mt-16 animate-scroll-up" style={{ animationDelay: "1s", animationFillMode: "both" }}>
            {[
              { icon: Languages, label: "50+ Languages" },
              { icon: Mic, label: "Live Interpretation" },
              { icon: Globe, label: "Global Reach" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card hover:bg-primary-foreground/10 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${1.2 + i * 0.15}s` }}
              >
                <item.icon className="w-5 h-5 text-gold" />
                <span className="text-sm text-primary-foreground/70">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-primary-foreground/40 tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 rounded-full border-2 border-primary-foreground/20 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
