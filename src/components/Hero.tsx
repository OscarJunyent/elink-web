
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

// Example images (royalty-free from Unsplash, as placeholders)
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    alt: "Dona treballant amb portàtil",
  },
  {
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    alt: "Portàtil gris obert sobre taula",
  },
  {
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80",
    alt: "Dona utilitzant ordinador portàtil sobre llit",
  },
];

// Main video (placeholder from Pexels, royalty-free, can be replaced)
const videoSrc = "https://player.vimeo.com/external/379427110.sd.mp4?s=eeb68293fa5b443a07de7c705d7f423e8b4b1f57&profile_id=164&oauth2_token_id=57447761";
const videoPoster = "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80";

const Hero = ({ t }: { t: any }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center bg-background px-4 py-12 md:py-24 relative overflow-hidden">
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
      </motion.div>

      {/* Main Video with Play Button */}
      <div className="relative mt-10 w-full max-w-2xl aspect-video mx-auto rounded-lg overflow-hidden shadow-lg group">
        <video
          ref={videoRef}
          className="object-cover w-full h-full rounded-lg"
          src={videoSrc}
          poster={videoPoster}
          controls={playing}
          tabIndex={-1}
          muted
          playsInline
          onPause={() => setPlaying(false)}
        />
        {!playing && (
          <button
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors"
            aria-label="Reprodueix el vídeo"
            onClick={handlePlay}
            type="button"
            tabIndex={0}
          >
            <PlayCircle size={70} className="text-white drop-shadow-xl" />
          </button>
        )}
      </div>

      {/* Images Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 z-10">
        {heroImages.map(({ src, alt }, idx) => (
          <img
            key={src}
            src={src}
            alt={alt}
            loading="lazy"
            className="w-[180px] h-[110px] object-cover rounded-xl shadow-md border border-gray bg-white"
            style={{ animation: `fade-in 0.8s cubic-bezier(0.19,1,0.22,1) ${0.1 + idx * 0.07}s both` }}
          />
        ))}
      </div>

      {/* Disk background blur shape (intact) */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] h-60 bg-gradient-to-tr from-primary/30 to-accent/10 rounded-b-full blur-2xl opacity-80 pointer-events-none" />
    </section>
  );
};

export default Hero;
