
const About = ({ t }: { t: any }) => (
  <section className="container py-10" id="qui-som">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark">{t.aboutTitle}</h2>
    <p className="text-lg text-accent max-w-xl">{t.aboutMission}</p>
  </section>
);

export default About;
