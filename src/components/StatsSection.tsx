import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";

const stats = [
  { value: 50, suffix: "+", label: "Languages Supported" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 6, suffix: "+", label: "Years of Excellence" },
];

const StatsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} isVisible={isVisible} delay={i * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

function StatItem({ stat, isVisible, delay }: { stat: typeof stats[0]; isVisible: boolean; delay: number }) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold gradient-text mb-2">
        {count}{stat.suffix}
      </div>
      <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">{stat.label}</p>
    </div>
  );
}

export default StatsSection;
