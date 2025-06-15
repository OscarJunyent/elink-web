
import { ClipboardCheck, Lightbulb, Rocket, Repeat } from "lucide-react";

// Steps definition
const steps = [
  { icon: ClipboardCheck, label: "Diagnosi" },
  { icon: Lightbulb, label: "Proposta" },
  { icon: Rocket, label: "Implementació" },
  { icon: Repeat, label: "Seguiment" },
];

const Method = ({ t }: { t: any }) => (
  <section className="container py-10" id="metode">
    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-dark">{t.methodTitle}</h2>
    <div className="flex flex-col md:flex-row justify-between items-center gap-7 md:gap-0">
      {steps.map((step, idx) => (
        <div key={step.label} className="flex flex-col items-center md:w-1/4 animate-fade-in"
          style={{ animationDelay: `${idx * 100}ms` } as React.CSSProperties}
        >
          <span className="w-14 h-14 bg-primary flex items-center justify-center rounded-full mb-3 shadow-md text-white">
            <step.icon size={28}/>
          </span>
          <h4 className="font-semibold text-accent text-base mb-1 text-center">{t.method[step.label]}</h4>
          <p className="text-accent text-xs text-center min-h-10">{t.methodExplanations && t.methodExplanations[step.label]}</p>
          <div className="w-2 h-2 rounded-full bg-accent mt-2 md:hidden"/>
        </div>
      ))}
    </div>
    <p className="mt-8 text-center text-accent max-w-2xl mx-auto">{t.methodSubtitle}</p>
  </section>
);

export default Method;

