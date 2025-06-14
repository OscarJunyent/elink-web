
import React from "react";
import { Quote } from "lucide-react";

const FeaturedQuote = ({ t }: { t: any }) => {
  // Si no hi ha frase definida al t, mostra placeholder
  const placeholder = {
    frase: "“Properament afegirem aquí l’opinió d’algun client sobre la nostra feina…”",
    autor: "Client satisfet",
  };

  const quote = t.featuredQuote && t.featuredQuote.frase
    ? t.featuredQuote
    : placeholder;

  return (
    <section className="container py-12 flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-circular p-8 max-w-2xl w-full flex flex-col items-center">
        <Quote size={38} className="mb-3 text-accent opacity-70" />
        <p className="text-xl md:text-2xl text-dark font-medium mb-2 italic text-center">&quot;{quote.frase}&quot;</p>
        <p className="text-accent mt-2 text-base text-center">— {quote.autor}</p>
      </div>
    </section>
  );
};

export default FeaturedQuote;
