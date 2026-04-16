import { Globe, Languages, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden section-navy-purple">
      {/* Grid pattern */}
      <div className="absolute inset-0 dots-pattern pointer-events-none" />
      
      {/* Glow orbs */}
      <div className="glow-orb glow-orb-gold w-[300px] h-[300px] -top-20 -right-20" />
      <div className="glow-orb glow-orb-purple w-[250px] h-[250px] bottom-10 -left-20" />

      {/* Decorative arcs */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-[20px] border-primary/10 pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs text-primary font-medium tracking-wider uppercase">What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3">
            Our Core <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-16 h-1 gold-gradient rounded-full" />
        </motion.div>

        {/* Two Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Market Entry */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative p-8 lg:p-10 rounded-2xl glass-card-gold card-shine animate-tilt-card"
          >
            <div className="flex items-start justify-between mb-6">
              <motion.div
                className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center shadow-gold-md"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <Globe className="w-7 h-7 text-background" />
              </motion.div>
              <motion.div
                className="w-20 h-20 rounded-full bg-primary/10 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Market Entry</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Strategic companion for complex regulatory landscapes. From flexible strategy to market entry in emerging and established markets.
            </p>

            <ul className="space-y-3 mb-8">
              {["Regulatory Compliance", "Partner Sourcing", "Cultural Journey"].map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-foreground"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
              whileHover={{ x: 5 }}
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Language & Localization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="relative p-8 lg:p-10 rounded-2xl glass-card-purple card-shine animate-tilt-card"
          >
            <div className="flex items-start justify-between mb-6">
              <motion.div
                className="w-14 h-14 rounded-xl purple-gradient flex items-center justify-center"
                whileHover={{ rotate: -10, scale: 1.1 }}
                style={{ boxShadow: "0 8px 30px hsl(260 50% 55% / 0.3)" }}
              >
                <Languages className="w-7 h-7 text-foreground" />
              </motion.div>
              <motion.div
                className="w-20 h-20 rounded-full bg-accent/10 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>

            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Language & Localization</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Beyond translation: We localize your message to resonate with multi-lingual audiences who navigate global industry standards.
            </p>

            <ul className="space-y-3 mb-8">
              {["Technical Communication", "Creative Transcreation", "Intelligent L&D"].map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-foreground"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:gap-3 transition-all"
              whileHover={{ x: 5 }}
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Client Logos */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-10 lg:gap-16 pt-8 border-t border-foreground/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {["AUDI", "PFIZER", "NOMURA", "TOYOTA", "MITSUBISHI", "RAKUTEN"].map((name, i) => (
            <motion.span
              key={name}
              className="text-foreground/25 font-sans text-sm tracking-[0.2em] font-medium hover:text-primary transition-colors duration-500 cursor-default"
              whileHover={{ scale: 1.1, y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08 }}
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;