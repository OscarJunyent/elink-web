import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Lightbulb, Target, Heart, Search, Presentation, Cog, TrendingUp, Linkedin, Rocket, Bot, Compass, Key } from "lucide-react";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";

const ManifestPage = () => {
  const metodologia = [
    {
      //step: "01",
      title: "1. Diagnosi personalitzada",
      description: "Analitzem la teva empresa per detectar necessitats i oportunitats de millora tecnològica.",
      icon: Search,
      color: "text-primary"
    },
    {
      //step: "02", 
      title: "2. Proposta estratègica",
      description: "Presentem una estratègia adaptada als teus objectius i recursos.",
      icon: Presentation,
      color: "text-accent"
    },
    {
      //step: "03",
      title: "3. Implementació a mida",
      description: "Executem el pla seleccionant i integrant les solucions idònies.",
      icon: Cog,
      color: "text-primary"
    },
    {
      //step: "04",
      title: "4. Seguiment i suport continu",
      description: "Avaluem resultats, ajustem i t'acompanyem per garantir l'èxit.",
      icon: TrendingUp,
      color: "text-accent"
    }
  ];

  const founders = [
    {
      name: "Òscar Junyent",
      role: "Consultor",
      bio: "Enginyer apassionat per la tecnologia i la innovació amb experiència liderant projectes digitals enfocats en aportar solucions pràctiques a empreses.",
      image: "/lovable-uploads/4def6625-87ed-4823-885f-baca8e9a7360.png",
      linkedin: "https://www.linkedin.com/in/ojunyent/",
    },
    {
      name: "Wojtek Szczupak",
      role: "Data Science",
      bio: "Expert en ciència de dades amb àmplia experiència en analítica avançada, gestió de dades i aplicació d'insights orientats als resultats de negoci.",
      image: "/lovable-uploads/7ea4dcdf-22de-4659-8e1c-0a49704e01a8.png",
      linkedin: "https://www.linkedin.com/in/wojciech-szczupak/",
    },
  ];

  return (
    <>
      <Helmet>
      <title>Manifest Elinkcat - Consultoria IA Barcelona | Empresa tecnològica per pimes catalanes</title>
      <meta name="description" content="Manifest d'Elinkcat: consultoria IA Barcelona propera per empreses catalanes. Valors, metodologia i propòsit per transformar pimes de Catalunya amb IA i automatització." />
      <meta property="og:title" content="Manifest Elinkcat - Consultoria IA Barcelona per empreses catalanes" />
      <meta property="og:description" content="La nostra filosofia: tecnologia útil i pràctica per fer créixer empreses de Barcelona i Catalunya amb proximitat, claredat i eficiència." />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://elinkcat.com/manifest" />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* 1. Introducció breu */}
        <section className="container py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark animate-fade-in">
              <TypewriterText text="El nostre Manifest" speed={80} />
            </h1>
            <p className="text-xl md:text-2xl text-accent mb-8 animate-fade-in">
              Qui som i què fem per les empreses catalanes
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed animate-fade-in">
                Som <strong>elinkcat</strong>, una consultora tecnològica especialitzada en petites i mitjanes empreses catalanes. 
                Ens dediquem a transformar negocis mitjançant consultoria tecnològica, automatització intel·ligent, 
                intel·ligència artificial aplicada i solucions digitals a mida.
              </p>
            </div>
          </div>
        </section>

     {/* 5. Tancament inspirador */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-3xl p-12 shadow-circular">
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-4">
                  <Heart className="w-8 h-8 text-primary" />
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <Lightbulb className="w-8 h-8 text-accent" />
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-bold mb-6 text-dark italic">
                "Quan la tecnologia s’adapta al teu ritme i a les teves necessitats, tot flueix..<br></br>
                tant, que pot semblar màgia."
              </blockquote>
              <p className="text-lg text-accent">
                Aquesta  és la nostre versió de la <u><a href="https://ca.wikipedia.org/wiki/Lleis_de_Clarke" target="_blank">tercera llei de Clarke</a></u>
              </p>
            </div>
          </div>
        </section>

        
        {/* 2. El nostre propòsit */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 shadow-circular text-center">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
                El nostre propòsit
              </h2>
              <p className="text-xl text-accent mb-6 leading-relaxed">
                Millorar l'eficiència i la productivitat de les empreses catalanes 
                amb tecnologia útil, pràctica i accessible
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Creiem que la tecnologia ha de ser un accelerador del creixement empresarial, 
                no una complicació. Per això, cada solució que implementem està pensada per 
                simplificar processos, reduir costos i augmentar la competitivitat de les empreses catalanes.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Els nostres valors - Nou disseny narratiu */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto">
            {/* Títol principal */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
                Creiem en la tecnologia que serveix, no que complica.
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  La transformació digital no hauria de ser una promesa buida ni una moda passatgera. 
                  Ha de ser una eina real, concreta i al servei de les persones i dels negocis.
                </p>
                <p>
                  A <strong>Elinkcat</strong>, som consultors tecnològics que parlem clar. Acompanyem{" "}
                  <strong>petites i mitjanes empreses catalanes</strong> a fer el salt digital amb sentit:{" "}
                  <strong>automatitzem processos, connectem sistemes i implantem solucions d'intel·ligència artificial</strong>{" "}
                  que milloren la seva eficiència i productivitat des del primer dia.
                </p>
              </div>
            </div>

            {/* Secció 1: No venem fum */}
            <div className="mb-10 bg-white/80 rounded-2xl p-8 shadow-circular animate-fade-in">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark">No venem fum, venem impacte.</h3>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed ml-16">
                <p>
                  Sabem que la tecnologia pot intimidar. Per això, <strong>ens asseiem al teu costat</strong>, 
                  entenem com treballes, quins problemes tens i què pots millorar.
                </p>
                <p>Només et recomanem allò que sabem que funcionarà. Ni més ni menys.</p>
                <p>
                  El nostre objectiu no és fer-te dependre de nosaltres. És donar-te les eines perquè 
                  siguis <strong>més autònom, més àgil i més competitiu</strong>.
                </p>
              </div>
            </div>

            {/* Secció 2: L'automatització */}
            <div className="mb-10 bg-white/80 rounded-2xl p-8 shadow-circular animate-fade-in" style={{ animationDelay: '150ms' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark">L'automatització no és el futur. És el present.</h3>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed ml-16">
                <p>Cada dia que mantens un procés manual és un dia que perds oportunitats.</p>
                <p>Cada vegada que fas una tasca repetitiva, hi ha una màquina que la podria fer per tu.</p>
                <p>I cada dada que no aprofites, és un coneixement que no et fa créixer.</p>
                <p className="mt-4">
                  Nosaltres <strong>posem la IA i l'automatització a treballar per tu</strong>, no a reemplaçar-te. 
                  Fem que el teu equip faci menys feina mecànica i més feina de valor.
                </p>
              </div>
            </div>

            {/* Secció 3: Som d'aquí */}
            <div className="mb-10 bg-white/80 rounded-2xl p-8 shadow-circular animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark">Som d'aquí i treballem per a les empreses d'aquí.</h3>
              </div>
              <div className="space-y-3 text-gray-700 leading-relaxed ml-16">
                <p>
                  Coneixem el territori, parlem el teu idioma i entenem les dificultats que viuen moltes pimes 
                  per incorporar tecnologia.
                </p>
                <p>
                  Per això, <strong>ens adaptem al teu pressupost, al teu ritme i a la teva realitat</strong>. 
                  Sense presses ni promeses impossibles.
                </p>
              </div>
            </div>

            {/* Secció 4: En resum */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 shadow-circular animate-fade-in" style={{ animationDelay: '450ms' }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-dark">En resum:</h3>
              </div>
              <ul className="space-y-3 text-gray-700 leading-relaxed ml-16 list-disc list-inside">
                <li><strong>Fem fàcil el que sembla complicat.</strong></li>
                <li><strong>Treballem amb tu, no per tu.</strong></li>
                <li><strong>Creiem en la tecnologia pràctica, assequible i transformadora.</strong></li>
                <li><strong>I, sobretot, volem que notis el canvi.</strong></li>
              </ul>
              <p className="text-xl font-bold text-dark mt-8 text-center">
                Elinkcat — Tecnologia útil per fer créixer la teva empresa.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Com treballem */}
        <section className="container py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Com treballem</h2>
            <p className="text-lg text-accent max-w-3xl mx-auto">
              Acompanyem la teva empresa en totes les fases del canvi, des de l'anàlisi inicial 
              fins a la implantació i millora contínua
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {metodologia.map((fase, index) => (
              <div
                key={index}
                className="bg-white/80 rounded-2xl p-8 shadow-circular animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-6">
                   <div className="flex flex-col items-center">
                     <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border-2 border-primary/20 mb-3">
                       <fase.icon className={`w-8 h-8 ${fase.color}`} />
                     </div>
                   </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-dark">
                      {fase.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {fase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

   

        {/* Equip fundador */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Equip fundador</h2>
              <p className="text-lg text-accent">
                Els professionals que fan possible aquesta visió
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="bg-white/80 rounded-2xl p-8 shadow-circular flex flex-col items-center text-center flex-1 max-w-xs md:max-w-sm"
                >
                  <div className="mb-4">
                    <img
                      src={founder.image}
                      alt={`${founder.name}, ${founder.role} - Consultoria IA Barcelona`}
                      className="rounded-full w-32 h-32 object-cover shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-1">{founder.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{founder.role}</p>
                  <p className="text-accent text-base mb-4 leading-relaxed">{founder.bio}</p>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white hover:scale-110 transition-transform"
                    aria-label={`LinkedIn de ${founder.name}`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Crida final a l'acció */}
        <section className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white shadow-circular">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Vols formar part d'aquesta transformació?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Descobreix com podem aplicar aquests valors i metodologia al teu negoci. 
                Parlem sense compromís de les teves necessitats tecnològiques.
              </p>
              <Link
                to="/contacte"
                className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-circular hover:scale-105 transition-transform duration-200"
              >
                Parlem-ne
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer t={{}} />
    </>
  );
};

export default ManifestPage;
