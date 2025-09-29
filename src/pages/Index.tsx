import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Method from "@/components/Method";
// Removed: import FeaturedQuote from "@/components/FeaturedQuote";
import FinalCTA from "@/components/FinalCTA";
import About from "@/components/About";
import Cases from "@/components/Cases";
import Training from "@/components/Training";
// Removed: import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Calendar, Users, Lightbulb, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Textos específics per la nova home
const t = {
  heroTitle: "Tecnologia útil per fer créixer el teu negoci",
  heroSubtitle: "Transformem empreses amb tecnologia útil, automatització intel·ligent i solucions a mida.",
  heroCTA: "Descobreix com treballem",

  // Bloc serveis resumits
  services: {
    title: "Què fem?",
    consultoria: "Consultoria tecnològica",
    consultoriaDesc: "Analitzem, identifiquem oportunitats i t'acompanyem en la transformació digital adaptada a la teva realitat.",
    automatitzacio: "Automatització",
    automatitzacioDesc: "Implementem processos automàtics que estalvien temps, eliminen errors i optimitzen recursos.",
    integracions: "Integracions",
    integracionsDesc: "Connectem les teves eines i sistemes per crear un ecosistema tecnològic cohesionat i eficient.",
    ia: "IA aplicada",
    iaDesc: "Utilitzem intel·ligència artificial per optimitzar decisions i millorar processos.",
    solucions: "Solucions digitals a mida",
    solucionsDesc: "Desenvolupem aplicacions i eines personalitzades que s'adapten perfectament als teus objectius empresarials.",
  },

  // Valors corporatius
  values: {
    title: "Els nostres valors",
    subtitle: "Treballem amb principis clars que guien cada projecte",
    proximitat: "Proximitat",
    proximitatDesc: "Som el teu partner tecnològic proper, parlem el teu idioma i entenem la teva realitat empresarial.",
    claredat: "Claredat",
    claredatDesc: "Expliquem la tecnologia de manera senzilla i transparent, sense tecnicismes innecessaris.",
    eficacia: "Eficàcia",
    eficaciaDesc: "Cada solució que proposem té un objectiu clar: aportar valor real i resultats mesurables.",
    innovacio: "Innovació pràctica",
    innovacioDesc: "Utilitzem tecnologies punteres però sempre amb un enfocament pràctic i orientat a resultats."
  },

  // Com treballem (metodologia)
  methodTitle: "Com treballem?",
  method: {
    Diagnosi: "Diagnosi personalitzada",
    Proposta: "Proposta estratègica",
    Implementació: "Implementació a mida",
    Seguiment: "Seguiment i suport continu",
  },
  methodExplanations: {
    Diagnosi: "Analitzem la teva empresa per detectar necessitats i oportunitats de millora tecnològica.",
    Proposta: "Presentem una estratègia adaptada als teus objectius i recursos.",
    Implementació: "Executem el pla seleccionant i integrant les solucions idònies.",
    Seguiment: "Avaluem resultats, ajustem i t'acompanyem per garantir l'èxit.",
  },
  methodSubtitle: "Acompanyem la teva empresa en totes les fases del canvi, de l'anàlisi inicial fins a la implantació i millora contínua.",

  // TESTIMONIALS DATA  
  testimonials: [
    {
      frase: "Amb elink.cat hem guanyat temps, visibilitat i capacitat de decisió.",
      autor: "Rafael Jimenez - CEO, Sealmetrics",
    },
    {
      frase: "Gràcies a la seva consultoria, hem pogut automatitzar processos clau i reduir errors.",
      autor: "Miquel Armengol - Footballhost",
    },
    {
      frase: "Han entès perfectament la nostra realitat i ens han proposat solucions útils de forma molt propera.",
      autor: "Marc Nieto - CEO MPServices",
    },
  ],

  // Frase destacada
  featuredQuote: {
    frase: "Amb elink.cat hem guanyat temps, visibilitat i capacitat de decisió.",
    autor: "Miquel Armengol - Footballhost",
  },

  // Final call to action
  finalCTA: {
    title: "Vols portar la tecnologia al següent nivell?",
    subtitle: "Contacta amb elink.cat i farem créixer el teu negoci.",
    button: "Contacta amb nosaltres",
    href: "/contacte"
  },

  // Manifest CTA
  manifestCTA: {
    title: "Coneix la nostra filosofia",
    subtitle: "Descobreix com entenem la tecnologia i per què treballem així",
    button: "Descobreix el nostre manifest",
    href: "/manifest"
  },

  // Altres títols per compatibilitat
  aboutTitle: "Qui som",
  aboutMission: "A elink.cat t'ajudem a fer créixer el teu negoci aprofitant la tecnologia més adequada per a tu. Som experts apassionats i propers, compromesos amb la innovació pràctica i els resultats tangibles com a partner tecnològic de confiança per empreses de Barcelona i tot Catalunya.",
  casesTitle: "Clients i casos d'èxit",
  casesPlaceholder: "Ben aviat compartirem experiències i resultats d'empreses que ja confien en nosaltres. Contacta'ns per saber més!",
  trainingTitle: "Formació i divulgació",
  trainingDesc: "Oferim tallers pràctics i recursos oberts per apropar la tecnologia a les empreses catalanes de Barcelona i arreu del territori.",
  trainingCTA: "Consulta les properes formacions",
  contactTitle: "Contacta amb nosaltres",
  nom: "Nom i cognoms",
  email: "Correu electrònic",
  missatge: "Explica'ns què necessites",
  submit: "Enviar missatge",
  enviant: "Enviant...",
  contactCalendar: "Si ho prefereixes, pots reservar una reunió directa:",
  contactReserva: "Reserva una cita",
};

