import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BookOpen, Award, Users, Target } from "lucide-react";

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  const values = [
    { icon: BookOpen, title: "E – 良い (Good)", desc: "From Japanese, representing excellence in every translation" },
    { icon: Target, title: "WAN – 万 (Bridge)", desc: "From Chinese, connecting cultures and bridging communication" },
    { icon: Award, title: "Founded 2020", desc: "Born in Pune, serving globally with passion and precision" },
    { icon: Users, title: "Expert Team", desc: "Native linguists ensuring cultural accuracy and nuance" },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-4">About Ewan</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Where Language Is a <span className="gradient-text">Bridge</span>, Not a Barrier
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            The word "Ewan" is the amalgamation of the Japanese letter "E" meaning good and the Traditional Chinese word "WAN" meaning bridge — connecting two good things.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 delay-200 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            Ewan Business Solutions is a team of language professionals and enthusiasts who are passionate about their language. Headquartered in Pune, Maharashtra, India with presence in the Philippines, we provide translation, interpretation, multilingual voiceovers, and website localization services across Oriental, Indian, African, and European languages.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, i) => (
            <div
              key={item.title}
              className={`group p-6 rounded-2xl bg-card border border-border hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500 animate-tilt-card ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-navy" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
