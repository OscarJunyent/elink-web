
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";
import { sendContactEmail } from "@/utils/sendContactEmail";

const Contact = ({
  t
}: {
  t: any;
}) => {
  const { toast } = useToast();
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [missatge, setMissatge] = useState("");
  const [enviant, setEnviant] = useState(false);

  const enviaFormulari = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviant(true);
    try {
      const result = await sendContactEmail({
        nom,
        email,
        missatge
      });
      if (result.success) {
        setNom("");
        setEmail("");
        setMissatge("");
        toast({
          title: "Missatge enviat!",
          description:
            "Ens posarem en contacte aviat. Gràcies per confiar en elink.cat."
        });
      } else {
        toast({
          title: "Error",
          description: result.error || "No s'ha pogut enviar el missatge."
        });
      }
    } catch (err) {
      toast({
        title: "Error inesperat",
        description: "Si us plau, prova-ho més tard."
      });
    } finally {
      setEnviant(false);
    }
  };

  // Minimal (or restore your prior UI as needed)
  return (
    <section className="w-full flex flex-col items-center pt-14 pb-10">
      <div className="w-full max-w-xl bg-white/90 rounded-xl border border-gray shadow-circular p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-2 text-dark text-center">
          {t?.contactTitle || "Contacta amb nosaltres"}
        </h2>
        <form className="flex flex-col gap-4" onSubmit={enviaFormulari}>
          <input
            type="text"
            required
            className="rounded px-4 py-3 border bg-background outline-none text-dark"
            placeholder={t?.nom || "Nom i cognoms"}
            value={nom}
            onChange={e => setNom(e.target.value)}
            autoComplete="name"
          />
          <input
            type="email"
            required
            className="rounded px-4 py-3 border bg-background outline-none text-dark"
            placeholder={t?.email || "Correu electrònic"}
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
          />
          <textarea
            required
            className="rounded px-4 py-3 border min-h-[90px] bg-background outline-none text-dark"
            placeholder={t?.missatge || "Explica’ns què necessites"}
            value={missatge}
            onChange={e => setMissatge(e.target.value)}
            maxLength={1200}
            rows={4}
          />
          <button
            type="submit"
            disabled={enviant}
            className="mt-1 px-7 py-3 rounded-full bg-primary text-white font-bold text-lg shadow-circular hover:scale-105 transition-transform duration-200 disabled:opacity-60"
          >
            {enviant ? (t?.enviant || "Enviant...") : (t?.submit || "Enviar missatge")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
