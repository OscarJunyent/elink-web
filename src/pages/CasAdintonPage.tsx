import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Clock } from "lucide-react";
import Footer from "@/components/Footer";

const CasAdintonPage = () => {
  return (
    <>
      <Helmet>
        <title>Cas d'èxit Adinton - Arquitectura tecnològica escalable | Elinkcat</title>
        <meta name="description" content="Com Elinkcat va ajudar Adinton a definir una arquitectura tecnològica sòlida des del primer dia, reduint riscos i accelerant decisions tècniques." />
        <meta property="og:title" content="Cas d'èxit Adinton - Consultoria IA Barcelona" />
        <meta property="og:description" content="Acompanyament tècnic des del primer dia per construir una base tecnològica escalable i alineada amb el negoci." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://elinkcat.com/resultats/adinton" />
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
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-dark">Adinton</h1>
                <p className="text-xl text-primary font-semibold">Data Assurance Analytics</p>
              </div>
            </div>
            <p className="text-xl text-accent leading-relaxed">
              Arquitectura tecnològica sòlida des del primer dia per escalar amb confiança
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
                    Adinton es trobava en les primeres fases del seu projecte tecnològic i necessitava 
                    resoldre dubtes tècnics crítics per definir una arquitectura sòlida des del principi. 
                    La presa de decisions incorrectes en aquesta etapa inicial podia generar problemes 
                    d'escalabilitat i costos elevats en el futur.
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
                    Elinkcat va proporcionar acompanyament tècnic des del primer dia, actuant com a 
                    partner estratègic en la presa de decisions clau:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Assessorament en la definició de l'arquitectura tecnològica</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Validació de proveïdors i eines tecnològiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Revisió tècnica de decisions crítiques per evitar errors costosos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Suport continu per resoldre dubtes tècnics durant el desenvolupament</span>
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/80 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-gray-700 font-semibold mb-1">Base tecnològica escalable</p>
                  <p className="text-sm text-accent">Alineada amb els objectius del negoci</p>
                </div>
                <div className="bg-white/80 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">-60%</div>
                  <p className="text-gray-700 font-semibold mb-1">Reducció de riscos</p>
                  <p className="text-sm text-accent">En el desenvolupament tecnològic</p>
                </div>
                <div className="bg-white/80 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">3x</div>
                  <p className="text-gray-700 font-semibold mb-1">Decisions més àgils</p>
                  <p className="text-sm text-accent">Amb major confiança tècnica</p>
                </div>
              </div>
            </div>

            {/* Conclusió */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Aprenentatge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Comptar amb assessorament tècnic especialitzat des del primer moment permet prendre 
                decisions més encertades, evitar errors costosos i construir una base tecnològica 
                sòlida que faciliti el creixement futur de l'empresa.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white shadow-circular">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Tens un projecte similar?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Si estàs començant un projecte tecnològic i necessites assessorament per prendre 
                les decisions correctes, parlem.
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

export default CasAdintonPage;
