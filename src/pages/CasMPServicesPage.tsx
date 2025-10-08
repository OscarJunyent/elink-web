import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, TrendingUp } from "lucide-react";
import Footer from "@/components/Footer";

const CasMPServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Cas d'èxit MPServices - Automatització amb IA per scoring de frau | Elinkcat</title>
        <meta name="description" content="Com Elinkcat va implementar un sistema d'automatització amb IA per generar scoring de frau en e-commerce, estalviant temps i reduint errors." />
        <meta property="og:title" content="Cas d'èxit MPServices - Consultoria IA Barcelona" />
        <meta property="og:description" content="Sistema d'anàlisi i automatització mitjançant IA per detectar frau electrònic amb resultats mesurables." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://elinkcat.com/resultats/mpservices" />
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
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-dark">MPServices</h1>
                <p className="text-xl text-primary font-semibold">Gestió Frau Electrònic</p>
              </div>
            </div>
            <p className="text-xl text-accent leading-relaxed">
              Automatització amb IA per scoring de frau en transaccions de comerç electrònic
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
                    MPServices gestionava processos manuals i repetitius per analitzar transaccions 
                    de comerç electrònic i detectar possibles fraus. Aquests processos consumien 
                    molt de temps, generaven errors humans i limitaven la capacitat de creixement 
                    de l'empresa. Necessitaven una solució que els permetés escalar sense augmentar 
                    proporcionalment la plantilla.
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
                    Elinkcat va desenvolupar un sistema d'anàlisi i automatització basat en 
                    intel·ligència artificial per generar scoring de frau sobre transaccions 
                    de comerç electrònic:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Model d'IA entrenat amb patrons de frau històrics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Automatització de l'anàlisi de transaccions en temps real</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Scoring de risc per cada transacció amb alertes automàtiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Dashboard de control per visualitzar mètriques i tendències</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Integració amb els sistemes existents de l'empresa</span>
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
                  <div className="text-3xl font-bold text-primary mb-2">70%</div>
                  <p className="text-gray-700 font-semibold mb-1">Estalvi de temps</p>
                  <p className="text-sm text-accent">En anàlisi de transaccions diàries</p>
                </div>
                <div className="bg-white/80 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">-85%</div>
                  <p className="text-gray-700 font-semibold mb-1">Reducció d'errors</p>
                  <p className="text-sm text-accent">Per automatització de processos</p>
                </div>
                <div className="bg-white/80 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">3x</div>
                  <p className="text-gray-700 font-semibold mb-1">Augment de productivitat</p>
                  <p className="text-sm text-accent">De l'equip de gestió de fraus</p>
                </div>
                <div className="bg-white/80 rounded-xl p-6">
                  <div className="text-3xl font-bold text-primary mb-2">Real-time</div>
                  <p className="text-gray-700 font-semibold mb-1">Decisions més ràpides</p>
                  <p className="text-sm text-accent">Amb alertes automàtiques</p>
                </div>
              </div>
            </div>

            {/* Conclusió */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Aprenentatge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                L'automatització amb intel·ligència artificial no només estalvia temps i redueix 
                errors, sinó que permet a les empreses escalar les seves operacions sense necessitat 
                d'augmentar proporcionalment els recursos humans. L'equip pot centrar-se en tasques 
                de més valor mentre la IA gestiona els processos repetitius.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white shadow-circular">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Vols automatitzar processos al teu negoci?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Si tens processos manuals repetitius que consumeixen temps i generen errors, 
                podem ajudar-te a automatitzar-los amb IA.
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

export default CasMPServicesPage;
