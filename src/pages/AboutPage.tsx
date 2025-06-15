
import { Link } from "react-router-dom";

const founders = [
  {
    name: "Òscar Junyent",
    role: "Consultor AAI",
    bio: "Enginyer apassionat per la tecnologia i la innovació amb experiència liderant projectes digitals enfocats en aportar solucions pràctiques a empreses.",
    image: "https://ui-avatars.com/api/?name=%C3%92scar+Junyent&background=ececec&color=222c38&size=128",
  },
  {
    name: "Wojtek Szczupak",
    role: "Consultor AAI",
    bio: "Especialista en desenvolupament de solucions digitals i integració de processos tecnològics. Compromès amb la qualitat i l'impacte real.",
    image: "https://ui-avatars.com/api/?name=Wojtek+Szczupak&background=ececec&color=222c38&size=128",
  },
];

const AboutPage = () => (
  <div className="bg-background min-h-screen flex flex-col items-center w-full px-4 py-12 animate-fade-in">
    <div className="max-w-3xl w-full flex flex-col items-center text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-3">Qui som</h1>
      <p className="text-accent md:text-lg mb-5 text-center">
        Som <span className="font-semibold">elink.cat</span>, consultora tecnològica enfocada a la transformació digital de mitjanes empreses catalanes.
      </p>
    </div>

    <section className="w-full max-w-2xl bg-white/80 rounded-2xl shadow-circular mb-10 p-8 md:p-12 flex flex-col gap-7">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-dark mb-3">Missió i visió</h2>
        <p className="text-accent">
          Ser el partner tecnològic de confiança per fer créixer empreses amb tecnologia innovadora, útil, a mida i alineada amb els seus objectius reals
        </p>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-dark mb-3">Valors</h2>
        <ul className="flex flex-col gap-2 md:gap-1 items-start md:items-center mx-auto md:flex-row md:justify-center">
          <li className="bg-primary/10 rounded-lg px-4 py-2 text-dark font-semibold mr-2 mb-2 md:mb-0">Proximitat</li>
          <li className="bg-primary/10 rounded-lg px-4 py-2 text-dark font-semibold mr-2 mb-2 md:mb-0">Impacte real</li>
          <li className="bg-primary/10 rounded-lg px-4 py-2 text-dark font-semibold">Innovació responsable</li>
        </ul>
      </div>
    </section>

    <section className="w-full max-w-4xl bg-white/90 rounded-2xl shadow-circular mb-10 p-8 md:p-12 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-bold text-dark mb-6">Equip fundador</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center w-full">
        {founders.map((f, idx) => (
          <div
            key={f.name}
            className="flex flex-col items-center text-center flex-1 max-w-xs md:max-w-sm"
          >
            <div className="mb-3">
              <img
                src={f.image}
                alt={`Foto de ${f.name}`}
                className="rounded-full w-28 h-28 object-cover bg-gray shadow-md mb-2"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-dark">{f.name}</h3>
              <p className="text-sm text-primary font-semibold">{f.role}</p>
              <p className="mt-2 text-accent text-base">{f.bio}</p>
              {/* [Es pot afegir foto real & bio més llarga aquí] */}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="w-full max-w-2xl text-center mt-6 mb-10 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-bold text-dark mb-4">Vols treballar amb nosaltres?</h2>
      <Link
        to="/#contacte"
        className="inline-block px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-circular hover-scale transition-all duration-200"
      >
        Contacta el nostre equip
      </Link>
    </section>

    <Link to="/" className="text-accent mt-6 underline story-link text-base">Torna a l'inici</Link>
  </div>
);

export default AboutPage;

