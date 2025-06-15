
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

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
      </div>
    </div>
    {/* Calendly - reservar cita */}
    <div className="w-full flex justify-center px-4 pb-6">
      <div className="max-w-xl w-full bg-accent/20 border border-accent rounded-lg p-5 flex flex-col items-center">
        <p className="font-medium mb-2">O si ho prefereixes, pots reservar una cita directa:</p>
        <a
          href="https://calendly.com/oscar-junyent-elinkcat"
          className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-accent text-accent font-medium bg-white hover:bg-accent hover:text-white transition-colors gap-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Calendar className="w-5 h-5" />
          Reservar cita
        </a>
      </div>
    </div>
    {/* Footer legal */}
    <Footer t={{}} />
  </div>
);

export default ContactPage;

