import SectionHeader from '../components/SectionHeader';

const BenefitsSection = ({ items }) => {
  return (
    <section id="beneficios" className="mt-24">
      <SectionHeader
        eyebrow="Beneficios"
        title="Resultados concretos para una agricultura más eficiente"
        description="Una landing de MVP debe mostrar cómo la plataforma mejora productividad, reduce riesgos y democratiza la tecnología."
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

export default BenefitsSection;
