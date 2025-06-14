
// Pàgina principal corporativa Elink.cat – Estructura responsive, modular, multi-idioma ready

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Cases from "@/components/Cases";
import Training from "@/components/Training";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Texts en català, preparats per a traducció futura
const t = {
  heroTitle: "Transformem la teva empresa amb tecnologia útil i intel·ligent",
  heroSubtitle: "Consultoria i solucions digitals per empreses catalanes que volen fer un salt efectiu cap a la digitalització i l’eficiència.",
  heroCTA: "Descobreix com podem ajudar-te",

  aboutTitle: "Qui som",
  aboutMission: "A Elink.cat t’ajudem a fer créixer el teu negoci aprofitant la tecnologia més adequada per a tu. Som experts apassionats i propers, compromesos amb la innovació pràctica i els resultats tangibles com a partner tecnològic de confiança.",

  services: {
    title: "Els nostres serveis",
    consultoria: "Consultoria tecnològica",
    consultoriaDesc: "Analitzem la realitat de la teva empresa i proposem la millor estratègia digital.",
    automatitzacio: "Automatització i integracions",
    automatitzacioDesc: "Dissenyem i implantem automatitzacions per reduir errors i estalviar temps.",
    ia: "IA aplicada al negoci",
    iaDesc: "Fem servir la intel·ligència artificial per millorar processos i decisions.",
    solucions: "Desenvolupament de solucions digitals",
    solucionsDesc: "Desenvolupem a mida tot allò que la teva empresa necessita, connectant sistemes i persones.",
  },

  methodTitle: "Com treballem",
  method: {
    Diagnosi: "Diagnosi",
    Proposta: "Proposta",
    Implementació: "Implementació",
    Seguiment: "Seguiment",
  },
  methodSubtitle: "Seguim una metodologia clara i transparent, pensada per entendre, proposar el millor camí, implementar i acompanyar-te en la millora contínua.",

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

  languagesTitle: "Llengües"
};

const Index = () => (
  <div className="font-sans bg-background text-dark w-full min-h-screen overflow-x-hidden">
    <Hero t={t} />
    <About t={t} />
    <Services t={t} />
    <Method t={t} />
    <Cases t={t} />
    <Training t={t} />
    <Contact t={t} />
    <Footer t={t} />
  </div>
);

export default Index;
