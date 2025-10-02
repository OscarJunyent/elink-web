import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Clock, Database } from "lucide-react";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";

const ResultatsPage = () => {
  const casos = [
    {
      id: "adinton",
      empresa: "Adinton",
      sector: "Data Assurance Analytics",
      descripcio: "Arquitectura tecnològica sòlida des del primer dia",
      icon: Clock,
      image: "/lovable-uploads/0746ee12-55c7-4ced-b3e5-da2c8a0f1495.png"
    },
    {
      id: "mpservices",
      empresa: "MPServices",
      sector: "Gestió Frau Electrònic",
      descripcio: "Automatització amb IA per scoring de frau en e-commerce",
      icon: TrendingUp,
      image: "/lovable-uploads/155e1c26-2a3d-480a-ab0a-f99ac5f08f6c.png"
    },
    {
      id: "volotea",
      empresa: "Volotea",
      sector: "Aerolínia",
      descripcio: "Pla d'implementació d'IA adaptat al context empresarial",
      icon: Database,
      image: "/lovable-uploads/19cf59bc-ceff-4cf1-b3d9-3f18003efd35.png"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Casos d'èxit reals - Consultoria IA Barcelona | Transformació digital empreses Catalunya</title>
        <meta name="description" content="Casos d'èxit corporatius d'Elinkcat: solucions implementades, reptes superats i impacte tangible en empreses de Barcelona i Catalunya amb IA i automatització." />
        <meta property="og:title" content="Casos d'èxit reals - Consultoria IA Barcelona" />
        <meta property="og:description" content="Descobreix com empreses de Barcelona han transformat els seus processos amb consultoria tecnològica i IA aplicada." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://elinkcat.com/resultats" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark animate-fade-in">
              <TypewriterText text="Casos d'èxit reals" speed={80} />
            </h1>
            <p className="text-xl md:text-2xl text-accent leading-relaxed animate-fade-in max-w-3xl mx-auto">
              Solucions implementades, reptes superats i impacte tangible
            </p>
          </div>
        </section>

        {/* Grid de casos */}
        <section className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {casos.map((cas, index) => (
              <Link
                key={cas.id}
                to={`/resultats/${cas.id}`}
                className="group bg-white/90 rounded-2xl shadow-circular border border-gray/10 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Imatge o icona */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 group-hover:scale-110 transition-transform duration-500"></div>
                  <cas.icon className="w-20 h-20 text-primary/40 relative z-10" />
                </div>

                {/* Contingut */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {cas.empresa}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-3">{cas.sector}</p>
                  <p className="text-accent leading-relaxed mb-4">{cas.descripcio}</p>
                  
                  <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                    Veure cas
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Crida final a l'acció */}
        <section className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white shadow-circular">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Vols convertir-te en el pròxim cas d'èxit?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Cada empresa és única, però els resultats poden ser igual d'impressionants. 
                Explica'ns el teu repte i descobrirem junts la millor solució tecnològica.
              </p>
              <Link
                to="/contacte"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-circular hover:scale-105 transition-transform duration-200"
              >
                Parlem del teu projecte
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer t={{}} />
    </>
  );
};

export default ResultatsPage;
