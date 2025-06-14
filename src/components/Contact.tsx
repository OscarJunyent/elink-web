
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";

const Contact = ({ t }: { t: any }) => {
  const { toast } = useToast();
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [missatge, setMissatge] = useState("");
  const [enviant, setEnviant] = useState(false);

  // Dummy send handler
  const enviaFormulari = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviant(true);
    setTimeout(() => {
      setEnviant(false);
      setNom(""); setEmail(""); setMissatge("");
      toast({
        title: "Missatge enviat!",
        description: "Ens posarem en contacte aviat. Gràcies!",
      });
    }, 1200);
  };

  return (
    <section className="container py-14" id="contacte">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark">{t.contactTitle}</h2>
      <div className="bg-white rounded-2xl shadow-circular p-8 flex flex-col md:flex-row gap-10">
        <form className="flex-1" onSubmit={enviaFormulari}>
          <div className="mb-5">
            <label className="block mb-2 text-accent font-medium">{t.nom}</label>
            <input type="text" className="w-full border border-gray px-4 py-3 rounded-lg focus:outline-none focus:border-primary" required disabled={enviant} value={nom} onChange={e => setNom(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-accent font-medium">{t.email}</label>
            <input type="email" className="w-full border border-gray px-4 py-3 rounded-lg focus:outline-none focus:border-primary" required disabled={enviant} value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-accent font-medium">{t.missatge}</label>
            <textarea className="w-full border border-gray px-4 py-3 rounded-lg focus:outline-none focus:border-primary min-h-[90px]" required disabled={enviant} value={missatge} onChange={e => setMissatge(e.target.value)}/>
          </div>
          <button type="submit" disabled={enviant} className="px-7 py-3 bg-primary text-white font-bold rounded-full shadow hover:scale-105 transition-transform duration-200 disabled:opacity-60">
            {enviant ? t.enviant : t.submit}
          </button>
        </form>
        <div className="flex-1 flex flex-col items-center justify-center">
          <Calendar size={40} className="text-accent mb-4"/>
          <p className="mb-2 text-accent text-lg">{t.contactCalendar}</p>
          <a
            href="https://calendly.com/elinkcat/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-primary text-lg hover:opacity-80"
          >
            {t.contactReserva}
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
