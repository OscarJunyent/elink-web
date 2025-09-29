import { Briefcase, Workflow, Link2, MonitorSmartphone, BrainCog } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";

type Service = {
  title: string;
  desc: string;
  examples: string[];
  benefits: string;
  icon: React.ElementType;
};

const SERVICES: Service[] = [
  {
    title: "Consultoria tecnològica",
    desc: "Anàlisi dels teus processos actuals i identificació d'oportunitats de millora tecnològica adaptades a empreses de Barcelona i Catalunya.",
    examples: [
      "Auditoria dels sistemes existents",
      "Planificació de la transformació digital",
      "Optimització de fluxos de treball"
    ],
    benefits: "Reducció de costos operatius fins a un 30% i millora de l'eficiència dels processos.",
    icon: Briefcase,
  },
  {
    title: "Automatització de processos",
    desc: "Implementació d'eines que automatitzen tasques repetitives i optimitzen el temps del teu equip.",
    examples: [
      "Automatització de facturació i comptabilitat",
      "Gestió automàtica d'inventaris",
      "Processament automàtic de comandes"
    ],
    benefits: "Estalvi de 4-8 hores setmanals per empleat en tasques administratives.",
    icon: Workflow,
  },
  {
    title: "Integracions de sistemes",
    desc: "Connexió i sincronització de les diferents eines que ja utilitzes per crear un ecosistema tecnològic coherent.",
    examples: [
      "Integració de CRMs, ERPs, Backoffices ...",
      "Sincronització i Gestió de dades entre plataformes",
      "Implementacióde APIs per unificar la gestió de dades i informació"
    ],
    benefits: "Eliminació d'errors per duplicació de dades i visió unificada del negoci.",
    icon: Link2,
  },
  {
    title: "Solucions digitals a mida",
    desc: "Desenvolupament d'aplicacions web, intranets i eines específiques per les necessitats úniques del teu negoci.",
    examples: [
      "Plataformes de gestió interna: backoffice, eines de reporting, gestió de dades",
      "Aplicacions web personalitzades",
      "Portals de clients i proveïdors"
    ],
    benefits: "Avantatge competitiu amb eines úniques que s'adapten perfectament al model de negoci de pimes catalanes.",
    icon: MonitorSmartphone,
  },
  {
    title: "Intel·ligència artificial aplicada al negoci",
    desc: "Implementació de solucions d'IA pràctiques per millorar la presa de decisions i optimitzar resultats.",
    examples: [
      "Anàlisi predictiva de vendes",
      "Chatbots per atenció al client",
      "Optimització de procesos i dades"
    ],
    benefits: "Increment de la precisió en prediccions i millora de l'experiència del client.",
    icon: BrainCog,
  },
];

// Traduccions bàsiques pel footer perquè funcioni igual que a la home
const t = {};

const ServicesPage = () => (
  <div className="bg-background min-h-screen py-16 px-4 flex flex-col items-center w-full">
    <Helmet>
      <title>Serveis consultoria tecnològica per empreses de Barcelona i Catalunya | IA, automatització i solucions digitals - Elinkcat</title>
      <meta name="description" content="Consultoria IA Barcelona i automatització per empreses catalanes. Solucions digitals a mida, integracions i consultoria tecnològica especialitzada per pimes de Catalunya." />
      <meta property="og:title" content="Serveis consultoria tecnològica per empreses de Barcelona i Catalunya | Elinkcat" />
      <meta property="og:description" content="Automatització i IA per empreses catalanes: consultoria tecnològica especialitzada per pimes de Barcelona i Catalunya." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://elinkcat.com/serveis" />
    </Helmet>
    
    <div className="max-w-4xl text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-6">
        <TypewriterText text="Serveis de consultoria tecnològica per empreses catalanes" speed={80} />
      </h1>
      <p className="text-accent md:text-lg max-w-3xl mx-auto">
        Solucions tecnològiques concretes i pràctiques per impulsar la transformació digital de la teva pime a Barcelona i arreu de Catalunya.
      </p>
    </div>

    <div className="max-w-6xl w-full space-y-12">
      {SERVICES.map((service, i) => (
        <div
          key={service.title}
          className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-circular border border-gray/20 p-8 md:p-12 animate-fade-in hover:shadow-xl transition-all duration-300"
          style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}
        >
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Icon and Title */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:min-w-[280px]">
              <div className="bg-primary flex items-center justify-center rounded-full w-20 h-20 shadow-lg mb-4 shrink-0">
                <service.icon size={40} className="text-primary-foreground" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-3 leading-tight">
                {service.title.split(' ').reduce((acc, word, wordIdx, words) => {
                  if (word === 'a' && words[wordIdx + 1] === 'mida') {
                    acc.push(<div key={wordIdx}>a mida</div>);
                    words[wordIdx + 1] = null; // Skip next word
                  } else if (word === 'al' && words[wordIdx + 1] === 'negoci') {
                    acc.push(<div key={wordIdx}>al negoci</div>);
                    words[wordIdx + 1] = null; // Skip next word
                  } else if (word !== null) {
                    acc.push(<div key={wordIdx}>{word}</div>);
                  }
                  return acc;
                }, [])}
              </h2>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <p className="text-accent text-lg leading-relaxed">{service.desc}</p>
              
              {/* Examples */}
              <div>
                <h3 className="text-lg font-semibold text-dark mb-3">Exemples pràctics:</h3>
                <ul className="space-y-2">
                  {service.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0"></span>
                      <span className="text-accent">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="text-lg font-semibold text-dark mb-2">Benefici per a la teva pime:</h3>
                <p className="text-primary font-medium">{service.benefits}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 text-center">
      <Link 
        to="/contacte" 
        className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-circular hover-scale transition-all duration-200"
      >
        Demana informació personalitzada
      </Link>
      <p className="text-accent mt-4 text-sm">
        Parlarem de les teves necessitats concretes sense compromís
      </p>
    </div>

    <Footer t={t} />
  </div>
);

export default ServicesPage;