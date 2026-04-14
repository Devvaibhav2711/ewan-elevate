import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Clock, Zap, Heart, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Accuracy Guaranteed",
    desc: "Our native linguists ensure every word captures the intended meaning with cultural precision.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Efficient processes and a global team ensure your projects are delivered on time, every time.",
  },
  {
    icon: Zap,
    title: "Tech-Powered",
    desc: "We combine human expertise with cutting-edge language technology for superior results.",
  },
  {
    icon: Heart,
    title: "Dedicated Support",
    desc: "A dedicated project manager for every engagement, ensuring seamless communication.",
  },
];

const WhyEwanSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="why-ewan" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div
            ref={titleRef}
            className={`transition-all duration-700 ${titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-4">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Your Trusted Partner in <span className="gradient-text">Global Communication</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Ewan, we don't just translate words — we bridge cultures. Our team of expert linguists brings deep understanding of language nuances to every project.
            </p>

            <ul className="space-y-4">
              {["Oriental, Indian, African & European languages", "ISO-certified quality processes", "Confidential & secure handling", "Competitive pricing"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => {
              const { ref, isVisible } = useScrollReveal(0.1);
              return (
                <div
                  key={reason.title}
                  ref={ref}
                  className={`group p-6 rounded-2xl bg-card border border-border hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 animate-tilt-card ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-serif font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEwanSection;
