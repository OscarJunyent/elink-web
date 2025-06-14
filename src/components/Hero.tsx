
import { motion } from "framer-motion";

const Hero = ({ t }: { t: any }) => (
  <section className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center bg-background px-4 py-12 md:py-24 relative overflow-hidden">
    <motion.div
      className="relative z-10"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-5 leading-tight max-w-3xl mx-auto" style={{letterSpacing: "-1px"}}>
        {t.heroTitle}
      </h1>
      <p className="text-lg md:text-2xl text-accent mb-7 max-w-2xl mx-auto">{t.heroSubtitle}</p>
      <a href="#serveis" className="inline-block px-8 py-3 mt-1 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-circular hover:scale-105 transition-transform duration-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/30">
        {t.heroCTA}
      </a>
    </motion.div>
    {/* Disk background blur shape */}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] h-60 bg-gradient-to-tr from-primary/30 to-accent/10 rounded-b-full blur-2xl opacity-80 pointer-events-none"/>
  </section>
);

export default Hero;
