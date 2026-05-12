import SectionHeader from '../components/SectionHeader';

const ProblemSection = ({ items }) => {
  return (
    <section id="problema" className="mt-20">
      <SectionHeader
        eyebrow="Problema"
        title="Los retos reales que enfrentan los agricultores"
        description="Una solución inteligente debe empezar por comprender las dificultades que frenan la productividad y el control en campo."
      />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div key={item.title} className="section-card">
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
