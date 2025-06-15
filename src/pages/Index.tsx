
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
import { Calendar } from "lucide-react";

// Textos específics per la nova home
const t = {
  heroTitle: "Tecnologia útil per fer créixer el teu negoci",
  heroSubtitle: "Consultoria, IA i automatització per a mitjanes empreses catalanes.",
  heroCTA: "Descobreix com treballem",

  // Bloc serveis resumits
  services: {
    title: "Què podem fer per la teva empresa",
    consultoria: "Consultoria tecnològica",
    consultoriaDesc: "Analitzem, identifiquem oportunitats i t’acompanyem en la transformació digital.",
    automatitzacio: "Automatització i integracions",
    automatitzacioDesc: "Implantem eines i processos que estalvien temps i diners.",
    ia: "IA aplicada al negoci",
    iaDesc: "Utilitzem la intel·ligència artificial per optimitzar processos i prendre millors decisions.",
    solucions: "Solucions digitals a mida",
    solucionsDesc: "Desenvolupem eines adaptades a la teva realitat i objectius.",
  },

  // Com treballem (metodologia)
  methodTitle: "Com treballem",
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
    Seguiment: "Avaluem resultats, ajustem i t’acompanyem per garantir l’èxit.",
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
    {
      frase: "Un equip molt professional i disponible, que parla el nostre mateix idioma.",
      autor: "Clara Novell - Tinnova",
    },
    {
      frase: "L’enfocament pràctic d’elink.cat ens ha ajudat a assolir els nostres objectius de digitalització.",
      autor: "Joan Planella - Repack",
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

  // Altres títols per compatibilitat
  aboutTitle: "Qui som",
  aboutMission: "A elink.cat t’ajudem a fer créixer el teu negoci aprofitant la tecnologia més adequada per a tu. Som experts apassionats i propers, compromesos amb la innovació pràctica i els resultats tangibles com a partner tecnològic de confiança.",
  casesTitle: "Clients i casos d’èxit",
  casesPlaceholder: "Ben aviat compartirem experiències i resultats d’empreses que ja confien en nosaltres. Contacta’ns per saber més!",
  trainingTitle: "Formació i divulgació",
  trainingDesc: "Oferim tallers pràctics i recursos oberts per apropar la tecnologia a les empreses catalanes.",
  trainingCTA: "Consulta les properes formacions",
  contactTitle: "Contacta amb nosaltres",
  nom: "Nom i cognoms",
  email: "Correu electrònic",
  missatge: "Explica’ns què necessites",
  submit: "Enviar missatge",
  enviant: "Enviant...",
  contactCalendar: "Si ho prefereixes, pots reservar una reunió directa:",
  contactReserva: "Reserva una cita",
};

const Index = () => (
  <div className="font-sans bg-background text-dark w-full min-h-screen overflow-x-hidden">
    <Hero t={t} />
    <Services t={t} />
    <Method t={t} />
    {/* Replace single quote with testimonials carousel */}
    <TestimonialsCarousel testimonials={t.testimonials} />
    {/* Removed: Reservar cita section here */}
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

