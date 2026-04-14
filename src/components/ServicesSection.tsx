import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Languages, Mic, Volume2, Globe, FileText, Headphones, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Languages,
    title: "Translation",
    desc: "Deliver your products and services with precise information for your target audience. Legal, technical, and creative translations in 50+ languages.",
    features: ["Legal & Technical", "Marketing Copy", "50+ Languages"],
  },
  {
    icon: Mic,
    title: "Interpretation",
    desc: "Real-time spoken language services — transmitting words, tone, inflection, and intent instantly with native-level fluency.",
    features: ["Simultaneous", "Consecutive", "Remote/On-site"],
  },
  {
    icon: Volume2,
    title: "Voiceover Services",
    desc: "Professional multilingual voiceover recordings with native speakers for e-learning, ads, documentaries, and corporate content.",
    features: ["Native Speakers", "Studio Quality", "Multi-format"],
  },
  {
    icon: Globe,
    title: "Website Localization",
    desc: "Adapt your website for global markets. Beyond translation — cultural adaptation of content, images, and user experience.",
    features: ["UI/UX Adaptation", "SEO Optimization", "Cultural Nuance"],
  },
  {
    icon: FileText,
    title: "Transcription",
    desc: "Convert audio and video content into accurate text across multiple languages with fast turnaround times.",
    features: ["Audio/Video", "Multi-language", "Fast Delivery"],
  },
  {
    icon: Headphones,
    title: "Subtitling & Captioning",
    desc: "Professional subtitle and caption services for video content, ensuring accessibility and global reach.",
    features: ["SDH & CC", "Time-coded", "Multi-format"],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 lg:py-32 section-dark relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gold/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gold/3 blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-gold text-sm font-medium mb-4">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Comprehensive Language <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            From document translation to live interpretation, we offer end-to-end language services tailored to your business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollReveal(0.1);
            return (
              <div
                key={service.title}
                ref={cardRef}
                className={`group relative p-8 rounded-2xl glass-card hover:bg-primary-foreground/10 transition-all duration-500 cursor-pointer animate-tilt-card ${
                  cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/5 to-transparent" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-navy" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground/30 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  <h3 className="font-serif font-bold text-xl text-primary-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/50 text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span key={f} className="px-3 py-1 rounded-full text-xs font-medium bg-gold/10 text-gold/80">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
