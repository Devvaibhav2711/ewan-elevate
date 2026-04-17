import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const linkedinUrl = "https://www.linkedin.com/in/soham-kakade-77b2819b/";

const founders = [
  {
    name: "Soham Kakade",
    role: "Founder & CEO",
    img: "/Soham-Sir.jpg",
    intro: [
      "10 Years in the Room Before Building the Firm. Soham Kakade spent a decade interpreting confidential boardroom negotiations between global leaders and their Asian counterparts - accumulating over 60,000 hours of simultaneous interpretation across Mandarin, Cantonese, Japanese and ASEAN languages before founding Ewan.",
      "His foundation: a full Chinese Government scholarship at Beijing Language and Cultural University (BLCU). Since then: heads of state, Fortune 500 boardrooms, national textbooks, government export programs and geopolitical publications on the India-Asia corridor.",
      "Ewan exists because cross-border expansion deserves a partner who has actually been on both sides of the table.",
    ],
    badges: ["BLCU Scholar", "60,000+ Hours Interpretation", "ISO 9001:2015 Certified", "Vice President, CITLoB", "Bhashini Initiative, MeitY", "MSAMB Export Program Designer"],
  },
  {
    name: "Sukhada Kakade",
    role: "Co-Founder & Director",
    img: "/Sukhada-maam.jpg",
    intro: [
      "Sukhada Kakade Bhalerao is a Pune-based Certified Management Accountant (CMA), finance educator, and entrepreneur with over 15 years of experience in finance, auditing, and professional training.",
      "As Co-Founder and Director of Ewan Business Solutions and Bhashik Skill Development, she brings the financial rigour and operational backbone that underpins everything Ewan delivers - from entity formation financial setup and RBI/FEMA compliance advisory to internal controls and structured business operations.",
      "She also runs her own cost accounting practice (est. 2010) and is passionate about bridging industry and academia.",
    ],
    badges: ["CMA Certified", "15+ Years Experience", "Finance & Compliance Expert", "RBI & FEMA Advisory", "Internal Controls Specialist", "Entity Setup & Structuring", "Entrepreneur Since 2010"],
  },
];

const FoundersSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden section-navy-deep">
      <div className="glow-orb glow-orb-gold w-[400px] h-[400px] top-10 -left-40" />
      <div className="glow-orb glow-orb-purple w-[400px] h-[400px] bottom-10 -right-40" />
      <div className="absolute inset-0 dots-pattern opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card-gold text-primary text-xs font-medium tracking-wider uppercase mb-5">
            The Founders
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            <span className="gradient-text italic">Leadership That Built the Corridors</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            The people behind the firm have already lived the cross-border work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((f, i) => {
            const isGold = i === 0;
            const isReversed = i === 1;
            return (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                whileHover={{ y: -8 }}
                className={`group relative p-8 rounded-3xl ${isGold ? "glass-card-gold" : "glass-card-purple"} card-shine overflow-hidden`}
              >
                <div className={`absolute -top-20 -right-20 w-60 h-60 rounded-full border-[20px] ${isGold ? "border-primary/10" : "border-accent/10"}`} />

                <div className={`relative grid gap-6 items-start ${isReversed ? "md:grid-cols-[1fr_260px]" : "md:grid-cols-[260px_1fr]"}`}>
                  <motion.div
                    className={`relative w-full h-[360px] md:h-[420px] rounded-2xl overflow-hidden border-2 ${isGold ? "border-primary/30" : "border-accent/30"} shadow-gold-md shrink-0 ${isReversed ? "md:order-2" : ""}`}
                    whileHover={{ scale: 1.02, rotate: -1 }}
                  >
                    <img src={f.img} alt={f.name} className="w-full h-full object-cover" />
                  </motion.div>
                  <div className={`space-y-4 ${isReversed ? "md:order-1" : ""}`}>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-1">{f.name}</h3>
                    <p className={`text-sm font-medium uppercase tracking-wider ${isGold ? "text-primary/90" : "text-accent/90"}`}>{f.role}</p>
                    <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {f.intro.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {f.badges.map((badge) => (
                        <span
                          key={badge}
                          className="px-4 py-2 rounded-full bg-[hsl(42_65%_63%_/0.92)] text-background text-xs sm:text-sm font-semibold shadow-gold-sm border border-white/10"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 pt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      Connect on LinkedIn →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
