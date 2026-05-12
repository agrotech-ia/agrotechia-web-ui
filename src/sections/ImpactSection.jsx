import SectionHeader from '../components/SectionHeader';

const ImpactSection = ({ items }) => {
  return (
    <section id="impacto" className="mt-24">
      <SectionHeader
        eyebrow="Impacto social"
        title="Tecnología que acompaña al campo y al productor"
        description="AgroTechIA es una plataforma pensada para escalar con impacto social, sostenible y replicable."
      />
      <div className="grid gap-6 lg:grid-cols-2">
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

export default ImpactSection;
