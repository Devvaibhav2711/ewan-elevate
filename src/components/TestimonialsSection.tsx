import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden section-navy-purple">
      {/* Decorative */}
      <div className="glow-orb glow-orb-gold w-[300px] h-[300px] top-10 -left-20" />
      <div className="glow-orb glow-orb-purple w-[200px] h-[200px] -bottom-20 right-20" />

      {/* Animated arcs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full border-[18px] border-primary/8 pointer-events-none"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative p-10 lg:p-16 rounded-2xl glass-card border-glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Quote icon */}
            <motion.div
              className="absolute top-8 right-10 lg:right-16"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            >
              <Quote className="w-16 h-16 text-primary fill-primary/20" />
            </motion.div>

            {/* Stars */}
            <motion.div
              className="flex gap-1 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {[1,2,3,4,5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                >
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </motion.div>
              ))}
            </motion.div>

            <blockquote className="text-2xl lg:text-3xl font-serif font-bold text-foreground leading-relaxed mb-8 max-w-3xl">
              "EWAN doesn't just offer services; they offer peace of mind. Their cultural intelligence saved us months of rework during our Tokyo launch."
            </blockquote>

            <div className="flex items-center gap-4">
              <motion.div
                className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-background font-bold"
                whileHover={{ scale: 1.1 }}
              >
                MT
              </motion.div>
              <div>
                <p className="font-sans font-bold text-foreground tracking-wide uppercase text-sm">Marcus Thorne</p>
                <p className="text-muted-foreground text-sm">
                  Head of Operations, Global Logistics Inc.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;