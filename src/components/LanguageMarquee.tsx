const languages = [
  "English", "日本語", "中文", "हिन्दी", "العربية", "Français",
  "Deutsch", "Español", "Português", "Русский", "한국어", "Italiano",
  "Türkçe", "ภาษาไทย", "Bahasa", "Tiếng Việt",
];

const LanguageMarquee = () => {
  return (
    <section className="py-8 section-dark overflow-hidden border-y border-primary-foreground/5">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...languages, ...languages].map((lang, i) => (
            <span
              key={i}
              className="mx-8 text-2xl sm:text-3xl font-serif font-bold text-primary-foreground/10 hover:text-gold/40 transition-colors duration-300 cursor-default"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageMarquee;
