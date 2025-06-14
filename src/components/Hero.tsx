
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BACKGROUND_IMG =
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80";

const Hero = ({ t }: { t: any }) => {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center bg-background px-4 py-12 md:py-24 relative overflow-hidden">
      {/* Main elegant tech/development background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img
          src={BACKGROUND_IMG}
          alt=""
          className="w-full h-full object-cover object-center opacity-70 blur-[2px] scale-105"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/40" />
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Hero text */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-5 leading-tight max-w-3xl mx-auto" style={{ letterSpacing: "-1px" }}>
          {t.heroTitle}
        </h1>
        <p className="text-lg md:text-2xl text-accent mb-7 max-w-2xl mx-auto">{t.heroSubtitle}</p>
        <a
          href="#serveis"
          className="inline-block px-8 py-3 mt-1 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-circular hover:scale-105 transition-transform duration-200 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/30"
        >
          {t.heroCTA}
        </a>
        <div className="mt-4">
          <Link
            to="/about"
            className="text-accent underline underline-offset-4 text-base font-medium hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
            aria-label="Sobre Elink.cat"
          >
            Sobre Elink.cat
          </Link>
        </div>
      </motion.div>

      {/* Disk background blur shape (intact) */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] h-60 bg-gradient-to-tr from-primary/30 to-accent/10 rounded-b-full blur-2xl opacity-80 pointer-events-none" />
    </section>
  );
};

export default Hero;
