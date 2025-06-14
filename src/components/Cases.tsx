
const Cases = ({ t }: { t: any }) => (
  <section className="container py-10" id="casos">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark">{t.casesTitle}</h2>
    {/* Placeholder – espai previst per a futurs casos d’èxit */}
    <div className="rounded-2xl bg-gray p-8 text-center text-accent shadow-circular min-h-[120px] flex items-center justify-center">
      {t.casesPlaceholder}
    </div>
  </section>
);

export default Cases;
