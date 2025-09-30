import { Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = ({
  t
}: {
  t: any;
}) => {
  return (
    <footer className="w-full bg-dark text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        {/* Top section with logo and tagline */}
        <div className="mb-8 pb-8 border-b border-gray-700">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-3">
              <img
                src="/lovable-uploads/elinkcat-dark-logo.png"
                alt="Elinkcat logo"
                className="h-12 w-auto"
              />
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
              <a 
                  href="mailto:info@elink.cat" 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  info@elink.cat
                </a>
            </div>
          </div>
        </div>

        {/* Main footer content */}
          {/* Contacte */}

        <div>
            <h3 className="text-lg font-semibold mb-4 text-white"> </h3>
            <address className="not-italic text-white text-sm space-y-1">
              <p className="text-white text-sm max-w-md">
                Consultoria tecnològica i IA per a pimes de Barcelona i Catalunya.Transformem empreses amb tecnologia útil, automatització intel·ligent i solucions a mida.
              </p>

            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white"> </h3>
            <ul className="space-y-3 text-white text-sm">
              
              <li>
                <Link 
                  to="/contacte" 
                  className="hover:text-primary transition-colors"
                >
                  ??????
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3 text-white text-sm">
              <li>
                <Link to="/politica-privacitat" className="hover:text-primary transition-colors">
                  Consultoria IA Barcelona
                </Link>
              </li>
              <li>
                <Link to="/termes-servei" className="hover:text-primary transition-colors">
                  Sobre Nosaltres
                </Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="hover:text-primary transition-colors">
                 La Píndola de TecnologÍA
                </Link>
    
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section - Copyright left, Legal links right */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white">
            <p>
              © {new Date().getFullYear()} Elinkcat Software S.L. Tots els drets reservats.
            </p>
            <div className="flex gap-6">
              <Link to="/politica-privacitat" className="hover:text-primary transition-colors">
                Política de privacitat
              </Link>
              <Link to="/termes-servei" className="hover:text-primary transition-colors">
                Termes de servei
              </Link>
              <Link to="/politica-cookies" className="hover:text-primary transition-colors">
                Política de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

