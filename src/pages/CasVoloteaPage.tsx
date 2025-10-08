import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

const CasVoloteaPage = () => {
  return (
    <>
      <Helmet>
        <title>Cas d'èxit Volotea - Pla d'implementació d'IA empresarial | Elinkcat</title>
        <meta name="description" content="Com Elinkcat va definir un pla d'implementació d'IA adaptat al context de Volotea, generant coneixement intern i una visió estratègica a llarg termini." />
        <meta property="og:title" content="Cas d'èxit Volotea - Consultoria IA Barcelona" />
        <meta property="og:description" content="Pla estratègic d'IA amb identificació d'oportunitats, roadmap i suport tècnic per incorporar intel·ligència artificial al negoci." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://elinkcat.com/resultats/volotea" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <section className="container py-6">
          <Link 
            to="/resultats" 
            className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tornar a casos d'èxit
          </Link>
        </section>

        {/* Hero */}
        <section className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center p-3">
                <img 
                  src="/logos/volotea-icon.png" 
                  alt="Volotea icon" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-dark">Volotea</h1>
                <p className="text-xl text-primary font-semibold">Aerolínia</p>
              </div>
            </div>
            <p className="text-xl text-accent leading-relaxed">
              Pla estratègic d'implementació d'IA adaptat al context empresarial
            </p>
          </div>
        </section>

        {/* Contingut principal */}
        <section className="container py-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* El repte */}
            <div className="bg-white/90 rounded-2xl p-8 shadow-circular border border-gray/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 text-xl font-bold">!</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-4">El repte</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Volotea volia incorporar intel·ligència artificial al seu negoci per millorar 
                    processos i generar més valor, però no disposava d'una planificació clara ni 
                    del coneixement tècnic intern necessari per saber per on començar. Necessitaven 
                    una visió estratègica que els permetés identificar oportunitats reals i 
                    prioritzar iniciatives amb impacte mesurable.
                  </p>
                </div>
              </div>
            </div>

            {/* La solució */}
            <div className="bg-white/90 rounded-2xl p-8 shadow-circular border border-gray/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl font-bold">→</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-dark mb-4">La solució</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Elinkcat va dissenyar un pla d'implementació d'IA adaptat al context específic 
                    de l'empresa, amb una metodologia estructurada:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Diagnòstic inicial per entendre processos, dades i capacitats tècniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Identificació d'oportunitats d'IA amb impacte al negoci (anàlisi, predicció, automatització)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Roadmap prioritzat amb iniciatives ordenades per valor i complexitat</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Definició de casos d'ús concrets i mètriques d'èxit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Suport tècnic continu durant la fase d'implementació</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Transferència de coneixement a l'equip intern</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Els resultats */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-circular">
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle className="w-12 h-12 text-green-600 flex-shrink-0" />
                <h2 className="text-2xl font-bold text-dark">Els resultats</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/80 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">12 mesos</div>
                  <p className="text-gray-700 font-semibold mb-1">Pla d'acció clar</p>
                  <p className="text-sm text-accent">Roadmap estructurat i aplicable</p>
                </div>
                <div className="bg-white/80 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">8 casos</div>
                  <p className="text-gray-700 font-semibold mb-1">Oportunitats identificades</p>
                  <p className="text-sm text-accent">En anàlisi, predicció i automatització</p>
                </div>
                <div className="bg-white/80 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-gray-700 font-semibold mb-1">Coneixement intern</p>
                  <p className="text-sm text-accent">Equip format en IA aplicada</p>
                </div>
                <div className="bg-white/80 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">3 anys</div>
                  <p className="text-gray-700 font-semibold mb-1">Visió a llarg termini</p>
                  <p className="text-sm text-accent">Estratègia d'evolució tecnològica</p>
                </div>
              </div>
            </div>

            {/* Conclusió */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Aprenentatge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Incorporar intel·ligència artificial amb èxit requereix una planificació estratègica 
                que identifiqui oportunitats reals, prioritzi iniciatives i generi coneixement intern. 
                No es tracta només d'implementar tecnologia, sinó de construir capacitats que permetin 
                a l'empresa evolucionar i adaptar-se al llarg del temps.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white shadow-circular">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Vols incorporar IA al teu negoci?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Si vols explorar com la intel·ligència artificial pot millorar els teus processos 
                i generar més valor, podem ajudar-te a definir un pla estratègic adaptat a la teva realitat.
              </p>
              <Link
                to="/contacte"
                className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-circular hover:scale-105 transition-transform duration-200"
              >
                Contacta amb nosaltres
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer t={{}} />
    </>
  );
};

export default CasVoloteaPage;
