
import { Briefcase, Workflow, BrainCog, MonitorSmartphone, Link2 } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

const Services = ({ t }: { t: any }) => {
  const SERVICES: Service[] = [
    {
      title: t.services.consultoria,
      desc: t.services.consultoriaDesc,
      icon: Briefcase,
    },
    {
      title: t.services.automatitzacio,
      desc: t.services.automatitzacioDesc,
      icon: Workflow,
    },
    {
      title: t.services.integracions,
      desc: t.services.integracionsDesc,
      icon: Link2,
    },
    {
      title: t.services.ia,
      desc: t.services.iaDesc,
      icon: BrainCog,
    },
    {
      title: t.services.solucions,
      desc: t.services.solucionsDesc,
      icon: MonitorSmartphone,
    },
  ];
  return (
    <section className="container py-14" id="serveis">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-dark text-center">{t.services.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {SERVICES.map((srv, idx) => (
          <div key={srv.title}
            className="flex flex-col items-center rounded-2xl bg-white shadow-circular p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in"
            style={{ animationDelay: `${idx * 100}ms` } as React.CSSProperties}
          >
            <span className="w-16 h-16 bg-accent flex items-center justify-center rounded-full mb-5 shadow-md">
              <srv.icon size={32} className="text-white" />
            </span>
            <h3 className="font-semibold text-lg text-dark mb-2 text-center min-h-[3rem] flex items-center justify-center">
              {srv.title.includes('digitals') && srv.title.includes('a mida') 
                ? srv.title.replace('digitals a mida', 'digitals\na mida').split('\n').map((line, index) => (
                    <span key={index} className="block">{line}</span>
                  ))
                : srv.title
              }
            </h3>
            <p className="text-accent text-sm text-center leading-relaxed">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

