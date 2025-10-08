import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";

const CookiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies - Elinkcat</title>
        <meta name="description" content="Política de cookies d'Elinkcat Software SL. Informació sobre l'ús de cookies al nostre lloc web." />
      </Helmet>
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">Política de Cookies</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">1. Què són les Cookies?</h2>
              <p>
                Les cookies són petits fitxers de text que es guarden al vostre dispositiu quan visiteu
                un lloc web. S'utilitzen per millorar l'experiència de l'usuari i permetre certes funcionalitats.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">2. Tipus de Cookies que Utilitzem</h2>
              
              <h3 className="text-xl font-semibold text-dark mt-6 mb-3">Cookies Tècniques</h3>
              <p>
                Són necessàries per al funcionament bàsic del lloc web. No es poden desactivar.
              </p>

              <h3 className="text-xl font-semibold text-dark mt-6 mb-3">Cookies Analítiques</h3>
              <p>
                Ens ajuden a entendre com els visitants interactuen amb el nostre lloc web,
                recopilant informació de manera anònima.
              </p>

              <h3 className="text-xl font-semibold text-dark mt-6 mb-3">Cookies de Preferències</h3>
              <p>
                Permeten al lloc web recordar informació que canvia la manera com es comporta o es mostra,
                com el vostre idioma preferit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">3. Finalitat de les Cookies</h2>
              <p>
                Utilitzem cookies per:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Garantir el funcionament correcte del lloc web</li>
                <li>Analitzar el trànsit i l'ús del lloc</li>
                <li>Recordar les vostres preferències</li>
                <li>Millorar la vostra experiència de navegació</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">4. Cookies de Tercers</h2>
              <p>
                Podem utilitzar serveis de tercers (com Google Analytics) que també col·loquen cookies
                al vostre dispositiu per ajudar-nos a analitzar l'ús del lloc web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">5. Gestió de Cookies</h2>
              <p>
                Podeu configurar el vostre navegador per rebutjar cookies o per notificar-vos quan
                s'enviïn cookies. Tanmateix, algunes parts del lloc web poden no funcionar correctament
                si desactiveu les cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">6. Actualitzacions d'aquesta Política</h2>
              <p>
                Podem actualitzar aquesta política de cookies periòdicament. Us recomanem revisar-la
                regularment per estar informat sobre com utilitzem les cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark mt-8 mb-4">7. Més Informació</h2>
              <p>
                Per obtenir més informació sobre les nostres pràctiques de privacitat, consulteu la nostra
                Política de Privacitat o contacteu-nos a:
                <br />
                Email: info@elink.cat
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer t={{}} />
    </>
  );
};

export default CookiesPage;
