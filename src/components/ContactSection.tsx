import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Mail, Send, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@ewan.co.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-4">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Ready to break language barriers? Get your free quote today.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            {[
              { icon: MapPin, title: "Visit Us", text: "4/11, Matrukrupa, behind SBI Karve Nagar branch, off Law College Road, Pune" },
              { icon: Phone, title: "Call Us", text: "(+91) 82757 44740" },
              { icon: Mail, title: "Email Us", text: "info@ewan.co.in" },
            ].map((item) => {
              const { ref: itemRef, isVisible: itemVisible } = useScrollReveal(0.1);
              return (
                <div
                  key={item.title}
                  ref={itemRef}
                  className={`flex gap-4 transition-all duration-500 ${itemVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                >
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                </div>
              );
            })}

            <div className="flex gap-4 pt-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/30 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-border shadow-xl">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground"
                  placeholder="How can we help?"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-foreground resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl gold-gradient text-navy font-semibold hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
