import { useEffect, useState } from "react";
import { ArrowRight, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const typingTexts = ["Translation", "Interpretation", "Voiceovers", "Localization"];

const FloatingParticle = ({ delay, x, y, size, color }: { delay: number; x: string; y: string; size: number; color: string }) => (
  <motion.div
    className="particle"
    style={{ left: x, top: y, width: size, height: size, background: color }}
    animate={{
      y: [0, -30, 0],
      opacity: [0, 0.8, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

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

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const fadeUpItem = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    visible: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const fadeRightItem = {
    hidden: { opacity: 0, x: 80, filter: "blur(10px)" },
    visible: {
      opacity: 1, x: 0, filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Animated glow orbs */}
      <div className="glow-orb glow-orb-gold w-[400px] h-[400px] -top-40 -right-40" />
      <div className="glow-orb glow-orb-purple w-[300px] h-[300px] bottom-20 -left-20" />
      <div className="glow-orb glow-orb-gold w-[200px] h-[200px] top-1/2 right-1/4 opacity-10" />

      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="20%" size={4} color="hsl(40 85% 58% / 0.4)" />
      <FloatingParticle delay={1} x="80%" y="30%" size={3} color="hsl(260 50% 55% / 0.4)" />
      <FloatingParticle delay={2} x="60%" y="70%" size={5} color="hsl(40 85% 58% / 0.3)" />
      <FloatingParticle delay={0.5} x="30%" y="80%" size={3} color="hsl(260 50% 55% / 0.3)" />
      <FloatingParticle delay={1.5} x="90%" y="60%" size={4} color="hsl(40 85% 58% / 0.35)" />
      <FloatingParticle delay={3} x="50%" y="15%" size={3} color="hsl(260 50% 55% / 0.35)" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(208,170,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(208,170,55,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      {/* Decorative gold arcs */}
      <motion.div
        className="absolute top-0 right-[25%] w-[500px] h-[500px] pointer-events-none"
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="w-full h-full rounded-full border-[40px] border-primary/10" style={{ clipPath: "inset(0 50% 50% 0)" }} />
      </motion.div>

      <motion.div
        className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full border-[25px] border-accent/8 pointer-events-none"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Grain overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            {/* Badge */}
            <motion.div
              variants={fadeUpItem}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/30 glass-card-gold mb-8"
            >
              <motion.div
                className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm text-foreground/70 font-medium tracking-wide uppercase">
                Global Strategy | Expert Methods
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUpItem} className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-[1.1] mb-8">
              <span className="text-foreground block">CROSS-</span>
              <span className="text-foreground block">BORDER</span>
              <span className="gradient-text block italic">
                {displayed}
                <motion.span
                  className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 rounded-full align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div variants={fadeUpItem} className="mb-10">
              <div className="border-l-[3px] border-primary/40 pl-5">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Beyond consulting, EWAN operates at the intersection of linguistic precision and 
                  market entry strategy for a global trajectory.
                </p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUpItem} className="flex flex-wrap items-center gap-6">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(208,170,55,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full gold-gradient text-background font-semibold text-sm tracking-wider uppercase transition-all duration-300 card-shine shadow-gold-md"
              >
                <Sparkles className="w-4 h-4" />
                Market Strategy
              </motion.a>
              <motion.a
                href="#about"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-3 text-foreground font-medium text-sm tracking-wider uppercase group"
              >
                About EWAN
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={fadeRightItem} initial="hidden" animate="visible" className="relative">
            <div className="relative">
              {/* Purple glow behind image */}
              <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-2xl" />
              
              {/* Gold decorative arc */}
              <motion.div
                className="absolute -top-8 -right-8 w-[80%] h-[80%] rounded-full border-[30px] border-primary/10"
                style={{ clipPath: "inset(0 0 40% 40%)" }}
                animate={{ rotate: [0, 3, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />

              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-gold-lg border border-primary/10">
                <img
                  src="/hero-bg-new.png"
                  alt="EWAN Business Solutions"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  width={800}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5" />
              </div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-6 -left-6 sm:left-4 glass-card-gold rounded-2xl p-5 shadow-gold-md max-w-[260px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-medium">Languages</p>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  125+ Languages Decoded
                </h3>
                <div className="flex gap-1 mt-2">
                  {[1,2,3,4,5].map((i) => (
                    <motion.div
                      key={i}
                      className="h-1 flex-1 rounded-full bg-primary"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating chart card */}
              <motion.div
                className="absolute -top-4 right-4 sm:-top-6 sm:right-8 glass-card-purple rounded-xl p-3 shadow-gold-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-end gap-1 h-16 px-2">
                  {[40, 60, 35, 75, 55, 85, 65, 90].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-2.5 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: i >= 6
                          ? "linear-gradient(180deg, hsl(var(--gold)), hsl(var(--gold-dark)))"
                          : i >= 4
                          ? "linear-gradient(180deg, hsl(var(--purple)), hsl(var(--purple-dark)))"
                          : "hsl(var(--foreground) / 0.1)",
                      }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 1.2 + i * 0.08, duration: 0.4 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-foreground/30 tracking-widest uppercase font-medium">Scroll</span>
        <div className="w-5 h-9 rounded-full border-2 border-foreground/15 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;