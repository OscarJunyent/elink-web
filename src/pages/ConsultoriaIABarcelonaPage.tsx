import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, CheckCircle, ArrowRight, Building2, BrainCog, Settings } from "lucide-react";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";

const ConsultoriaIABarcelonaPage = () => {
  const services = [
    {
      title: "Consultoria IA personalitzada",
      description: "Anàlisi detallada de les necessitats de la teva empresa i disseny d'una estratègia d'IA adaptada al teu sector i objectius.",
      icon: BrainCog,
      benefits: ["Pla d'implementació clar", "ROI mesurable", "Reducció d'errors humans"]
    },
    {
      title: "Automatització intel·ligent",
      description: "Implementació de processos automàtics amb IA per optimitzar la gestió, vendes i atenció al client de la teva pime catalana.",
      icon: Settings,
      benefits: ["Estalvi de temps", "Millora de la productivitat", "Decisions basades en dades"]
    },
    {
      title: "Transformació digital completa",
      description: "Acompanyament integral en la digitalització de processos empresarials amb tecnologies d'IA per empreses de Barcelona.",
      icon: Building2,
      benefits: ["Avantatge competitiu", "Escalabilitat", "Eficiència operativa"]
    }
  ];

  const casosExit = [
    {
      empresa: "Pime del sector retail - Barcelona",
      repte: "Gestió manual d'inventaris i predicció de demanda poc precisa",
      solucio: "Sistema d'IA per predicció de demanda i automatització de comandes",
      resultat: "40% reducció d'excés d'inventari i 25% millora en disponibilitat de productes"
    },
    {
      empresa: "Empresa de serveis - Catalunya", 
      repte: "Atenció al client saturada i temps de resposta lents",
      solucio: "Chatbot intel·ligent integrat amb el CRM existent",
      resultat: "60% reducció de consultes bàsiques i 50% millora en satisfacció del client"
    },
    {
      empresa: "Consultoria local - Barcelona",
      repte: "Processos de reporting manuals i propensos a errors",
      solucio: "Automatització de reports amb IA i dashboards en temps real",
      resultat: "80% reducció del temps de generació de reports i 0% errors"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultoria d'IA a Barcelona | Empresa tecnològica per pimes catalanes - Elinkcat</title>
        <meta name="description" content="Consultoria IA Barcelona especialitzada en pimes catalanes. Implementació d'intel·ligència artificial pràctica i escalable per empreses de Catalunya. Automatització i solucions digitals." />
        <meta property="og:title" content="Consultoria d'IA a Barcelona per pimes catalanes | Elinkcat" />
        <meta property="og:description" content="Transformem empreses de Barcelona i Catalunya amb IA aplicada: automatització intel·ligent, consultoria tecnològica i solucions digitals per pimes." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://elinkcat.com/consultoria-ia-barcelona" />
        
        {/* Schema Markup - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Elinkcat - Consultoria IA Barcelona",
            "description": "Consultoria d'intel·ligència artificial per empreses de Barcelona i Catalunya",
            "url": "https://elinkcat.com",
            "areaServed": ["Barcelona", "Catalunya", "Spain"],
            "serviceType": ["Consultoria IA", "Automatització", "Solucions digitals"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Barcelona",
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
            "name": "Consultoria IA Barcelona",
            "description": "Consultoria d'intel·ligència artificial especialitzada per pimes de Barcelona i Catalunya",
            "provider": {
              "@type": "Organization",
              "name": "Elinkcat"
            },
            "areaServed": ["Barcelona", "Catalunya"],
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
                <TypewriterText text="Consultoria d'IA a Barcelona" speed={80} />
              </h1>
              <p className="text-xl md:text-2xl text-accent leading-relaxed animate-fade-in max-w-4xl mx-auto mb-8">
                Transformem pimes de Barcelona i Catalunya amb intel·ligència artificial pràctica i escalable. 
                Automatització intel·ligent per fer créixer el teu negoci.
              </p>
              <div className="flex items-center justify-center gap-2 text-lg text-accent mb-8">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Treballem amb empreses de Barcelona i de tot Catalunya</span>
              </div>
            </div>
          </div>
        </section>

        {/* Serveis principals */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Com ajudem empreses de Barcelona amb IA
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

        {/* Per què triar Elinkcat per IA a Barcelona */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-dark text-center">
              Per què triar Elinkcat per implementar IA a la teva empresa catalana?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark mb-4">Proximitat i coneixement local</h3>
                <p className="text-gray-700 leading-relaxed">
                  Entenem la realitat de les empreses catalanes i parlem el teu idioma. Reunions presencials a Barcelona 
                  i videoconferències per a tot Catalunya.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark mb-4">IA pràctica, no experimental</h3>
                <p className="text-gray-700 leading-relaxed">
                  Implementem solucions d'IA que funcionen i aporten valor des del primer dia. Res de projectes pilots sense retorn.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark mb-4">Suport continu</h3>
                <p className="text-gray-700 leading-relaxed">
                  T'acompanyem durant tot el procés i després de la implementació. Formació per al teu equip i ajustos quan calgui.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-dark mb-4">ROI mesurable</h3>
                <p className="text-gray-700 leading-relaxed">
                  Cada solució d'IA que implementem té objectius clars i resultats mesurables. Transparència total en els resultats.
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
              Exemples reals de com la intel·ligència artificial ha transformat pimes de Barcelona i Catalunya
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
                Tens una empresa a Barcelona o Catalunya i vols implementar IA?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Explica'ns el teu repte i descobrirem junts com la intel·ligència artificial pot fer créixer el teu negoci. 
                Primera consulta sense compromís.
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
                <p className="text-sm">📍 Reunions presencials a Barcelona i videoconferències per tot Catalunya</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer t={{}} />
    </>
  );
};

export default ConsultoriaIABarcelonaPage;