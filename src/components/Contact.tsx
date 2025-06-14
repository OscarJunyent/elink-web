import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";
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

  // Dummy send handler
  const enviaFormulari = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviant(true);
    setTimeout(() => {
      setEnviant(false);
      setNom("");
      setEmail("");
      setMissatge("");
      toast({
        title: "Missatge enviat!",
        description: "Ens posarem en contacte aviat. Gràcies!"
      });
    }, 1200);
  };
  return;
};
export default Contact;