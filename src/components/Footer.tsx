import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 relative overflow-hidden border-t border-primary/10" style={{ background: "hsl(228 38% 8%)" }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.span
            className="text-xl font-serif font-bold gradient-text tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            EWAN
          </motion.span>
          <div className="flex items-center gap-6 text-sm text-muted-foreground/50">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors duration-300">Cookies Notice</a>
          </div>
          <span className="text-xs text-muted-foreground/30">© 2024 EWAN. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;