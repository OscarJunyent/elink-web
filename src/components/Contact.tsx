import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";
import { sendContactEmail } from "@/utils/sendContactEmail";
const Contact = ({
  t
}: {
  t: any;
}) => {
  const {
    toast
  } = useToast();
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
          description: "Ens posarem en contacte aviat. Gràcies per confiar en elink.cat."
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
  return;
};
export default Contact;