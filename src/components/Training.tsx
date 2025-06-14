
import { BookOpenCheck } from "lucide-react";

const Training = ({ t }: { t: any }) => (
  <section className="container py-10" id="formacio">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark">{t.trainingTitle}</h2>
    <div className="rounded-2xl bg-white shadow-circular p-8 md:flex items-center gap-6">
      <span className="w-14 h-14 bg-accent flex items-center justify-center rounded-full mb-6 md:mb-0 shadow-md text-white">
        <BookOpenCheck size={28}/>
      </span>
      <div>
        <p className="text-accent text-lg mb-2">{t.trainingDesc}</p>
        <a href="#contacte" className="inline-block px-6 py-2 mt-3 rounded-full bg-primary text-primary-foreground font-semibold shadow hover:scale-105 transition-transform duration-200">
          {t.trainingCTA}
        </a>
      </div>
    </div>
  </section>
);

export default Training;
