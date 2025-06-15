
import { Linkedin, Mail } from "lucide-react";
import { sendContactEmail } from "@/utils/sendContactEmail";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Footer = ({
  t
}: {
  t: any;
}) => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSendEmail = async () => {
    if (sending) return;
    setSending(true);
    // Send an internal message to info@elink.cat
    const res = await sendContactEmail({
      nom: "Usuari",
      email: "web@elink.cat",
      missatge: "L'icona de correu ha estat clicada al peu de pàgina.",
    });
    setSending(false);
    if (res.success) {
      toast({
        title: "Missatge enviat!",
        description: "Hem notificat info@elink.cat.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: res.error || "No s'ha pogut enviar el missatge.",
      });
    }
  };

  return (
    <footer className="w-full bg-background border-t border-gray py-7 mt-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-accent text-sm">
          © {new Date().getFullYear()} Elink.cat · Consultoria tecnològica
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/company/elinkcat-software/" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover-scale">
            <Linkedin size={22} />
          </a>
          <button
            type="button"
            title={sending ? "Enviant..." : "Enviar email a info@elink.cat"}
            aria-label="Enviar email"
            onClick={handleSendEmail}
            className={`hover-scale disabled:opacity-50 transition ${sending ? "cursor-not-allowed" : ""}`}
            disabled={sending}
          >
            <Mail size={22} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

