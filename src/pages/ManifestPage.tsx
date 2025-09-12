import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, Lightbulb, Zap, Heart, ArrowRight, Target, Cog } from "lucide-react";
import Footer from "@/components/Footer";

const ManifestPage = () => {
  const manifestBlocks = [
    {
      title: "Tecnologia útil",
      description: "No creiem en la tecnologia per la tecnologia. Cada eina que implementem ha de resoldre un problema real i aportar valor tangible al teu negoci.",
      icon: Lightbulb,
      gradient: "from-primary/10 to-accent/10"
    },
    {
      title: "Impacte real",
      description: "Mesurem el nostre èxit pel teu èxit. Les nostres solucions han de traduir-se en resultats mesurables: més eficiència, menys costos, millor experiència.",
      icon: Target,
      gradient: "from-accent/10 to-primary/10"
    },
    {
      title: "Automatització d'avavui",
      description: "L'automatització no és cosa del futur, és una necessitat d'avui. Ajudem les empreses a automatitzar processos per centrar-se en el que realment importa.",
      icon: Cog,
      gradient: "from-primary/10 to-accent/10"
    },
    {
      title: "Proximitat a les pimes",
      description: "Entenem les necessitats específiques de les petites i mitjanes empreses. Oferim solucions escalables, accessibles i adaptades a la seva realitat.",
      icon: Heart,
      gradient: "from-accent/10 to-primary/10"
    }
  ];

  return (
    <>
      <Helmet>
        <title>El nostre Manifest - elinkcat</title>
        <meta name="description" content="La nostra manera d'entendre la tecnologia. Descobreix com elinkcat transforma empreses amb tecnologia útil, impacte real i automatització pràctica." />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              El nostre <span className="text-primary">Manifest</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in">
              La nostra manera d'entendre la tecnologia
            </p>
            
            {/* Visual element */}
            <div className="flex justify-center mb-12 animate-fade-in">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center shadow-circular">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Manifest Blocks */}
        <section className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {manifestBlocks.map((block, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-circular bg-gradient-to-br ${block.gradient} animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <block.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {block.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="container py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 shadow-circular">
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-primary" />
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <Lightbulb className="w-8 h-8 text-accent" />
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <Zap className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Tecnologia amb propòsit
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A elinkcat, creiem que la tecnologia ha de ser un pont cap a un futur millor, 
                no una barrera. Per això, cada projecte que desenvolupem està pensat per a persones 
                reals amb necessitats reals, sempre amb l'objectiu de simplificar i millorar 
                la seva experiència empresarial.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white shadow-circular">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Vols transformar la teva empresa amb tecnologia pràctica?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Parlem de com podem fer realitat els teus objectius empresarials
              </p>
              <Link
                to="/contacte"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-circular hover:scale-105 transition-transform duration-200"
              >
                Contacta'ns
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ManifestPage;