import { Settings, Briefcase, Car, Wind, Factory, Pill, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const sectors = [
  { icon: Pill, name: "Pharma & Life Sci", color: "from-green-500/20 to-green-600/10" },
  { icon: Factory, name: "Manufacturing", color: "from-primary/20 to-primary/10" },
  { icon: Car, name: "Automotive", color: "from-blue-500/20 to-blue-600/10" },
  { icon: Briefcase, name: "Financial Services", color: "from-accent/20 to-accent/10" },
  { icon: ShoppingBag, name: "Luxury Goods", color: "from-pink-500/20 to-pink-600/10" },
  { icon: Wind, name: "Green Energy", color: "from-emerald-500/20 to-emerald-600/10" },
];

const SectorsSection = () => {
  return (
    <section id="sectors" className="py-24 lg:py-32 relative overflow-hidden section-navy-deep">
      {/* Animated orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[600px] h-[600px] rounded-full border border-primary/5"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[800px] h-[800px] rounded-full border border-accent/5"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Glow orbs */}
      <div className="glow-orb glow-orb-gold w-[200px] h-[200px] top-1/3 -left-20" />
      <div className="glow-orb glow-orb-purple w-[250px] h-[250px] bottom-1/4 -right-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-wide uppercase mb-4">
            Sectors We <span className="gradient-text-purple">Empower</span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ background: "linear-gradient(90deg, hsl(var(--purple)), hsl(var(--gold)))" }} />
        </motion.div>

        {/* Center hub */}
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            className="mx-auto w-32 h-32 rounded-full glass-card border border-primary/20 flex flex-col items-center justify-center z-10 relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            whileHover={{ boxShadow: "0 0 40px hsl(40 85% 58% / 0.3)" }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Settings className="w-8 h-8 text-primary mb-1" />
            </motion.div>
            <span className="text-sm font-serif font-bold text-foreground">Technology</span>
          </motion.div>

          {/* Pulsing ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="w-40 h-40 rounded-full border-2 border-primary/10"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Sector nodes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            {sectors.map((sector, i) => (
              <motion.div
                key={sector.name}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.6, type: "spring" }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${sector.color} glass-card border border-foreground/5 flex items-center justify-center mb-3`}
                  whileHover={{ scale: 1.2, boxShadow: "0 0 30px hsl(40 85% 58% / 0.2)", rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <sector.icon className="w-7 h-7 text-foreground/60" />
                </motion.div>
                <span className="text-sm font-serif font-bold text-foreground">{sector.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;