
import { Linkedin, Github, Mail, Rss } from "lucide-react";

const Footer = ({ t }: { t: any }) => (
  <footer className="w-full bg-background border-t border-gray py-7 mt-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-accent text-sm">
        © {new Date().getFullYear()} Elink.cat · Consultoria tecnològica
      </div>
      <div className="flex items-center gap-4">
        <a href="https://www.linkedin.com/company/elinkcat" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover-scale">
          <Linkedin size={22}/>
        </a>
        <a href="https://elinkcat.substack.com" title="Substack" target="_blank" rel="noopener noreferrer" className="hover-scale">
          <Rss size={22}/>
        </a>
        <a href="https://github.com/elinkcat" title="GitHub" target="_blank" rel="noopener noreferrer" className="hover-scale">
          <Github size={22}/>
        </a>
        <a href="mailto:info@elink.cat" title="Mail" className="hover-scale">
          <Mail size={22}/>
        </a>
      </div>
      <div className="text-xs text-gray-500">
        <span className="opacity-80">{t.languagesTitle}: </span>
        <span className="font-medium">Català</span>
        <span className="opacity-50 mx-1" aria-hidden>|</span>
        <span className="text-accent hover:underline cursor-pointer opacity-60">Castellà</span>
        <span className="opacity-50 mx-1" aria-hidden>|</span>
        <span className="text-accent hover:underline cursor-pointer opacity-60">English</span>
      </div>
    </div>
  </footer>
);

export default Footer;
