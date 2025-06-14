
import ContactForm from "@/components/ContactForm";
import { Linkedin, Github, Mail, Rss } from "lucide-react";
import Footer from "@/components/Footer";

const socials = [
  {
    url: "https://www.linkedin.com/company/elinkcat",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    url: "https://elinkcat.substack.com",
    label: "Substack",
    icon: Rss,
  },
  {
    url: "https://github.com/elinkcat",
    label: "GitHub",
    icon: Github,
  },
];

const ContactPage = () => (
  <div className="font-sans bg-background text-dark w-full min-h-screen flex flex-col">
    <div className="flex-1 w-full flex flex-col items-center justify-center px-4 pt-8 pb-4">
      <div className="max-w-xl w-full flex flex-col gap-8 items-center">
        {/* Missatge de benvinguda */}
        <div className="w-full text-center space-y-2">
          <h1 className="text-2xl font-bold mb-0">Contacta amb nosaltres</h1>
          <p className="text-lg text-muted-foreground">Explica’ns què necessites i t’ajudem a trobar la millor solució tecnològica.</p>
        </div>
        {/* Formulari de contacte */}
        <div className="w-full bg-white/90 border border-gray rounded-lg shadow-circular p-5 md:p-7">
          <ContactForm />
        </div>
        {/* Espai Calendly actualitzat */}
        <div className="w-full bg-accent/20 border border-accent rounded-lg p-5 flex flex-col items-center">
          <p className="font-medium mb-2">O si ho prefereixes, pots reservar una cita directa:</p>
          <a
            href="https://calendly.com/oscar-junyent-elinkcat"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-accent text-accent font-medium bg-white hover:bg-accent hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar cita a Calendly
          </a>
        </div>
        {/* Xarxes socials, adreça i email */}
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-gray pt-5">
          {/* Xarxes */}
          <div className="flex gap-3 items-center">
            {socials.map((s) => (
              <a
                key={s.url}
                href={s.url}
                title={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:scale-110 transition-all"
              >
                <s.icon size={22} />
                <span className="sr-only">{s.label}</span>
              </a>
            ))}
            <a href="mailto:info@elink.cat" title="Correu" className="hover:text-primary hover:scale-110 transition-all">
              <Mail size={22} />
              <span className="sr-only">Email</span>
            </a>
          </div>
          {/* Contacte info (placeholder) */}
          <div className="flex flex-col text-sm text-muted-foreground leading-tight">
            <span>Adreça: Carrer Exemplar 1, 08000 Barcelona</span>
            <span>Email: info@elink.cat</span>
          </div>
        </div>
      </div>
    </div>
    {/* Footer legal */}
    <Footer t={{}} />
  </div>
);

export default ContactPage;
