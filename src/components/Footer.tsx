
import { Linkedin } from "lucide-react";

const Footer = ({
  t
}: {
  t: any;
}) => {
  return (
    <footer className="w-full bg-background border-t border-gray py-7 mt-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-accent text-sm w-full text-center md:text-left">
          © {new Date().getFullYear()} elink.cat · Consultoria tecnològica
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/company/elinkcat-software/" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover-scale">
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

