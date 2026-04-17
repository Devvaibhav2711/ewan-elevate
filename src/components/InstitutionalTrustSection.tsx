import { motion } from "framer-motion";
import { Landmark, Users, Map } from "lucide-react";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";

const impacts = [
  { value: 1200, suffix: "+", label: "Farmers Impacted", icon: Users },
  { value: 800, suffix: "", label: "Hectares Covered", icon: Map },
];

const englishLines = [
  "To: Mr. Soham Shripad Kakade,",
  "Dear Sir,",
  "I would like to extend my sincere gratitude to you for your great support and contributions to the implementation of the Pilot Program of Rural Development on Solar Energy Technology Innovation and Cooperation in Wardha.",
  "Without your hardworking, efficient coordination and professional knowledge, this program cannot be accomplished so quickly. This program meets all technical requirements after its construction, installation and testing in the past two months. More than 1,200 farmers and 800 hectares farmland will benefit from it in the following years. What you have done will definitely strengthen the friendship between Indian and Chinese people.",
  "On behalf of the Consulate General of the People's Republic of China in Mumbai, I would like to present my respect and compliments for your kind support in this regard. And I am also convinced that you will make contributions to further deepen the cooperation between our two peoples.",
];

const chineseLines = [
  "善谷：",
  "近期，中印太阳能科技创新合作扶贫示范项目——太阳能提水系统经过2个月紧张的施工、安装和调试，已基本具备正常供水条件。",
  "期间，你克服项目所在地地形崎岖、地处偏僻等困难，发挥熟悉中文和马拉地语的特长，前往项目现场协助我馆及中方工程师与当地水利部门、施工企业及工人进行沟通协调。你任务在身、精益求精、敬业奉献的精神值得赞赏和学习，为中印友好做出了突出贡献。",
  "我谨代表中国驻孟买总领事馆向你表示衷心的感谢！",
];

const InstitutionalTrustSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-28 relative overflow-hidden section-navy-deep">
      <div className="glow-orb glow-orb-gold w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
      <div className="absolute inset-0 dots-pattern opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gold-gradient mb-6 shadow-gold-md"
            >
              <Landmark className="w-9 h-9 text-background" />
            </motion.div>

            <motion.span
              className="block text-xs uppercase tracking-[0.3em] text-primary/80 font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              CONSULATE RECOGNITION
            </motion.span>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Recognised by the <span className="gradient-text italic">Consulate General of the People's Republic of China</span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Recognised through a formal letter of appreciation for Ewan's contribution to strengthening India-China agricultural and trade relations, with impact across 1,200 farmers and 800 hectares of farmland.
            </motion.p>
          </div>

          <div className="grid gap-8 xl:grid-cols-[1fr_1fr] items-start">
            <motion.div
              className="rounded-[28px] bg-[#f8f5ef] text-[#2e2a33] shadow-[0_20px_60px_rgba(0,0,0,0.22)] border border-white/70 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <CertificatePage
                title="THE CONSULATE GENERAL OF THE PEOPLE'S REPUBLIC OF CHINA"
                subtitle="中华人民共和国总领事馆"
                imageLabel="en"
                lines={englishLines}
                footer={[
                  "Yours Sincerely,",
                  "Zheng Xiyuan",
                  "Consul General, Consulate General of P.R. China in Mumbai",
                ]}
              />
            </motion.div>

            <motion.div
              className="rounded-[28px] bg-[#f8f5ef] text-[#2e2a33] shadow-[0_20px_60px_rgba(0,0,0,0.22)] border border-white/70 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <CertificatePage
                title="中华人民共和国总领事馆"
                subtitle="感谢信"
                imageLabel="cn"
                lines={chineseLines}
                footer={[
                  "中国驻孟买总领事馆",
                  "郑曦原 总领事",
                  "2018年6月13日",
                ]}
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto mt-8">
            {impacts.map((s, i) => {
              const Icon = s.icon;
              return <ImpactStat key={s.label} stat={s} index={i} isVisible={isVisible} Icon={Icon} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

function CertificatePage({
  title,
  subtitle,
  imageLabel,
  lines,
  footer,
}: {
  title: string;
  subtitle: string;
  imageLabel: string;
  lines: string[];
  footer: string[];
}) {
  return (
    <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 min-h-[700px]">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#e25d4f] shadow-inner border border-white/70" />
        <p className="text-[12px] sm:text-[13px] tracking-[0.25em] uppercase text-[#b66460]">{imageLabel === "en" ? subtitle : ""}</p>
        <h3 className="text-[13px] sm:text-sm md:text-base font-semibold tracking-wide uppercase text-[#4f4a53] max-w-[560px]">{title}</h3>
        <p className="text-sm sm:text-base text-[#4f4a53] font-semibold">{imageLabel === "cn" ? subtitle : ""}</p>
      </div>

      <div className="relative z-10 mt-10 space-y-4 sm:space-y-5 text-left max-w-[560px] mx-auto">
        {lines.map((line) => (
          <p key={line} className="text-[12px] sm:text-[13px] md:text-[14px] leading-7 text-[#3f3b43] font-serif">
            {line}
          </p>
        ))}

        <div className="pt-8 space-y-2 text-[12px] sm:text-[13px] md:text-[14px] text-[#3f3b43] font-serif">
          {footer.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImpactStat({ stat, index, isVisible, Icon }: any) {
  const count = useCountUp(stat.value, 2000, isVisible);
  return (
    <motion.div
      className="p-6 rounded-2xl glass-card-gold text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -5, scale: 1.03 }}
    >
      <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
      <div className="text-3xl sm:text-4xl font-serif font-bold gradient-text mb-1">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{stat.label}</p>
    </motion.div>
  );
}

export default InstitutionalTrustSection;
