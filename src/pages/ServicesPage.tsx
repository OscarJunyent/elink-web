
import { Briefcase, Workflow, BrainCog, MonitorSmartphone, GraduationCap, ChartPie } from "lucide-react";
import { Link } from "react-router-dom";

type Service = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

const SERVICES: Service[] = [
  {
    title: "Consultoria tecnològica",
    desc: "Anàlisi de processos i identificació d’oportunitats digitals.",
    icon: Briefcase,
  },
  {
    title: "Automatització de processos",
    desc: "Integració d’eines, RPA i millora operativa.",
    icon: Workflow,
  },
  {
    title: "Anàlisi de dades i visualització",
    desc: "De les dades al coneixement. T’ajudem a estructurar, analitzar i visualitzar les dades del teu negoci per prendre millors decisions.",
    icon: ChartPie,
  },
  {
    title: "Intel·ligència artificial aplicada",
    desc: "Models predictius, NLP, anàlisi de dades.",
    icon: BrainCog,
  },
  {
    title: "Desenvolupament d’eines digitals",
    desc: "Aplicacions web, intranets, integració d’APIs.",
    icon: MonitorSmartphone,
  },
  {
    title: "Formació i divulgació tecnològica",
    desc: "Tallers, acompanyament, capacitació per equips.",
    icon: GraduationCap,
  },
];

const ServicesPage = () => (
  <div className="bg-background min-h-screen py-16 px-4 flex flex-col items-center w-full">
    <div className="max-w-3xl text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">Serveis d’Elink.cat</h1>
      <p className="text-accent md:text-lg">
        Impulsem la transformació digital de la teva empresa amb serveis clau per créixer i adaptar-se al futur tecnològic.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
      {SERVICES.map((srv, i) => (
        <div
          key={srv.title}
          className="flex flex-col md:flex-row items-start gap-5 rounded-2xl bg-white/90 shadow-circular border border-gray/40 p-7 md:p-8 animate-fade-in"
          style={{ animationDelay: `${i * 80}ms` } as React.CSSProperties}
        >
          <div className="bg-primary flex items-center justify-center rounded-full w-16 h-16 shadow-md shrink-0">
            <srv.icon size={32} className="text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">{srv.title}</h2>
            <p className="text-accent text-base mt-1">{srv.desc}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-16">
      <Link to="/#contacte" className="inline-block px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-circular hover-scale transition-all duration-200">
        Demana informació
      </Link>
    </div>
    <Link to="/" className="text-accent mt-8 underline story-link text-base">
      Torna a l'inici
    </Link>
  </div>
);

export default ServicesPage;
