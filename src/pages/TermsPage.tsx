import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Termes de Servei - Elinkcat</title>
        <meta name="description" content="Termes i condicions de servei d'Elinkcat Software SL." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">Termes de Servei</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">1. Acceptació dels Termes</h2>
              <p>
                En accedir i utilitzar els serveis d'Elinkcat Software SL, accepteu estar vinculat per aquests
                termes de servei i per totes les lleis i regulacions aplicables.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">2. Descripció dels Serveis</h2>
              <p>
                Elinkcat ofereix serveis de consultoria tecnològica i intel·ligència artificial per a pimes,
                incloent anàlisi, implementació i formació en tecnologies digitals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">3. Obligacions del Client</h2>
              <p>
                El client es compromet a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar informació veraç i completa</li>
                <li>Complir amb els acords de pagament establerts</li>
                <li>Col·laborar activament en la prestació dels serveis</li>
                <li>No fer un ús indegut dels serveis contractats</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">4. Propietat Intel·lectual</h2>
              <p>
                Tots els drets de propietat intel·lectual sobre els materials, continguts i serveis prestats
                per Elinkcat són propietat d'Elinkcat Software SL, llevat que s'acordi el contrari per escrit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">5. Limitació de Responsabilitat</h2>
              <p>
                Elinkcat no serà responsable de danys indirectes, incidentals o conseqüents derivats de l'ús
                dels nostres serveis, excepte en casos de negligència greu o dol.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">6. Modificacions dels Termes</h2>
              <p>
                Ens reservem el dret de modificar aquests termes en qualsevol moment. Les modificacions entraran
                en vigor en el moment de la seva publicació al web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">7. Llei Aplicable</h2>
              <p>
                Aquests termes es regiran per les lleis d'Espanya. Qualsevol controvèrsia serà sotmesa
                als tribunals de Barcelona.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">8. Contacte</h2>
              <p>
                Per a qualsevol qüestió sobre aquests termes de servei:
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

export default TermsPage;
