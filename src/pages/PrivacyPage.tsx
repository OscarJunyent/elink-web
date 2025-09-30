import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacitat - Elinkcat</title>
        <meta name="description" content="Política de privacitat d'Elinkcat Software SL. Informació sobre el tractament de dades personals." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">Política de Privacitat</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">1. Informació General</h2>
              <p>
                A Elinkcat Software SL, amb NIF B66891557 i domicili social a Roger de Flor, 49 6-3 Esc B, 08013 Barcelona,
                ens prenem seriosament la privacitat de les vostres dades personals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">2. Dades que Recollim</h2>
              <p>
                Recollim les dades personals que voluntàriament ens proporcioneu quan utilitzeu els nostres serveis,
                incloent nom, correu electrònic, telèfon i altra informació necessària per prestar els nostres serveis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">3. Finalitat del Tractament</h2>
              <p>
                Les vostres dades són tractades amb les següents finalitats:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prestar els serveis de consultoria contractats</li>
                <li>Respondre a les vostres consultes i sol·licituds</li>
                <li>Enviar informació comercial si heu donat el vostre consentiment</li>
                <li>Complir amb les obligacions legals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">4. Base Legal</h2>
              <p>
                El tractament de les vostres dades es basa en el consentiment que ens heu proporcionat,
                l'execució del contracte de serveis i el compliment d'obligacions legals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">5. Conservació de Dades</h2>
              <p>
                Les dades personals seran conservades durant el temps necessari per complir amb les finalitats
                per les quals van ser recollides i per complir amb les obligacions legals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">6. Els Vostres Drets</h2>
              <p>
                Teniu dret a accedir, rectificar, suprimir, limitar el tractament, oposar-vos i a la portabilitat
                de les vostres dades. Podeu exercir aquests drets contactant-nos a info@elink.cat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">7. Seguretat</h2>
              <p>
                Implementem mesures de seguretat tècniques i organitzatives adequades per protegir les vostres dades
                contra pèrdua, ús indegut o accés no autoritzat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">8. Contacte</h2>
              <p>
                Per a qualsevol qüestió relacionada amb aquesta política de privacitat, podeu contactar-nos a:
                <br />
                Email: info@elink.cat
                <br />
                Adreça: Roger de Flor, 49 6-3 Esc B, 08013 Barcelona
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer t={{}} />
    </>
  );
};

export default PrivacyPage;
