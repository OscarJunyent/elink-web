
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";
import { sendContactEmail } from "@/utils/sendContactEmail";

const Contact = ({ t }: { t: any }) => {
  const { toast } = useToast();
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [missatge, setMissatge] = useState("");
  const [enviant, setEnviant] = useState(false);

  const enviaFormulari = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviant(true);

    try {
      const result = await sendContactEmail({ nom, email, missatge });
      if (result.success) {
        setNom("");
        setEmail("");
        setMissatge("");
        toast({
          title: "Missatge enviat!",
          description: "Ens posarem en contacte aviat. Gràcies per confiar en elink.cat.",
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "No s'ha pogut enviar el missatge.",
        });
      }
    } catch (err) {
      toast({
        title: "Error inesperat",
        description: "Si us plau, prova-ho més tard.",
      });
    } finally {
      setEnviant(false);
    }
  };

  return (
    <section className="container py-10" id="contacte">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark">
        {t.contactTitle}
      </h2>
      <form
        onSubmit={enviaFormulari}
        className="flex flex-col gap-4 max-w-lg mx-auto"
      >
        <div>
          <label htmlFor="nom" className="block mb-1 font-medium">
            {t.nom}
          </label>
          <input
            id="nom"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            disabled={enviant}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            {t.email}
          </label>
          <input
            id="email"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={enviant}
          />
        </div>
        <div>
          <label htmlFor="missatge" className="block mb-1 font-medium">
            {t.missatge}
          </label>
          <textarea
            id="missatge"
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
            value={missatge}
            onChange={(e) => setMissatge(e.target.value)}
            rows={4}
            required
            disabled={enviant}
          />
        </div>
        <button
          type="submit"
          disabled={enviant}
          className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded shadow"
        >
          {enviant ? t.enviant || "Enviant..." : t.submit || "Enviar"}
        </button>
      </form>
      <div className="text-center mt-6">
        <div className="inline-flex items-center gap-2 text-accent mb-1">
          <Calendar className="w-5 h-5" /> <span>{t.contactCalendar}</span>
        </div>
        <div>
          <a
            href="https://cal.com/elink"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold underline underline-offset-4"
          >
            {t.contactReserva}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
