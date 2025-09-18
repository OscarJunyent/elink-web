import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Quote, ArrowRight, CheckCircle, TrendingUp, Clock, DollarSign } from "lucide-react";
import Footer from "@/components/Footer";

const ResultatsPage = () => {
  const testimonis = [
    {
      frase: "Des de els inicis elink.cat ens ha acompanyat i assesorat en les decisions tecniques, aportant coneixement i valor i donant confiança quan haviem de pendre decisions dificils",
      autor: "Rafael Jimenez",
      carrec: "CEO",
      empresa: "Adinton"
    },
    {
      frase: "Han entès perfectament la nostra realitat i ens han proposat solucions útils de forma molt propera.",
      autor: "Marc Nieto", 
      carrec: "CEO",
      empresa: "MPServices"
    },
    {
      frase: "Ens han assesorat en la planificació de la implementació de la IA en diferents departaments i iniciatives.",
      autor: "Alex Rodriguez",
      carrec: "IT Director",
      empresa: "Volotea"
    }
    {
      frase: "L'assesorament i la gestió de projectes d'elink.cat ens ha permes avançar a molta més velocitat i assolir reptes de l'empresa en un temps record.",
      autor: "Miquel Armengol",
      carrec: "IT Owner",
      empresa: "Footballhost"
    }
  ];

  const casosExit = [
    {
      empresa: "Adinton",
      sector: "Data Assurance Analytics",
      repte: "Processos manuals de facturació i seguiment de projectes que generaven errors i retards en la gestió de clients.",
      solucio: "Implementació d'un sistema integrat que automatitza la facturació, sincronitza dades de projectes i genera informes en temps real.",
      resultat: [
        "Reducció del 70% en temps de facturació",
        "Eliminació d'errors manuals",
        "Millor visibilitat dels projectes en curs",
        "Increment de la satisfacció del client"
      ],
      icon: Clock,
      bgColor: "from-primary/5 to-accent/5"
    },
    {
      empresa: "MPServices", 
      sector: "Gestió Frau Electrònic",
      repte: "Automatització scoring de Frau.",
      solucio: "Sistema de Analisis per IA per generar scoring de Frau sobre transaccions de comerç electrònic.",
      resultat: [
        "Visió unificada de tot el negoci",
        "Reducció del 50% en temps d'elaboració d'informes",
        "Millor capacitat de predicció",
        "Decisions més ràpides i informades"
      ],
      icon: TrendingUp,
      bgColor: "from-accent/5 to-primary/5"
    },
    {
      empresa: "Volotea", 
      sector: "Aerolínea",
      repte: "",
      solucio: "Sistema de Analisis per IA per generar scoring de Frau sobre transaccions de comerç electrònic.",
      resultat: [
        "Visió unificada de tot el negoci",
        "Reducció del 50% en temps d'elaboració d'informes",
        "Millor capacitat de predicció",
        "Decisions més ràpides i informades"
      ],
      icon: TrendingUp,
      bgColor: "from-accent/5 to-primary/5"
    },
    {
      empresa: "Footballhost", 
      sector: "Ecommerce Entreteniment",
      repte: "Automatització scoring de Frau.",
      solucio: "Sistema de Analisis per IA per generar scoring de Frau sobre transaccions de comerç electrònic.",
      resultat: [
        "Visió unificada de tot el negoci",
        "Reducció del 50% en temps d'elaboració d'informes",
        "Millor capacitat de predicció",
        "Decisions més ràpides i informades"
      ],
      icon: TrendingUp,
      bgColor: "from-accent/5 to-primary/5"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resultats reals i casos d'èxit - Elinkcat | Consultoria tecnològica per pimes catalanes</title>
        <meta name="description" content="Descobreix casos d'èxit reals d'Elinkcat: com la consultoria tecnològica, IA i automatització han transformat pimes catalanes amb resultats mesurables." />
        <meta property="og:title" content="Resultats reals i casos d'èxit - Elinkcat" />
        <meta property="og:description" content="Testimonis i casos d'èxit de pimes catalanes que han millorat amb tecnologia útil, automatització i IA aplicada." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://elinkcat.com/resultats" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark animate-fade-in">
              Resultats <span className="text-primary">reals</span>, impacte <span className="text-accent">tangible</span>
            </h1>
            <p className="text-xl md:text-2xl text-accent leading-relaxed animate-fade-in max-w-3xl mx-auto">
              Cada projecte és una oportunitat per millorar. Aquí tens exemples reals de com 
              la tecnologia útil transforma empreses com la teva.
            </p>
          </div>
        </section>

        {/* Secció de Testimonis */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Què diuen els nostres clients</h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              La satisfacció dels nostres clients és la millor mesura del nostre èxit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonis.map((testimoni, index) => (
              <div
                key={index}
                className="bg-white/90 rounded-2xl p-8 shadow-circular border border-gray/10 animate-fade-in relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed pt-4">
                  "{testimoni.frase}"
                </blockquote>
                
                <div className="border-t border-gray/20 pt-4">
                  <p className="font-bold text-dark">{testimoni.autor}</p>
                  <p className="text-primary font-semibold">{testimoni.carrec}</p>
                  <p className="text-accent">{testimoni.empresa}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Secció de Casos d'èxit */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Casos d'èxit detallats</h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Projectes reals amb resultats mesurables i impacte tangible
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-16">
            {casosExit.map((cas, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${cas.bgColor} rounded-3xl p-8 md:p-12 shadow-circular animate-fade-in`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                    <cas.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">{cas.empresa}</h3>
                    <p className="text-primary font-semibold">{cas.sector}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* El repte */}
                  <div className="bg-white/80 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-dark mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 text-sm font-bold">!</span>
                      </div>
                      El repte
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{cas.repte}</p>
                  </div>

                  {/* La solució */}
                  <div className="bg-white/80 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-dark mb-3 flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-bold">→</span>
                      </div>
                      La solució
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{cas.solucio}</p>
                  </div>

                  {/* Els resultats */}
                  <div className="bg-white/80 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-dark mb-3 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      Els resultats
                    </h4>
                    <ul className="space-y-2">
                      {cas.resultat.map((resultat, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{resultat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Crida final a l'acció */}
        <section className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white shadow-circular">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Tens un repte similar al teu negoci?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Cada empresa és única, però els resultats poden ser igual d'impressionants. 
                Explica'ns el teu repte i descobrirem junts la millor solució tecnològica.
              </p>
              <Link
                to="/contacte"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-circular hover:scale-105 transition-transform duration-200"
              >
                Explica'ns el teu repte
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
