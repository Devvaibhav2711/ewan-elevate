import { motion } from "framer-motion";
import { Car, Pill, Plane, Factory, Cpu, Calendar, Wheat, Scale, GraduationCap, Film } from "lucide-react";

const sectors = [
  { name: "Automotive", icon: Car },
  { name: "Pharma", icon: Pill },
  { name: "Aerospace", icon: Plane },
  { name: "Manufacturing", icon: Factory },
  { name: "Tech", icon: Cpu },
  { name: "Exhibitions", icon: Calendar },
  { name: "Agriculture", icon: Wheat },
  { name: "Legal", icon: Scale },
  { name: "Education", icon: GraduationCap },
  { name: "Media", icon: Film },
];

const SectorsSection = () => {
  return (
    <section id="sectors" className="py-24 lg:py-32 relative overflow-hidden section-navy-purple">
      <div className="glow-orb glow-orb-purple w-[500px] h-[500px] top-1/3 -left-40" />
      <div className="glow-orb glow-orb-gold w-[400px] h-[400px] bottom-10 -right-40" />
      <div className="absolute inset-0 dots-pattern-purple opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card-purple text-accent text-xs font-medium tracking-wider uppercase mb-5">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-5">
            Sector Expertise <span className="gradient-text italic">Across Every Major Industry</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            From boardrooms to factory floors — deep domain experience across 10+ industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5">
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 40, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative p-5 rounded-2xl glass-card border border-primary/10 hover:border-primary/30 transition-all duration-500 text-center card-shine"
              >
                <motion.div
                  className="w-12 h-12 mx-auto mb-3 rounded-xl glass-card-gold flex items-center justify-center"
                  whileHover={{ rotate: 12, scale: 1.15 }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.div>
                <p className="text-sm font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                  {sector.name}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
