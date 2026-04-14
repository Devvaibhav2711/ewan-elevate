import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Ewan's translation accuracy is unmatched. They understood the cultural nuances of our Japanese documentation perfectly.",
    author: "Marketing Director",
    company: "Global Tech Corp",
    rating: 5,
  },
  {
    text: "Their interpretation services during our international conference were flawless. Highly professional team.",
    author: "Event Manager",
    company: "International Events Ltd",
    rating: 5,
  },
  {
    text: "Website localization by Ewan helped us increase our Asian market presence by 40%. Incredible work.",
    author: "CEO",
    company: "Digital Commerce Co.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 section-dark relative overflow-hidden">
      <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-gold text-sm font-medium mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
            Trusted by <span className="gradient-text">Businesses</span> Worldwide
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollReveal(0.1);
            return (
              <div
                key={i}
                ref={cardRef}
                className={`p-8 rounded-2xl glass-card hover:bg-primary-foreground/5 transition-all duration-500 ${
                  cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <Quote className="w-8 h-8 text-gold/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-primary-foreground/70 mb-6 leading-relaxed">{t.text}</p>
                <div>
                  <p className="font-semibold text-primary-foreground">{t.author}</p>
                  <p className="text-sm text-primary-foreground/40">{t.company}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
