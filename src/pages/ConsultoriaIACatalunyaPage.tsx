import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, CheckCircle, ArrowRight, Building2, BrainCog, Settings } from "lucide-react";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";

const ConsultoriaIACatalunyaPage = () => {
  const services = [
    {
      title: "Consultoria IA personalitzada",
      description: "Anàlisi detallada de les necessitats de la teva empresa i disseny d'una estratègia d'IA adaptada al teu sector i objectius empresarials.",
      icon: BrainCog,
      benefits: ["Estratègia clara i personalitzada", "ROI mesurable i transparent", "Reducció d'errors operatius"]
    },
    {
      title: "Automatització intel·ligent",
      description: "Implementació de processos automàtics amb IA per optimitzar la gestió, vendes i atenció al client de la teva empresa catalana.",
      icon: Settings,
      benefits: ["Optimització de temps", "Millora de la productivitat", "Decisions intel·ligents basades en dades"]
    },
    {
      title: "Transformació digital completa",
      description: "Acompanyament integral en la digitalització de processos empresarials amb tecnologies d'intel·ligència artificial per empreses de Catalunya.",
      icon: Building2,
      benefits: ["Avantatge competitiu sostenible", "Escalabilitat del negoci", "Eficiència operativa optimitzada"]
    }
  ];

  const casosExit = [
    {
      empresa: "Pime del sector logístic - Catalunya",
      repte: "Coordinació manual de rutes i planificació ineficient de recursos",
      solucio: "Sistema d'IA per optimització de rutes i gestió intel·ligent de flota",
      resultat: "35% reducció de costos operatius i 45% millora en temps de lliurament"
    },
    {
      empresa: "Empresa de serveis professionals - Girona", 
      repte: "Gestió documental desorganitzada i temps de cerca d'informació elevat",
      solucio: "Sistema d'IA per classificació automàtica de documents i cerca intel·ligent",
      resultat: "70% reducció del temps de cerca i 85% millora en organització documental"
    },
    {
      empresa: "Comerç online - Lleida",
      repte: "Atenció al client insuficient i pèrdua d'oportunitats de venda",
      solucio: "Assistant virtual amb IA per recomanacions personalitzades i suport 24/7",
      resultat: "50% augment en conversions i 65% millora en satisfacció del client"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultoria d'IA a Catalunya | Transformació digital amb IA per empreses catalanes - Elinkcat</title>
        <meta name="description" content="Consultoria IA Catalunya especialitzada en pimes. Implementació d'intel·ligència artificial pràctica per empreses catalanes. Automatització, transformació digital i solucions IA escalables." />
        <meta property="og:title" content="Consultoria d'IA a Catalunya per pimes | Elinkcat" />
        <meta property="og:description" content="Transformem empreses de Catalunya amb IA aplicada: automatització intel·ligent, consultoria tecnològica i solucions digitals per pimes de tot el territori." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://elinkcat.com/consultoria-ia-catalunya" />
        
        {/* Schema Markup - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Elinkcat - Consultoria IA Catalunya",
            "description": "Consultoria d'intel·ligència artificial per empreses de Catalunya",
            "url": "https://elinkcat.com",
            "areaServed": ["Catalunya", "Barcelona", "Girona", "Lleida", "Tarragona", "Spain"],
            "serviceType": ["Consultoria IA", "Automatització", "Transformació digital", "Solucions digitals"],
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Catalunya", 
              "addressCountry": "ES"
            }
          })}
        </script>

        {/* Schema Markup - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Consultoria IA Catalunya",
            "description": "Consultoria d'intel·ligència artificial especialitzada per pimes de Catalunya",
            "provider": {
              "@type": "Organization",
              "name": "Elinkcat"
            },
            "areaServed": ["Catalunya", "Barcelona", "Girona", "Lleida", "Tarragona"],
            "serviceType": "Consultoria tecnològica IA"
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container py-16 lg:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark animate-fade-in min-h-[100px] md:min-h-[140px]">
                <TypewriterText text="Consultoria d'IA a Catalunya" speed={80} />
              </h1>
              <p className="text-xl md:text-2xl text-accent leading-relaxed animate-fade-in max-w-4xl mx-auto mb-8">
                Transformem pimes de tot Catalunya amb intel·ligència artificial pràctica i escalable. 
                Automatització intel·ligent i solucions digitals per fer créixer el teu negoci.
              </p>
              <div className="flex items-center justify-center gap-2 text-lg text-accent mb-8">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Treballem amb empreses de tot Catalunya: Barcelona, Girona, Lleida i Tarragona</span>
              </div>
            </div>
          </div>
        </section>

        {/* Serveis principals */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Com ajudem empreses de Catalunya amb IA
            </h2>
            <p className="text-lg text-accent max-w-3xl mx-auto">
              Solucions d'intel·ligència artificial adaptades a la realitat de les pimes catalanes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/90 rounded-2xl p-8 shadow-circular border border-gray/10 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-accent">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Per què triar Elinkcat per IA a Catalunya */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-dark text-center">
              Per què triar Elinkcat per implementar IA a la teva empresa catalana?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark mb-4">Proximitat i coneixement del territori</h3>
                <p className="text-gray-700 leading-relaxed">
                  Entenem la realitat de les empreses catalanes i parlem el teu idioma. Treballem amb empreses 
                  de tot Catalunya, amb reunions presencials i suport en remot.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark mb-4">IA aplicada, no teòrica</h3>
                <p className="text-gray-700 leading-relaxed">
                  Implementem solucions d'IA que funcionen i generen resultats des del primer moment. 
                  Projectes amb retorn real i mesurable.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark mb-4">Acompanyament constant</h3>
                <p className="text-gray-700 leading-relaxed">
                  Estem al teu costat durant tot el procés i després. Formació completa per al teu equip 
                  i ajustos necessaris per garantir l'èxit.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark mb-4">Resultats verificables</h3>
                <p className="text-gray-700 leading-relaxed">
                  Totes les nostres solucions tenen objectius clars i KPIs mesurables. Transparència 
                  absoluta en els resultats obtinguts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Casos d'èxit */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Casos d'èxit d'IA en empreses catalanes
            </h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Exemples reals de com la intel·ligència artificial ha transformat pimes de Catalunya
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {casosExit.map((cas, index) => (
              <div
                key={index}
                className="bg-white/90 rounded-2xl p-8 shadow-circular border border-gray/10 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold text-dark mb-4">{cas.empresa}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">El repte</h4>
                    <p className="text-gray-700 text-sm">{cas.repte}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">La solució IA</h4>
                    <p className="text-gray-700 text-sm">{cas.solucio}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">El resultat</h4>
                    <p className="text-gray-700 text-sm font-medium">{cas.resultat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contacte local */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white text-center shadow-circular">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Tens una empresa a Catalunya i vols implementar IA?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Explica'ns el teu repte i descobrirem junts com la intel·ligència artificial pot impulsar 
                el creixement del teu negoci. Primera consulta sense compromís.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  to="/contacte"
                  className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-circular hover:scale-105 transition-transform duration-200"
                >
                  Consulta gratuïta
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <a
                  href="https://calendly.com/oscar-junyent-elinkcat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-colors duration-200"
                >
                  Reserva una reunió
                  <Phone className="w-5 h-5" />
                </a>
              </div>
              
              <div className="text-center opacity-80">
                <p className="text-sm">📍 Treballem amb empreses de tot Catalunya: presencial i en remot</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={{}} />
    </>
  );
};

export default ConsultoriaIACatalunyaPage;
