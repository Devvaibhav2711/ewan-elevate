import { Plus, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import caseStudyImg from "@/assets/case-study-factory.jpg";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const CaseStudySection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden section-navy-purple">
      {/* Dots pattern */}
      <div className="absolute inset-0 dots-pattern-purple pointer-events-none" />

      {/* Glow */}
      <div className="glow-orb glow-orb-gold w-[300px] h-[300px] -bottom-20 -right-20" />

      {/* Decorative circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 rounded-full border border-dashed border-primary/10 pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Stacked card layers */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl glass-card border border-primary/5" />
            <div className="absolute -top-2 -left-2 w-full h-full rounded-2xl glass-card-purple border border-accent/10" />

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-gold-lg border border-primary/10">
              <img
                src={caseStudyImg}
                alt="Japanese Heavy Industries manufacturing facility"
                className="w-full h-80 lg:h-96 object-cover"
                loading="lazy"
                width={768}
                height={512}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating stats */}
            <motion.div
              className="absolute -bottom-6 -right-4 lg:right-8 p-4 rounded-xl glass-card-gold shadow-gold-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2 text-primary">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-bold">Growth +40%</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full gold-gradient text-background text-xs font-bold"
                whileHover={{ scale: 1.05 }}
              >
                <Plus className="w-3.5 h-3.5" />
                SUCCESS STORY
              </motion.span>
              <span className="px-4 py-2 rounded-full glass-card-purple text-foreground text-xs font-medium">
                GLOBAL INVENTORY | EMERGING MARKETS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Scale-up: Japanese <span className="gradient-text">Heavy Industries</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ewan helped a top-tier Japanese manufacturer expand into the EMEA region, streamlining operations across 5 countries in 6 months.
            </p>

            {/* Animated Stats */}
            <div className="flex gap-12 mb-8">
              <div>
                <div className="text-4xl font-serif font-bold gradient-text">
                  <AnimatedCounter target={40} suffix="%" />
                </div>
                <div className="text-xs tracking-[0.15em] text-muted-foreground/50 uppercase mt-1">Time Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold gradient-text-purple">
                  €<AnimatedCounter target={12} suffix="M" />
                </div>
                <div className="text-xs tracking-[0.15em] text-muted-foreground/50 uppercase mt-1">Annual Revenue</div>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card border border-primary/20 text-foreground font-semibold text-sm hover:border-primary/40 transition-all"
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px hsl(40 85% 58% / 0.15)" }}
              whileTap={{ scale: 0.98 }}
            >
              Read Case Study
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;