
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-4xl font-extrabold text-dark mb-4">Sobre Elink.cat</h1>
    <p className="text-accent max-w-2xl mb-6">
      Aquesta és una pàgina d&apos;exemple afegida al projecte. Pots fer-la servir per més informació sobre l&apos;equip, els valors o qualsevol altra cosa!
    </p>
    <Link
      to="/"
      className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform duration-200 shadow"
    >
      Torna a l&apos;inici
    </Link>
  </div>
);

export default AboutPage;
