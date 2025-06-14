
import React from "react";
import { Link } from "react-router-dom";

const FinalCTA = ({ t }: { t: { title: string, subtitle: string, button: string, href: string } }) => {
  return (
    <section className="container py-12 flex flex-col items-center">
      <div className="bg-primary rounded-2xl shadow-circular p-8 max-w-2xl w-full flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">{t.title}</h2>
        <p className="text-primary-foreground mb-7">{t.subtitle}</p>
        <a
          href={t.href}
          className="px-8 py-3 rounded-full bg-white text-primary font-bold text-lg shadow-circular hover:scale-105 transition-transform duration-200"
        >
          {t.button}
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
