import { Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = ({
  t
}: {
  t: any;
}) => {
  return (
    <footer className="w-full bg-dark text-gray-100 py-12 mt-16">
      <div className="container mx-auto px-4">
        {/* Top section with logo and tagline */}
        <div className="mb-8 pb-8 border-b border-gray-700">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-3">
              <img
                src="/lovable-uploads/0746ee12-55c7-4ced-b3e5-da2c8a0f1495.png"
                alt="Elinkcat logo"
                className="h-12 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <p className="text-gray-300 text-sm max-w-md">
                Consultoria tecnològica i IA per a pimes de Barcelona i Catalunya.
              </p>
            </div>
            
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/elinkcat-software/" 
                title="LinkedIn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/elinkcat" 
                title="Instagram" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contacte */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacte</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a 
                  href="mailto:info@elink.cat" 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  info@elink.cat
                </a>
              </li>
              <li>
                <Link 
                  to="/contacte" 
                  className="hover:text-primary transition-colors"
                >
                  Contacta amb nosaltres
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de privacitat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termes de servei
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Dades de l'empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Empresa</h3>
            <address className="not-italic text-gray-300 text-sm space-y-1">
              <p className="font-medium text-white">Elinkcat Software SL</p>
              <p>NIF: B66891557</p>
              <p>Roger de Flor, 49 6-3 Esc B</p>
              <p>08013 Barcelona</p>
            </address>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Elinkcat Software SL. Tots els drets reservats.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