// Component per als valors
const ValuesSection = ({ values }: { values: any }) => {
  const valorsData = [
    {
      title: values.proximitat,
      description: values.proximitatDesc,
      icon: Users,
      gradient: "from-primary/10 to-accent/10"
    },
    {
      title: values.claredat,
      description: values.claredatDesc,
      icon: Lightbulb,
      gradient: "from-accent/10 to-primary/10"
    },
    {
      title: values.eficacia,
      description: values.eficaciaDesc,
      icon: Target,
      gradient: "from-primary/10 to-accent/10"
    },
    {
      title: values.innovacio,
      description: values.innovacioDesc,
      icon: Heart,
      gradient: "from-accent/10 to-primary/10"
    }
  ];

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">{values.title}</h2>
        <p className="text-lg text-accent max-w-2xl mx-auto">{values.subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {valorsData.map((valor, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-circular bg-gradient-to-br ${valor.gradient} animate-fade-in`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <valor.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-dark">
                  {valor.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {valor.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Component per al CTA del manifest
const ManifestCTA = ({ manifestCTA }: { manifestCTA: any }) => {
  return (
    <section className="container py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-12 shadow-circular">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark">
            {manifestCTA.title}
          </h2>
          <p className="text-lg text-accent mb-8 max-w-2xl mx-auto">
            {manifestCTA.subtitle}
          </p>
          <Link
            to={manifestCTA.href}
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-circular hover:scale-105 transition-transform duration-200"
          >
            {manifestCTA.button}
          </Link>
        </div>
      </div>
    </section>
  );
};

const Index = () => (
  <div className="font-sans bg-background text-dark w-full min-h-screen overflow-x-hidden">
    <Helmet>
      <title>Elinkcat – Consultoria tecnològica i IA per a pimes de Barcelona i Catalunya | Automatització i solucions digitals</title>
      <meta name="description" content="Consultoria tecnològica per pimes de Barcelona i Catalunya. Automatització intel·ligent, IA aplicada i solucions digitals pràctiques per empreses catalanes que volen créixer." />
      <meta property="og:title" content="Elinkcat – Consultoria tecnològica i IA per a pimes de Barcelona i Catalunya" />
      <meta property="og:description" content="Tecnologia útil per fer créixer empreses catalanes. Consultoria, automatització i IA per pimes de Barcelona i Catalunya." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://elinkcat.com/" />
    </Helmet>
    <Hero t={t} />
    <Services t={t} />
    <ValuesSection values={t.values} />
    <Method t={t} />
    <ManifestCTA manifestCTA={t.manifestCTA} />
    {/* New SEO CTA */}
    <section className="container py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 shadow-circular">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark">
            Consultoria d'IA especialitzada per empreses de Barcelona
          </h2>
          <p className="text-lg text-accent mb-8 max-w-2xl mx-auto">
            Descobreix com implementar intel·ligència artificial de forma pràctica i escalable a la teva empresa catalana
          </p>
          <Link
            to="/consultoria-ia-barcelona"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-circular hover:scale-105 transition-transform duration-200"
          >
            Consultoria IA Barcelona
          </Link>
        </div>
      </div>
    </section>
    <FinalCTA t={t.finalCTA} />
    {/* REMOVED: Bloc de contacte complet amb footer ve després */}
    {/* Calendly - reservar cita, now moved here */}
    <div className="w-full flex justify-center px-4 pb-6">
      <div className="max-w-xl w-full bg-accent/20 border border-accent rounded-lg p-5 flex flex-col items-center">
        <p className="font-medium mb-2">O si ho prefereixes, pots reservar una cita directa:</p>
        <a
          href="https://calendly.com/oscar-junyent-elinkcat"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-accent text-accent font-medium bg-white hover:bg-accent hover:text-white transition-colors gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Calendar className="w-5 h-5" />
          Reservar cita
        </a>
      </div>
    </div>
    <Footer t={t} />
  </div>
);

export default Index;
