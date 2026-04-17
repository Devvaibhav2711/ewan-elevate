import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-40 relative overflow-hidden section-navy-purple">
      {/* Large glow effects */}
      <div className="glow-orb glow-orb-gold w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      <div className="glow-orb glow-orb-purple w-[300px] h-[300px] -bottom-20 -left-20" />

      {/* Animated orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[500px] h-[500px] rounded-full border border-dashed border-primary/8"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[700px] h-[700px] rounded-full border border-dashed border-accent/5"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${15 + (i % 3) * 25}%`,
            background: i % 2 === 0 ? "hsl(40 85% 58% / 0.4)" : "hsl(260 50% 55% / 0.3)",
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{ duration: 3 + i, delay: i * 0.5, repeat: Infinity }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Top links */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-12 text-xs tracking-[0.15em] text-muted-foreground/40 uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="#" className="hover:text-primary transition-colors">New Article</a>
          <span className="text-primary/30">|</span>
          <a href="#" className="hover:text-primary transition-colors">Follow Us</a>
          <span className="text-primary/30">|</span>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </motion.div>

        <motion.h2
          className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Expand Your<br />
          <span className="gradient-text">Global Footprint?</span>
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-[2px] w-32"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.span
            className="px-3 py-1 rounded-full glass-card-gold text-primary text-xs font-medium flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3 h-3" /> INSIGHTS
          </motion.span>
          <motion.div
            className="h-[2px] w-32"
            style={{ background: "linear-gradient(90deg, transparent, hsl(var(--purple)), transparent)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <motion.p
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Join the world's leading brands in navigating the future of cross-border business.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="mailto:info@ewan.co.in"
            className="px-10 py-4 rounded-full gold-gradient text-background font-semibold text-base shadow-gold-lg card-shine flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(208,170,55,0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail className="w-5 h-5" />
            Start Your Strategy
          </motion.a>
          <motion.a
            href="mailto:info@ewan.co.in?subject=15 Min Consultation"
            className="text-foreground font-bold text-base group flex items-center gap-2"
            whileHover={{ x: 5 }}
          >
            Ask EWAN — 15 Min Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;